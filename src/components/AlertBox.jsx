function AlertBox({ amount }) {
  return (
    <section className="relative overflow-hidden rounded-xl border border-red-900/50 bg-gradient-to-r from-red-950/40 to-background-dark p-5 shadow-lg shadow-red-900/5">
      <div className="absolute right-0 top-0 h-full w-[1px]" style={{ background: 'linear-gradient(to bottom, rgba(249, 6, 67, 0.5), transparent)' }}></div>
      <div className="flex items-start gap-4 relative z-10">
        <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg shrink-0">
          <span className="material-symbols-outlined text-sm animate-bounce" style={{ color: '#f90643' }}>gpp_maybe</span>
        </div>
        <div>
          <h4 className="text-white font-bold text-base mb-1">Missed Opportunities</h4>
          <p className="text-zinc-400 text-sm leading-relaxed mb-2">
            You missed encrypted appointments worth <span className="text-primary font-bold font-mono blur-sm hover:blur-none transition-all cursor-help">${amount}</span> this week.
          </p>
          <div className="flex items-center gap-4">
            <a className="text-xs font-bold text-white underline decoration-zinc-700 underline-offset-4 hover:text-primary transition-colors" href="#">
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')" }}></div>
    </section>
  );
}

export default AlertBox;

