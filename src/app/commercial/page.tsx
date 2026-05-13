import { Phone, MessageCircle, MapPin, CheckCircle, Sparkles } from "lucide-react";
import LeadForm from "../components/LeadForm";

export default function Commercial() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/60 via-neutral-950 to-neutral-950" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2 text-sm font-semibold text-amber-400 mb-8">
                <Sparkles className="w-4 h-4" />
                Restaurants • Retail • Offices • Multi-Unit
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
                Commercial<br />
                <span className="text-amber-400">Cleaning.</span>
              </h1>
              <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                Awnings, facades, parking pads, garbage enclosures. Before-hours service available. Keep your storefront spotless.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Awning restoration", "Facade cleaning", "Parking pad wash", "Bin enclosures"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="https://wa.me/12368740586?text=Hi! I need a commercial cleaning quote." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-6 py-3 rounded-xl transition-all">
                  <MessageCircle className="w-5 h-5" />
                  Commercial Quote
                </a>
                <a href="tel:+12368740586" className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3 rounded-xl border border-neutral-700">
                  <Phone className="w-5 h-5" />
                  (236) 874-0586
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/20 shadow-2xl">
              <img src="/images/awning-ba.png" alt="Commercial awning cleaning" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-2 text-center">Get Your Commercial Quote</h2>
          <p className="text-neutral-500 text-center mb-8">Custom pricing for storefronts and multi-unit properties.</p>
          <LeadForm service="commercial" />
        </div>
      </section>
    </main>
  );
}
