import { Phone, Mail, MessageCircle, MapPin, CheckCircle, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm font-medium text-emerald-300 mb-6">
            <MapPin className="w-4 h-4" />
            Serving Vancouver & The North Shore
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Driveway & Pressure Washing in<br className="hidden md:block" />
            <span className="text-emerald-400">North Shore, Point Grey, Kerrisdale & Southlands</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Local, reliable, fast. We blast away years of grime so your property looks brand new.
          </p>
          <a
            href="sms:+1604XXXXXXX?body=Hi! I need a free quote for pressure washing."
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-6 h-6" />
            Text for a Free Quote
          </a>
          <p className="text-sm text-slate-400 mt-4">Homeowners respond faster to texting. No calls needed.</p>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Real Results</h2>
          <p className="text-center text-slate-500 mb-10">Pressure washing is visual proof. See the difference.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400 font-medium">
                  Before Photo {i}
                </div>
                <div className="h-48 bg-emerald-100 flex items-center justify-center text-emerald-700 font-medium border-t-4 border-emerald-500">
                  After Photo {i}
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-slate-700">Transformation #{i}</p>
                  <p className="text-sm text-slate-500">Replace with your actual photos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What We Clean</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Driveways",
              "Sidewalks",
              "Patios",
              "Garbage Bins",
              "Decks",
              "Fences",
            ].map((service) => (
              <div key={service} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700">{service}</span>
              </div>
            ))}
          </div>

          {/* AWNINGS — COMMERCIAL HIGHLIGHT */}
          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 text-white p-3 rounded-xl shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Awnings for Business — Our Specialty</h3>
                <p className="text-amber-800 mb-4">
                  Commercial awning cleaning is our highest-margin, most-requested service. We restore restaurant, retail, and office awnings without damaging fabric or signage. Keep your storefront inviting.
                </p>
                <a
                  href="sms:+1604XXXXXXX?body=Hi! I need a commercial awning cleaning quote."
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Text for Commercial Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING ANCHOR */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Simple, Honest Pricing</h2>
          <p className="text-slate-300 mb-8">
            Most driveway cleanings start around <span className="text-emerald-400 font-bold text-xl">$99 – $199</span> depending on size and condition.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <p className="text-2xl font-bold text-emerald-400 mb-1">$99+</p>
              <p className="text-sm text-slate-400">Small driveways & walkways</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <p className="text-2xl font-bold text-emerald-400 mb-1">$199+</p>
              <p className="text-sm text-slate-400">Large driveways & patios</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <p className="text-2xl font-bold text-amber-400 mb-1">Custom</p>
              <p className="text-sm text-slate-400">Awnings, decks, commercial</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-6">Exact quote after a quick text with photos. No hidden fees.</p>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Homeowners Trust Us</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Local", desc: "Vancouver born & raised" },
              { label: "Reliable", desc: "Show up on time, every time" },
              { label: "Fast Response", desc: "Text back within the hour" },
              { label: "Insured", desc: "Full coverage, zero risk" },
            ].map((item) => (
              <div key={item.label} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <p className="font-bold text-slate-800">{item.label}</p>
                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* TESTIMONIAL PLACEHOLDER */}
          <div className="mt-10 bg-white border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center">
            <p className="text-slate-400 font-medium">⭐ Testimonial Section</p>
            <p className="text-sm text-slate-400 mt-1">Add your first review here once you complete a job. Even one review converts.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-4 bg-emerald-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Your Free Quote Today</h2>
          <p className="text-emerald-200 mb-8">Text is fastest. We reply within the hour.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="sms:+1604XXXXXXX?body=Hi! I need a free pressure washing quote."
              className="inline-flex items-center justify-center gap-3 bg-white text-emerald-900 font-bold text-lg px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Text: (604) XXX-XXXX
            </a>
            <a
              href="tel:+1604XXXXXXX"
              className="inline-flex items-center justify-center gap-3 bg-emerald-800 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors border border-emerald-600"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-emerald-200">
            <a href="mailto:youremail@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              youremail@example.com
            </a>
            <a href="https://tiktok.com/@yourhandle" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
              TikTok
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Pressure Wash Vancouver. All rights reserved.</p>
      </footer>
    </main>
  );
}
