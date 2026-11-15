import React from 'react';

function Footer(props: any){
  var go = (p: string)=> props.onNavigate(p);
  return (
    <footer className="bg-[#0A1931] text-white border-t-4 border-[#C9A227]">
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-5 py-8 text-sm text-center md:text-left">
        {/* LOGO + ABOUT */}
        <div>
          <img src="/logo.jpg" alt="Zionvanta Properties Ghana" className="h-[64px] w-auto object-contain mx-auto md:mx-0" />
          <p className="mt-3 text-white/70">ZIONVANTA PROPERTIES is your trusted partner in exceptional properties, providing reliable real estate solutions across Ghana.</p>
        </div>
        <div>
          <h3 className="text-[#C9A227] font-serif font-bold text-lg">Quick Links</h3>
          <p className="mt-2 flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1 text-white/80">
            <button onClick={()=>go('/')} className="hover:text-[#C9A227]">Home</button> •
            <button onClick={()=>go('/listings?deal=For Sale')} className="hover:text-[#C9A227]">Buy</button> •
            <button onClick={()=>go('/listings?deal=For Rent')} className="hover:text-[#C9A227]">Rent</button> •
            <button onClick={()=>go('/listings?type=Land')} className="hover:text-[#C9A227]">Land</button> •
            <button onClick={()=>go('/about')} className="hover:text-[#C9A227]">About</button> •
            <button onClick={()=>go('/contact')} className="hover:text-[#C9A227]">Contact</button>
          </p>
        </div>
        <div>
          <h3 className="text-[#C9A227] font-serif font-bold text-lg">Contact</h3>
          <p className="mt-2 text-white/80">Accra, Ghana<br/>info@zionvanta.com<br/>+233 50 000 0000</p>
        </div>
        <div>
          <h3 className="text-[#C9A227] font-serif font-bold text-lg">Terms Summary</h3>
          <p className="mt-2 text-white/80">Rental Viewing <span className="text-[#C9A227] font-bold">GH¢200</span> • Sale Viewing <span className="text-[#C9A227] font-bold">GH¢300+</span> • Rental <span className="font-bold text-white">10%</span> • Sales <span className="font-bold text-white">5%</span></p>
        </div>
      </div>
      <div className="flex justify-center gap-3 pb-6">
        <button onClick={()=>{window.location.href='tel:+233500000000'}} className="border border-[#C9A227] text-[#C9A227] px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[#C9A227] hover:text-[#0A1931]">Call Us</button>
        <button onClick={()=>{window.open('https://wa.me/233500000000','_blank')}} className="bg-[#C9A227] text-[#0A1931] px-4 py-1.5 rounded-full text-xs font-bold">WhatsApp</button>
      </div>
      {/* BOTTOM BAR - WHITE LIKE HEADER BANNER */}
      <div className="bg-white text-[#0A1931]">
        <div className="max-w-6xl mx-auto px-4 py-3 text-center text-xs font-medium">
          © 2026 <span className="font-bold">Zionvanta Properties Ghana</span> • All Rights Reserved. <button onClick={()=>go('/admin-login')} className="underline text-[#0A1931]/50">Admin</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;