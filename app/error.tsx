"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    /* Log to error reporting service when available */
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-6 py-20 bg-[#f9f7f2]">
      <div className="w-14 h-14 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mb-6">
        <AlertTriangle className="w-7 h-7 text-amber-600" />
      </div>

      <h1 className="font-display text-3xl font-bold text-[#132a1f] mb-2">
        Something went wrong
      </h1>
      <p className="text-[#555] text-sm max-w-xs mb-8 leading-relaxed">
        An unexpected error occurred. Our team has been notified. Try refreshing the page or head back home.
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 bg-[#0d1f17] hover:bg-[#132a1f] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-[#ddd] hover:border-[#1b3a2d] text-[#132a1f] font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          <Home className="w-4 h-4" />
          Home
        </Link>
      </div>

      {error.digest && (
        <p className="mt-6 text-xs text-[#aaa] font-mono">
          Error ID: {error.digest}
        </p>
      )}
    </div>
  );
}
