import { Phone, MessageCircle, MapPin, CheckCircle } from "lucide-react";
import LeadForm from "../components/LeadForm";

export default function Driveway() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/60 via-neutral-950 to-neutral-950" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 text-sm font-semibold text-emerald-400 mb-8">
                <MapPin className="w-4 h-4" />
                Vancouver • Richmond • North Shore • White Rock
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
                Driveway<br />
                <span className="text-emerald-400">Cleaning.</span>
              </h1>
              <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                Moss, oil stains, algae, years of grime — erased in one session. Most driveways start at $99–$199.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Oil stain removal", "Moss & algae kill", "Concrete safe", "Same-day service"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="https://wa.me/17784045267?text=Hi! I need a driveway cleaning quote." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold px-6 py-3 rounded-xl transition-all">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Quote
                </a>
                <a href="tel:+17784045267" className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3 rounded-xl border border-neutral-700">
                  <Phone className="w-5 h-5" />
                  (778) 404-5267
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/20 shadow-2xl">
              <img src="/images/driveway-ba.jpg" alt="Driveway cleaning before and after" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-2 text-center">Get Your Driveway Quote</h2>
          <p className="text-neutral-500 text-center mb-8">Text us your address for instant pricing. Most quotes in 20 minutes.</p>
          <LeadForm service="driveway" />
        </div>
      </section>
    </main>
  );
}
