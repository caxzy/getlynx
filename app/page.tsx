//© 2022-2026 LynxSoftworks.
//caxzy.github.io/getlynx 2026
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [tab, setTab] = useState('home');
  const [version, setVersion] = useState('loading...');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/caxzy/LynxOptimizer/refs/heads/main/appversion.txt')
      .then((res) => res.text())
      .then((text) => setVersion(text.trim()))
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-[#ededed] font-mono flex flex-col justify-between selection:bg-purple-600 selection:text-white">
      <header className="border-b border-[#222222] bg-[#141414]">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setTab('home')}>
            <span className="text-purple-400 font-bold tracking-tight text-lg">Lynx Optimizer</span>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <button
              onClick={() => setTab('home')}
              className={`transition-colors ${tab === 'home' ? 'text-purple-400 font-bold underline underline-offset-4' : 'text-neutral-400 hover:text-neutral-200'}`}
            >
              Home
            </button>
            <span className="text-neutral-700">/</span>
            <button
              onClick={() => setTab('download')}
              className={`transition-colors ${tab === 'download' ? 'text-purple-400 font-bold underline underline-offset-4' : 'text-neutral-400 hover:text-neutral-200'}`}
            >
              Download
            </button>
            <span className="text-neutral-700">/</span>
            <a
              href="https://discord.com/invite/JVEWR9CGk5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              Discord
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto w-full px-6 py-16 flex-1 flex flex-col justify-center">
        {tab === 'home' && (
          <div className="space-y-6">
            <div className="inline-block px-2.5 py-1 bg-purple-950/40 border border-purple-800/30 text-purple-300 text-xs rounded">
              Latest Build - {version}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              A new Windows optimizer designed for you.
            </h1>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
              From the project's collapse to its further development. The new Lynx Optimizer offers newer and better optimizations for Windows 10/11, designed specifically for you.
            </p>
            <div className="pt-2 flex gap-3">
              <button
                onClick={() => setTab('download')}
                className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
              >
                Get Lynx
              </button>
              <a
                href="https://github.com/caxzy/LynxOptimizer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm font-medium px-4 py-2 rounded transition-colors border border-neutral-700 flex items-center"
              >
                Github
              </a>
            </div>
          </div>
        )}

        {tab === 'download' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">Download</h2>
            <p className="text-neutral-400 text-sm">
              Download the latest version for your Windows 10 and 11 system.
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 bg-[#161616] border border-[#262626] rounded flex items-center justify-between text-sm">
                <div>
                  <span className="font-medium text-white">LynxOptimizer.zip</span>
                  <span className="block text-xs text-neutral-500 mt-0.5">Windows 10/11 (64-bit) (SOON.)</span>
                </div>
                <button className="bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors">
                  download
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="border-t border-[#222222] bg-[#141414] py-4">
        <div className="max-w-3xl mx-auto px-6 text-xs text-neutral-500 flex justify-between">
          <span>© 2022-2026 LynxSoftworks.</span>
        </div>
      </footer>
    </div>
  );
}