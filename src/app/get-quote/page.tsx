import { Phone, MessageCircle, MapPin, CheckCircle, Star } from "lucide-react";
import LeadForm from "../components/LeadForm";

export default function GetQuote() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/60 via-neutral-950 to-neutral-950" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 text-sm font-semibold text-emerald-400 mb-8">
            <MapPin className="w-4 h-4" />
            Vancouver • Richmond • North Shore • White Rock
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
            Get Your<br />
            <span className="text-emerald-400">Quote Now.</span>
          </h1>
          <p className="text-xl text-neutral-400 mb-8 leading-relaxed max-w-xl mx-auto">
            Fill out the form below. We'll text you a firm price in under 20 minutes — no phone calls needed.
          </p>
          <div className="flex justify-center gap-6 mb-12 text-sm text-neutral-500">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Same-day response</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> No hidden fees</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Insured crew</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-neutral-900">
        <div className="max-w-2xl mx-auto">
          <LeadForm />
          <p className="text-xs text-neutral-600 text-center mt-4">
            After submitting, text photos to <a href="https://wa.me/12368740586" className="text-emerald-400 hover:text-emerald-300">(236) 874-0586</a> for faster pricing.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
              <p className="text-4xl font-black text-emerald-400 mb-2">$99</p>
              <p className="text-neutral-400 text-sm">Small driveways & walkways</p>
            </div>
            <div className="bg-neutral-900 rounded-2xl p-8 border-2 border-emerald-500/30 relative">
              <div className="absolute top-0 right-0 bg-emerald-500 text-neutral-950 text-xs font-black px-3 py-1 rounded-bl-xl">POPULAR</div>
              <p className="text-4xl font-black text-emerald-400 mb-2">$199</p>
              <p className="text-neutral-400 text-sm">Large driveways & patios</p>
            </div>
            <div className="bg-gradient-to-br from-amber-950/20 to-neutral-900 rounded-2xl p-8 border border-amber-500/20">
              <p className="text-4xl font-black text-amber-400 mb-2">Custom</p>
              <p className="text-neutral-400 text-sm">Commercial & awnings</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
