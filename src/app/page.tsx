import { Phone, Mail, MessageCircle, MapPin, CheckCircle, ArrowRight, Star, Droplets } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen text-white" style={{ background: "#0a0a0a" }}>
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(16,185,129,0.15) 0%, #0a0a0a 60%)" }} />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-sm font-medium mb-8" style={{ background: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.3)", color: "#10b981" }}>
            <MapPin className="w-3.5 h-3.5" />
            Vancouver • North Shore • Point Grey • Kerrisdale • Southlands
          </div>
          <h1 className="font-black leading-none mb-6" style={{ fontSize: "clamp(48px,10vw,96px)", letterSpacing: "-0.04em" }}>
            <span className="text-white block">We Wash</span>
            <span className="block" style={{ background: "linear-gradient(90deg, #10b981, #2dd4bf, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Everything.</span>
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#a3a3a3" }}>Driveways, patios, decks, boats, cars and commercial awnings. One text. Same-day quote. No phone calls.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="sms:+1604XXXXXXX?body=Hi! I need a free quote." className="inline-flex items-center justify-center gap-3 font-extrabold text-lg px-10 py-5 rounded-2xl" style={{ background: "#10b981", color: "#0a0a0a", boxShadow: "0 0 60px -15px rgba(16,185,129,0.6)" }}>
              <MessageCircle className="w-5 h-5" />Text for Free Quote<ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+1604XXXXXXX" className="inline-flex items-center justify-center gap-3 font-bold text-lg px-10 py-5 rounded-2xl" style={{ background: "#262626", color: "#fff", border: "1px solid #404040" }}>
              <Phone className="w-5 h-5" />(778) 404-5267
            </a>
          </div>
          <p className="text-sm" style={{ color: "#737373" }}>Typical response time: under 20 minutes</p>
          <div className="mt-16 flex justify-center animate-bounce"><Droplets className="w-6 h-6" style={{ color: "#10b981" }} /></div>
        </div>
      </section>

      <section className="py-24 px-4" style={{ background: "#171717" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-center mb-3" style={{ fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>The Proof</h2>
          <p className="text-center mb-14" style={{ color: "#a3a3a3", fontSize: "20px" }}>One session. Years of grime erased.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: "/images/driveway-ba.png", title: "Driveway Restoration", sub: "Moss, oil, algae — gone.", accent: "#10b981" },
              { img: "/images/awning-ba.png", title: "Commercial Awning", sub: "Storefront first impression — restored.", accent: "#f59e0b" },
              { img: "/images/bef-and-aft-must.png", title: "Car & Vehicle Detailing", sub: "Barn find to showroom shine.", accent: "#ef4444" },
              { img: "/images/boat-bef-and-aft.png", title: "Boat & Marine", sub: "Hull, deck, upholstery — like new.", accent: "#3b82f6" },
            ].map((card) => (
              <div key={card.title} className="relative rounded-3xl overflow-hidden group cursor-pointer" style={{ border: "1px solid #404040", aspectRatio: "4/3" }}>
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-bold text-white text-xl">{card.title}</p>
                  <p className="text-sm mt-1" style={{ color: "#a3a3a3" }}>{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4" style={{ background: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-center mb-3" style={{ fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>What We Clean</h2>
          <p className="text-center mb-14" style={{ color: "#a3a3a3", fontSize: "20px" }}>If it is dirty, we fix it.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {["Driveways","Sidewalks","Patios","Decks","Fences","Walkways","Garbage Bins","Parking Pads","Stairs","Cars & Trucks","Boats & Marine","Awnings"].map((service) => (
              <div key={service} className="flex items-center gap-3 rounded-2xl px-5 py-4" style={{ background: "#171717", border: "1px solid #262626" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(16,185,129,0.15)" }}>
                  <CheckCircle className="w-4 h-4" style={{ color: "#10b981" }} />
                </div>
                <span className="font-semibold text-white">{service}</span>
              </div>
            ))}
          </div>
          <div className="rounded-3xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.1), #171717)", border: "2px solid rgba(245,158,11,0.4)" }}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-4" style={{ background: "#f59e0b", color: "#0a0a0a" }}>See Instant Exterior Transformation</div>
                <h3 className="font-black mb-4 text-white" style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.02em" }}>Awnings for Business</h3>
                <p className="mb-4" style={{ color: "#a3a3a3" }}>Your storefront first impression is filthy. We clean fabric, vinyl, and metal awnings without damaging signage. Restaurants, retail, offices.</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {["No fabric damage","Mould and mildew removed","Colour restored","Before-hours service"].map(b => (
                    <div key={b} className="flex items-center gap-2 text-sm" style={{ color: "#a3a3a3" }}>
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#f59e0b" }} />{b}
                    </div>
                  ))}
                </div>
                <a href="sms:+17784045267?body=Hi! I need a commercial awning cleaning quote." className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-2xl" style={{ background: "#f59e0b", color: "#0a0a0a" }}>
                  <MessageCircle className="w-4 h-4" />Get Commercial Quote
                </a>
              </div>
              <div className="flex-1 w-full">
                <img src="/images/awning-ba.png" alt="Awning before and after" className="w-full rounded-3xl object-cover" style={{ border: "1px solid rgba(245,158,11,0.3)", aspectRatio: "4/3" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4" style={{ background: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black mb-3" style={{ fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>Pricing</h2>
          <p className="mb-14 text-lg" style={{ color: "#a3a3a3" }}>Text a photo. Get a firm price. No games.</p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="rounded-2xl p-6" style={{ background: "#171717", border: "1px solid #404040" }}>
              <p className="font-black mb-1" style={{ fontSize: "60px", color: "#10b981", lineHeight: 1 }}>$99</p>
              <p className="font-semibold text-white mb-3">Small Jobs</p>
              <ul className="space-y-2 text-sm" style={{ color: "#a3a3a3" }}>
                {["Single driveway","Walkway","Garbage bins"].map(i => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" style={{ color: "#10b981" }} />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6 relative" style={{ background: "#171717", border: "2px solid #10b981" }}>
              <div className="absolute -top-3 right-4 text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#10b981", color: "#0a0a0a" }}>MOST POPULAR</div>
              <p className="font-black mb-1" style={{ fontSize: "60px", color: "#10b981", lineHeight: 1 }}>$199</p>
              <p className="font-semibold text-white mb-3">Standard</p>
              <ul className="space-y-2 text-sm" style={{ color: "#a3a3a3" }}>
                {["Large driveway","Patio","Deck"].map(i => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" style={{ color: "#10b981" }} />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.1), #171717)", border: "1px solid rgba(245,158,11,0.4)" }}>
              <p className="font-black mb-1" style={{ fontSize: "60px", color: "#f59e0b", lineHeight: 1 }}>Custom</p>
              <p className="font-semibold text-white mb-3">Commercial</p>
              <ul className="space-y-2 text-sm" style={{ color: "#a3a3a3" }}>
                {["Awning restore","Restaurant facade","Maintenance plan"].map(i => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} />{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm mt-8" style={{ color: "#737373" }}>Exact quote after a quick text with photos. No hidden fees.</p>
        </div>
      </section>

      <section className="py-24 px-4" style={{ background: "#171717" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-center mb-3" style={{ fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>Why Trust Us</h2>
          <p className="text-center mb-14 text-lg" style={{ color: "#a3a3a3" }}>Local. Insured. Obsessive.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Local", desc: "Vancouver raised. We know the mould." },
              { label: "Reliable", desc: "Show up on time. Every time." },
              { label: "Fast", desc: "Text back in 20 min or less." },
              { label: "Insured", desc: "Zero risk." },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl p-6 text-center" style={{ background: "#0a0a0a", border: "1px solid #262626" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(16,185,129,0.15)" }}>
                  <CheckCircle className="w-6 h-6" style={{ color: "#10b981" }} />
                </div>
                <p className="font-bold text-white mb-1">{item.label}</p>
                <p className="text-sm" style={{ color: "#737373" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl p-10 text-center" style={{ border: "2px dashed #404040" }}>
            <Star className="w-8 h-8 mx-auto mb-3" style={{ color: "#737373" }} />
            <p className="font-medium" style={{ color: "#737373" }}>Testimonials Coming Soon</p>
            <p className="text-sm mt-1" style={{ color: "#404040" }}>Add your first review once you complete a job.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden" style={{ background: "#064e3b" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(16,185,129,0.2) 0%, #064e3b 60%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>Get Your Quote</h2>
          <p className="text-lg mb-10" style={{ color: "rgba(167,243,208,0.8)" }}>Text your address and a photo. We will reply with a firm price — no upsells, no surprises.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="sms:+1604XXXXXXX?body=Hi! I need a free pressure washing quote." className="inline-flex items-center justify-center gap-3 font-bold text-lg px-8 py-4 rounded-2xl" style={{ background: "#fff", color: "#064e3b" }}>
              <MessageCircle className="w-6 h-6" />Text: (604) XXX-XXXX
            </a>
            <a href="tel:+1604XXXXXXX" className="inline-flex items-center justify-center gap-3 font-bold text-lg px-8 py-4 rounded-2xl" style={{ background: "rgba(0,0,0,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Phone className="w-6 h-6" />Call Now
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ color: "rgba(167,243,208,0.7)" }}>
            <a href="mailto:youremail@example.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-5 h-5" />youremail@example.com</a>
            <a href="https://tiktok.com/@yourhandle" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors"><MessageCircle className="w-5 h-5" />TikTok</a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm" style={{ background: "#0a0a0a", borderTop: "1px solid #262626", color: "#737373" }}>
        <p>© {new Date().getFullYear()} Pressure Wash Vancouver. All rights reserved.</p>
      </footer>
    </main>
  );
}
