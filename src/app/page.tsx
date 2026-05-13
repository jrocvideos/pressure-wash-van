"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, CheckCircle, ArrowRight, Star, Droplets, Send } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", address: "", details: "" });
  const [errors, setErrors] = useState({ name: false, phone: false, service: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name.trim(),
      phone: !formData.phone.trim() || formData.phone.trim().length < 10,
      service: !formData.service,
    };
    setErrors(newErrors);
    if (!newErrors.name && !newErrors.phone && !newErrors.service) {
      window.location.href = "/thank-you";
    }
  };

  return (
    <main className="min-h-screen text-white" style={{ background: "#0a0a0a" }}>n      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4" style={{ background: "rgba(10,10,10,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid #262626" }}>n        <span className="font-black text-white text-lg">PWV</span>n        <div className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: "#a3a3a3" }}>n          <a href="/driveway" className="hover:text-white transition-colors">Driveway</a>n          <a href="/patio-deck" className="hover:text-white transition-colors">Patio & Deck</a>n          <a href="/commercial" className="hover:text-white transition-colors">Commercial</a>n          <a href="/boat-marine" className="hover:text-white transition-colors">Boat & Marine</a>n        </div>n        <a href="/get-quote" className="font-bold px-4 py-2 rounded-xl text-sm" style={{ background: "#10b981", color: "#0a0a0a" }}>Get Quote</a>n      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 pt-32 overflow-hidden" style={{ background: "#0a0a0a" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(16,185,129,0.15) 0%, #0a0a0a 60%)" }} />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-sm font-medium mb-8" style={{ background: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.3)", color: "#10b981" }}>
            <MapPin className="w-3.5 h-3.5" />
            Vancouver • Richmond • North Shore • White Rock
          </div>
          <h1 className="font-black leading-none mb-6" style={{ fontSize: "clamp(48px,10vw,96px)", letterSpacing: "-0.04em" }}>
            <span className="text-white block">We Wash</span>
            <span className="block" style={{ background: "linear-gradient(90deg, #10b981, #2dd4bf, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Everything.</span>
          </h1>
          <p className="text-xl mb-4 max-w-2xl mx-auto" style={{ color: "#a3a3a3" }}>
            Driveways, patios, awnings, boats, and exterior surfaces restored fast. Text a photo. Get a same-day quote. No phone calls. No pressure.
          </p>
          <p className="text-sm mb-10 font-medium" style={{ color: "#10b981" }}>
            Spring bookings fill quickly — weekend slots go first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="https://wa.me/12368740586?text=Hi! I need a free quote for pressure washing." target="_blank" className="inline-flex items-center justify-center gap-3 font-extrabold text-lg px-10 py-5 rounded-2xl" style={{ background: "#10b981", color: "#0a0a0a", boxShadow: "0 0 60px -15px rgba(16,185,129,0.6)" }}>
              <MessageCircle className="w-5 h-5" />WhatsApp for Free Quote<ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+12368740586" className="inline-flex items-center justify-center gap-3 font-bold text-lg px-10 py-5 rounded-2xl" style={{ background: "#262626", color: "#fff", border: "1px solid #404040" }}>
              <Phone className="w-5 h-5" />(236) 874-0586
            </a>
          </div>
          <p className="text-sm" style={{ color: "#737373" }}>Typical response time: under 20 minutes</p>
          <div className="mt-16 flex justify-center animate-bounce"><Droplets className="w-6 h-6" style={{ color: "#10b981" }} /></div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-24 px-4" style={{ background: "#171717" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-center mb-3" style={{ fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>The Proof</h2>
          <p className="text-center mb-14" style={{ color: "#a3a3a3", fontSize: "20px" }}>One session. Years of grime erased.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: "/images/driveway-ba.png", title: "Driveway Restoration", sub: "Restore curb appeal in hours, not weekends.", accent: "#10b981" },
              { img: "/images/awning-ba.png", title: "Commercial Awning", sub: "Storefront first impression — restored.", accent: "#f59e0b" },
              { img: "/images/bef-and-aft-must.png", title: "Car & Vehicle Detailing", sub: "Restore your vehicle's finish safely.", accent: "#ef4444" },
              { img: "/images/boat-bef-and-aft.png", title: "Boat & Marine", sub: "Hull and deck restoration — like new.", accent: "#3b82f6" },
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

      {/* SERVICES */}
      <section className="py-24 px-4" style={{ background: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-center mb-3" style={{ fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>What We Clean</h2>
          <p className="text-center mb-14" style={{ color: "#a3a3a3", fontSize: "20px" }}>Professional exterior cleaning that makes your property look new and brings up the vlaue again.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {["Driveways","Patios","Awnings","Sidewalks","Decks","Fences","Garbage Bins","Parking Pads","Stairs","Cars & Trucks","Boats & Marine","Commercial Buildings"].map((service) => (
              <div key={service} className="flex items-center gap-3 rounded-2xl px-5 py-4" style={{ background: "#171717", border: "1px solid #262626" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(16,185,129,0.15)" }}>
                  <CheckCircle className="w-4 h-4" style={{ color: "#10b981" }} />
                </div>
                <span className="font-semibold text-white">{service}</span>
              </div>
            ))}
          </div>

          {/* AWNINGS MONEY BLOCK */}
          <div className="rounded-3xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.1), #171717)", border: "2px solid rgba(245,158,11,0.4)" }}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-4" style={{ background: "#f59e0b", color: "#0a0a0a" }}>HIGHEST MARGIN — BEST ROI</div>
                <h3 className="font-black mb-4 text-white" style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.02em" }}>Awnings for Business</h3>
                <p className="mb-4" style={{ color: "#a3a3a3" }}>Your storefront's first impression is costing you customers. We clean fabric, vinyl, and metal awnings without damaging signage. Restaurants, retail, offices — precision cleaning, professional results.</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {["No fabric damage","Mould and mildew removed","Colour restored","Before-hours service"].map(b => (
                    <div key={b} className="flex items-center gap-2 text-sm" style={{ color: "#a3a3a3" }}>
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#f59e0b" }} />{b}
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/12368740586?text=Hi! I need a commercial awning cleaning quote." target="_blank" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-2xl" style={{ background: "#f59e0b", color: "#0a0a0a" }}>
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

      {/* PRICING */}
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
                {["Awning restore","Building facade","Maintenance plan"].map(i => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} />{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm mt-8" style={{ color: "#737373" }}>Exact quote after a quick text with photos. No hidden fees.</p>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 px-4" style={{ background: "#171717" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-center mb-3" style={{ fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>Why Trust Us</h2>
          <p className="text-center mb-14 text-lg" style={{ color: "#a3a3a3" }}>Local. Insured. Detail-focused.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Local", desc: "Serving White Rock, North Vancouver, West Vancouver Richmond and Kerrisdale." },
              { label: "Reliable", desc: "Show up on time. Every time." },
              { label: "Fast", desc: "Text back in 20 min or less." },
              { label: "Insured", desc: "Full liability. Zero risk." },
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

      {/* LEAD FORM — BOTTOM CTA */}
      <section className="py-24 px-4" style={{ background: "#064e3b" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(16,185,129,0.2) 0%, #064e3b 60%)" }} />
        <div className="max-w-2xl mx-auto">
          <h2 className="font-black text-center mb-3" style={{ fontSize: "clamp(36px,6vw,64px)", letterSpacing: "-0.03em" }}>Get Your Quote</h2>
          <p className="text-center mb-10 text-lg" style={{ color: "rgba(167,243,208,0.8)" }}>Fill this out — we'll text you a firm price in under 20 minutes.</p>
          <form onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-4" style={{ background: "#0a0a0a", border: "1px solid #262626" }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-neutral-500 outline-none"
                  style={{ background: "#171717", border: errors.name ? "1px solid #ef4444" : "1px solid #262626" }}
                />
                {errors.name && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>Name is required</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-neutral-500 outline-none"
                  style={{ background: "#171717", border: errors.phone ? "1px solid #ef4444" : "1px solid #262626" }}
                />
                {errors.phone && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>Valid phone number required</p>}
              </div>
            </div>
            <input
              type="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-neutral-500 outline-none"
              style={{ background: "#171717", border: "1px solid #262626" }}
            />
            <div>
              <select
                value={formData.service}
                onChange={e => setFormData({...formData, service: e.target.value})}
                className="w-full px-4 py-3 rounded-xl text-white outline-none"
                style={{ background: "#171717", border: errors.service ? "1px solid #ef4444" : "1px solid #262626", color: formData.service ? "#fff" : "#737373" }}
              >
                <option value="">What needs cleaning? *</option>
                <option value="driveway">Driveway</option>
                <option value="patio">Patio / Deck / Plastic Lawn Furniture</option>
                <option value="awning">Commercial Awnings</option>
                <option value="car">Car / Truck</option>
                <option value="boat">Boat / Marine</option>
                <option value="other">Something Else</option>
              </select>
              {errors.service && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>Please select a service</p>}
            </div>
            <input
              type="text"
              placeholder="Your Address"
              value={formData.address}
              onChange={e => setFormData({...formData, address: e.target.value})}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-neutral-500 outline-none"
              style={{ background: "#171717", border: "1px solid #262626" }}
            />
            <textarea
              placeholder="Any details? (Optional)"
              value={formData.details}
              onChange={e => setFormData({...formData, details: e.target.value})}
              rows={3}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-neutral-500 outline-none resize-none"
              style={{ background: "#171717", border: "1px solid #262626" }}
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 font-extrabold text-lg py-4 rounded-2xl transition-all"
              style={{ background: "#10b981", color: "#0a0a0a", boxShadow: "0 0 40px -10px rgba(16,185,129,0.5)" }}
            >
              <Send className="w-5 h-5" />
              Send a Photo for Instant Quote
            </button>
            <p className="text-center text-sm" style={{ color: "#737373" }}>
              After submitting, WhatsApp your photos to{" "}
              <a href="https://wa.me/12368740586" style={{ color: "#10b981" }}>(236) 874-0586</a> for faster pricing.
            </p>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="https://wa.me/12368740586?text=Hi! I need a free pressure washing quote." target="_blank" className="inline-flex items-center justify-center gap-3 font-bold text-lg px-8 py-4 rounded-2xl" style={{ background: "#fff", color: "#064e3b" }}>
              <MessageCircle className="w-6 h-6" />WhatsApp: (236) 874-0586
            </a>
            <a href="tel:+12368740586" className="inline-flex items-center justify-center gap-3 font-bold text-lg px-8 py-4 rounded-2xl" style={{ background: "rgba(0,0,0,0.3)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Phone className="w-6 h-6" />Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm" style={{ background: "#0a0a0a", borderTop: "1px solid #262626", color: "#737373" }}>
        <p>© {new Date().getFullYear()} Pressure Wash Vancouver. All rights reserved.</p>
      </footer>
    </main>
  );
}
