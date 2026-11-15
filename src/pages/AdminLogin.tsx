import React from 'react';

function AdminLogin(props: any){
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [error, setError] = React.useState('');

  var login = ()=>{
    // CHANGE THESE TO YOUR OWN
    if(user === 'admin' && pass === 'zionvanta123'){
      localStorage.setItem('zionvanta_admin','yes');
      props.onNavigate('/admin');
    } else {
      setError('Wrong username or password. Try again.');
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-[#0A1931]">
      {/* GLASS BACKGROUND - BLOBS */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#C9A227]/40 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-24 -right-16 w-[28rem] h-[28rem] bg-[#C9A227]/25 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-white/10 rounded-full blur-[100px]"></div>

      {/* GLASS CARD */}
      <div className="relative w-full max-w-md rounded-[24px] overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        {/* TOP - LOGO */}
        <div className="text-center pt-8 pb-6 px-6">
          <div className="bg-white/95 rounded-2xl p-3 w-fit mx-auto shadow-lg">
            <img src="/logo.jpg" alt="Zionvanta Properties Ghana" className="h-[56px] w-auto object-contain" />
          </div>
          <h1 className="text-white text-2xl font-bold mt-4">Admin Login</h1>
          <p className="text-xs text-white/60 mt-1">Welcome back, please login to continue</p>
          <div className="w-12 h-[3px] bg-[#C9A227] rounded-full mx-auto mt-3"></div>
        </div>

        <div className="px-6 pb-6">
          {error && <div className="bg-red-500/20 border border-red-400/40 backdrop-blur text-red-100 text-sm rounded-xl px-3 py-2.5 mb-3 text-center">{error}</div>}

          <label className="block text-xs font-bold text-[#C9A227] tracking-wide">USERNAME</label>
          <input
            value={user}
            onChange={(e:any)=>setUser(e.target.value)}
            placeholder="Enter username"
            className="w-full bg-white/10 border border-white/20 backdrop-blur rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none mt-1.5 mb-4 focus:border-[#C9A227] focus:bg-white/15"
          />

          <label className="block text-xs font-bold text-[#C9A227] tracking-wide">PASSWORD</label>
          <div className="flex bg-white/10 border border-white/20 backdrop-blur rounded-xl overflow-hidden mt-1.5 focus-within:border-[#C9A227]">
            <input
              type={show ? 'text' : 'password'}
              value={pass}
              onChange={(e:any)=>setPass(e.target.value)}
              placeholder="Enter password"
              className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none"
              onKeyDown={(e:any)=>{ if(e.key==='Enter') login(); }}
            />
            <button onClick={()=>setShow(!show)} className="px-4 text-xs font-bold text-[#C9A227]">{show ? 'HIDE' : 'SHOW'}</button>
          </div>

          <button onClick={login} className="w-full bg-[#C9A227] text-[#0A1931] font-bold py-3.5 rounded-xl mt-6 shadow-lg shadow-[#C9A227]/30 active:scale-[0.98] transition">
            Login →
          </button>

          <button onClick={()=>props.onNavigate('/')} className="w-full text-center text-sm text-white/60 hover:text-white mt-4">
            ← Back to Website
          </button>

          <div className="text-center text-[11px] text-white/40 mt-4">
            Demo: <b className="text-white/70">admin</b> / <b className="text-white/70">zionvanta123</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;