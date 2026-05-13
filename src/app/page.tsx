"use client";

import { useState } from "react";
import { Phone, MessageCircle, MapPin, CheckCircle, ArrowRight, Star, Droplets, Send } from "lucide-react";

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
    <main className="min-h-screen text-white" style={{ background: "#0a0a0a" }}>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", background: "rgba(10,10,10,0.95)", borderBottom: "1px solid #262626" }}>
        <span style={{ fontWeight: 900, color: "white", fontSize: "18px" }}>PWV</span>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a href="/driveway" style={{ color: "#a3a3a3", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>Driveway</a>
          <a href="/patio-deck" style={{ color: "#a3a3a3", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>Patio & Deck</a>
          <a href="/commercial" style={{ color: "#a3a3a3", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>Commercial</a>
          <a href="/boat-marine" style={{ color: "#a3a3a3", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>Boat & Marine</a>
        </div>
        <a href="/get-quote" style={{ fontWeight: 700, padding: "8px 16px", borderRadius: "12px", background: "#10b981", color: "#0a0a0a", textDecoration: "none", fontSize: "14px" }}>Get Quote</a>
      </nav>

      <section style={{ background: "#0a0a0a", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 16px 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at top, rgba(16,185,129,0.1) 0%, #0a0a0a 50%)" }} />
        <div style={{ position: "relative", maxWidth: "1024px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "999px", padding: "6px 16px", fontSize: "14px", fontWeight: 500, marginBottom: "32px", background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
            <MapPin style={{ width: "14px", height: "14px" }} />
            Vancouver • Richmond • North Shore • White Rock
          </div>
          <h1 style={{ fontWeight: 900, lineHeight: 0.9, marginBottom: "24px", fontSize: "clamp(48px,10vw,96px)", letterSpacing: "-0.04em" }}>
            <span style={{ color: "white", display: "block" }}>We Wash</span>
            <span style={{ display: "block", background: "linear-gradient(90deg, #10b981, #2dd4bf, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Everything.</span>
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "16px", maxWidth: "672px", margin: "0 auto 16px", color: "#a3a3a3" }}>
            Driveways, patios, awnings, boats, and exterior surfaces restored fast. Text a photo. Get a same-day quote. No phone calls. No pressure.
          </p>
          <p style={{ fontSize: "14px", marginBottom: "40px", fontWeight: 500, color: "#10b981" }}>
            Spring bookings fill quickly — weekend slots go first.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center", marginBottom: "24px", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="https://wa.me/12368740586?text=Hi! I need a free quote for pressure washing." target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontWeight: 800, fontSize: "18px", padding: "20px 40px", borderRadius: "16px", background: "#10b981", color: "#0a0a0a", textDecoration: "none", boxShadow: "0 0 60px -15px rgba(16,185,129,0.6)" }}>
                <MessageCircle style={{ width: "20px", height: "20px" }} />
                WhatsApp for Free Quote
                <ArrowRight style={{ width: "20px", height: "20px" }} />
              </a>
              <a href="tel:+12368740586" style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontWeight: 700, fontSize: "18px", padding: "20px 40px", borderRadius: "16px", background: "#262626", color: "white", textDecoration: "none", border: "1px solid #404040" }}>
                <Phone style={{ width: "20px", height: "20px" }} />
                (236) 874-0586
              </a>
            </div>
          </div>
          <p style={{ fontSize: "14px", color: "#737373" }}>Typical response time: under 20 minutes</p>
          <div style={{ marginTop: "64px", display: "flex", justifyContent: "center" }}>
            <Droplets style={{ width: "24px", height: "24px", color: "#10b981" }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 16px", background: "#171717" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, textAlign: "center", marginBottom: "12px", fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>The Proof</h2>
          <p style={{ textAlign: "center", marginBottom: "56px", color: "#a3a3a3", fontSize: "20px" }}>One session. Years of grime erased.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "32px" }}>
            {[
              { img: "/images/driveway-ba.png", title: "Driveway Restoration", sub: "Restore curb appeal in hours, not weekends.", accent: "#10b981" },
              { img: "/images/awning-ba.png", title: "Commercial Awning", sub: "Storefront first impression — restored.", accent: "#f59e0b" },
              { img: "/images/bef-and-aft-must.png", title: "Car & Vehicle Detailing", sub: "Restore your vehicle's finish safely.", accent: "#ef4444" },
              { img: "/images/boat-bef-and-aft.png", title: "Boat & Marine", sub: "Hull and deck restoration — like new.", accent: "#3b82f6" },
            ].map((card) => (
              <div key={card.title} style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: "1px solid #404040", aspectRatio: "4/3" }}>
                <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px" }}>
                  <p style={{ fontWeight: 700, color: "white", fontSize: "20px" }}>{card.title}</p>
                  <p style={{ fontSize: "14px", marginTop: "4px", color: "#a3a3a3" }}>{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 16px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, textAlign: "center", marginBottom: "12px", fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>What We Clean</h2>
          <p style={{ textAlign: "center", marginBottom: "56px", color: "#a3a3a3", fontSize: "20px" }}>Professional exterior cleaning that makes your property look new again.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "40px" }}>
            {["Driveways","Patios","Awnings","Sidewalks","Decks","Fences","Garbage Bins","Parking Pads","Stairs","Cars & Trucks","Boats & Marine","Commercial Buildings"].map((service) => (
              <div key={service} style={{ display: "flex", alignItems: "center", gap: "12px", borderRadius: "16px", padding: "16px 20px", background: "#171717", border: "1px solid #262626" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(16,185,129,0.15)", flexShrink: 0 }}>
                  <CheckCircle style={{ width: "16px", height: "16px", color: "#10b981" }} />
                </div>
                <span style={{ fontWeight: 600, color: "white" }}>{service}</span>
              </div>
            ))}
          </div>

          <div style={{ borderRadius: "24px", padding: "40px", background: "linear-gradient(135deg, rgba(245,158,11,0.1), #171717)", border: "2px solid rgba(245,158,11,0.4)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "999px", padding: "6px 16px", fontSize: "12px", fontWeight: 700, marginBottom: "16px", background: "#f59e0b", color: "#0a0a0a" }}>HIGHEST MARGIN — BEST ROI</div>
                <h3 style={{ fontWeight: 900, marginBottom: "16px", color: "white", fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.02em" }}>Awnings for Business</h3>
                <p style={{ marginBottom: "16px", color: "#a3a3a3" }}>Your storefront's first impression is costing you customers. We clean fabric, vinyl, and metal awnings without damaging signage.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "24px" }}>
                  {["No fabric damage","Mould and mildew removed","Colour restored","Before-hours service"].map(b => (
                    <div key={b} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#a3a3a3" }}>
                      <CheckCircle style={{ width: "16px", height: "16px", flexShrink: 0, color: "#f59e0b" }} />{b}
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/12368740586?text=Hi! I need a commercial awning cleaning quote." target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700, padding: "12px 24px", borderRadius: "16px", background: "#f59e0b", color: "#0a0a0a", textDecoration: "none" }}>
                  <MessageCircle style={{ width: "16px", height: "16px" }} />Get Commercial Quote
                </a>
              </div>
              <img src="/images/awning-ba.png" alt="Awning before and after" style={{ width: "100%", borderRadius: "24px", objectFit: "cover", border: "1px solid rgba(245,158,11,0.3)", aspectRatio: "4/3" }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 16px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "896px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontWeight: 900, marginBottom: "12px", fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>Pricing</h2>
          <p style={{ marginBottom: "56px", fontSize: "18px", color: "#a3a3a3" }}>Text a photo. Get a firm price. No games.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", textAlign: "left" }}>
            <div style={{ borderRadius: "16px", padding: "24px", background: "#171717", border: "1px solid #404040" }}>
              <p style={{ fontWeight: 900, marginBottom: "4px", fontSize: "60px", color: "#10b981", lineHeight: 1 }}>$99</p>
              <p style={{ fontWeight: 600, color: "white", marginBottom: "12px" }}>Small Jobs</p>
              {["Single driveway","Walkway","Garbage bins"].map(i => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#a3a3a3", marginBottom: "8px" }}>
                  <CheckCircle style={{ width: "14px", height: "14px", color: "#10b981" }} />{i}
                </div>
              ))}
            </div>
            <div style={{ borderRadius: "16px", padding: "24px", background: "#171717", border: "2px solid #10b981", position: "relative" }}>
              <div style={{ position: "absolute", top: "-12px", right: "16px", fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", background: "#10b981", color: "#0a0a0a" }}>MOST POPULAR</div>
              <p style={{ fontWeight: 900, marginBottom: "4px", fontSize: "60px", color: "#10b981", lineHeight: 1 }}>$199</p>
              <p style={{ fontWeight: 600, color: "white", marginBottom: "12px" }}>Standard</p>
              {["Large driveway","Patio","Deck"].map(i => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#a3a3a3", marginBottom: "8px" }}>
                  <CheckCircle style={{ width: "14px", height: "14px", color: "#10b981" }} />{i}
                </div>
              ))}
            </div>
            <div style={{ borderRadius: "16px", padding: "24px", background: "linear-gradient(135deg, rgba(245,158,11,0.1), #171717)", border: "1px solid rgba(245,158,11,0.4)" }}>
              <p style={{ fontWeight: 900, marginBottom: "4px", fontSize: "60px", color: "#f59e0b", lineHeight: 1 }}>Custom</p>
              <p style={{ fontWeight: 600, color: "white", marginBottom: "12px" }}>Commercial</p>
              {["Awning restore","Building facade","Maintenance plan"].map(i => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#a3a3a3", marginBottom: "8px" }}>
                  <CheckCircle style={{ width: "14px", height: "14px", color: "#f59e0b" }} />{i}
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontSize: "14px", marginTop: "32px", color: "#737373" }}>Exact quote after a quick text with photos. No hidden fees.</p>
        </div>
      </section>

      <section style={{ padding: "96px 16px", background: "#171717" }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, textAlign: "center", marginBottom: "12px", fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.03em" }}>Why Trust Us</h2>
          <p style={{ textAlign: "center", marginBottom: "56px", fontSize: "18px", color: "#a3a3a3" }}>Local. Insured. Detail-focused.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {[
              { label: "Local", desc: "Serving White Rock, Surrey, Richmond and Vancouver." },
              { label: "Reliable", desc: "Show up on time. Every time." },
              { label: "Fast", desc: "Text back in 20 min or less." },
              { label: "Insured", desc: "Full liability. Zero risk." },
            ].map((item) => (
              <div key={item.label} style={{ borderRadius: "16px", padding: "24px", textAlign: "center", background: "#0a0a0a", border: "1px solid #262626" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", background: "rgba(16,185,129,0.15)" }}>
                  <CheckCircle style={{ width: "24px", height: "24px", color: "#10b981" }} />
                </div>
                <p style={{ fontWeight: 700, color: "white", marginBottom: "4px" }}>{item.label}</p>
                <p style={{ fontSize: "14px", color: "#737373" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "40px", borderRadius: "24px", padding: "40px", textAlign: "center", border: "2px dashed #404040" }}>
            <Star style={{ width: "32px", height: "32px", margin: "0 auto 12px", color: "#737373" }} />
            <p style={{ fontWeight: 500, color: "#737373" }}>Testimonials Coming Soon</p>
            <p style={{ fontSize: "14px", marginTop: "4px", color: "#404040" }}>Add your first review once you complete a job.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 16px", background: "#064e3b", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "672px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, textAlign: "center", marginBottom: "12px", fontSize: "clamp(36px,6vw,64px)", letterSpacing: "-0.03em" }}>Get Your Quote</h2>
          <p style={{ textAlign: "center", marginBottom: "40px", fontSize: "18px", color: "rgba(167,243,208,0.8)" }}>Fill this out — we will text you a firm price in under 20 minutes.</p>
          <form onSubmit={handleSubmit} style={{ borderRadius: "24px", padding: "32px", background: "#0a0a0a", border: "1px solid #262626" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <input type="text" placeholder="Full Name *" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", color: "white", background: "#171717", border: errors.name ? "1px solid #ef4444" : "1px solid #262626", outline: "none", boxSizing: "border-box" }} />
                {errors.name && <p style={{ fontSize: "12px", marginTop: "4px", color: "#ef4444" }}>Name is required</p>}
              </div>
              <div>
                <input type="tel" placeholder="Phone Number *" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", color: "white", background: "#171717", border: errors.phone ? "1px solid #ef4444" : "1px solid #262626", outline: "none", boxSizing: "border-box" }} />
                {errors.phone && <p style={{ fontSize: "12px", marginTop: "4px", color: "#ef4444" }}>Valid phone required</p>}
              </div>
            </div>
            <input type="email" placeholder="Email (optional)" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
              style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", color: "white", background: "#171717", border: "1px solid #262626", outline: "none", marginBottom: "16px", boxSizing: "border-box" }} />
            <div style={{ marginBottom: "16px" }}>
              <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}
                style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", color: formData.service ? "white" : "#737373", background: "#171717", border: errors.service ? "1px solid #ef4444" : "1px solid #262626", outline: "none", boxSizing: "border-box" }}>
                <option value="">What needs cleaning? *</option>
                <option value="driveway">Driveway</option>
                <option value="patio">Patio / Deck</option>
                <option value="awning">Commercial Awning</option>
                <option value="car">Car / Truck</option>
                <option value="boat">Boat / Marine</option>
                <option value="other">Something Else</option>
              </select>
              {errors.service && <p style={{ fontSize: "12px", marginTop: "4px", color: "#ef4444" }}>Please select a service</p>}
            </div>
            <input type="text" placeholder="Your Address" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}
              style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", color: "white", background: "#171717", border: "1px solid #262626", outline: "none", marginBottom: "16px", boxSizing: "border-box" }} />
            <textarea placeholder="Any details? (Optional)" value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} rows={3}
              style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", color: "white", background: "#171717", border: "1px solid #262626", outline: "none", marginBottom: "16px", resize: "none", boxSizing: "border-box" }} />
            <button type="submit" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontWeight: 800, fontSize: "18px", padding: "16px", borderRadius: "16px", background: "#10b981", color: "#0a0a0a", border: "none", cursor: "pointer" }}>
              <Send style={{ width: "20px", height: "20px" }} />
              Send a Photo for Instant Quote
            </button>
            <p style={{ textAlign: "center", fontSize: "14px", marginTop: "16px", color: "#737373" }}>
              After submitting, WhatsApp your photos to <a href="https://wa.me/12368740586" style={{ color: "#10b981" }}>(236) 874-0586</a>
            </p>
          </form>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "32px", flexWrap: "wrap" }}>
            <a href="https://wa.me/12368740586?text=Hi! I need a free pressure washing quote." target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontWeight: 700, fontSize: "18px", padding: "16px 32px", borderRadius: "16px", background: "white", color: "#064e3b", textDecoration: "none" }}>
              <MessageCircle style={{ width: "24px", height: "24px" }} />WhatsApp: (236) 874-0586
            </a>
            <a href="tel:+12368740586" style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontWeight: 700, fontSize: "18px", padding: "16px 32px", borderRadius: "16px", background: "rgba(0,0,0,0.3)", color: "white", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Phone style={{ width: "24px", height: "24px" }} />Call Now
            </a>
          </div>
        </div>
      </section>

      <footer style={{ padding: "24px", textAlign: "center", fontSize: "14px", background: "#0a0a0a", borderTop: "1px solid #262626", color: "#737373" }}>
        <p>© {new Date().getFullYear()} Pressure Wash Vancouver. All rights reserved.</p>
      </footer>
    </main>
  );
}
