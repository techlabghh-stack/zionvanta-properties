import React from 'react';

function Details(props) {
  var l = props.listing;
  var similar = props.listings.filter(x => x.id !== l.id).slice(0, 3);
  
  // CAROUSEL - images + video
  var gallery = [
    { type: 'image', src: l.img },
    { type: 'video', src: "https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4", poster: l.img },
    { type: 'image', src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" },
    { type: 'image', src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800" },
    { type: 'image', src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" }
  ];
  
  const [index, setIndex] = React.useState(0);
  
  React.useEffect(() => { setIndex(0); }, [l.id]);
  
  const prev = () => setIndex((index - 1 + gallery.length) % gallery.length);
  const next = () => setIndex((index + 1) % gallery.length);
  
  var current = gallery[index];
  
  return (
    <div className="bg-[#FBF6EC] pb-0">
      {/* BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-4 pt-4 text-sm">
        <button className="text-gray-600 hover:text-[#C9A227]" onClick={()=>props.onNavigate('/')}>Home</button>
        <span className="text-gray-400"> / </span>
        <button className="text-gray-600 hover:text-[#C9A227]" onClick={()=>props.onNavigate('/listings')}>Listings</button>
        <span className="text-gray-400"> / </span>
        <span className="font-semibold text-[#0A1931]">{l.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 max-w-6xl mx-auto p-4">
        {/* LEFT */}
        <div className="flex-1">
          {/* CAROUSEL */}
          <div className="relative overflow-hidden rounded-xl bg-black">
            {current.type==='video' ? (
              <video key={current.src} src={current.src} poster={current.poster} controls autoPlay muted loop playsInline className="w-full h-[280px] md:h-[340px] object-cover" />
            ) : (
              <img src={current.src} className="w-full h-[280px] md:h-[340px] object-cover" alt={l.title} key={index} />
            )}
            <span className="absolute top-3 left-3 bg-[#C9A227] text-[#0A1931] text-xs font-bold px-3 py-1.5 rounded-full">GH¢{l.price.toLocaleString()}{l.deal==='For Rent'?'/month':''} • {l.deal.toUpperCase()}</span>
            {current.type==='video' && <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">▶ VIDEO TOUR</span>}

            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full font-bold z-10">‹</button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full font-bold z-10">›</button>
            <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full z-10">{index+1} / {gallery.length}</span>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-1.5 mt-2">
            {gallery.map((_,i)=>(
              <button key={i} onClick={()=>setIndex(i)} className={i===index ? 'w-6 h-2 rounded-full bg-[#0A1931]' : 'w-2 h-2 rounded-full bg-gray-300'}></button>
            ))}
          </div>

          {/* THUMBNAILS */}
          <div className="grid grid-cols-5 gap-2 mt-2">
            {gallery.map((g,i)=>(
              <div key={i} onClick={()=>setIndex(i)} className={i===index ? 'relative h-14 rounded-lg overflow-hidden border-2 border-[#0A1931] cursor-pointer' : 'relative h-14 rounded-lg overflow-hidden border border-gray-200 opacity-70 cursor-pointer'}>
                {g.type==='video' ? (
                  <div className="w-full h-full relative">
                    <img src={g.poster} className="w-full h-full object-cover" alt="video" />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-lg">▶</span>
                  </div>
                ) : (
                  <img src={g.src} className="w-full h-full object-cover" alt="thumb" />
                )}
              </div>
            ))}
          </div>

          {/* VIDEO TOUR BUTTON */}
          <button onClick={()=>setIndex(1)} className="w-full mt-3 bg-[#0A1931] text-white font-bold py-2.5 rounded-lg text-sm">▶ Watch Video Tour</button>

          {/* DESCRIPTION */}
          <h3 className="font-serif text-xl text-center mt-5 font-bold text-[#0A1931]">Description</h3>
          <p className="text-[13px] leading-relaxed text-gray-700 mt-2">{l.desc} This stunning modern villa in {l.loc} offers luxury living with spacious interiors, natural light, and premium finishes throughout. Featuring an open-plan living and dining area flowing to the private pool and landscaped garden, the property is perfect for families seeking comfort, security, and style in one of Accra's most sought-after neighborhoods. The home is fully serviced with modern amenities, secure perimeter, and ample parking.</p>

          {/* KEY FEATURES */}
          <h3 className="font-serif text-xl text-center mt-5 font-bold text-[#0A1931]">Key Features</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-2 text-xs font-semibold">
            {['Private Pool','Fitted Kitchen','Backup Generator','Landscaped Garden','Ample Parking'].map(f=>(
              <span key={f} className="flex items-center gap-1">✅ {f}</span>
            ))}
          </div>

          {/* AMENITIES */}
          <h3 className="font-serif text-xl text-center mt-5 font-bold text-[#0A1931]">Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
            {[
              ['Air Conditioning','❄️'],
              ['Modern Smart Lights','💡'],
              ['Water Storage Tank','💧'],
              ['Security CCTV','📹']
            ].map(a=>(
              <div key={a[0]} className="bg-white border border-gray-100 rounded-lg p-3 text-center">
                <div className="text-xl">{a[1]}</div>
                <div className="text-[11px] font-semibold mt-1 text-[#0A1931]">{a[0]}</div>
              </div>
            ))}
          </div>

          {/* LOCATION */}
          <h3 className="font-serif text-xl text-center mt-5 font-bold text-[#0A1931]">Location</h3>
          <div className="flex gap-3 items-center mt-2 bg-white rounded-lg p-2 border border-gray-100">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400" className="w-28 h-16 object-cover rounded" alt="Map" />
            <p className="text-xs font-semibold">{l.loc}, Accra, Ghana • 5min to A&C Mall, 10min to Airport</p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:w-[330px] h-fit bg-white rounded-xl shadow border border-gray-100 p-4">
          <h2 className="font-bold text-xl text-[#0A1931]">{l.title} – {l.loc}</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-black text-[#C9A227] text-2xl">GH¢{l.price.toLocaleString()}{l.deal==='For Rent'?'/month':''}</span>
            <span className="bg-[#C9A227] text-[#0A1931] text-[10px] font-bold px-2 py-1 rounded">{l.deal.toUpperCase()}</span>
          </div>
          <div className="flex gap-4 mt-3 text-sm font-semibold text-[#0A1931]">
            <span>🛏️ {l.bed || '—'} Bed</span>
            <span>🛁 {l.bath || '—'} Bath</span>
            <span>📐 {l.type==='Land' ? '0.5 Acre' : '4200 sqft'}</span>
          </div>
          <h3 className="font-bold mt-4 text-[#0A1931]">Features</h3>
          <div className="mt-1 text-sm space-y-1">
            <p>✅ Freehold • Registered Title</p>
            <p>✅ Furnished • Modern Finishes</p>
            <p>✅ Available: Immediate</p>
          </div>
          <div className="border-t mt-4 pt-3">
            <h3 className="font-bold text-[#0A1931]">Agent</h3>
            <div className="flex items-center gap-2 mt-2">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" className="w-10 h-10 rounded-full object-cover" alt="Ama Mensah" />
              <div>
                <p className="font-bold text-sm">Ama Mensah</p>
                <p className="text-xs text-gray-500">Licensed Agent • Zionvanta Properties</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-[#C9A227] text-[#0A1931] font-bold py-2.5 rounded-lg mt-3" onClick={()=>props.onBook(l)}>📅 Book Viewing</button>
          <button className="w-full bg-white border border-[#C9A227] text-[#0A1931] font-bold py-2.5 rounded-lg mt-2" onClick={()=>{window.location.href='tel:+233500000000'}}>📞 Call</button>
          <button className="w-full bg-[#0A1931] text-white font-bold py-2.5 rounded-lg mt-2" onClick={()=>{window.open('https://wa.me/233500000000','_blank')}}>💬 WhatsApp</button>
          <p className="text-[11px] text-center mt-3 text-gray-600">Usually responds within 1 hour • Available Mon-Sat 9am–6pm</p>
          <p className="text-[11px] text-center mt-1 font-semibold">Rental fee 10% applies for rentals. Viewing fee GH¢{l.deal==='For Rent' ? '200' : '300+'} applies, non-refundable.</p>
        </div>
      </div>

      {/* SIMILAR LISTINGS */}
      <div className="bg-[#0A1931] px-4 py-6 mt-2 border-t-4 border-[#C9A227]">
        <h2 className="font-serif text-2xl text-[#C9A227] text-center">Similar Listings</h2>
        <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto mt-4">
          {similar.map(s=>(
            <div key={s.id} className="bg-[#FFFBF0] rounded-xl overflow-hidden cursor-pointer" onClick={()=>props.onSelect(s)}>
              <img src={s.img} className="w-full h-32 object-cover" alt={s.title} />
              <div className="p-3 text-center">
                <div className="font-bold text-[#0A1931]">GH¢{s.price.toLocaleString()}{s.deal==='For Rent'?'/month':''}</div>
                <p className="text-xs font-semibold mt-1">{s.title}</p>
                <p className="text-[11px] text-gray-500">{s.meta} • {s.loc}</p>
                <button className="w-full bg-[#C9A227] text-[#0A1931] font-bold text-xs py-2 rounded mt-2">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;