import React from 'react';

function Header(props: any){
  const [open, setOpen] = React.useState(false);
  var go = (p: string) => { setOpen(false); props.onNavigate(p); };

  return (
    <div className="sticky top-0 z-50">
      {/* PINNED TERMS BAR */}
      <div className="bg-[#D8C28F] text-[#0B3D2E] text-[10px] sm:text-[11px] font-bold leading-tight px-2 py-2 text-center">
        Terms & Conditions: Rental Viewing Fee GH¢200 Non-refundable | Sale Viewing Fee GH¢300+ Non-refundable | Rental Commission 10% | Sales Commission 5% | NOTE: All viewings strictly by appointment.
      </div>

      <div className="bg-[#0B3D2E] text-white shadow">
        <div className="px-4 py-3 flex items-center justify-between">
          <button onClick={()=>go('/')} className="font-serif font-bold text-lg leading-none text-left">
            ZV <span className="text-[#D8C28F]">ZIONVANTA</span>
            <span className="block text-[9px] tracking-[0.2em] text-white/70 font-sans font-normal">PROPERTIES • GHANA</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-4 text-[13px] font-semibold mr-2">
              <button onClick={()=>go('/')} className="hover:text-[#D8C28F]">Home</button>
              <button onClick={()=>go('/listings')} className="hover:text-[#D8C28F]">Listings</button>
              <button onClick={()=>go('/about')} className="hover:text-[#D8C28F]">About</button>
              <button onClick={()=>go('/contact')} className="hover:text-[#D8C28F]">Contact</button>
            </div>

            <button onClick={()=>go('/listings')} className="bg-[#D8C28F] text-[#0B3D2E] px-3 py-1.5 rounded-full text-xs font-bold">Find Home →</button>

            <button onClick={()=>setOpen(!open)} className="md:hidden text-2xl px-2 leading-none">
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-[#0A3326] px-4 pb-4 pt-1 flex flex-col gap-1 text-sm font-semibold border-t border-white/10">
            <button onClick={()=>go('/')} className="text-left py-2.5 border-b border-white/10">🏠 Home</button>
            <button onClick={()=>go('/listings')} className="text-left py-2.5 border-b border-white/10">🏡 All Listings</button>
            <button onClick={()=>go('/about')} className="text-left py-2.5 border-b border-white/10">ℹ️ About Us</button>
            <button onClick={()=>go('/contact')} className="text-left py-2.5">📞 Contact</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;