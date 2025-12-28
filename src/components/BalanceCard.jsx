function BalanceCard({ balance }) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-surface-dark to-black border border-secure/20 p-6 secure-glow group">
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 rounded bg-black/40 border border-white/5 backdrop-blur-md">
        <span className="material-symbols-outlined text-zinc-400 text-[12px]">lock</span>
        <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wide">Private</span>
      </div>
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full blur-3xl transition-all duration-700 group-hover:bg-secure/10" style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)' }}></div>
      
      <div className="relative z-10 flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 bg-zinc-800/50 rounded-md border border-zinc-700/50">
            <span className="material-symbols-outlined text-sm" style={{ color: '#10b981' }}>shield_lock</span>
          </div>
          <span className="text-zinc-400 text-xs font-medium uppercase tracking-wider">Secure Balance</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex items-baseline gap-1 group/balance relative">
            <span className="text-4xl font-bold font-mono text-white tracking-tight blur-reveal">
              {balance.toLocaleString()}
            </span>
            <span className="material-symbols-outlined text-zinc-600 text-lg ml-2 group-hover/balance:hidden">visibility_off</span>
            <span className="text-sm font-medium text-zinc-500 ml-1">credits</span>
            <div className="absolute -top-8 left-0 px-2 py-1 bg-black border text-[10px] rounded opacity-0 group-hover/balance:opacity-100 transition-opacity pointer-events-none whitespace-nowrap" style={{ borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10b981' }}>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]">lock</span> Encrypted Value
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <button className="flex-1 py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 border border-zinc-700 group/btn">
            <span className="material-symbols-outlined text-sm transition-colors group-hover/btn:text-white" style={{ color: '#10b981' }}>add_moderator</span> Top Up
          </button>
          <button className="flex-1 py-2.5 px-4 bg-transparent hover:bg-zinc-800/50 text-white text-sm font-bold rounded-lg transition-colors border border-zinc-700/50 hover:border-zinc-600">
            Withdraw
          </button>
        </div>
      </div>
    </section>
  );
}

export default BalanceCard;

