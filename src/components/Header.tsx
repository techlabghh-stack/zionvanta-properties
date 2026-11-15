import React from 'react';

function Header(props: any){
  const [open, setOpen] = React.useState(false);

  var go = (path: string)=>{
    props.onNavigate(path);
    setOpen(false);
  };

  var linkCls = "text-sm font-bold text-[#0A1931] hover:text-[#C9A227]";
  var activeCls = "text-sm font-bold text-[#C9A227]";

  // props.page = current page, e.g. 'home', 'listings', 'contact'
  var is = (name:string)=> props.page === name ? activeCls : linkCls;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* LOGO - clicks to Home */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={()=>go('/')}>
          <img src="https://drive.google.com/file/d/1dX76arDf61QXDm46Jc21ErM4vBzuwmmD/view?usp=drivesdk" alt="Zionvanta Properties" className="h-12 sm:h-14 w-auto object-contain" />
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={()=>go('/')} className={is('home')}>Home</button>
          <button onClick={()=>go('/listings')} className={is('listings')}>Properties</button>
          <button onClick={()=>go('/listings?deal=For Sale')} className={is('sale')}>For Sale</button>
          <button onClick={()=>go('/listings?deal=For Rent')} className={is('rent')}>For Rent</button>
          <button onClick={()=>go('/listings?type=Land')} className={is('land')}>Land</button>
          <button onClick={()=>go('/contact')} className={is('contact')}>Contact</button>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="https://wa.me/233500000000" target="_blank" className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full">
            💬 WhatsApp
          </a>
          <button onClick={()=>go('/listings')} className="bg-[#C9A227] text-[#0A1931] text-sm font-bold px-4 py-2 rounded-full">
            Browse →
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button onClick={()=>setOpen(!open)} className="md:hidden text-2xl font-bold px-2">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-1">
          <button onClick={()=>go('/')} className="block w-full text-left font-bold py-2.5 border-b">🏠 Home</button>
          <button onClick={()=>go('/listings')} className="block w-full text-left font-bold py-2.5 border-b">🏘️ All Properties</button>
          <button onClick={()=>go('/listings?deal=For Sale')} className="block w-full text-left font-bold py-2.5 border-b">🔑 For Sale</button>
          <button onClick={()=>go('/listings?deal=For Rent')} className="block w-full text-left font-bold py-2.5 border-b">🏡 For Rent</button>
          <button onClick={()=>go('/listings?type=Land')} className="block w-full text-left font-bold py-2.5 border-b">🌍 Land</button>
          <button onClick={()=>go('/contact')} className="block w-full text-left font-bold py-2.5 border-b">📞 Contact Us</button>
          <a href="https://wa.me/233500000000" target="_blank" className="block text-center bg-green-500 text-white font-bold py-3 rounded-full text-sm mt-2">
            💬 Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;