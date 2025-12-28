import { useState } from 'react';

function Footer() {
  const [privacyMode, setPrivacyMode] = useState(true);

  return (
    <footer className="fixed bottom-0 z-40 w-full max-w-md bg-background-dark/95 backdrop-blur-xl border-t border-zinc-800 pb-safe">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <button className="p-2 -ml-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="h-6 w-[1px] bg-zinc-800"></div>
          <div className="flex items-center gap-2">
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={privacyMode}
                onChange={(e) => setPrivacyMode(e.target.checked)}
              />
              <div className="relative w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secure"></div>
              <span className="ms-2 text-xs font-medium text-zinc-400 uppercase tracking-wide">Privacy Mode</span>
            </label>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors group shadow-lg">
          <span 
            className="material-symbols-outlined text-sm transition-colors group-hover:text-white"
            style={{ color: '#f90643' }}
          >
            edit_note
          </span>
          <span className="text-sm font-bold text-white">Edit</span>
        </button>
      </div>
      <div className="h-2 w-full"></div>
    </footer>
  );
}

export default Footer;

