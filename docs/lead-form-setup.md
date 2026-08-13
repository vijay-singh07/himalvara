# Contact-Form Lead Delivery — Setup

The form at `/contact` POSTs to `/api/lead`, which fans out to three
delivery channels: **email (Resend)**, **Google Sheet**, and
**WhatsApp Business API**. Each channel is opt-in via env vars — see
`.env.example` for the full list.

You need to do the setup steps below **once**. After that, every
submission arrives in all configured channels.

---

## 1. Resend — email to `info@himalvara.com`

1. Sign up at [https://resend.com](https://resend.com) — free tier is
   3,000 emails/month, 100/day, which is plenty for lead volume.
2. **Add & verify the sender domain** (`himalvara.com`) in Resend's
   Domains tab. Resend will show you 3 DNS records (SPF, DKIM, DMARC) to
   add at your DNS provider (GoDaddy / Cloudflare / whoever hosts your
   domain). Add them; DNS propagates in 5–15 min.
3. Create an **API key** in Resend → API Keys → Create.
4. Set the three env vars in `.env.local`:
   ```
   RESEND_API_KEY=re_...
   LEAD_NOTIFICATION_EMAIL=info@himalvara.com
   LEAD_FROM_EMAIL=leads@himalvara.com
   ```
   `LEAD_FROM_EMAIL` can be any address at your verified domain — it's the
   "From" address on the notification email. `leads@` or `noreply@` are fine.

**Test:** submit the form on `/contact`. A styled email should land in
`info@himalvara.com` within ~5 seconds. Reply-to is set to the submitter's
email so you can reply directly from your inbox.

---

## 2. Google Sheet — lead log

1. Create a new Google Sheet titled **"Himalvara Leads"**.
2. Rename Sheet1 to **"Leads"** (or leave the default and update the script).
3. In the first row, add these column headers:
   ```
   Received | First name | Last name | Email | Phone | Trek | Group size | Departure | Message
   ```
4. **Extensions → Apps Script**. Delete the boilerplate and paste:
   ```js
   function doPost(e) {
     const sheet = SpreadsheetApp.getActive().getSheetByName("Leads");
     const p = JSON.parse(e.postData.contents);
     sheet.appendRow([
       p.receivedAt || new Date().toISOString(),
       p.firstName || "",
       p.lastName || "",
       p.email || "",
       p.phone || "",
       p.trek || "",
       p.groupSize || "",
       p.departureDate || "",
       p.message || "",
     ]);
     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
5. Save (⌘S), name the project "Himalvara Lead Webhook".
6. **Deploy → New deployment**:
   - Select type: **Web app**
   - Description: "Lead form webhook"
   - Execute as: **Me** (your Google account)
   - Who has access: **Anyone** (this is required for the site to POST to it;
     the script is one-way write-only so exposure risk is minimal)
7. Click Deploy. Google will show you a URL like
   `https://script.google.com/macros/s/AKfycb.../exec`. Copy it.
8. Set the env var:
   ```
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```

**Test:** submit the form. A new row appends within ~2 seconds. If you
edit the script later, you need to redeploy (**Deploy → Manage deployments
→ Edit the existing one → New version**) or the changes won't take effect.

---

## 3. WhatsApp Business Cloud API — you'll do this separately

The code is already wired. Once you have Meta business verification +
an approved template, set these env vars and the WhatsApp channel starts
delivering with no code changes:

```
WHATSAPP_ACCESS_TOKEN=EAAG...
WHATSAPP_PHONE_NUMBER_ID=123456789...
WHATSAPP_TO_NUMBER=917819940565
WHATSAPP_TEMPLATE_NAME=lead_notification
```

**Template requirements** (set up in Meta Business Manager):
- Category: `UTILITY`
- Language: `en`
- Body with 4 variables:
  ```
  New Himalvara enquiry:
  Name: {{1}}
  Email: {{2}}
  Trek: {{3}}
  Message: {{4}}
  ```

The API route sends these variables in order.

---

## Deployment notes

- All env vars must also be set in your production environment (Vercel /
  Netlify / whatever you deploy on). Local `.env.local` is git-ignored;
  production reads from the platform's env-var UI.
- Add `.env.local` to `.gitignore` if not already (Next.js does this by
  default, but double-check).
- If **no** delivery channels are configured, the API returns HTTP 500 and
  the form shows an error — this is intentional so you notice
  misconfiguration in staging.
- Server-side logs (`console.info("[lead] delivery", ...)`) show which
  channels succeeded/failed for each submission. Check Vercel's function
  logs when debugging.
