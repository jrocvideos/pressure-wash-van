"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function LeadForm({ service = "" }: { service?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: service,
    address: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.service) {
      window.location.href = "/thank-you";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none transition-colors"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none transition-colors"
        />
      </div>
      
      <input
        type="email"
        placeholder="Email (optional)"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none transition-colors"
      />
      
      <input
        type="text"
        placeholder="Your Address"
        required
        value={formData.address}
        onChange={(e) => setFormData({...formData, address: e.target.value})}
        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none transition-colors"
      />
      
      <textarea
        placeholder="Any details? (Optional)"
        rows={3}
        value={formData.details}
        onChange={(e) => setFormData({...formData, details: e.target.value})}
        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
      />
      
      <button
        type="submit"
        className="w-full group inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-black text-lg px-8 py-4 rounded-xl transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.7)] hover:-translate-y-0.5"
      >
        <Send className="w-5 h-5" />
        Get My Quote
      </button>
    </form>
  );
}
