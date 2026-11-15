import React from 'react';

function Listing(props: any){
  var all = props.listings || [];
  var locations = props.locations || [];

  const [search, setSearch] = React.useState('');
  const [deal, setDeal] = React.useState('All');
  const [type, setType] = React.useState('All');
  const [loc, setLoc] = React.useState('All');
  const [page, setPage] = React.useState(1);

  var PER_PAGE = 12;

  React.useEffect(()=>{
    var q = new URLSearchParams(window.location.search);
    var d = q.get('deal');
    var t = q.get('type');
    if(d) setDeal(d);
    if(t) setType(t);
    setPage(1);
  }, [window.location.search]);

  React.useEffect(()=>{ setPage(1); }, [search, deal, type, loc]);

  var filtered = all.filter((l:any)=>{
    var okSearch = !search || l.title.toLowerCase().includes(search.toLowerCase()) || l.loc.toLowerCase().includes(search.toLowerCase());
    var okDeal = deal === 'All' || l.deal === deal;
    var okType = type === 'All' || l.type === type;
    var okLoc = loc === 'All' || l.loc === loc;
    return okSearch && okDeal && okType && okLoc;
  });

  var totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  var safePage = Math.min(page, totalPages);
  var start = (safePage - 1) * PER_PAGE;
  var paged = filtered.slice(start, start + PER_PAGE);

  var goPage = (p:number)=>{
    if(p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo(0,0);
  };

  var pages:number[] = [];
  for(var i=1; i<=totalPages; i++) pages.push(i);

  var pill = (active:boolean)=> active ? "bg-[#C9A227] text-[#0A1931] px-3 py-1.5 rounded-full text-xs font-bold" : "bg-white px-3 py-1.5 rounded-full text-xs font-bold border";

  var pageBtn = (p:number)=>{
    var active = p === safePage;
    return (
      <button key={p} onClick={()=>goPage(p)} className={active ? "w-9 h-9 rounded-full bg-[#0A1931] text-white font-bold text-sm" : "w-9 h-9 rounded-full bg-white font-bold text-sm border"}>
        {p}
      </button>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <h1 className="font-serif text-3xl font-bold">All Properties</h1>
      <p className="text-gray-500 text-sm mt-1">Showing {paged.length} of {filtered.length} properties • Page {safePage} of {totalPages}</p>

      <input
        value={search}
        onChange={(e:any)=>setSearch(e.target.value)}
        placeholder="🔍 Search by name or location..."
        className="w-full bg-white border rounded-full px-4 py-3 text-sm outline-none mt-4"
      />

      <div className="flex gap-2 flex-wrap mt-3">
        <select value={deal} onChange={(e:any)=>setDeal(e.target.value)} className="bg-white border rounded-full px-3 py-2 text-sm outline-none">
          <option value="All">All Deals</option>
          <option>For Sale</option>
          <option>For Rent</option>
        </select>
        <select value={type} onChange={(e:any)=>setType(e.target.value)} className="bg-white border rounded-full px-3 py-2 text-sm outline-none">
          <option value="All">All Types</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Land</option>
        </select>
        <select value={loc} onChange={(e:any)=>setLoc(e.target.value)} className="bg-white border rounded-full px-3 py-2 text-sm outline-none">
          <option value="All">All Locations</option>
          {locations.map((l:string)=><option key={l} value={l}>{l}</option>)}
        </select>
        <button onClick={()=>{setSearch(''); setDeal('All'); setType('All'); setLoc('All');}} className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold">Clear</button>
      </div>

      <div className="flex gap-2 mt-3 flex-wrap">
        <button onClick={()=>setDeal('All')} className={pill(deal==='All')}>All</button>
        <button onClick={()=>setDeal('For Sale')} className={pill(deal==='For Sale')}>Buy</button>
        <button onClick={()=>setDeal('For Rent')} className={pill(deal==='For Rent')}>Rent</button>
        <button onClick={()=>{setType('Land'); setDeal('All');}} className={pill(type==='Land')}>Land</button>
      </div>

      {/* GRID - 2 COLUMNS */}
      <div className="grid grid-cols-2 gap-3 mt-5">
        {paged.map((l:any)=>(
          <div key={l.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative cursor-pointer" onClick={()=>props.onView(l)}>
              <img src={l.img} alt={l.title} className="w-full h-36 sm:h-44 object-cover" />
              <span className="absolute top-2 left-2 bg-[#0A1931] text-[#C9A227] text-[11px] font-bold px-2 py-1 rounded-full">{l.deal}</span>
              <span className="absolute top-2 right-2 bg-white text-xs font-bold px-2 py-1 rounded-full">{l.type}</span>
              {l.videoUrl && <span className="absolute bottom-2 left-2 bg-red-600 text-white text-[11px] font-bold px-2 py-1 rounded-full">▶ Video</span>}
            </div>
            <div className="p-3">
              <div className="font-bold truncate text-sm sm:text-base">{l.title}</div>
              <div className="text-xs text-gray-500 truncate">{l.loc} • {l.meta}</div>
              <div className="font-bold text-[#0A1931] mt-1 text-sm sm:text-base">GH¢{Number(l.price).toLocaleString()} {l.deal==='For Rent' ? '/month' : ''}</div>
              <div className="flex gap-2 mt-3">
                <button onClick={()=>props.onView(l)} className="flex-1 bg-[#0A1931] text-white text-xs sm:text-sm font-bold py-2 rounded-full">View</button>
                <button onClick={()=>props.onNavigate('/booking/'+l.id)} className="flex-1 bg-[#C9A227] text-[#0A1931] text-xs sm:text-sm font-bold py-2 rounded-full">Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length===0 && <div className="bg-white rounded-2xl p-8 text-center text-gray-500 mt-5">No properties found. Try clearing filters.</div>}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
          <button
            onClick={()=>goPage(safePage-1)}
            disabled={safePage===1}
            className={safePage===1 ? "px-4 py-2 rounded-full bg-gray-100 text-gray-400 font-bold text-sm" : "px-4 py-2 rounded-full bg-white border font-bold text-sm"}
          >‹ Prev</button>

          {pages.map((p)=>pageBtn(p))}

          <button
            onClick={()=>goPage(safePage+1)}
            disabled={safePage===totalPages}
            className={safePage===totalPages ? "px-4 py-2 rounded-full bg-gray-100 text-gray-400 font-bold text-sm" : "px-4 py-2 rounded-full bg-[#C9A227] text-[#0A1931] font-bold text-sm"}
          >Next ›</button>
        </div>
      )}

      {totalPages > 1 && (
        <p className="text-center text-xs text-gray-400 mt-3">Page {safePage} of {totalPages} • {filtered.length} total properties</p>
      )}
    </div>
  );
}

export default Listing;