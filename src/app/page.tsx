import { Phone, Mail, MessageCircle, MapPin, CheckCircle, Sparkles, ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-950 to-slate-950" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 text-sm font-semibold text-emerald-400 mb-8 backdrop-blur-sm">
            <MapPin className="w-4 h-4" />
            Vancouver, North Shore, Point Grey, Kerrisdale & Southlands
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8">
            Blast the Grime.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Keep the Shine.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Driveway, patio, deck & commercial awning cleaning. Local crew. Same-day quotes. No calls required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="sms:+1604XXXXXXX?body=Hi! I need a free quote for pressure washing."
              className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-lg px-10 py-5 rounded-2xl transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.7)] hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              Text for Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+1604XXXXXXX"
              className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all border border-slate-700 hover:border-slate-600"
            >
              <Phone className="w-5 h-5" />
              Call (604) XXX-XXXX
            </a>
          </div>
          
          <p className="text-sm text-slate-500 mt-6">Most homeowners get a reply within 20 minutes.</p>
        </div>
      </section>

      {/* BEFORE / AFTER — Real Photos */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Real Results</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">One treatment. Years of grime gone. This is why pressure washing sells itself.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Driveway Card */}
            <div className="group bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/driveway-ba.jpg" 
                  alt="Driveway before and after pressure washing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-800 mb-1">Driveway Restoration</h3>
                <p className="text-sm text-slate-500">Moss, oil stains, years of buildup — erased in one session.</p>
              </div>
            </div>

            {/* Awning Card */}
            <div className="group bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/awning-ba.png" 
                  alt="Commercial awning before and after cleaning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-800 mb-1">Commercial Awning Revive</h3>
                <p className="text-sm text-slate-500">Restaurant & retail awnings restored to original colour and shine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">What We Clean</h2>
            <p className="text-lg text-slate-500">Residential & commercial. No job too dirty.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Driveways",
              "Sidewalks",
              "Patios",
              "Garbage Bins",
              "Decks",
              "Fences",
              "Walkways",
              "Parking Pads",
              "Stairs",
            ].map((service) => (
              <div key={service} className="flex items-center gap-4 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-2xl px-6 py-5 transition-colors group cursor-default">
                <div className="bg-emerald-100 group-hover:bg-emerald-500 text-emerald-600 group-hover:text-white p-2.5 rounded-xl transition-colors">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-700 group-hover:text-emerald-900 transition-colors">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWNINGS — THE MONEY SECTION */}
      <section className="py-24 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 border-y-4 border-amber-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500 text-white rounded-full px-4 py-1.5 text-sm font-bold mb-6 shadow-lg shadow-amber-500/20">
                <Sparkles className="w-4 h-4" />
                HIGHEST MARGIN SERVICE
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-amber-950 mb-6 leading-tight">
                Awnings for Business
              </h2>
              <p className="text-lg text-amber-900/80 mb-6 leading-relaxed">
                Restaurant, retail, and office awnings are your storefront's first impression. We clean fabric, vinyl, and metal awnings without damaging signage or colour. This is where the real profit lives.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "No damage to fabric or stitching",
                  "Removes mould, mildew & bird droppings",
                  "Restores original colour & brightness",
                  "Done before opening hours if needed"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-amber-900">
                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="sms:+1604XXXXXXX?body=Hi! I need a commercial awning cleaning quote."
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all shadow-xl shadow-amber-500/30 hover:shadow-amber-400/40 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6" />
                Text for Commercial Quote
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-200">
              <img 
                src="/images/awning-ba.png" 
                alt="Commercial awning transformation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING ANCHOR */}
      <section className="py-24 px-4 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Simple, Honest Pricing</h2>
            <p className="text-lg text-slate-400">No hidden fees. Quote after a quick text with photos.</p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-colors">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Small Jobs</p>
              <p className="text-5xl font-black text-emerald-400 mb-4">$99</p>
              <p className="text-slate-400 mb-6">Small driveways, walkways, garbage bins</p>
              <div className="h-px bg-slate-800 mb-6" />
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Single driveway</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Walkway strip</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> 2-3 garbage bins</li>
              </ul>
            </div>
            
            <div className="bg-slate-900 rounded-3xl p-8 border-2 border-emerald-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-xs font-black px-4 py-1 rounded-bl-xl">
                MOST POPULAR
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Standard</p>
              <p className="text-5xl font-black text-emerald-400 mb-4">$199</p>
              <p className="text-slate-400 mb-6">Large driveways, patios, full walkways</p>
              <div className="h-px bg-slate-800 mb-6" />
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Double driveway</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Full patio</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Deck cleaning</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-amber-900/30 to-slate-900 rounded-3xl p-8 border border-amber-500/30 hover:border-amber-400/50 transition-colors">
              <p className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">Commercial</p>
              <p className="text-5xl font-black text-amber-400 mb-4">Custom</p>
              <p className="text-slate-400 mb-6">Awnings, storefronts, multi-unit</p>
              <div className="h-px bg-slate-800 mb-6" />
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-500" /> Awning restoration</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-500" /> Restaurant facades</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-500" /> Scheduled maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Why Homeowners Trust Us</h2>
            <p className="text-lg text-slate-500">Local crew. Real results. No BS.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Local", desc: "Born & raised Vancouver. We know the mould." },
              { label: "Reliable", desc: "We show up. On time. Every time." },
              { label: "Fast Response", desc: "Text back within 20 minutes, guaranteed." },
              { label: "Insured", desc: "Full liability coverage. Zero risk to you." },
            ].map((item) => (
              <div key={item.label} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center hover:border-emerald-200 hover:shadow-lg transition-all">
                <div className="bg-emerald-100 text-emerald-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <p className="font-bold text-lg text-slate-800 mb-2">{item.label}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* TESTIMONIAL PLACEHOLDER */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 rounded-3xl p-12 text-center">
            <Star className="w-10 h-10 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-bold text-lg mb-2">Testimonial Section</p>
            <p className="text-slate-400 max-w-md mx-auto">Complete your first job, screenshot the text review, and paste it here. Even one 5-star review doubles conversion.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-4 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-800/30 via-emerald-950 to-emerald-950" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Get Your Free Quote</h2>
          <p className="text-xl text-emerald-200 mb-10 max-w-2xl mx-auto">Send a text with your address and a photo. We'll reply with a firm price — no upsells, no surprises.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="sms:+1604XXXXXXX?body=Hi! I need a free pressure washing quote. My address is: "
              className="group inline-flex items-center justify-center gap-3 bg-white text-emerald-950 font-black text-xl px-10 py-5 rounded-2xl hover:bg-emerald-50 transition-all shadow-2xl hover:-translate-y-1"
            >
              <MessageCircle className="w-7 h-7" />
              Text: (604) XXX-XXXX
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+1604XXXXXXX"
              className="inline-flex items-center justify-center gap-3 bg-emerald-900 text-white font-bold text-xl px-10 py-5 rounded-2xl hover:bg-emerald-800 transition-colors border border-emerald-700"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-emerald-300/80 text-sm">
            <a href="mailto:youremail@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              youremail@example.com
            </a>
            <span className="hidden sm:inline text-emerald-700">|</span>
            <a href="https://tiktok.com/@yourhandle" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageCircle className="w-4 h-4" />
              TikTok: @yourhandle
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-600 py-8 text-center text-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} Pressure Wash Vancouver. All rights reserved.</p>
      </footer>
    </main>
  );
}
