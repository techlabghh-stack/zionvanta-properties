import React from 'react';

function ListingCard(props: any){
  var l = props.listing;
  if(!l) return null;

  var view = ()=>{
    if(props.onView) props.onView(l);
    else if(props.onNavigate) props.onNavigate('/details/' + l.id);
  };

  var book = (e:any)=>{
    e.stopPropagation();
    if(props.onNavigate) props.onNavigate('/booking/' + l.id);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
      {/* IMAGE */}
      <div className="relative cursor-pointer" onClick={view}>
        <img src={l.img} alt={l.title} className="w-full h-44 object-cover" />

        {/* BADGES */}
        <span className="absolute top-2 left-2 bg-[#0A1931] text-[#C9A227] text-[11px] font-bold px-2 py-1 rounded-full">
          {l.deal}
        </span>
        <span className="absolute top-2 right-2 bg-white text-xs font-bold px-2 py-1 rounded-full">
          {l.type}
        </span>

        {l.videoUrl && (
          <span className="absolute bottom-2 left-2 bg-red-600 text-white text-[11px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
            ▶ Video
          </span>
        )}

        {props.badge && (
          <span className="absolute bottom-2 right-2 bg-[#C9A227] text-[#0A1931] text-[11px] font-bold px-2 py-1 rounded-full">
            {props.badge}
          </span>
        )}
      </div>

      {/* INFO */}
      <div className="p-3 flex flex-col flex-1">
        <div className="font-bold truncate text-sm sm:text-base">{l.title}</div>
        <div className="text-xs text-gray-500 truncate mt-0.5">📍 {l.loc} • {l.meta}</div>

        <div className="font-bold text-[#0A1931] mt-2 text-sm sm:text-base">
          GH¢{Number(l.price).toLocaleString()}
          {l.deal === 'For Rent' && <span className="text-xs font-normal text-gray-500"> /month</span>}
        </div>

        <div className="text-[11px] text-gray-400 mt-1">
          🛏️ {l.bed || 0} Bed • 🛁 {l.bath || 0} Bath
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2 mt-3 mt-auto pt-2">
          <button onClick={view} className="flex-1 bg-[#0A1931] text-white text-xs sm:text-sm font-bold py-2.5 rounded-full">
            View
          </button>
          <button onClick={book} className="flex-1 bg-[#C9A227] text-[#0A1931] text-xs sm:text-sm font-bold py-2.5 rounded-full">
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;