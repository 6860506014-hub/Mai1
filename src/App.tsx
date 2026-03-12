/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  Database, 
  ChevronRight, 
  Info, 
  ArrowRight,
  LayoutGrid,
  GitBranch,
  Network,
  ListOrdered,
  SquareStack,
  ArrowDownUp
} from 'lucide-react';
import { DATA_STRUCTURES } from './constants';
import { DataStructure, DSCategory } from './types';
import { Visualizer } from './components/Visualizer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<DSCategory | 'all'>('all');
  const [selectedDS, setSelectedDS] = useState<DataStructure | null>(null);

  const filteredDS = selectedCategory === 'all' 
    ? DATA_STRUCTURES 
    : DATA_STRUCTURES.filter(ds => ds.category === selectedCategory);

  const getIcon = (type: string) => {
    switch (type) {
      case 'array': return <LayoutGrid className="w-5 h-5" />;
      case 'stack': return <SquareStack className="w-5 h-5" />;
      case 'queue': return <ArrowDownUp className="w-5 h-5" />;
      case 'linked-list': return <ListOrdered className="w-5 h-5" />;
      case 'tree': return <GitBranch className="w-5 h-5" />;
      case 'graph': return <Network className="w-5 h-5" />;
      default: return <Database className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-sm font-bold uppercase tracking-widest">DS Explorer</h1>
              <p className="text-[10px] text-zinc-500 font-mono uppercase">Data Structures Educational Tool</p>
            </div>
          </div>
          
          <nav className="flex gap-1 bg-zinc-100 p-1 rounded-full">
            {(['all', 'linear', 'non-linear'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedDS(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-white text-zinc-900 shadow-sm' 
                    : 'text-zinc-500 hover:text-zinc-700'
                }`}
              >
                {cat === 'all' ? 'ทั้งหมด' : cat === 'linear' ? 'เชิงเส้น' : 'ไม่เชิงเส้น'}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: List */}
          <div className="lg:col-span-4 space-y-8">
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif italic">โครงสร้างข้อมูล</h2>
                <span className="text-[10px] font-mono bg-zinc-200 px-2 py-0.5 rounded uppercase tracking-tighter">
                  {filteredDS.length} Items
                </span>
              </div>
              
              <div className="space-y-2">
                {filteredDS.map((ds) => (
                  <motion.button
                    layout
                    key={ds.id}
                    onClick={() => setSelectedDS(ds)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                      selectedDS?.id === ds.id 
                        ? 'bg-zinc-900 border-zinc-900 text-white shadow-lg' 
                        : 'bg-white border-zinc-200 hover:border-zinc-400'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${selectedDS?.id === ds.id ? 'bg-white/10' : 'bg-zinc-100'}`}>
                        {getIcon(ds.visualType)}
                      </div>
                      <div>
                        <div className="text-sm font-bold">{ds.nameThai}</div>
                        <div className={`text-[10px] font-mono uppercase ${selectedDS?.id === ds.id ? 'text-zinc-400' : 'text-zinc-500'}`}>
                          {ds.name}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedDS?.id === ds.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                  </motion.button>
                ))}
              </div>
            </section>

            {/* Quick Info Card */}
            <div className="p-6 bg-zinc-900 text-white rounded-2xl shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-lg font-serif italic mb-2">Did you know?</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  โครงสร้างข้อมูลเชิงเส้น (Linear) จะเชื่อมสมาชิกแบบลำดับต่อเนื่อง 
                  ในขณะที่แบบไม่เชิงเส้น (Non-Linear) สามารถแสดงความสัมพันธ์ที่ซับซ้อนได้มากกว่า
                </p>
              </div>
              <Database className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {selectedDS ? (
                <motion.div
                  key={selectedDS.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl border border-zinc-200 p-8 lg:p-12 shadow-sm min-h-[600px] flex flex-col"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2 block">
                        {selectedDS.category === 'linear' ? 'Linear Structure' : 'Non-Linear Structure'}
                      </span>
                      <h2 className="text-5xl font-serif italic mb-2">{selectedDS.nameThai}</h2>
                      <p className="text-xl text-zinc-500 font-light">{selectedDS.name}</p>
                    </div>
                    <div className="px-4 py-2 bg-zinc-100 rounded-full text-xs font-bold uppercase tracking-tighter">
                      {selectedDS.visualType}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
                          <Info className="w-3 h-3" /> คำอธิบาย
                        </h4>
                        <p className="text-zinc-600 leading-relaxed text-sm">
                          {selectedDS.descriptionThai}
                        </p>
                        <p className="text-zinc-400 italic text-xs mt-2">
                          {selectedDS.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
                          <ArrowRight className="w-3 h-3" /> คุณสมบัติหลัก
                        </h4>
                        <ul className="space-y-2">
                          {selectedDS.keyFeaturesThai.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-zinc-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
                        <Layers className="w-3 h-3" /> ภาพจำลอง (Visualization)
                      </h4>
                      <Visualizer type={selectedDS.visualType} />
                      <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                        <p className="text-[10px] text-zinc-400 font-mono uppercase mb-2">Technical Specs</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedDS.keyFeatures.map((f, i) => (
                            <span key={i} className="px-2 py-1 bg-white border border-zinc-200 rounded text-[9px] font-mono text-zinc-500">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-zinc-100 flex justify-between items-center">
                    <p className="text-[10px] text-zinc-400 font-mono">
                      © 2026 DATA STRUCTURE EXPLORER
                    </p>
                    <button 
                      onClick={() => setSelectedDS(null)}
                      className="text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4"
                    >
                      Close Details
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-zinc-200 rounded-3xl">
                  <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-zinc-400">
                    <Database className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif italic mb-2">เลือกโครงสร้างข้อมูล</h3>
                  <p className="text-sm text-zinc-500 max-w-xs">
                    คลิกเลือกโครงสร้างข้อมูลจากรายการด้านซ้ายเพื่อดูรายละเอียดและภาพจำลอง
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">About</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              เครื่องมือการเรียนรู้โครงสร้างข้อมูลเบื้องต้น ครอบคลุมทั้งแบบเชิงเส้นและไม่เชิงเส้น 
              ออกแบบมาเพื่อช่วยให้นักศึกษาสามารถเข้าใจความแตกต่างและการทำงานของแต่ละประเภทได้ง่ายขึ้น
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Linear Structures</h4>
            <ul className="text-xs text-zinc-500 space-y-2">
              <li>อาร์เรย์ (Array)</li>
              <li>สแต็ก (Stack)</li>
              <li>ลิงค์ลิสต์ (Linked-List)</li>
              <li>คิว (Queue)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Non-Linear Structures</h4>
            <ul className="text-xs text-zinc-500 space-y-2">
              <li>ทรี (Tree)</li>
              <li>กราฟ (Graph)</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
