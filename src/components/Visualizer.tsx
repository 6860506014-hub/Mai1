import React from 'react';
import { motion } from 'motion/react';

interface VisualizerProps {
  type: 'array' | 'stack' | 'queue' | 'linked-list' | 'tree' | 'graph';
  elements: number[];
}

export const Visualizer: React.FC<VisualizerProps> = ({ type, elements }) => {
  const renderVisual = () => {
    switch (type) {
      case 'array':
        return (
          <div className="flex flex-wrap gap-1 p-4 justify-center">
            {elements.map((val, i) => (
              <motion.div
                key={`${i}-${val}`}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-12 h-12 border-2 border-zinc-800 flex flex-col items-center justify-center bg-white shadow-sm"
              >
                <span className="text-xs font-bold">{val}</span>
                <span className="text-[8px] text-zinc-400 font-mono mt-1">[{i}]</span>
              </motion.div>
            ))}
            {elements.length === 0 && <div className="text-zinc-400 text-xs italic">Empty Array</div>}
          </div>
        );
      case 'stack':
        return (
          <div className="flex flex-col-reverse gap-1 border-b-4 border-x-4 border-zinc-800 p-2 w-24 min-h-[120px] justify-start">
            {elements.map((val, i) => (
              <motion.div
                key={`${i}-${val}`}
                layout
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full h-10 bg-zinc-800 text-white flex items-center justify-center text-sm font-bold shadow-inner"
              >
                {val}
                {i === elements.length - 1 && <span className="absolute -right-12 text-[10px] text-zinc-900 font-bold">TOP</span>}
              </motion.div>
            ))}
            {elements.length === 0 && <div className="text-zinc-400 text-[10px] text-center mt-auto">EMPTY STACK</div>}
          </div>
        );
      case 'queue':
        return (
          <div className="flex gap-1 items-center border-y-4 border-zinc-800 p-2 min-w-[200px] justify-center">
            <div className="flex flex-col items-center mr-2">
              <span className="text-[10px] font-bold text-zinc-400 uppercase">Front</span>
            </div>
            <div className="flex gap-1">
              {elements.map((val, i) => (
                <motion.div
                  key={`${i}-${val}`}
                  layout
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="w-10 h-12 bg-zinc-200 border-2 border-zinc-400 flex items-center justify-center text-sm font-bold"
                >
                  {val}
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col items-center ml-2">
              <span className="text-[10px] font-bold text-zinc-400 uppercase">Rear</span>
            </div>
            {elements.length === 0 && <div className="text-zinc-400 text-xs italic">Empty Queue</div>}
          </div>
        );
      case 'linked-list':
        return (
          <div className="flex flex-wrap items-center gap-y-4 gap-x-0 p-4 justify-center">
            {elements.map((val, i) => (
              <React.Fragment key={`${i}-${val}`}>
                <motion.div
                  layout
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex border-2 border-zinc-800 shadow-sm"
                >
                  <div className="w-10 h-10 bg-white flex items-center justify-center text-sm font-bold border-r-2 border-zinc-800">{val}</div>
                  <div className="w-5 h-10 bg-zinc-100 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
                  </div>
                </motion.div>
                {i < elements.length - 1 ? (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 24 }}
                    className="h-[2px] bg-zinc-800 relative"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-zinc-800 rotate-45" />
                  </motion.div>
                ) : (
                  <div className="w-8 flex items-center justify-center text-[10px] font-mono text-zinc-400 ml-2">NULL</div>
                )}
              </React.Fragment>
            ))}
            {elements.length === 0 && <div className="text-zinc-400 text-xs italic">Empty List</div>}
          </div>
        );
      case 'tree':
        // Simplified Binary Tree visualization for dynamic elements
        return (
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="text-[10px] text-zinc-400 uppercase font-mono mb-2">Level Order Representation</div>
            <div className="flex flex-wrap gap-4 justify-center">
              {elements.map((val, i) => (
                <motion.div
                  key={`${i}-${val}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-10 h-10 rounded-full border-2 border-zinc-800 flex items-center justify-center text-sm font-bold bg-white shadow-sm relative"
                >
                  {val}
                  <span className="absolute -bottom-4 text-[8px] text-zinc-400">Node {i}</span>
                </motion.div>
              ))}
            </div>
            {elements.length === 0 && <div className="text-zinc-400 text-xs italic">Empty Tree</div>}
          </div>
        );
      case 'graph':
        return (
          <div className="flex flex-wrap gap-4 p-4 justify-center">
            {elements.map((val, i) => (
              <motion.div
                key={`${i}-${val}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-12 h-12 rounded-lg border-2 border-zinc-800 bg-white flex items-center justify-center text-sm font-bold shadow-sm relative"
              >
                {val}
                {i > 0 && (
                  <div className="absolute -left-4 top-1/2 w-4 h-[2px] bg-zinc-300 -z-10" />
                )}
              </motion.div>
            ))}
            {elements.length === 0 && <div className="text-zinc-400 text-xs italic">Empty Graph</div>}
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
