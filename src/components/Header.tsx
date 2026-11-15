import React from 'react';

function Header(props: any){
  const [open, setOpen] = React.useState(false);

  var go = (path: string) => {
    setOpen(false);
    props.onNavigate(path);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* TOP BANNER - WHITE BACKGROUND */}
      <div className="bg-white text-[#0A1931] text-[10px] sm:text-[11px] text-center px-2 py-1.5 leading-tight font-medium border-b border-[#C9A227]">
        Terms & Conditions: Rental Viewing Fee <span className="font-bold text-[#C9A227]">GH¢200</span> Non-refundable | Sale Viewing Fee <span className="font-bold text-[#C9A227]">GH¢300+</span> Non-refundable | Rental Commission <span className="font-bold">10%</span> | Sales Commission <span className="font-bold">5%</span> | NOTE: All viewings strictly by appointment.
      </div>

      {/* MAIN HEADER - NAVY + GOLD */}
      <div className="bg-[#0A1931] border-b-2 border-[#C9A227] px-4 py-2 flex items-center justify-between gap-2">
        {/* LOGO - LEFT */}
        <div onClick={()=>go('/')} className="flex items-center gap-2 cursor-pointer shrink-0">
          <img
            src="/logo.jpg"
            alt="Zionvanta Properties Ghana"
            className="h-[48px] sm:h-[50px] w-auto object-contain"
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-5 text-white text-sm font-bold">
          <button onClick={()=>go('/')} className="hover:text-[#C9A227]">Home</button>
          <button onClick={()=>go('/listings')} className="hover:text-[#C9A227]">Properties</button>
          <button onClick={()=>go('/listings?deal=For Sale')} className="hover:text-[#C9A227]">Buy</button>
          <button onClick={()=>go('/listings?deal=For Rent')} className="hover:text-[#C9A227]">Rent</button>
          <button onClick={()=>go('/listings?type=Land')} className="hover:text-[#C9A227]">Land</button>
          <button onClick={()=>go('/contact')} className="hover:text-[#C9A227]">Contact</button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={()=>go('/listings')}
            className="bg-[#C9A227] text-[#0A1931] font-bold px-4 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap"
          >
            Find Home →
          </button>

          {/* HAMBURGER - MOBILE */}
          <button
            onClick={()=>setOpen(!open)}
            className="md:hidden text-[#C9A227] text-2xl leading-none px-1"
            aria-label="Menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0A1931] border-t border-white/10 px-4 py-3 flex flex-col gap-1 text-white font-bold text-sm">
          <button onClick={()=>go('/')} className="text-left py-2.5 border-b border-white/10">🏠 Home</button>
          <button onClick={()=>go('/listings')} className="text-left py-2.5 border-b border-white/10">🏘️ All Properties</button>
          <button onClick={()=>go('/listings?deal=For Sale')} className="text-left py-2.5 border-b border-white/10">🔑 Buy</button>
          <button onClick={()=>go('/listings?deal=For Rent')} className="text-left py-2.5 border-b border-white/10">🏠 Rent</button>
          <button onClick={()=>go('/listings?type=Land')} className="text-left py-2.5 border-b border-white/10">📍 Land</button>
          <button onClick={()=>go('/contact')} className="text-left py-2.5">📞 Contact Us</button>
          <button onClick={()=>go('/listings')} className="mt-2 bg-[#C9A227] text-[#0A1931] font-bold py-3 rounded-full">Find Home →</button>
        </div>
      )}
    </div>
  );
}

export default Header;