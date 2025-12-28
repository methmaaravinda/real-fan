const AppointmentStatus = {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
};

function AppointmentsList({ appointments }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Upcoming</span>
        <a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors flex items-center gap-1" href="#">
          <span className="material-symbols-outlined text-[14px]">history</span> View All
        </a>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x hide-scrollbar">
        {appointments.map((apt) => (
          <div 
            key={apt.id} 
            className="snap-center shrink-0 w-[270px] bg-surface-dark/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] ${
              apt.status === AppointmentStatus.ACTIVE 
                ? 'bg-gradient-to-bl from-secure/5 to-transparent' 
                : 'bg-gradient-to-bl from-amber-500/5 to-transparent'
            }`}></div>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-zinc-600 text-lg">person_off</span>
                </div>
                <div className="relative group/user cursor-pointer">
                  <p className="text-white font-bold text-sm font-mono blur-reveal flex items-center gap-1">User {apt.userId}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{apt.type}</p>
                  <div className="absolute -top-8 left-0 hidden group-hover/user:block bg-black px-2 py-1 rounded border border-zinc-800 text-[10px] text-zinc-400 whitespace-nowrap z-20">
                    Identity Protected
                  </div>
                </div>
              </div>
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border ${
                apt.status === AppointmentStatus.ACTIVE 
                  ? 'bg-emerald-500/10 border-secure/20' 
                  : 'bg-amber-500/10 text-amber-500 border-amber-500/20'
              }`} style={apt.status === AppointmentStatus.ACTIVE ? { color: '#10b981' } : {}}>
                <span className="material-symbols-outlined text-[10px]">lock</span> {apt.status}
              </span>
            </div>

            <div className="mt-2 pt-3 border-t border-zinc-800/50 flex items-center gap-3 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-zinc-600">calendar_today</span>
                <span>{apt.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-zinc-600">schedule</span>
                <span>{apt.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentsList;

