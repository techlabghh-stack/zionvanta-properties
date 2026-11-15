import React from 'react';

function Footer(props: any){
  var go = (path: string)=>{
    if(props.onNavigate) props.onNavigate(path);
    window.scrollTo(0,0);
  };

  return (
    <footer className="bg-[#0A1931] text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* LOGO + ABOUT */}
          <div>
            <div className="bg-white rounded-2xl p-2 inline-block">
              <img src="/logo.png" alt="Zionvanta Properties" className="h-14 w-auto" />
            </div>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Zionvanta Properties — Trusted homes, land & rentals across Ghana.
              Buy, Rent or Sell with confidence.
            </p>
            <div className="flex gap-2 mt-3">
              <a href="https://wa.me/233500000000" target="_blank" className="bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full">💬 WhatsApp</a>
              <a href="tel:+233500000000" className="bg-white/10 text-white text-xs font-bold px-3 py-2 rounded-full">📞 Call</a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-[#C9A227] text-sm">Quick Links</h3>
            <div className="space-y-2 mt-3 text-sm text-white/70">
              <button onClick={()=>go('/')} className="block hover:text-white">🏠 Home</button>
              <button onClick={()=>go('/listings')} className="block hover:text-white">🏘️ All Properties</button>
              <button onClick={()=>go('/listings?deal=For Sale')} className="block hover:text-white">🔑 For Sale</button>
              <button onClick={()=>go('/listings?deal=For Rent')} className="block hover:text-white">🏡 For Rent</button>
              <button onClick={()=>go('/listings?type=Land')} className="block hover:text-white">🌍 Land</button>
              <button onClick={()=>go('/contact')} className="block hover:text-white">📞 Contact Us</button>
            </div>
          </div>

          {/* POPULAR AREAS */}
          <div>
            <h3 className="font-bold text-[#C9A227] text-sm">Popular Areas</h3>
            <div className="space-y-2 mt-3 text-sm text-white/70">
              <button onClick={()=>go('/listings')} className="block hover:text-white">East Legon</button>
              <button onClick={()=>go('/listings')} className="block hover:text-white">Cantonments</button>
              <button onClick={()=>go('/listings')} className="block hover:text-white">Tema</button>
              <button onClick={()=>go('/listings')} className="block hover:text-white">Spintex</button>
              <button onClick={()=>go('/listings')} className="block hover:text-white">Airport Residential</button>
              <button onClick={()=>go('/listings')} className="block hover:text-white">Osu</button>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-[#C9A227] text-sm">Contact</h3>
            <div className="space-y-2 mt-3 text-sm text-white/70">
              <div>📍 East Legon, Accra, Ghana</div>
              <div>📞 +233 50 000 0000</div>
              <div>✉️ info@zionvanta.com</div>
              <div>🕐 Mon - Sat: 8am - 8pm</div>
              <div>🕐 Sun: 12pm - 5pm</div>
            </div>
            <button onClick={()=>go('/contact')} className="bg-[#C9A227] text-[#0A1931] font-bold px-4 py-2.5 rounded-full text-sm mt-4">
              Book a Viewing →
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <div>© 2026 Zionvanta Properties. All Rights Reserved.</div>
          <div className="flex gap-3">
            <button onClick={()=>go('/')} className="hover:text-white">Privacy</button>
            <button onClick={()=>go('/')} className="hover:text-white">Terms</button>
            <button onClick={()=>go('/admin')} className="hover:text-white">Admin</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;