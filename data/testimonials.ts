import type { Testimonial, Stat } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ananya Rawat",
    location: "Delhi, India",
    rating: 5,
    text: "The Adi Kailash Yatra was everything I had hoped for and more. Vijay bhaiya and the team made sure every detail was taken care of — from the permits to the altitude acclimatisation. The darshan at Parvati Kund moved me to tears. I will be back for Har Ki Dun next season.",
    trek: "Adi Kailash Yatra",
    date: "October 2024",
  },
  {
    id: "t2",
    name: "Rohit Negi",
    location: "Dehradun, Uttarakhand",
    rating: 5,
    text: "Being from Uttarakhand myself, I know how these mountains should be done — and Himalvara got everything right. The Om Parvat Yatra was handled with a level of care I rarely see. Witnessing the natural OM on the snow peak in person is something no photograph can prepare you for.",
    trek: "Om Parvat Yatra",
    date: "November 2024",
  },
  {
    id: "t3",
    name: "Kavita Menon",
    location: "Bengaluru, Karnataka",
    rating: 5,
    text: "I had done a few treks before but nothing like the Darma Valley. The remoteness, the Shauka villages, the views — it felt like stepping into a world the rest of India hasn't found yet. Himalvara's team was warm, knowledgeable, and genuinely looked after us throughout.",
    trek: "Darma Valley Trek",
    date: "September 2024",
  },
  {
    id: "t4",
    name: "Suresh Pandey",
    location: "Lucknow, Uttar Pradesh",
    rating: 5,
    text: "We took our family of six on the Kumaon Temples Heritage Tour and it was a beautifully paced journey. The guides brought the history of each temple alive in a way that even our children stayed engaged. Uttarakhand's sacred heritage feels very different when experienced this way.",
    trek: "Kumaon Temples & Heritage Tour",
    date: "December 2024",
  },
  {
    id: "t5",
    name: "Meera Joshi",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "Panchachuli Base Camp was on my bucket list for years. Himalvara made it happen without any stress — the acclimatisation plan was well thought out, the camp set-up was excellent, and the views beneath those five peaks are simply beyond words. A team you can completely trust.",
    trek: "Panchachuli Base Camp Trek",
    date: "October 2024",
  },
  {
    id: "t6",
    name: "Arjun Bisht",
    location: "Haldwani, Uttarakhand",
    rating: 5,
    text: "Kuldeep ji's military background shows in how the team operates — every contingency planned, every risk addressed before it becomes a problem. The Harshil and Gangotri trip was one of the most grounding experiences of my life. Himalvara doesn't just take you to the mountains, they take care of you there.",
    trek: "Harshil Valley & Gangotri",
    date: "April 2024",
  },
];

export const STATS: Stat[] = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Happy Trekkers" },
  { value: 80, suffix: "+", label: "Destinations" },
  { value: 98, suffix: "%", label: "Success Rate" },
];
