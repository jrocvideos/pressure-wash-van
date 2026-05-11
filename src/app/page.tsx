import { Phone, Mail, MessageCircle, MapPin, CheckCircle, Sparkles, ArrowRight, Star, Droplets } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/60 via-neutral-950 to-neutral-950" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 text-sm font-semibold text-emerald-400 mb-10 backdrop-blur-sm">
            <MapPin className="w-4 h-4" />
            Vancouver • North Shore • Point Grey • Kerrisdale • Southlands
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-10">
            We Wash<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Everything.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Driveways, patios, decks, boats, cars & commercial awnings. 
            One text. Same-day quote. No phone calls.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="sms:+1604XXXXXXX?body=Hi! I need a free quote for pressure washing."
              className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-black text-xl px-12 py-6 rounded-2xl transition-all shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)] hover:shadow-[0_0_80px_-10px_rgba(16,185,129,0.8)] hover:-translate-y-1"
            >
              <MessageCircle className="w-7 h-7" />
              Text for Free Quote
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+1604XXXXXXX"
              className="inline-flex items-center gap-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xl px-12 py-6 rounded-2xl transition-all border border-neutral-700 hover:border-neutral-600"
            >
              <Phone className="w-6 h-6" />
              (604) XXX-XXXX
            </a>
          </div>
          
          <p className="text-sm text-neutral-600 mt-8">Typical response time: under 20 minutes</p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Droplets className="w-6 h-6 text-emerald-500/50" />
        </div>
      </section>

      {/* BEFORE / AFTER — 4 PHOTOS */}
      <section className="py-32 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6">The Proof</h2>
            <p className="text-xl text-neutral-500 max-w-xl mx-auto">One session. Years of grime erased.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative rounded-3xl overflow-hidden border border-neutral-800 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/driveway-ba.jpg" alt="Driveway before and after" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-2xl font-black text-white">Driveway Restoration</p>
                <p className="text-neutral-300">Moss, oil, algae — gone.</p>
              </div>
            </div>
            
            <div className="group relative rounded-3xl overflow-hidden border border-neutral-800 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/awning-ba.png" alt="Commercial awning before and after" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-2xl font-black text-white">Commercial Awning</p>
                <p className="text-neutral-300">Storefront first impression — restored.</p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-neutral-800 hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/car-ba.png" alt="Car detailing before and after" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-2xl font-black text-white">Car & Vehicle Detailing</p>
                <p className="text-neutral-300">Barn find to showroom shine.</p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-neutral-800 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/boat-ba.png" alt="Boat cleaning before and after" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-2xl font-black text-white">Boat & Marine</p>
                <p className="text-neutral-300">Hull, deck, upholstery — like new.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6">What We Clean</h2>
            <p className="text-xl text-neutral-500">If it's dirty, we fix it.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Driveways", "Sidewalks", "Patios", "Decks", "Fences", 
              "Walkways", "Garbage Bins", "Parking Pads", "Stairs",
              "Cars & Trucks", "Boats & Marine", "Awnings"
            ].map((service) => (
              <div key={service} className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-emerald-500/30 hover:bg-neutral-800/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500/10 text-emerald-500 text-xs font-bold px-3 py-1 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  BOOK NOW
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-xl group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-colors">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-bold text-neutral-200 group-hover:text-white transition-colors">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWNINGS — MONEY BLOCK */}
      <section className="py-32 px-6 bg-gradient-to-br from-amber-950/30 via-neutral-900 to-neutral-950 border-y border-amber-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500 text-neutral-950 rounded-full px-5 py-2 text-sm font-black mb-8">
                <Sparkles className="w-4 h-4" />
                HIGHEST MARGIN • BEST ROI
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                Awnings for<br />Business
              </h2>
              <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                Your storefront's first impression is filthy. We clean fabric, vinyl, and metal awnings without damaging signage. Restaurants, retail, offices — this is where you make real money.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  "No fabric damage",
                  "Mould & mildew removed", 
                  "Colour restored",
                  "Before-hours service"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="sms:+1604XXXXXXX?body=Hi! I need a commercial awning cleaning quote."
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-lg px-10 py-5 rounded-2xl transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6" />
                Get Commercial Quote
              </a>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/20 shadow-2xl">
              <img src="/images/awning-ba.png" alt="Commercial awning transformation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6">Pricing</h2>
            <p className="text-xl text-neutral-500">Text a photo. Get a firm price. No games.</p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-neutral-900 rounded-3xl p-10 border border-neutral-800 hover:border-emerald-500/30 transition-all">
              <p className="text-sm font-bold text-neutral-600 uppercase tracking-widest mb-3">Small</p>
              <p className="text-6xl font-black text-emerald-400 mb-2">$99</p>
              <p className="text-neutral-500 mb-8">Single driveway, walkway, bins</p>
              <div className="h-px bg-neutral-800 mb-8" />
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500" /> 1 driveway</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500" /> Walkway strip</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500" /> 2-3 bins</li>
              </ul>
            </div>
            
            <div className="bg-neutral-900 rounded-3xl p-10 border-2 border-emerald-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-neutral-950 text-xs font-black px-4 py-2 rounded-bl-xl">
                MOST POPULAR
              </div>
              <p className="text-sm font-bold text-neutral-600 uppercase tracking-widest mb-3">Standard</p>
              <p className="text-6xl font-black text-emerald-400 mb-2">$199</p>
              <p className="text-neutral-500 mb-8">Large driveway, patio, deck</p>
              <div className="h-px bg-neutral-800 mb-8" />
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500" /> Double driveway</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500" /> Full patio</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500" /> Deck clean</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-amber-950/20 to-neutral-900 rounded-3xl p-10 border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <p className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-3">Commercial</p>
              <p className="text-6xl font-black text-amber-400 mb-2">Custom</p>
              <p className="text-neutral-500 mb-8">Awnings, storefronts, multi-unit</p>
              <div className="h-px bg-neutral-800 mb-8" />
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-amber-500" /> Awning restore</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-amber-500" /> Restaurant facade</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-amber-500" /> Maintenance plan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-32 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6">Why Trust Us</h2>
            <p className="text-xl text-neutral-500">Local. Insured. Obsessive.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { label: "Local", desc: "Vancouver born. We know the mould." },
              { label: "Reliable", desc: "Show up on time. Every time." },
              { label: "Fast", desc: "Text back in 20 min or less." },
              { label: "Insured", desc: "Full liability. Zero risk." },
            ].map((item) => (
              <div key={item.label} className="bg-neutral-950 rounded-2xl p-10 border border-neutral-800 text-center hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
                <div className="bg-emerald-500/10 text-emerald-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <p className="font-bold text-xl text-white mb-3">{item.label}</p>
                <p className="text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-neutral-950 border-2 border-dashed border-neutral-800 rounded-3xl p-16 text-center">
            <Star className="w-12 h-12 text-neutral-700 mx-auto mb-6" />
            <p className="text-neutral-500 font-bold text-xl mb-3">Testimonials Coming Soon</p>
            <p className="text-neutral-600 max-w-md mx-auto">Complete your first job, screenshot the 5-star text review, and drop it here. One review doubles conversion.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 px-6 bg-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-800/20 via-emerald-950 to-emerald-950" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">Get Your Quote</h2>
          <p className="text-2xl text-emerald-200/80 mb-12 max-w-2xl mx-auto">
            Text your address and a photo. We'll reply with a firm price — no upsells, no surprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="sms:+1604XXXXXXX?body=Hi! I need a free pressure washing quote. My address is: "
              className="group inline-flex items-center justify-center gap-3 bg-white text-emerald-950 font-black text-2xl px-12 py-6 rounded-2xl hover:bg-emerald-50 transition-all shadow-2xl hover:-translate-y-1"
            >
              <MessageCircle className="w-8 h-8" />
              Text: (604) XXX-XXXX
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+1604XXXXXXX"
              className="inline-flex items-center justify-center gap-3 bg-emerald-900 text-white font-bold text-2xl px-12 py-6 rounded-2xl hover:bg-emerald-800 transition-colors border border-emerald-700"
            >
              <Phone className="w-7 h-7" />
              Call Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center text-emerald-300/60">
            <a href="mailto:youremail@example.com" className="flex items-center gap-3 hover:text-white transition-colors text-lg">
              <Mail className="w-5 h-5" />
              youremail@example.com
            </a>
            <a href="https://tiktok.com/@yourhandle" target="_blank" className="flex items-center gap-3 hover:text-white transition-colors text-lg">
              <MessageCircle className="w-5 h-5" />
              @yourhandle
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-neutral-700 py-10 text-center text-sm border-t border-neutral-900">
        <p>© {new Date().getFullYear()} Pressure Wash Vancouver. All rights reserved.</p>
      </footer>
    </main>
  );
}
