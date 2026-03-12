import React from 'react';
import { motion } from 'motion/react';

interface VisualizerProps {
  type: 'array' | 'stack' | 'queue' | 'linked-list' | 'tree' | 'graph';
}

export const Visualizer: React.FC<VisualizerProps> = ({ type }) => {
  const renderVisual = () => {
    switch (type) {
      case 'array':
        return (
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-10 h-10 border-2 border-zinc-800 flex items-center justify-center font-mono text-xs bg-white"
              >
                {i}
              </motion.div>
            ))}
          </div>
        );
      case 'stack':
        return (
          <div className="flex flex-col-reverse gap-1 border-b-4 border-x-2 border-zinc-800 p-1 w-16">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="w-full h-8 bg-zinc-800 text-white flex items-center justify-center text-xs"
              >
                {i === 2 ? 'TOP' : i}
              </motion.div>
            ))}
          </div>
        );
      case 'queue':
        return (
          <div className="flex gap-1 items-center border-y-2 border-zinc-800 p-1">
            <span className="text-[10px] font-bold rotate-90">FRONT</span>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-8 h-10 bg-zinc-200 border border-zinc-400 flex items-center justify-center text-xs"
              >
                {i}
              </motion.div>
            ))}
            <span className="text-[10px] font-bold rotate-90">REAR</span>
          </div>
        );
      case 'linked-list':
        return (
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex border border-zinc-800"
                >
                  <div className="w-8 h-8 bg-white flex items-center justify-center text-xs border-r border-zinc-800">{i}</div>
                  <div className="w-4 h-8 bg-zinc-100 flex items-center justify-center">
                    <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                  </div>
                </motion.div>
                {i < 2 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 16 }}
                    transition={{ delay: i * 0.2 + 0.1 }}
                    className="h-[2px] bg-zinc-800 relative"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 border-t-2 border-r-2 border-zinc-800 rotate-45" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        );
      case 'tree':
        return (
          <div className="relative w-32 h-32 flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="w-8 h-8 rounded-full border-2 border-zinc-800 flex items-center justify-center text-xs bg-white z-10"
            >
              R
            </motion.div>
            <div className="flex gap-8 mt-4 relative">
              <div className="absolute top-[-16px] left-1/2 w-12 h-[2px] bg-zinc-800 -translate-x-1/2 rotate-[30deg] origin-left" />
              <div className="absolute top-[-16px] right-1/2 w-12 h-[2px] bg-zinc-800 translate-x-1/2 -rotate-[30deg] origin-right" />
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
                className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center text-[10px] bg-white z-10"
              >
                L
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}
                className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center text-[10px] bg-white z-10"
              >
                R
              </motion.div>
            </div>
          </div>
        );
      case 'graph':
        return (
          <div className="relative w-32 h-32">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border border-zinc-800 bg-white z-10 flex items-center justify-center text-[10px]">A</motion.div>
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="absolute bottom-2 left-2 w-6 h-6 rounded-full border border-zinc-800 bg-white z-10 flex items-center justify-center text-[10px]">B</motion.div>
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="absolute bottom-2 right-2 w-6 h-6 rounded-full border border-zinc-800 bg-white z-10 flex items-center justify-center text-[10px]">C</motion.div>
             <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="50%" y1="15%" x2="15%" y2="85%" stroke="black" strokeWidth="1" />
                <line x1="50%" y1="15%" x2="85%" y2="85%" stroke="black" strokeWidth="1" />
                <line x1="15%" y1="85%" x2="85%" y2="85%" stroke="black" strokeWidth="1" />
             </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-32 flex items-center justify-center bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
      {renderVisual()}
    </div>
  );
};
