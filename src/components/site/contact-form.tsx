"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        toast({
          title: "Message not sent",
          description: data.error ?? "Please check your details and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message sent",
          description:
            "Thanks for reaching out. We will get back to you within one working day.",
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch {
      toast({
        title: "Message not sent",
        description: "Network problem. Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="cf-name" className="sr-only">
          Your name
        </label>
        <input
          id="cf-name"
          className="field-input"
          placeholder="Your Name"
          value={form.name}
          onChange={update("name")}
          required
        />
      </div>
      <div>
        <label htmlFor="cf-email" className="sr-only">
          Your email
        </label>
        <input
          id="cf-email"
          type="email"
          className="field-input"
          placeholder="Your Email"
          value={form.email}
          onChange={update("email")}
          required
        />
      </div>
      <div>
        <label htmlFor="cf-phone" className="sr-only">
          Phone number
        </label>
        <input
          id="cf-phone"
          type="tel"
          className="field-input"
          placeholder="Phone Number"
          value={form.phone}
          onChange={update("phone")}
        />
      </div>
      <div>
        <label htmlFor="cf-message" className="sr-only">
          Message
        </label>
        <textarea
          id="cf-message"
          className="field-textarea min-h-[190px] resize-y"
          placeholder="Message"
          value={form.message}
          onChange={update("message")}
          required
        />
      </div>
      <button type="submit" className="btn-forest" disabled={sending}>
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
