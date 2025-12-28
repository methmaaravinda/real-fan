function EarningsGrid({ total, monthly, yearly }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Total Earnings */}
      <div className="col-span-2 bg-black/60 backdrop-blur-sm border border-zinc-800 rounded-xl p-5 flex items-center justify-between relative overflow-hidden group hover:border-zinc-700 transition-colors">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{ backgroundImage: 'radial-gradient(#10b98120 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="relative flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-900/40 to-indigo-900/10 border border-indigo-500/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-indigo-400">encrypted</span>
          </div>
          <div className="group/amount relative cursor-pointer">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">Total Earnings</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[12px]" style={{ color: '#10b981' }}>lock</span>
              <p className="text-2xl font-bold font-mono text-white blur-reveal">${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            </div>
            <div className="absolute -top-8 left-0 hidden group-hover/amount:block bg-zinc-900 border border-zinc-700 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-50">
              This information is encrypted.
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Card */}
      <div className="bg-black/40 border border-zinc-800 rounded-xl p-4 flex flex-col gap-2 group cursor-pointer relative hover:border-zinc-700 transition-colors">
        <div className="h-8 w-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-1">
          <span className="material-symbols-outlined text-purple-400 text-sm">calendar_month</span>
        </div>
        <p className="text-zinc-500 text-[10px] font-medium uppercase">This Month</p>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-zinc-600 text-[12px]">lock</span>
          <p className="text-lg font-bold font-mono text-white blur-reveal">${monthly.toLocaleString()}</p>
        </div>
      </div>

      {/* Yearly Card */}
      <div className="bg-black/40 border border-zinc-800 rounded-xl p-4 flex flex-col gap-2 group cursor-pointer relative hover:border-zinc-700 transition-colors">
        <div className="h-8 w-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-1">
          <span className="material-symbols-outlined text-teal-400 text-sm">event_note</span>
        </div>
        <p className="text-zinc-500 text-[10px] font-medium uppercase">This Year</p>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-zinc-600 text-[12px]">lock</span>
          <p className="text-lg font-bold font-mono text-white blur-reveal">${yearly.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default EarningsGrid;

