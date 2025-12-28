import { useState } from 'react';

function SignIn({ onSignIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [keepSecure, setKeepSecure] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen w-full mx-auto max-w-md bg-background-dark shadow-2xl border-x border-zinc-800 justify-center px-8 py-10">
      {/* Background Patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-[0.15]" style={{ backgroundSize: '32px 32px' }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background-dark to-background-dark"></div>
      <div className="fixed bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background-dark to-transparent z-0"></div>

      {/* Logo and Branding */}
      <div className="relative z-10 flex flex-col items-center mb-12">
        <div className="relative mb-6 group cursor-default">
          <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
          <div className="relative h-24 w-24 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center shadow-2xl backdrop-blur-sm">
            <span className="material-symbols-outlined text-5xl drop-shadow-[0_0_15px_rgba(249,6,67,0.5)] animate-pulse" style={{ color: '#f90643' }}>favorite</span>
          </div>
          <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-4 border-background-dark flex items-center justify-center z-20" style={{ backgroundColor: '#10b981' }}>
            <span className="material-symbols-outlined text-background-dark text-[14px] font-bold">lock</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white font-display text-glow mb-3">
          Secret <span style={{ color: '#f90643' }}>Crush</span>
        </h1>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-md">
          <span className="material-symbols-outlined text-[14px] animate-pulse" style={{ color: '#10b981' }}>verified_user</span>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase" style={{ color: '#10b981' }}>Secure Connection</span>
        </div>
      </div>

      {/* Login Form */}
      <main className="relative z-10 w-full flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          {/* Username Input */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 rounded-xl blur-lg -z-10"></div>
            <label className="sr-only">Username or ID</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 flex items-center justify-center text-zinc-500 transition-colors duration-200 group-focus-within:text-primary">
                <span className="material-symbols-outlined">person</span>
              </div>
              <input 
                className="w-full bg-surface-dark/80 border border-zinc-800 rounded-xl py-4 pl-12 pr-12 text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-[border,ring] duration-200 font-mono text-sm input-blur" 
                placeholder="Username / Secure ID" 
                type="text"
              />
              <div className="absolute right-4 flex items-center justify-center text-zinc-700">
                <span className="material-symbols-outlined text-lg">encrypted</span>
              </div>
            </div>
          </div>

          {/* Password Input */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 rounded-xl blur-lg -z-10"></div>
            <label className="sr-only">Password</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 flex items-center justify-center text-zinc-500 transition-colors duration-200 group-focus-within:text-primary">
                <span className="material-symbols-outlined">key</span>
              </div>
              <input 
                className="w-full bg-surface-dark/80 border border-zinc-800 rounded-xl py-4 pl-12 pr-12 text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-[border,ring] duration-200 font-mono text-sm input-blur" 
                placeholder="••••••••••••" 
                type={showPassword ? "text" : "password"}
              />
              <button 
                className="absolute right-4 flex items-center justify-center text-zinc-600 hover:text-white transition-colors duration-200 cursor-pointer" 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-symbols-outlined text-lg">{showPassword ? 'visibility' : 'visibility_off'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center w-4 h-4 rounded border border-zinc-700 bg-surface-dark group-hover:border-zinc-500 transition-colors">
              <input 
                className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer z-10 opacity-0" 
                type="checkbox"
                checked={keepSecure}
                onChange={(e) => setKeepSecure(e.target.checked)}
              />
              <span className="material-symbols-outlined text-[12px] opacity-0 peer-checked:opacity-100 transition-opacity" style={{ color: '#f90643' }}>check</span>
            </div>
            <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Keep me secure</span>
          </label>
          <a className="text-xs font-semibold text-zinc-500 hover:text-primary transition-colors flex items-center gap-1" href="#">
            Forgot Password?
          </a>
        </div>

        {/* Authenticate Button */}
        <button 
          className="relative w-full group overflow-hidden rounded-xl bg-primary p-[1px] transition-all hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark btn-glow"
          onClick={onSignIn}
        >
          <div className="relative flex items-center justify-center gap-2 bg-zinc-900/10 h-full w-full rounded-xl py-4 transition-all group-hover:bg-transparent">
            <span className="text-sm font-bold text-white tracking-wide uppercase">Authenticate</span>
            <span className="material-symbols-outlined text-white text-lg transition-transform group-hover:translate-x-1">login</span>
          </div>
        </button>

        {/* Divider */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800/80"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background-dark px-2 text-zinc-600 font-mono tracking-wider">Access Options</span>
          </div>
        </div>

        {/* Apply for Membership */}
        <div className="text-center">
          <p className="text-zinc-500 text-sm">
            Don't have access? 
            <a className="text-white font-bold hover:text-primary transition-colors inline-flex items-center gap-1 group" href="#">
              Apply for Membership
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 w-full flex justify-center z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-2 opacity-60">
          <div className="flex items-center gap-1.5 text-[10px] text-zinc-600 uppercase tracking-widest font-mono">
            <span className="material-symbols-outlined text-[12px]">shield</span>
            End-to-End Encrypted
          </div>
          <div className="h-0.5 w-12 bg-zinc-800 rounded-full"></div>
        </div>
      </footer>
    </div>
  );
}

export default SignIn;

