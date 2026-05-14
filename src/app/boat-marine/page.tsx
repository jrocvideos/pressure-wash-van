import { Phone, MessageCircle, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import LeadForm from "../components/LeadForm";

export default function BoatMarine() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/60 via-neutral-950 to-neutral-950" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2 text-sm font-semibold text-blue-400 mb-8">
                <MapPin className="w-4 h-4" />
                Vancouver Marinas • Coal Harbour • False Creek
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
                Boat & Marine<br />
                <span className="text-blue-400">Cleaning.</span>
              </h1>
              <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                Hull scrubbing, deck restoration, upholstery deep-clean. We come to your marina. No haul-out required.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Hull & deck wash", "Upholstery cleaning", "Mildew removal", "Wax & polish"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="https://wa.me/12368740586?text=Hi! I need a boat cleaning quote." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-neutral-950 font-bold px-6 py-3 rounded-xl transition-all">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Quote
                </a>
                <a href="tel:+12368740586" className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3 rounded-xl border border-neutral-700">
                  <Phone className="w-5 h-5" />
                  (236) 874-0586
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-500/20 shadow-2xl">
              <img src="/images/boat-marine-ba.png" alt="Boat cleaning before and after" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-2 text-center">Get Your Boat Quote</h2>
          <p className="text-neutral-500 text-center mb-8">Tell us your marina and boat size. We'll text a firm price.</p>
          <LeadForm service="boat" />
        </div>
      </section>
    </main>
  );
}
