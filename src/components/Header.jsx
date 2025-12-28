function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background-dark/95 backdrop-blur-xl border-b border-zinc-800/80 shadow-md">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined animate-pulse" style={{ fontSize: '24px', color: '#f90643' }}>favorite</span>
          <h1 className="text-lg font-bold tracking-tight text-white font-display text-glow">
            Secret <span style={{ color: '#f90643' }}>Crush</span>
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[12px]" style={{ color: '#10b981' }}>verified_user</span>
          <span className="text-[10px] font-mono font-medium tracking-widest uppercase" style={{ color: '#10b981' }}>Secure Connection</span>
        </div>
      </div>
      <button className="relative p-2 rounded-full hover:bg-zinc-800 transition-colors border border-zinc-800 bg-zinc-900/50">
        <span className="material-symbols-outlined text-zinc-400" style={{ fontSize: '20px' }}>notifications</span>
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full border border-background-dark shadow-[0_0_8px_rgba(249,6,67,0.6)]" style={{ backgroundColor: '#f90643' }}></span>
      </button>
    </header>
  );
}

export default Header;

