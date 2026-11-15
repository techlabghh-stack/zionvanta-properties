import React from 'react';

function Home(props: any){
  var listings = props.listings || [];

  // 8 cards for Featured
  var featured = listings.slice(0, 8);

  // Recent Posts = newest first (highest ID = newest, since new adds use Date.now())
  var recent = [...listings].sort((a:any,b:any)=> Number(b.id) - Number(a.id)).slice(0, 4);

  var card = (l:any, badge?:string)=>{
    return (
      <div key={l.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="relative cursor-pointer" onClick={()=>props.onView(l)}>
          <img src={l.img} alt={l.title} className="w-full h-44 object-cover" />
          <span className="absolute top-2 left-2 bg-[#0A1931] text-[#C9A227] text-[11px] font-bold px-2 py-1 rounded-full">{l.deal}</span>
          <span className="absolute top-2 right-2 bg-white text-xs font-bold px-2 py-1 rounded-full">{l.type}</span>
          {l.videoUrl && <span className="absolute bottom-2 left-2 bg-red-600 text-white text-[11px] font-bold px-2 py-1 rounded-full">▶ Video</span>}
          {badge && <span className="absolute bottom-2 right-2 bg-[#C9A227] text-[#0A1931] text-[11px] font-bold px-2 py-1 rounded-full">{badge}</span>}
        </div>
        <div className="p-3">
          <div className="font-bold truncate">{l.title}</div>
          <div className="text-xs text-gray-500">{l.loc} • {l.meta}</div>
          <div className="font-bold text-[#0A1931] mt-1">GH¢{Number(l.price).toLocaleString()} {l.deal==='For Rent' ? '/month' : ''}</div>
          <div className="flex gap-2 mt-3">
            <button onClick={()=>props.onView(l)} className="flex-1 bg-[#0A1931] text-white text-sm font-bold py-2 rounded-full">View</button>
            <button onClick={()=>props.onNavigate('/booking/'+l.id)} className="flex-1 bg-[#C9A227] text-[#0A1931] text-sm font-bold py-2 rounded-full">Book</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* HERO / SEARCH */}
      <div className="bg-[#0A1931] text-white px-4 py-8 text-center">
        <div className="text-[#C9A227] font-serif font-bold text-2xl">◆ ZIONVANTA PROPERTIES</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold mt-2">Find Your Dream Home in Ghana</h1>
        <p className="text-white/60 text-sm mt-2">Luxury houses, apartments & land in East Legon, Cantonments, Tema & more.</p>
        <div className="max-w-lg mx-auto mt-4 flex gap-2">
          <input
            value={props.search}
            onChange={(e:any)=>props.setSearch(e.target.value)}
            placeholder="🔍 Search East Legon, Tema..."
            className="flex-1 bg-white text-black rounded-full px-4 py-3 text-sm outline-none"
            onKeyDown={(e:any)=>{ if(e.key==='Enter') props.onNavigate('/listings'); }}
          />
          <button onClick={()=>props.onNavigate('/listings')} className="bg-[#C9A227] text-[#0A1931] font-bold px-5 py-3 rounded-full text-sm">Search</button>
        </div>
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          <button onClick={()=>props.onNavigate('/listings?deal=For Sale')} className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold">Buy</button>
          <button onClick={()=>props.onNavigate('/listings?deal=For Rent')} className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold">Rent</button>
          <button onClick={()=>props.onNavigate('/listings?type=Land')} className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold">Land</button>
          <button onClick={()=>props.onNavigate('/listings')} className="bg-[#C9A227] text-[#0A1931] px-4 py-1.5 rounded-full text-xs font-bold">All Properties →</button>
        </div>
      </div>

      {/* FEATURED - 8 CARDS */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold">Featured Properties</h2>
            <p className="text-gray-500 text-sm">Handpicked for you • Showing {featured.length} properties</p>
          </div>
          <button onClick={()=>props.onNavigate('/listings')} className="text-sm font-bold text-[#C9A227] whitespace-nowrap">View All →</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          {featured.map((l:any)=>card(l))}
        </div>

        {featured.length===0 && <div className="bg-white rounded-2xl p-6 text-center text-gray-500 mt-4">No properties yet. Add one in Admin.</div>}
      </div>

      {/* RECENT POSTS / RECENTLY ADDED */}
      <div className="bg-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#C9A227]">● RECENT POSTS</div>
              <h2 className="font-serif text-2xl font-bold mt-1">Recently Added</h2>
              <p className="text-gray-500 text-sm">Fresh listings just posted by Admin</p>
            </div>
            <button onClick={()=>props.onNavigate('/listings')} className="text-sm font-bold bg-[#0A1931] text-white px-4 py-2 rounded-full whitespace-nowrap">All Listings →</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {recent.map((l:any)=>card(l, 'NEW'))}
          </div>

          {recent.length===0 && <div className="text-center text-gray-500 py-6">No recent posts yet.</div>}
        </div>
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