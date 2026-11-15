import React from 'react';

function Home(props: any){
  var listings = props.listings || [];
  var newListings = [...listings].sort((a:any,b:any)=> Number(b.id) - Number(a.id));

  var card = (l:any)=>{
    return (
      <div key={l.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="relative cursor-pointer" onClick={()=>props.onView(l)}>
          <img src={l.img} alt={l.title} className="w-full h-32 sm:h-44 object-cover" />
          <span className="absolute top-2 left-2 bg-[#0A1931] text-[#C9A227] text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-full">{l.deal}</span>
          <span className="absolute top-2 right-2 bg-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full">{l.type}</span>
          {l.videoUrl && <span className="absolute bottom-2 left-2 bg-red-600 text-white text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-full">▶ Video</span>}
          <span className="absolute bottom-2 right-2 bg-[#C9A227] text-[#0A1931] text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-full">NEW</span>
        </div>
        <div className="p-2.5 sm:p-3">
          <div className="font-bold text-sm sm:text-base truncate">{l.title}</div>
          <div className="text-[11px] sm:text-xs text-gray-500 truncate">{l.loc} • {l.meta}</div>
          <div className="font-bold text-[#0A1931] text-sm sm:text-base mt-1">GH¢{Number(l.price).toLocaleString()} {l.deal==='For Rent' ? '/month' : ''}</div>
          <div className="flex gap-1.5 sm:gap-2 mt-2.5 sm:mt-3">
            <button onClick={()=>props.onView(l)} className="flex-1 bg-[#0A1931] text-white text-xs sm:text-sm font-bold py-2 rounded-full">View</button>
            <button onClick={()=>props.onNavigate('/booking/'+l.id)} className="flex-1 bg-[#C9A227] text-[#0A1931] text-xs sm:text-sm font-bold py-2 rounded-full">Book</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* HERO - FIXED BACKGROUND IMAGE */}
      <div className="relative px-4 py-10 sm:py-16 text-center overflow-hidden bg-[#0A1931]">
        {/* BACKGROUND IMAGE - same style as your listing photos, so it will load */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        {/* LIGHT OVERLAY - was 85-90% before, now 55% so photo shows */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* CONTENT */}
        <div className="relative">
          <div className="text-[#C9A227] font-serif font-bold text-2xl drop-shadow-lg">◆ ZIONVANTA PROPERTIES</div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2 text-white leading-tight drop-shadow-lg">Find Your Dream Home in<br className="hidden sm:block" /> Ghana</h1>
          <p className="text-white/85 text-sm sm:text-base mt-2 max-w-md mx-auto drop-shadow">Luxury houses, apartments & land in East Legon, Cantonments, Tema & more.</p>
          <div className="max-w-lg mx-auto mt-5 flex gap-2">
            <input
              value={props.search}
              onChange={(e:any)=>props.setSearch(e.target.value)}
              placeholder="🔍 Search East Legon, Tema..."
              className="flex-1 bg-white text-black rounded-full px-4 py-3 text-sm outline-none shadow-lg"
              onKeyDown={(e:any)=>{ if(e.key==='Enter') props.onNavigate('/listings'); }}
            />
            <button onClick={()=>props.onNavigate('/listings')} className="bg-[#C9A227] text-[#0A1931] font-bold px-5 py-3 rounded-full text-sm shadow-lg">Search</button>
          </div>
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            <button onClick={()=>props.onNavigate('/listings?deal=For Sale')} className="bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-white">Buy</button>
            <button onClick={()=>props.onNavigate('/listings?deal=For Rent')} className="bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-white">Rent</button>
            <button onClick={()=>props.onNavigate('/listings?type=Land')} className="bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-white">Land</button>
            <button onClick={()=>props.onNavigate('/listings')} className="bg-[#C9A227] text-[#0A1931] px-4 py-1.5 rounded-full text-xs font-bold">All Properties →</button>
          </div>
        </div>
      </div>

      {/* NEW LISTINGS ONLY - 2 COLUMNS */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>
              <h2 className="font-serif text-2xl font-bold">New Listings</h2>
            </div>
            <p className="text-gray-500 text-sm">Fresh properties just posted • Showing {newListings.length} properties</p>
          </div>
          <button onClick={()=>props.onNavigate('/listings')} className="text-sm font-bold text-[#C9A227] whitespace-nowrap">View All →</button>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-4">
          {newListings.map((l:any)=>card(l))}
        </div>

        {newListings.length===0 && <div className="bg-white rounded-2xl p-6 text-center text-gray-500 mt-4">No properties yet. Add one in Admin.</div>}
      </div>

      {/* WHY US / CTA */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-[#0A1931] text-white rounded-2xl p-5 md:flex items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold">Looking to Buy, Rent or Sell?</h3>
            <p className="text-white/60 text-sm mt-1">Book a viewing today. Rental Viewing GH¢200 • Sale Viewing GH¢300+</p>
          </div>
          <div className="flex gap-2 mt-3 md:mt-0">
            <button onClick={()=>props.onNavigate('/listings')} className="bg-[#C9A227] text-[#0A1931] font-bold px-5 py-2.5 rounded-full text-sm">Browse Properties</button>
            <button onClick={()=>props.onNavigate('/contact')} className="bg-white text-[#0A1931] font-bold px-5 py-2.5 rounded-full text-sm">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;