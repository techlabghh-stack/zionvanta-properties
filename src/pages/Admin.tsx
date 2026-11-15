import React from 'react';

var emptyForm = {id:0,title:"",price:"",deal:"For Sale",type:"House",loc:"East Legon",bed:"",bath:"",meta:"",img:"",videoUrl:"",video:"",desc:""};

function Admin(props: any){
  const [tab, setTab] = React.useState('dashboard');
  const [search, setSearch] = React.useState('');
  const [newLoc, setNewLoc] = React.useState('');
  const [showForm, setShowForm] = React.useState(false);
  const [form, setForm] = React.useState<any>(emptyForm);
  const [isEditing, setIsEditing] = React.useState(false);
  const [uploading, setUploading] = React.useState('');

  var listings = props.listings || [];
  var locations = props.locations || [];

  var total = listings.length;
  var forSale = listings.filter((l:any)=>l.deal === 'For Sale').length;
  var forRent = listings.filter((l:any)=>l.deal === 'For Rent').length;
  var totalValue = listings.reduce((s:any,l:any)=> s + Number(l.price||0), 0);

  var filtered = listings.filter((l:any)=>
    l.title.toLowerCase().includes(search.toLowerCase()) ||
    l.loc.toLowerCase().includes(search.toLowerCase())
  );

  var logout = ()=>{
    localStorage.removeItem('zionvanta_admin');
    props.onNavigate('/admin-login');
  };

  var set = (k:string,v:any)=> setForm((f:any)=>({...f,[k]:v}));

  // 📸 IMAGE UPLOAD -> converts to data URL, saved with property
  var handleImageUpload = (e:any)=>{
    var file = e.target.files && e.target.files[0];
    if(!file) return;
    if(file.size > 2*1024*1024){ alert('Image too big. Please use under 2MB or use Image URL instead.'); return; }
    setUploading('image');
    var reader = new FileReader();
    reader.onload = ()=>{ set('img', reader.result); setUploading(''); };
    reader.readAsDataURL(file);
  };

  // 🎥 VIDEO UPLOAD -> converts to data URL
  var handleVideoUpload = (e:any)=>{
    var file = e.target.files && e.target.files[0];
    if(!file) return;
    if(file.size > 15*1024*1024){ alert('Video too big (max 15MB). Use Video URL / YouTube link instead for big videos.'); return; }
    setUploading('video');
    var reader = new FileReader();
    reader.onload = ()=>{ set('video',''); set('videoUrl', reader.result); setUploading(''); };
    reader.readAsDataURL(file);
  };

  // Get YouTube embed URL
  var getVideoEmbed = (url:string)=>{
    if(!url) return '';
    if(url.includes('youtube.com/watch')) return url.replace('watch?v=','embed/');
    if(url.includes('youtu.be/')) return url.replace('youtu.be/','www.youtube.com/embed/');
    return url;
  };

  var openAdd = ()=>{
    setForm({...emptyForm, loc: locations[0] || 'East Legon'});
    setIsEditing(false);
    setShowForm(true);
    setTab('properties');
  };

  var openEdit = (l:any)=>{
    setForm({id:l.id,title:l.title,price:String(l.price),deal:l.deal,type:l.type,loc:l.loc,bed:String(l.bed||''),bath:String(l.bath||''),meta:l.meta||'',img:l.img||'',videoUrl:l.videoUrl||l.video||'',video:l.video||'',desc:l.desc||''});
    setIsEditing(true);
    setShowForm(true);
  };

  var save = ()=>{
    if(!form.title || !form.price || !form.loc){ alert('Please fill Title, Price and Location'); return; }
    var data = {
      ...form,
      price: Number(form.price),
      bed: Number(form.bed||0),
      bath: Number(form.bath||0),
      meta: form.meta || `${form.bed||0} Bed • ${form.bath||0} Bath`,
      img: form.img || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      videoUrl: form.videoUrl || '',
      video: form.video || '',
    };
    if(isEditing){ props.onUpdateListing(data); } else { props.onAddListing(data); }
    setShowForm(false);
    setForm(emptyForm);
    alert(isEditing ? 'Property updated!' : 'Property added!');
  };

  var tabBtn = (id:string, label:string)=>{
    var active = tab === id;
    return <button onClick={()=>setTab(id)} className={active ? "bg-[#C9A227] text-[#0A1931] px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-[#C9A227]/30" : "bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 rounded-full text-sm font-bold"}>{label}</button>;
  };

  var inputCls = "w-full bg-white/10 border border-white/20 backdrop-blur rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#C9A227]";
  var labelCls = "block text-xs font-bold text-[#C9A227] tracking-wide mb-1";
  var uploadBox = "w-full border-2 border-dashed border-white/25 rounded-xl px-3 py-3 text-center text-sm bg-white/5 text-white/80";
  var glassCard = "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]";

  return (
    <div className="min-h-screen relative bg-[#0A1931] text-white overflow-hidden">
      {/* GLASS BACKGROUND - BLOBS */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#C9A227]/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] bg-[#C9A227]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* HEADER - GLASS */}
      <div className="relative bg-white/10 backdrop-blur-xl border-b border-white/20 px-4 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-xl p-1.5 shadow">
            <img src="/logo.jpg" alt="Zionvanta" className="h-[36px] w-auto object-contain" />
          </div>
          <div>
            <div className="text-white font-serif font-bold text-lg leading-none">ZIONVANTA</div>
            <div className="text-[9px] tracking-[0.3em] text-[#C9A227] font-bold mt-1">ADMIN DASHBOARD</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-xs bg-green-500/20 border border-green-400/30 text-green-300 px-3 py-1 rounded-full">● Admin Online</span>
          <button onClick={()=>props.onNavigate('/')} className="text-sm text-white/70 hover:text-white">View Site →</button>
          <button onClick={logout} className="bg-[#C9A227] text-[#0A1931] px-3 py-1.5 rounded-full text-sm font-bold">↩ Logout</button>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto p-4">
        <div className="flex gap-2 flex-wrap mb-4">
          {tabBtn('dashboard','📊 Dashboard')}
          {tabBtn('properties','🏠 Properties')}
          {tabBtn('locations','📍 Locations')}
          {tabBtn('settings','⚙️ Settings')}
        </div>

        {/* ===== ADD / EDIT FORM ===== */}
        {showForm && (
          <div className={`${glassCard} p-5 mb-4`}>
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">{isEditing ? '✏️ Edit Property' : '➕ Add New Property'}</h2>
              <button onClick={()=>setShowForm(false)} className="text-white/60 font-bold hover:text-white">✕ Close</button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <div><label className={labelCls}>Title *</label><input className={inputCls} value={form.title} onChange={(e:any)=>set('title',e.target.value)} placeholder="Modern Villa" /></div>
              <div><label className={labelCls}>Price (GH¢) *</label><input className={inputCls} type="number" value={form.price} onChange={(e:any)=>set('price',e.target.value)} placeholder="2850000" /></div>
              <div>
                <label className={labelCls}>Deal</label>
                <select className={inputCls + " [&>option]:text-black"} value={form.deal} onChange={(e:any)=>set('deal',e.target.value)}><option>For Sale</option><option>For Rent</option></select>
              </div>
              <div>
                <label className={labelCls}>Type</label>
                <select className={inputCls + " [&>option]:text-black"} value={form.type} onChange={(e:any)=>set('type',e.target.value)}><option>House</option><option>Apartment</option><option>Land</option></select>
              </div>
              <div>
                <label className={labelCls}>Location *</label>
                <select className={inputCls + " [&>option]:text-black"} value={form.loc} onChange={(e:any)=>set('loc',e.target.value)}>
                  {locations.map((l:string)=><option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div><label className={labelCls}>Bedrooms</label><input className={inputCls} type="number" value={form.bed} onChange={(e:any)=>set('bed',e.target.value)} placeholder="4" /></div>
              <div><label className={labelCls}>Bathrooms</label><input className={inputCls} type="number" value={form.bath} onChange={(e:any)=>set('bath',e.target.value)} placeholder="4" /></div>
              <div className="sm:col-span-2"><label className={labelCls}>Description</label><textarea className={inputCls} rows={3} value={form.desc} onChange={(e:any)=>set('desc',e.target.value)} placeholder="Luxury villa with pool..." /></div>

              {/* ===== MEDIA SECTION ===== */}
              <div className="sm:col-span-2 mt-2">
                <div className="bg-[#C9A227] text-[#0A1931] font-bold px-4 py-2 rounded-t-xl text-sm">📸 Photos & 🎥 Video</div>
                <div className="bg-black/20 border border-white/20 border-t-0 rounded-b-xl p-3 space-y-4">
                  
                  {/* IMAGE URL */}
                  <div>
                    <label className={labelCls}>🖼️ Image URL (Unsplash / website link)</label>
                    <input className={inputCls} value={form.img && form.img.startsWith('data:') ? '' : form.img} onChange={(e:any)=>set('img',e.target.value)} placeholder="https://images.unsplash.com/..." />
                    <p className="text-[11px] text-white/50 mt-1">Paste a link OR upload below. Upload wins if both are set.</p>
                  </div>

                  {/* IMAGE UPLOAD */}
                  <div>
                    <label className={labelCls}>📤 Upload Image from Phone / Gallery (max 2MB)</label>
                    <label className={uploadBox + " block cursor-pointer"}>
                      {uploading==='image' ? 'Uploading...' : form.img && form.img.startsWith('data:') ? '✅ Image Uploaded - Tap to Change' : '📸 Tap to Choose Image'}
                      <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </label>
                    {form.img && <img src={form.img} alt="" className="w-full h-40 object-cover rounded-xl mt-2" />}
                    {form.img && <button onClick={()=>set('img','')} className="text-xs text-red-400 font-bold mt-1">Remove Image</button>}
                  </div>

                  <div className="border-t border-white/15 pt-4">
                    {/* VIDEO URL */}
                    <label className={labelCls}>🎥 Video URL (YouTube link or MP4 link)</label>
                    <input className={inputCls} value={form.videoUrl && form.videoUrl.startsWith('data:') ? '' : form.videoUrl} onChange={(e:any)=>set('videoUrl',e.target.value)} placeholder="https://youtube.com/watch?v=... or https://.../tour.mp4" />
                    <p className="text-[11px] text-white/50 mt-1">Best for big videos: paste YouTube link. It will show on Details page.</p>

                    {/* VIDEO UPLOAD */}
                    <label className={labelCls + " mt-3"}>📤 Upload Video from Phone (max 15MB)</label>
                    <label className={uploadBox + " block cursor-pointer"}>
                      {uploading==='video' ? 'Uploading video...' : form.videoUrl && form.videoUrl.startsWith('data:') ? '✅ Video Uploaded - Tap to Change' : '🎥 Tap to Choose Video'}
                      <input type="file" accept="video/*" className="hidden" onChange={handleVideoUpload} />
                    </label>
                    {form.videoUrl && <button onClick={()=>set('videoUrl','')} className="text-xs text-red-400 font-bold mt-1">Remove Video</button>}
                  </div>

                  {/* VIDEO PREVIEW */}
                  {form.videoUrl && (
                    <div>
                      <label className={labelCls}>Preview</label>
                      {form.videoUrl.includes('youtube') || form.videoUrl.includes('youtu.be') ? (
                        <iframe src={getVideoEmbed(form.videoUrl)} className="w-full h-48 rounded-xl" allowFullScreen title="video preview" />
                      ) : (
                        <video src={form.videoUrl} controls className="w-full h-48 rounded-xl bg-black" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button onClick={save} className="flex-1 bg-[#C9A227] text-[#0A1931] font-bold py-3 rounded-full text-sm shadow-lg shadow-[#C9A227]/30">{isEditing ? 'Save Changes' : 'Add Property'}</button>
              <button onClick={()=>setShowForm(false)} className="px-5 bg-white/10 border border-white/20 font-bold py-3 rounded-full text-sm">Cancel</button>
            </div>
          </div>
        )}

        {tab === 'dashboard' && (
          <div>
            <h1 className="font-serif text-2xl font-bold">Welcome back, Admin 👋</h1>
            <p className="text-white/60 text-sm mt-1">Here is what is happening on Zionvanta today.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <div className={`${glassCard} p-4`}><div className="text-xs text-white/60">Total Properties</div><div className="text-2xl font-bold mt-1">{total}</div></div>
              <div className={`${glassCard} p-4`}><div className="text-xs text-white/60">For Sale</div><div className="text-2xl font-bold mt-1 text-green-300">{forSale}</div></div>
              <div className={`${glassCard} p-4`}><div className="text-xs text-white/60">For Rent</div><div className="text-2xl font-bold mt-1 text-blue-300">{forRent}</div></div>
              <div className={`${glassCard} p-4`}><div className="text-xs text-white/60">Total Value</div><div className="text-lg font-bold mt-1 text-[#C9A227]">GH¢{totalValue.toLocaleString()}</div></div>
            </div>
            <button onClick={openAdd} className="w-full mt-4 bg-[#C9A227] text-[#0A1931] font-bold py-3 rounded-full text-sm shadow-lg shadow-[#C9A227]/30">➕ Add New Property</button>
            <div className={`${glassCard} p-4 mt-3`}>
              <h3 className="font-bold">Recent Properties</h3>
              <div className="mt-3 space-y-3">
                {listings.slice(0,4).map((l:any)=>(
                  <div key={l.id} className="flex gap-3 items-center">
                    <img src={l.img} alt="" className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0"><div className="font-bold text-sm truncate">{l.title}</div><div className="text-xs text-white/60">{l.loc} • {l.deal} {l.videoUrl ? '• 🎥 Video' : ''}</div></div>
                    <div className="font-bold text-sm text-[#C9A227]">GH¢{Number(l.price).toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'properties' && (
          <div>
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <h1 className="font-serif text-2xl font-bold">Properties ({filtered.length})</h1>
              <button onClick={openAdd} className="bg-[#C9A227] text-[#0A1931] font-bold px-4 py-2 rounded-full text-sm">➕ Add Property</button>
            </div>
            <input value={search} onChange={(e:any)=>setSearch(e.target.value)} placeholder="🔍 Search properties..." className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none w-full mt-3 focus:border-[#C9A227]" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
              {filtered.map((l:any)=>(
                <div key={l.id} className={`${glassCard} overflow-hidden`}>
                  <div className="relative">
                    <img src={l.img} alt={l.title} className="w-full h-40 object-cover" />
                    <span className="absolute top-2 left-2 bg-[#0A1931] text-[#C9A227] text-[11px] font-bold px-2 py-1 rounded-full">{l.deal}</span>
                    {l.videoUrl && <span className="absolute bottom-2 left-2 bg-red-600 text-white text-[11px] font-bold px-2 py-1 rounded-full">▶ Video</span>}
                    <span className="absolute top-2 right-2 bg-white text-[#0A1931] text-xs font-bold px-2 py-1 rounded-full">{l.type}</span>
                  </div>
                  <div className="p-3">
                    <div className="font-bold">{l.title}</div>
                    <div className="text-xs text-white/60">{l.loc} • {l.meta}</div>
                    <div className="font-bold mt-1 text-[#C9A227]">GH¢{Number(l.price).toLocaleString()}</div>
                    <div className="flex gap-2 mt-3">
                      <button onClick={()=>openEdit(l)} className="flex-1 bg-[#C9A227] text-[#0A1931] text-sm font-bold py-2 rounded-full">Edit</button>
                      <button onClick={()=>{ if(window.confirm('Delete '+l.title+'?')) props.onDeleteListing(l.id); }} className="flex-1 bg-red-500/20 border border-red-400/30 text-red-300 text-sm font-bold py-2 rounded-full">Delete</button>
                    </div>
                    <button onClick={()=>props.onNavigate('/details/'+l.id)} className="w-full mt-2 bg-white text-[#0A1931] text-sm font-bold py-2 rounded-full">View on Site</button>
                  </div>
                </div>
              ))}
              {filtered.length===0 && <div className={`${glassCard} p-6 text-center text-white/60 col-span-full`}>No properties found</div>}
            </div>
          </div>
        )}

        {tab === 'locations' && (
          <div>
            <h1 className="font-serif text-2xl font-bold">Locations ({locations.length})</h1>
            <div className={`${glassCard} p-4 mt-4 flex gap-2`}>
              <input value={newLoc} onChange={(e:any)=>setNewLoc(e.target.value)} placeholder="New location e.g. Madina" className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#C9A227]" onKeyDown={(e:any)=>{ if(e.key==='Enter' && newLoc.trim()){ props.onAddLocation(newLoc); setNewLoc(''); } }} />
              <button onClick={()=>{ if(newLoc.trim()){ props.onAddLocation(newLoc); setNewLoc(''); } }} className="bg-[#C9A227] text-[#0A1931] font-bold px-5 py-2.5 rounded-full text-sm">+ Add</button>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 mt-3">
              {locations.map((loc:string)=>(
                <div key={loc} className={`${glassCard} p-3 flex items-center justify-between`}>
                  <div className="font-bold text-sm">📍 {loc}</div>
                  <button onClick={()=>{ if(window.confirm('Delete '+loc+'?')) props.onDeleteLocation(loc); }} className="text-xs font-bold bg-red-500/20 border border-red-400/30 text-red-300 px-3 py-1.5 rounded-full">Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'settings' && (
          <div>
            <h1 className="font-serif text-2xl font-bold">Settings</h1>
            <div className={`${glassCard} p-5 mt-4`}>
              <div className="font-bold text-sm text-[#C9A227]">Site Name</div><div className="text-white/70 text-sm">ZIONVANTA PROPERTIES</div>
              <div className="font-bold text-sm mt-3 text-[#C9A227]">Contact</div><div className="text-white/70 text-sm">info@zionvanta.com • +233 50 000 0000</div>
              <button onClick={logout} className="mt-4 bg-red-500/80 text-white font-bold px-5 py-2.5 rounded-full text-sm">Logout & Clear Session</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;