import React from 'react';

// ===== CHANGE THIS TO YOUR GOOGLE DRIVE DIRECT LINK =====
const LOGO = "https://drive.google.com/uc?export=view&id=PASTE_YOUR_FILE_ID_HERE";
// If you don't have Drive yet, use: const LOGO = "/logo.png";

const PHONE = "233500000000";

// ===== DATA - WITH CAROUSEL + VIDEO =====
const listings = [
  {
    id: '1',
    title: 'Modern Villa',
    loc: 'East Legon',
    meta: '4 Bed • 4 Bath • 4200 sqft',
    price: 2850000,
    deal: 'For Sale',
    type: 'House',
    bed: 4, bath: 4,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    img2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    img3: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    img4: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    desc: 'Luxury 4-bed villa with pool, fitted kitchen, 24/7 security and backup generator in East Legon.'
  },
  {
    id: '2',
    title: 'Family Apartment',
    loc: 'Spintex',
    meta: '3 Bed • 2 Bath • 1800 sqft',
    price: 4500,
    deal: 'For Rent',
    type: 'Apartment',
    bed: 3, bath: 2,
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    img2: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    img3: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    videoUrl: '',
    desc: 'Spacious 3-bed apartment in Spintex with balcony, parking and security.'
  },
  {
    id: '3',
    title: 'Full Plot Land',
    loc: 'Dodowa',
    meta: '70 x 100 ft • Titled',
    price: 120000,
    deal: 'For Sale',
    type: 'Land',
    bed: 0, bath: 0,
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    img2: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800',
    img3: '',
    videoUrl: '',
    desc: 'Titled full plot in Dodowa, good road, water and light available.'
  },
];

// ===== HEADER - NO ADMIN =====
function Header(props: any){
  return (
    <header className="bg-[#0A1931] text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={()=>props.onNavigate('/')} className="flex items-center gap-2">
          <img src={LOGO} alt="Zionvanta" className="h-10 w-auto bg-white rounded p-1" onError={(e:any)=>{e.currentTarget.style.display='none'}} />
          <span className="leading-none text-left">
            <span className="block font-bold tracking-wide">ZIONVANTA</span>
            <span className="block text-[10px] tracking-[0.3em] text-[#C9A227]">PROPERTIES</span>
          </span>
        </button>
        <nav className="hidden sm:flex gap-5 text-sm">
          <button onClick={()=>props.onNavigate('/')}>Home</button>
          <button onClick={()=>props.onNavigate('/listings')}>Buy</button>
          <button onClick={()=>props.onNavigate('/listings')}>Rent</button>
          <button onClick={()=>props.onNavigate('/listings')}>Land</button>
          <button onClick={()=>props.onNavigate('/contact')}>Contact</button>
        </nav>
        <button onClick={()=>props.onNavigate('/contact')} className="bg-[#C9A227] text-[#0A1931] font-bold text-sm px-4 py-2 rounded-full">Book Now</button>
      </div>
    </header>
  );
}

