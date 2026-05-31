import React, { useState, useEffect } from 'react';

const bootSequence = [
  "SYSTEM CORE v2.4.0-RELEASE INITIATED...",
  "[OK] Kernel modules compiled successfully.",
  "[INFO] Initializing Stateless MDM Architecture...",
  "[OK] Shared state store connected via Redis Cluster.",
  "[START] Launching gRPC bidirectional streams on port :50051",
  "[SUCCESS] gRPC connection established with client pool.",
  "[INFO] Migrating Presence System from Socket.IO to gRPC/FCM...",
  "[OK] Migration completed. Latency dropped to ~12ms.",
  "[START] Server-Sent Events (SSE) broadcasting active.",
  "[OK] Real-time bot status synchronization: ONLINE.",
  "--------------------------------------------------",
  "STATUS: READY // EXECUTING PORTFOLIO_OS..."
];

const AnimatedTerminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < bootSequence.length) {
      const delay = currentIndex === 0 ? 400 : Math.random() * 300 + 150;
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, bootSequence[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="w-full max-w-2xl rounded-xl bg-black/80 border border-slate-800 p-5 font-mono text-xs sm:text-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      {/* شريط التحكم العلوي للنظام */}
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-3 mb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.4)]"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.4)]"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
        </div>
        <span className="text-slate-500 text-xs tracking-widest uppercase">system_monitor.sh</span>
      </div>
      
      {/* أسطر الـ Terminal */}
      <div className="space-y-1.5 min-h-[260px] overflow-y-auto selection:bg-sky-500 selection:text-black">
        {lines.map((line, i) => {
          let colorClass = "text-slate-300";
          if (line.includes("[OK]") || line.includes("[SUCCESS]")) colorClass = "text-emerald-400 font-semibold";
          if (line.includes("[INFO]")) colorClass = "text-sky-400";
          if (line.includes("[START]")) colorClass = "text-violet-400";
          if (line.includes("STATUS:")) colorClass = "text-amber-400 font-bold tracking-wider";
          
          return (
            <div key={i} className="flex items-start gap-2">
              <span className="text-slate-600 select-none">$&gt;</span>
              <span className={colorClass}>{line}</span>
            </div>
          );
        })}
        {currentIndex < bootSequence.length && (
          <div className="inline-block w-2 h-4 bg-sky-400 animate-pulse ml-1 align-middle"></div>
        )}
      </div>
    </div>
  );
};

export default AnimatedTerminal;
