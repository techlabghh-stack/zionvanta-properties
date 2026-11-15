import ListingCard from '../components/ListingCard';

function Home(props: any){
  var listings = props.listings || [];

  // 8 cards, 2 columns
  var featured = listings.slice(0, 8);

  return (
    <div>
      {/* HERO WITH YOUR LOGO */}
      <div className="bg-white px-4 py-6 text-center">
        <img src="/logo.png" alt="Zionvanta Properties" className="w-56 sm:w-64 mx-auto" />
        <h1 className="font-serif text-3xl md:text-4xl font-bold mt-2 text-[#0A1931]">
          Find Your Dream Home in Ghana
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Luxury houses, apartments & land in East Legon, Cantonments, Tema & more.
        </p>

        <div className="max-w-lg mx-auto mt-4 flex gap-2">
          <input
            value={props.search}
            onChange={(e:any)=>props.setSearch(e.target.value)}
            placeholder="🔍 Search East Legon, Tema..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-sm outline-none border"
            onKeyDown={(e:any)=>{ if(e.key==='Enter') props.onNavigate('/listings'); }}
          />
          <button onClick={()=>props.onNavigate('/listings')} className="bg-[#C9A227] text-[#0A1931] font-bold px-5 py-3 rounded-full text-sm">
            Search
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          <button onClick={()=>props.onNavigate('/listings?deal=For Sale')} className="bg-[#0A1931] text-white px-4 py-1.5 rounded-full text-xs font-bold">Buy</button>
          <button onClick={()=>props.onNavigate('/listings?deal=For Rent')} className="bg-[#0A1931] text-white px-4 py-1.5 rounded-full text-xs font-bold">Rent</button>
          <button onClick={()=>props.onNavigate('/listings?type=Land')} className="bg-[#0A1931] text-white px-4 py-1.5 rounded-full text-xs font-bold">Land</button>
          <button onClick={()=>props.onNavigate('/listings')} className="bg-[#C9A227] text-[#0A1931] px-4 py-1.5 rounded-full text-xs font-bold">All Properties →</button>
        </div>
      </div>

      {/* FEATURED - 8 CARDS, 2 COLUMNS */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold">Featured Properties</h2>
            <p className="text-gray-500 text-sm">Handpicked for you • Showing {featured.length} properties</p>
          </div>
          <button onClick={()=>props.onNavigate('/listings')} className="text-sm font-bold text-[#C9A227] whitespace-nowrap">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {featured.map((l:any)=>(
            <ListingCard key={l.id} listing={l} onView={props.onView} onNavigate={props.onNavigate} />
          ))}
        </div>

        {featured.length===0 && (
          <div className="bg-white rounded-2xl p-6 text-center text-gray-500 mt-4">
            No properties yet. Add one in Admin.
          </div>
        )}

        {featured.length > 0 && (
          <button onClick={()=>props.onNavigate('/listings')} className="w-full mt-5 bg-[#0A1931] text-white font-bold py-3 rounded-full text-sm">
            View All Properties →
          </button>
        )}
      </div>

      {/* WHY US / CTA */}
      <div className="max-w-6xl mx-auto px-4 pb-6">
        <div className="bg-[#0A1931] text-white rounded-2xl p-5 md:flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="w-16 h-16 object-contain bg-white rounded-full p-1 hidden sm:block" />
            <div>
              <h3 className="font-serif text-xl font-bold">Looking to Buy, Rent or Sell?</h3>
              <p className="text-white/60 text-sm mt-1">Book a viewing today. Rental Viewing GH¢200 • Sale Viewing GH¢300+</p>
            </div>
          </div>
          <div className="flex gap-2 mt-3 md:mt-0">
            <button onClick={()=>props.onNavigate('/listings')} className="bg-[#C9A227] text-[#0A1931] font-bold px-5 py-2.5 rounded-full text-sm">
              Browse Properties
            </button>
            <button onClick={()=>props.onNavigate('/contact')} className="bg-white text-[#0A1931] font-bold px-5 py-2.5 rounded-full text-sm">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;