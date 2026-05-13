export default function ThankYou() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 text-sm font-semibold text-emerald-400 mb-8">
          Quote Request Received
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6">We Got It.</h1>
        <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
          We'll text you within 20 minutes with a firm price. 
          For an even faster quote, send photos of the job to our WhatsApp.
        </p>
        
        <a
          href="https://wa.me/12368740586?text=Hi! I just submitted a quote request. Here are the photos:"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-black text-lg px-10 py-5 rounded-2xl transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:-translate-y-1 mb-8"
        >
          Send Photos on WhatsApp
        </a>
        
        <p className="text-neutral-600 text-sm">
          Or call/text us directly: <a href="tel:+12368740586" className="text-emerald-400 hover:text-emerald-300">(236) 874-0586</a>
        </p>
        
        {/* Google Ads Conversion Tracking Pixel — Paste your gtag here */}
        <div dangerouslySetInnerHTML={{
          __html: `
            <!-- Google tag (gtag.js) event - conversion -->
            <script>
              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-XXXXXXXXXX/XXXXXXXXXX',
                  'value': 50.0,
                  'currency': 'CAD'
                });
              }
            </script>
          `
        }} />
      </div>
    </main>
  );
}
