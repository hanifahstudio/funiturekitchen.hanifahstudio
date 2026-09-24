"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className="flex-1 flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Your email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 bg-white/8 border border-white/15 text-white placeholder:text-white/40 px-5 py-4 text-sm outline-none focus:border-[#c6904f] transition-colors"
      />
      <button type="submit" className="btn-brass justify-center">
        {done ? "Subscribed" : "Subscribe"} <ArrowRight size={16} />
      </button>
    </form>
  );
}
