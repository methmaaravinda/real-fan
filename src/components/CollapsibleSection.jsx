function CollapsibleSection({ 
  number, 
  title, 
  icon, 
  iconColor = '#f90643',
  borderColor = '#f90643',
  bgColor = 'bg-surface-dark',
  pattern = 'grid',
  patternSize = '24px',
  defaultOpen = false,
  children 
}) {
  const getPatternStyle = () => {
    switch(pattern) {
      case 'grid':
        return {
          backgroundImage: 'radial-gradient(#10b98120 1px, transparent 1px)',
          backgroundSize: patternSize
        };
      case 'dots':
        return {
          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
          backgroundSize: patternSize
        };
      case 'circuit':
        return {
          backgroundImage: 'radial-gradient(circle at center, #10b98110 0%, transparent 70%)'
        };
      default:
        return {
          backgroundImage: 'radial-gradient(#10b98120 1px, transparent 1px)',
          backgroundSize: patternSize
        };
    }
  };

  return (
    <details 
      className={`group/section relative rounded-3xl ${bgColor} border border-zinc-800 shadow-2xl overflow-hidden transition-all hover:border-zinc-700 hover:shadow-primary/5`}
      open={defaultOpen}
    >
      <summary className="list-none block relative overflow-hidden cursor-pointer select-none focus:outline-none">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 shadow-[0_0_15px_rgba(249,6,67,0.4)] pointer-events-none" style={{ backgroundColor: borderColor }}></div>
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={getPatternStyle()}></div>
        <div className="flex items-center justify-between px-6 pt-6 pb-2 border-b border-zinc-800/50 bg-gradient-to-r from-zinc-900/80 to-transparent relative z-10">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-black text-zinc-800/80 font-mono select-none">{number}</span>
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ color: iconColor }}>{icon}</span>
              {title}
            </h2>
          </div>
          <span className="material-symbols-outlined text-zinc-600 transition-transform duration-300 group-open/section:rotate-180">expand_more</span>
        </div>
      </summary>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 shadow-[0_0_15px_rgba(249,6,67,0.4)] pointer-events-none" style={{ backgroundColor: borderColor }}></div>
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={getPatternStyle()}></div>
      <div className="relative z-10">
        {children}
      </div>
    </details>
  );
}

export default CollapsibleSection;