// ===== HOME =====
function Home(props: any){
  return (
    <div className="bg-[#F5F5F0] pb-10">
      <div className="relative h-[380px]">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200" className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <img src={LOGO} className="w-20 bg-white rounded-xl p-2 mb-3" alt="" />
          <h1 className="text-white text-3xl sm:text-4xl font-serif font-bold leading-tight">Find Your Dream Home<br/>in Ghana</h1>
          <p className="text-white/90 text-sm mt-2">Houses, Apartments & Land - Verified Listings</p>
          <button onClick={()=>props.onNavigate('/listings')} className="mt-4 bg-[#C9A227] text-[#0A1931] font-bold px-6 py-2.5 rounded-full text-sm">View Listings</button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-2xl font-bold mt-6 mb-3">Featured Listings</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map((l:any)=>(
            <div key={l.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img src={l.img} className="w-full h-56 object-cover" alt={l.title} />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold">{l.title}</h3>
                  <span className="bg-[#0A1931] text-[#C9A227] text-[11px] font-bold px-2 py-1 rounded-full">{l.deal}</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">📍 {l.loc} • {l.meta}</p>
                <p className="font-bold text-lg mt-2 text-[#0A1931]">GH¢{Number(l.price).toLocaleString()}{l.deal==='For Rent' && <span className="text-xs text-gray-500">/month</span>}</p>
                <button onClick={()=>props.onNavigate('/details/'+l.id)} className="w-full mt-3 bg-[#C9A227] text-[#0A1931] font-bold py-2.5 rounded-full text-sm">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== LISTINGS =====
function Listings(props: any){
  return (
    <div className="max-w-6xl mx-auto px-4 py-4 pb-10">
      <h1 className="font-serif text-2xl font-bold">All Listings</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {listings.map((l:any)=>(
          <div key={l.id} onClick={()=>props.onNavigate('/details/'+l.id)} className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer">
            <img src={l.img} className="w-full h-52 object-cover" alt="" />
            <div className="p-4">
              <h3 className="font-bold">{l.title}</h3>
              <p className="text-gray-500 text-xs">📍 {l.loc}</p>
              <p className="font-bold mt-1">GH¢{Number(l.price).toLocaleString()}</p>
              <div className="mt-2 bg-[#C9A227] text-center text-[#0A1931] font-bold py-2 rounded-full text-sm">View Details</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== DETAILS - CAROUSEL + VIDEO TOUR =====
function Details(props: any){
  var l = listings.find((x:any)=>x.id===props.id);
  const [activeImg, setActiveImg] = React.useState(0);
  const [showVideo, setShowVideo] = React.useState(false);
  const [touchX, setTouchX] = React.useState<number | null>(null);

  if(!l){
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h1 className="font-bold text-xl">Property not found</h1>
        <button onClick={()=>props.onNavigate('/listings')} className="bg-[#0A1931] text-white font-bold px-5 py-2.5 rounded-full text-sm mt-4">Back to Listings</button>
      </div>
    );
  }

  var getVideoEmbed = (url:string)=>{
    if(!url) return '';
    if(url.includes('youtube.com/watch')) return url.replace('watch?v=','embed/');
    if(url.includes('youtu.be/')) return url.replace('youtu.be/','www.youtube.com/embed/');
    return url;
  };

  var isYouTube = l.videoUrl && (l.videoUrl.includes('youtube') || l.videoUrl.includes('youtu.be'));
  var hasVideo = !!l.videoUrl;
  var images = [l.img];
  if(l.img2) images.push(l.img2);
  if(l.img3) images.push(l.img3);
  if(l.img4) images.push(l.img4);
  if(l.img5) images.push(l.img5);

  var nextImg = ()=>{ setShowVideo(false); setActiveImg((activeImg+1)%images.length); };
  var prevImg = ()=>{ setShowVideo(false); setActiveImg((activeImg-1+images.length)%images.length); };
  var onTouchStart = (e: React.TouchEvent)=>{ setTouchX(e.touches[0].clientX); };
  var onTouchEnd = (e: React.TouchEvent)=>{
    if(touchX===null) return;
    var diff = e.changedTouches[0].clientX - touchX;
    if(diff < -50) nextImg();
    if(diff > 50) prevImg();
    setTouchX(null);
  };

  var whatsapp = ()=>{
    var text = `Hello Zionvanta! I'm interested in ${l.title} in ${l.loc} - GH¢${Number(l.price).toLocaleString()} (${l.deal}). Please share more details.`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, '_blank');
  };
  var call = ()=>{ window.location.href = 'tel:+'+PHONE; };

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <button onClick={()=>props.onNavigate('/listings')} className="font-bold text-sm">← Back</button>
        <img src={LOGO} alt="Zionvanta" className="h-10 w-auto" />
        <button onClick={()=>props.onNavigate('/')} className="font-bold text-sm">Home</button>
      </div>

      {/* CAROUSEL */}
      <div className="relative mt-4 rounded-2xl overflow-hidden bg-black" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {showVideo && hasVideo ? (
          isYouTube ? (
            <iframe src={getVideoEmbed(l.videoUrl)} className="w-full h-72 sm:h-[420px]" allowFullScreen title="Property video" />
          ) : (
            <video src={l.videoUrl} controls autoPlay className="w-full h-72 sm:h-[420px] object-contain" />
          )
        ) : (
          <img src={images[activeImg]} alt={l.title} className="w-full h-72 sm:h-[420px] object-cover" />
        )}
        <span className="absolute top-3 left-3 bg-[#0A1931] text-[#C9A227] text-xs font-bold px-3 py-1 rounded-full">{l.deal}</span>
        <span className="absolute top-3 right-3 bg-white text-xs font-bold px-3 py-1 rounded-full">{l.type}</span>
        {!showVideo && images.length > 1 && (
          <>
            <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 w-10 h-10 rounded-full font-bold text-xl shadow flex items-center justify-center">‹</button>
            <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 w-10 h-10 rounded-full font-bold text-xl shadow flex items-center justify-center">›</button>
            <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2.5 py-1 rounded-full font-bold">{activeImg+1} / {images.length}</span>
          </>
        )}
        {hasVideo && (
          <button onClick={()=>setShowVideo(!showVideo)} className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full">
            {showVideo ? '🖼️ Show Photos' : '▶ Watch Video Tour'}
          </button>
        )}
      </div>

      {!showVideo && images.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_:string,i:number)=>(
            <button key={i} onClick={()=>{setActiveImg(i); setShowVideo(false);}} className={i===activeImg ? "w-6 h-2 rounded-full bg-[#C9A227]" : "w-2 h-2 rounded-full bg-gray-300"} />
          ))}
        </div>
      )}

      <div className="flex gap-2 mt-3 overflow-x-auto">
        {images.map((img:string,i:number)=>(
          <img key={i} src={img} onClick={()=>{setActiveImg(i); setShowVideo(false);}} alt="" className={i===activeImg && !showVideo ? "w-20 h-16 object-cover rounded-lg border-2 border-[#C9A227] cursor-pointer" : "w-20 h-16 object-cover rounded-lg opacity-60 cursor-pointer"} />
        ))}
        {hasVideo && (
          <button onClick={()=>setShowVideo(true)} className="w-20 h-16 rounded-lg bg-red-600 text-white text-xs font-bold shrink-0">▶ Video</button>
        )}
      </div>

      <div className="mt-4">
        <h1 className="font-serif text-3xl font-bold">{l.title}</h1>
        <p className="text-gray-500 text-sm mt-1">📍 {l.loc} • {l.meta}</p>
        <div className="flex items-center gap-3 mt-3">
          <div className="font-bold text-2xl text-[#0A1931]">GH¢{Number(l.price).toLocaleString()}</div>
          {l.deal==='For Rent' && <span className="text-sm text-gray-500">/month</span>}
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">● Available</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mt-4 text-center">
        <div className="bg-white rounded-xl p-3 shadow-sm"><div className="text-lg">🛏️</div><div className="font-bold text-sm">{l.bed||0}</div><div className="text-[11px] text-gray-500">Bedrooms</div></div>
        <div className="bg-white rounded-xl p-3 shadow-sm"><div className="text-lg">🛁</div><div className="font-bold text-sm">{l.bath||0}</div><div className="text-[11px] text-gray-500">Bathrooms</div></div>
        <div className="bg-white rounded-xl p-3 shadow-sm"><div className="text-lg">🏠</div><div className="font-bold text-sm">{l.type}</div><div className="text-[11px] text-gray-500">Type</div></div>
        <div className="bg-white rounded-xl p-3 shadow-sm"><div className="text-lg">📍</div><div className="font-bold text-sm truncate">{l.loc}</div><div className="text-[11px] text-gray-500">Location</div></div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm mt-4">
        <h2 className="font-bold text-lg">About This Property</h2>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">{l.desc}</p>
        <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
          <div>✅ 24/7 Security</div><div>✅ Water + Light</div>
          <div>✅ Parking</div><div>✅ Tiled + POP</div>
          <div>✅ Kitchen Cabinets</div><div>✅ Good Road</div>
        </div>
      </div>

      {hasVideo && (
        <div className="bg-white rounded-2xl p-5 shadow-sm mt-4">
          <h2 className="font-bold text-lg">🎥 Video Tour</h2>
          {isYouTube ? (
            <iframe src={getVideoEmbed(l.videoUrl)} className="w-full h-56 sm:h-80 rounded-xl mt-3" allowFullScreen title="Video tour" />
          ) : (
            <video src={l.videoUrl} controls className="w-full h-56 sm:h-80 rounded-xl mt-3 bg-black" />
          )}
        </div>
      )}

      {/* ONLY ONE BOTTOM BAR - NO DUPLICATE */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 z-20">
        <div className="max-w-6xl mx-auto flex gap-2">
          <button onClick={whatsapp} className="flex-1 bg-green-500 text-white font-bold py-3 rounded-full text-sm">💬 WhatsApp</button>
          <button onClick={call} className="px-5 bg-gray-100 font-bold py-3 rounded-full text-sm">📞 Call</button>
          <button onClick={()=>props.onNavigate('/booking/'+l.id)} className="flex-1 bg-[#C9A227] text-[#0A1931] font-bold py-3 rounded-full text-sm">Book Viewing →</button>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
}

// ===== CONTACT / BOOKING =====
function Contact(props: any){
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-center">
      <h1 className="font-serif text-2xl font-bold">Book Viewing / Contact</h1>
      <p className="text-gray-500 text-sm mt-2">Call or WhatsApp us to book a viewing. Viewing fee applies.</p>
      <a href={`https://wa.me/${PHONE}`} className="block mt-4 bg-green-500 text-white font-bold py-3 rounded-full">WhatsApp Us</a>
      <a href={`tel:+${PHONE}`} className="block mt-3 bg-[#0A1931] text-white font-bold py-3 rounded-full">Call Us</a>
      <button onClick={()=>props.onNavigate('/')} className="mt-4 text-sm font-bold">← Back Home</button>
    </div>
  );
}

// ===== MAIN APP =====
export default function App(){
  const [route, setRoute] = React.useState('/');
  const onNavigate = (r:string)=>{ setRoute(r); window.scrollTo(0,0); };

  var detailId = '';
  if(route.startsWith('/details/')) detailId = route.replace('/details/','');

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Header onNavigate={onNavigate} />
      {route==='/' && <Home onNavigate={onNavigate} />}
      {route==='/listings' && <Listings onNavigate={onNavigate} />}
      {route.startsWith('/details/') && <Details id={detailId} onNavigate={onNavigate} />}
      {route==='/contact' && <Contact onNavigate={onNavigate} />}
      {route.startsWith('/booking/') && <Contact onNavigate={onNavigate} />}
      <footer className="text-center text-xs text-gray-500 py-6 px-4">
        © 2026 Zionvanta Properties • Terms: Rental Viewing GH¢200 | Sale Viewing GH¢300+ | Rental Commission 10% | Sales Commission 5%<br/>All viewings strictly by appointment.
      </footer>
    </div>
  );
}