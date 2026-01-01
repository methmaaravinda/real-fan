function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-2 opacity-80">
      <div className="h-px w-full bg-zinc-800 absolute"></div>
      <div className="h-0.5 w-16 rounded-full relative z-10 shadow-[0_0_10px_rgba(249,6,67,0.8)]" style={{ backgroundColor: '#f90643' }}></div>
    </div>
  );
}

export default SectionDivider;


