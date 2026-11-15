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
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg overflow-hidden">
        {/* TOP */}
        <div className="bg-[#0A1931] text-white text-center py-8 px-4">
          <div className="text-[#C9A227] font-serif font-bold text-2xl">◆ ZIONVANTA</div>
          <div className="text-[10px] tracking-[0.3em] text-white/50 mt-1">PROPERTIES • GHANA</div>
          <h1 className="text-xl font-bold mt-4">Admin Login</h1>
          <p className="text-xs text-white/60 mt-1">Welcome back, please login to continue</p>
        </div>

        <div className="p-6">
          {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-3 py-2 mb-3">{error}</div>}

          <label className="block text-sm font-bold text-[#0A1931]">Username</label>
          <input
            value={user}
            onChange={(e:any)=>setUser(e.target.value)}
            placeholder="Enter username"
            className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none mt-1 mb-3"
          />

          <label className="block text-sm font-bold text-[#0A1931]">Password</label>
          <div className="flex border rounded-lg overflow-hidden mt-1">
            <input
              type={show ? 'text' : 'password'}
              value={pass}
              onChange={(e:any)=>setPass(e.target.value)}
              placeholder="Enter password"
              className="flex-1 px-3 py-2.5 text-sm outline-none"
              onKeyDown={(e:any)=>{ if(e.key==='Enter') login(); }}
            />
            <button onClick={()=>setShow(!show)} className="px-3 text-xs font-bold text-[#C9A227]">{show ? 'HIDE' : 'SHOW'}</button>
          </div>

          <button onClick={login} className="w-full bg-[#C9A227] text-[#0A1931] font-bold py-3 rounded-lg mt-5">
            Login →
          </button>

          <button onClick={()=>props.onNavigate('/')} className="w-full text-center text-sm text-gray-500 mt-4">
            ← Back to Website
          </button>

          <div className="text-center text-[11px] text-gray-400 mt-4">
            Demo: <b>admin</b> / <b>zionvanta123</b><br/>
            Change this in AdminLogin.tsx after
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;