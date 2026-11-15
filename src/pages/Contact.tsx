import React from 'react';

function Contact(props: any){
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [sent, setSent] = React.useState(false);

  var sendWhatsApp = ()=>{
    if(!name || !phone || !message){ alert('Please fill Name, Phone and Message'); return; }
    var text = `Hello Zionvanta!%0A%0AName: ${name}%0APhone: ${phone}%0A%0AMessage: ${message}`;
    window.open(`https://wa.me/233500000000?text=${text}`, '_blank');
    setSent(true);
  };

  var sendEmail = ()=>{
    if(!name || !message){ alert('Please fill Name and Message'); return; }
    window.location.href = `mailto:info@zionvanta.com?subject=Enquiry from ${name}&body=${message} - Phone: ${phone}`;
  };

  var inputCls = "w-full border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#C9A227]";
  var labelCls = "block text-xs font-bold text-[#0A1931] mb-1";

  return (
    <div className="bg-[#FBF6EC] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* HEADER WITH YOUR LOGO */}
        <div className="text-center py-4">
          <img src="/logo.jpg" alt="Zionvanta Properties" className="w-48 sm:w-56 mx-auto" />
          <h1 className="font-serif text-3xl font-bold mt-2 text-[#0A1931]">Contact Us</h1>
          <p className="text-gray-500 text-sm mt-1">We reply within 30 minutes • 8am - 8pm</p>
        </div>

        {/* QUICK CONTACT CARDS - NAVY + GOLD + WHITE */}
        <div className="grid grid-cols-2 gap-3">
          <a href="https://wa.me/233500000000" target="_blank" className="bg-[#0A1931] text-white rounded-2xl p-4 text-center border-b-4 border-[#C9A227]">
            <div className="text-2xl">💬</div>
            <div className="font-bold text-sm mt-1">WhatsApp</div>
            <div className="text-xs text-[#C9A227] font-bold">Chat Now</div>
          </a>
          <a href="tel:+233500000000" className="bg-[#C9A227] text-[#0A1931] rounded-2xl p-4 text-center">
            <div className="text-2xl">📞</div>
            <div className="font-bold text-sm mt-1">Call Us</div>
            <div className="text-xs opacity-80 font-bold">+233 50 000 0000</div>
          </a>
          <a href="mailto:info@zionvanta.com" className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl">✉️</div>
            <div className="font-bold text-sm mt-1 text-[#0A1931]">Email</div>
            <div className="text-xs text-gray-500">info@zionvanta.com</div>
          </a>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl">📍</div>
            <div className="font-bold text-sm mt-1 text-[#0A1931]">Office</div>
            <div className="text-xs text-gray-500">East Legon, Accra</div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mt-4 border-t-4 border-[#C9A227]">
          <h2 className="font-bold text-lg text-[#0A1931]">Send Us a Message</h2>
          <p className="text-gray-500 text-sm">Buying, renting or selling? Tell us what you need.</p>

          <div className="space-y-3 mt-4">
            <div>
              <label className={labelCls}>Your Name *</label>
              <input className={inputCls} value={name} onChange={(e:any)=>setName(e.target.value)} placeholder="e.g. Kwame Mensah" />
            </div>
            <div>
              <label className={labelCls}>Phone / WhatsApp *</label>
              <input className={inputCls} value={phone} onChange={(e:any)=>setPhone(e.target.value)} placeholder="e.g. 050 000 0000" />
            </div>
            <div>
              <label className={labelCls}>Message *</label>
              <textarea className={inputCls} rows={4} value={message} onChange={(e:any)=>setMessage(e.target.value)} placeholder="I'm looking for a 3 bedroom apartment in East Legon..." />
            </div>
          </div>

          <button onClick={sendWhatsApp} className="w-full bg-[#0A1931] text-white font-bold py-3.5 rounded-full text-sm mt-4">💬 Send on WhatsApp</button>
          <button onClick={sendEmail} className="w-full bg-[#C9A227] text-[#0A1931] font-bold py-3.5 rounded-full text-sm mt-2">✉️ Send by Email</button>

          {sent && <div className="bg-[#FBF6EC] text-[#0A1931] border border-[#C9A227] text-sm font-bold text-center p-3 rounded-xl mt-3">✅ Opening WhatsApp... We will reply soon!</div>}
        </div>

        {/* HOURS + MAP */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mt-4">
          <h3 className="font-bold text-[#0A1931]">Visit Us</h3>
          <div className="text-sm text-gray-500 mt-2 space-y-1">
            <div>📍 East Legon, Accra, Ghana</div>
            <div>🕐 Mon - Sat: 8:00am - 8:00pm</div>
            <div>🕐 Sunday: 12:00pm - 5:00pm</div>
          </div>
          <a href="https://maps.google.com/?q=East+Legon+Accra" target="_blank" className="block text-center bg-[#C9A227] text-[#0A1931] font-bold py-3 rounded-full text-sm mt-4">📍 Open in Google Maps</a>
        </div>

        {/* FOOTER WITH LOGO */}
        <div className="text-center py-6">
          <img src="/logo.png" alt="" className="w-24 mx-auto opacity-80" />
          <div className="text-xs text-gray-400 mt-2">© 2026 Zionvanta Properties • All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;