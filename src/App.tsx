import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Listing from './pages/Listing';
import Details from './pages/Details';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import Home from './pages/Home';

var defaultListings: any[] = [
  {id:1,title:"Modern Villa",price:2850000,deal:"For Sale",type:"House",loc:"East Legon",bed:4,bath:4,meta:"4 Bed • 4 Bath • 4200 sqft",img:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",desc:"Luxury 4-bed villa with pool, fitted kitchen, 24/7 security and backup generator in East Legon."},
  {id:2,title:"Residential Plot",price:480000,deal:"For Sale",type:"Land",loc:"Tema",bed:0,bath:0,meta:"Tema • 0.5 Acre",img:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",desc:"Titled 0.5 acre residential plot in Tema. Fully documented, ready to build."},
  {id:3,title:"Luxury Apartment",price:12000,deal:"For Rent",type:"Apartment",loc:"Cantonments",bed:3,bath:3,meta:"3 Bed • 3 Bath • 1800 sqft",img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",desc:"3-bed serviced apartment with pool, gym and 24/7 security. GH¢12,000/month."},
  {id:4,title:"2 Bed Apartment",price:8500,deal:"For Rent",type:"Apartment",loc:"Airport Residential",bed:2,bath:2,meta:"2 Bed • 2 Bath • 1100 sqft",img:"https://images.unsplash.com/photo-1502672266-1c1ef2d93688?w=800",desc:"Modern 2-bed apartment in Airport Residential."},
  {id:5,title:"Family House",price:1950000,deal:"For Sale",type:"House",loc:"Spintex",bed:5,bath:4,meta:"5 Bed • 4 Bath • 3200 sqft",img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",desc:"Spacious 5-bed family house with garden and parking in Spintex."},
  {id:6,title:"Plot",price:350000,deal:"For Sale",type:"Land",loc:"Tema",bed:0,bath:0,meta:"Residential • Titled",img:"https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800",desc:"Residential titled plot."},
  {id:7,title:"2 Bed Apartment",price:8500,deal:"For Rent",type:"Apartment",loc:"Airport Residential",bed:2,bath:2,meta:"Airport Residential",img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",desc:"2-bed apartment in Airport Residential."},
  {id:8,title:"Penthouse",price:15000,deal:"For Rent",type:"Apartment",loc:"Labone",bed:4,bath:4,meta:"4 Bed • 4 Bath • 2400 sqft",img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",desc:"Modern penthouse in Labone with city view."},
];

export const listings: any[] = defaultListings;

function Footer(props: any){
  var go = (p: string)=> props.onNavigate(p);
  return (
    <div className="bg-[#0B3D2E] text-white px-5 py-8">
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-sm text-center md:text-left">
        <div><h3 className="text-[#D8C28F] font-serif font-bold text-lg">About</h3><p className="mt-2 text-white/80">ZIONVANTA PROPERTIES is your trusted partner in exceptional properties, providing reliable real estate solutions across Ghana.</p></div>
        <div><h3 className="text-[#D8C28F] font-serif font-bold text-lg">Quick Links</h3>
          <p className="mt-2 flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1">
            <button onClick={()=>go('/')} className="hover:text-[#D8C28F]">Home</button> •
            <button onClick={()=>go('/listings?deal=For Sale')} className="hover:text-[#D8C28F]">Buy</button> •
            <button onClick={()=>go('/listings?deal=For Rent')} className="hover:text-[#D8C28F]">Rent</button> •
            <button onClick={()=>go('/listings?type=Land')} className="hover:text-[#D8C28F]">Land</button> •
            <button onClick={()=>go('/about')} className="hover:text-[#D8C28F]">About</button> •
            <button onClick={()=>go('/contact')} className="hover:text-[#D8C28F]">Contact</button>
          </p>
        </div>
        <div><h3 className="text-[#D8C28F] font-serif font-bold text-lg">Contact</h3><p className="mt-2">Accra, Ghana<br/>info@zionvanta.com<br/>+233 50 000 0000</p></div>
        <div><h3 className="text-[#D8C28F] font-serif font-bold text-lg">Terms Summary</h3><p className="mt-2 text-white/80">Rental Viewing GH¢200 • Sale Viewing GH¢300+ • Rental 10% • Sales 5%</p></div>
      </div>
      <div className="flex justify-center gap-3 mt-6">
        <button onClick={()=>{window.location.href='tel:+233500000000'}} className="border border-[#D8C28F] text-[#D8C28F] px-4 py-1 rounded-full text-xs">Call Us</button>
        <button onClick={()=>{window.open('https://wa.me/233500000000','_blank')}} className="border border-[#D8C28F] text-[#D8C28F] px-4 py-1 rounded-full text-xs">WhatsApp</button>
      </div>
      <div className="text-center text-xs text-white/60 mt-4">© 2024 Zionvanta Properties. All Rights Reserved. <button onClick={()=>go('/admin-login')} className="underline text-white/40">Admin</button></div>
    </div>
  );
}

function DetailsPage(props: any){
  var {id} = useParams();
  var listing = props.allListings.find((l:any)=>l.id===Number(id)) || props.allListings[0];
  return <Details listing={listing} listings={props.allListings} onNavigate={props.onNavigate} onBook={props.onBook} onSelect={(l: any)=>props.onNavigate('/details/'+l.id)} />;
}

function BookingPage(props: any){
  var {id} = useParams();
  var listing = props.allListings.find((l:any)=>l.id===Number(id)) || props.allListings[0];
  var inputCls = "w-full bg-white border border-[#EDE3C8] rounded-lg px-3 py-2.5 mb-2 text-sm outline-none";
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="font-serif text-3xl">Book An Appointment</h2>
      <p className="text-gray-600 mb-3">{listing.title} - GH¢{listing.price.toLocaleString()}</p>
      {props.booked ? (<div className="bg-white rounded-2xl p-5"><h3 className="font-bold">Booking Received!</h3><p>Thanks {props.name}, we will call {props.phone} to confirm on {props.date}.</p><button className="mt-4 bg-[#0B3D2E] text-white px-5 py-2 rounded-full font-bold text-sm" onClick={()=>props.onNavigate('/listings')}>Browse More →</button></div>) : (
        <div>
          <input className={inputCls} placeholder="Full Name" value={props.name} onChange={e=>props.setName(e.target.value)} />
          <input className={inputCls} placeholder="Phone / WhatsApp" value={props.phone} onChange={e=>props.setPhone(e.target.value)} />
          <input className={inputCls} type="date" value={props.date} onChange={e=>props.setDate(e.target.value)} />
          <button className="w-full bg-[#0B3D2E] text-white py-3 rounded-full font-bold" onClick={()=>{ if(props.name&&props.phone&&props.date) props.setBooked(true); else alert('Please fill all fields'); }}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
}

function AdminGuard(props: any){
  var loggedIn = false;
  try{ loggedIn = localStorage.getItem('zionvanta_admin') === 'yes'; }catch(e){}
  if(!loggedIn){ return <Navigate to="/admin-login" replace />; }
  return props.children;
}

function AppContent(){
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname === '/admin' || location.pathname === '/admin-login';
  const [search,setSearch] = React.useState('');
  const [filter,setFilter] = React.useState('All');
  const [name,setName] = React.useState('');
  const [phone,setPhone] = React.useState('');
  const [date,setDate] = React.useState('');
  const [booked,setBooked] = React.useState(false);

  // 🔥 LISTINGS NOW IN STATE + SAVED
  const [allListings,setAllListings] = React.useState<any[]>(()=>{
    try{
      var saved = localStorage.getItem('zionvanta_listings');
      if(saved) return JSON.parse(saved);
    }catch(e){}
    return defaultListings;
  });

  const [locations,setLocations] = React.useState<string[]>(()=>{
    try{
      var saved = localStorage.getItem('zionvanta_locations');
      if(saved) return JSON.parse(saved);
    }catch(e){}
    return ['East Legon','Cantonments','Tema','Spintex','Airport Residential','Labone'];
  });

  const goTo = (p: string)=>{ navigate(p); window.scrollTo(0,0); };
  const openDetails = (l: any)=>{ goTo('/details/'+l.id); };
  const bookNow = (l: any)=>{ setBooked(false); goTo('/booking/'+l.id); };

  const saveListings = (next:any[])=>{
    setAllListings(next);
    localStorage.setItem('zionvanta_listings', JSON.stringify(next));
  };
  const onAddListing = (data:any)=>{
    var next = [{...data, id: Date.now()}, ...allListings];
    saveListings(next);
  };
  const onUpdateListing = (data:any)=>{
    var next = allListings.map((l:any)=> l.id===data.id ? data : l);
    saveListings(next);
  };
  const onDeleteListing = (id:number)=>{
    var next = allListings.filter((l:any)=>l.id!==id);
    saveListings(next);
  };

  const addLocation = (loc: string)=>{
    var clean = loc.trim();
    if(!clean) return;
    if(locations.some(l=>l.toLowerCase()===clean.toLowerCase())){ alert('Location already exists'); return; }
    var next = [...locations, clean];
    setLocations(next);
    localStorage.setItem('zionvanta_locations', JSON.stringify(next));
  };
  const deleteLocation = (loc: string)=>{
    var next = locations.filter(l=>l!==loc);
    setLocations(next);
    localStorage.setItem('zionvanta_locations', JSON.stringify(next));
  };

  return (
    <div className={isAdmin ? "bg-[#F8F9FA] min-h-screen" : "bg-[#FBF6EC] min-h-screen relative"}>
      {!isAdmin && <Header onNavigate={goTo} />}
      <Routes>
        <Route path="/" element={<Home listings={allListings} search={search} setSearch={setSearch} setFilter={setFilter} name={name} setName={setName} phone={phone} setPhone={setPhone} date={date} setDate={setDate} booked={booked} setBooked={setBooked} onView={openDetails} onNavigate={goTo} />} />
        <Route path="/listings" element={<Listing listings={allListings} locations={locations} onView={openDetails} onNavigate={goTo} />} />
        <Route path="/about" element={<div className="p-4 max-w-3xl mx-auto"><div className="bg-white rounded-2xl p-5"><h1 className="font-serif text-3xl">About Zionvanta</h1><p className="mt-3 text-gray-600">ZIONVANTA PROPERTIES is your trusted real estate partner delivering luxury homes, land, and investment opportunities across Ghana.</p><button className="mt-4 bg-[#0B3D2E] text-white px-5 py-2 rounded-full font-bold" onClick={()=>goTo('/listings')}>Browse Properties</button></div></div>} />
        <Route path="/contact" element={<Contact onNavigate={goTo} />} />
        <Route path="/details/:id" element={<DetailsPage allListings={allListings} onNavigate={goTo} onBook={bookNow} />} />
        <Route path="/booking/:id" element={<BookingPage allListings={allListings} name={name} setName={setName} phone={phone} setPhone={setPhone} date={date} setDate={setDate} booked={booked} setBooked={setBooked} onNavigate={goTo} />} />
        <Route path="/admin-login" element={<AdminLogin onNavigate={goTo} />} />
        <Route path="/admin" element={<AdminGuard><Admin listings={allListings} locations={locations} onAddLocation={addLocation} onDeleteLocation={deleteLocation} onAddListing={onAddListing} onUpdateListing={onUpdateListing} onDeleteListing={onDeleteListing} onNavigate={goTo} /></AdminGuard>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isAdmin && <Footer onNavigate={goTo} />}
      {!isAdmin && <button onClick={()=>{window.location.href='tel:+233500000000'}} className="fixed bottom-4 left-4 z-50 bg-[#D8C28F] text-black font-bold px-4 py-2 rounded-full shadow-lg">Call</button>}
      {!isAdmin && <button onClick={()=>{window.open('https://wa.me/233500000000','_blank')}} className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white font-bold px-4 py-2 rounded-full shadow-lg">WhatsApp</button>}
    </div>
  );
}

export default function App(){
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};