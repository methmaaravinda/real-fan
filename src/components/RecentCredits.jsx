function RecentCredits({ transactions }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold uppercase text-zinc-600 tracking-wider">Recent Transactions</span>
        <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-500 font-mono uppercase">Encrypted</span>
      </div>
      <div className="flex flex-col gap-3">
        {transactions.map((tx) => (
          <div 
            key={tx.id} 
            className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors border border-zinc-800/30 hover:border-zinc-700 group relative"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden border border-zinc-800">
                <span className="material-symbols-outlined text-zinc-600 text-lg">fingerprint</span>
              </div>
              <div className="flex flex-col">
                <p className="text-white font-medium text-sm flex items-center gap-1">
                  User <span className="font-mono text-zinc-400 blur-reveal">{tx.userId}</span>
                </p>
                <p className="text-zinc-500 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#10b981' }}></span> {tx.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]" style={{ color: '#10b981' }}>lock</span>
                <span className="font-bold font-mono text-sm blur-reveal group-hover:blur-none transition-all" style={{ color: '#10b981' }}>
                  +${tx.amount.toFixed(2)}
                </span>
              </div>
              <span className="text-zinc-600 text-[10px] font-mono">{tx.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentCredits;

