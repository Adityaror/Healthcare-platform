import React, { useState, useEffect } from 'react';
import { X, Sparkles, Palette, RotateCcw, Check } from 'lucide-react';

const DEFAULT_GRADIENT = 'linear-gradient(45deg, #e1d3b7 0%, #897d67 100%)';

// Curated 2-Color Gradient Presets
const GRADIENT_PRESETS = [
  {
    name: 'Antique Gold Silk (Default)',
    c1: '#e1d3b7',
    c2: '#897d67',
    angle: 45,
    css: 'linear-gradient(45deg, #e1d3b7 0%, #897d67 100%)',
  },
  {
    name: 'Silk & Cashmere',
    c1: '#fdfbf7',
    c2: '#f6f0e4',
    angle: 180,
    css: 'linear-gradient(180deg, #fdfbf7 0%, #fbf8f2 50%, #f6f0e4 100%)',
  },
  {
    name: 'Ivory Champagne',
    c1: '#ffffff',
    c2: '#f5efe3',
    angle: 180,
    css: 'linear-gradient(180deg, #ffffff 0%, #f5efe3 100%)',
  },
  {
    name: 'Warm Linen',
    c1: '#faf6ee',
    c2: '#eedfcb',
    angle: 135,
    css: 'linear-gradient(135deg, #faf6ee 0%, #eedfcb 100%)',
  },
  {
    name: 'Obsidian Noir (Dark)',
    c1: '#14110e',
    c2: '#282119',
    angle: 180,
    css: 'linear-gradient(180deg, #14110e 0%, #282119 100%)',
  },
];

// Curated Solid Color Swatches
const SOLID_PRESETS = [
  { name: 'Luminous Silk', color: '#fdfbf7' },
  { name: 'Soft Cashmere', color: '#fbf8f2' },
  { name: 'Warm Champagne', color: '#f5efe3' },
  { name: 'Light Linen', color: '#f4ece1' },
  { name: 'Pure White', color: '#ffffff' },
  { name: 'Obsidian Dark', color: '#14110e' },
];

export default function ThemeCustomizerModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('gradient'); // 'gradient' | 'solid'

  // Gradient mode states
  const [colorStart, setColorStart] = useState('#e1d3b7');
  const [colorEnd, setColorEnd] = useState('#897d67');
  const [angle, setAngle] = useState(45);

  // Solid mode state
  const [solidColor, setSolidColor] = useState('#e1d3b7');

  // Load existing state on mount
  useEffect(() => {
    const saved = localStorage.getItem('dr_mulay_active_gradient_css') || DEFAULT_GRADIENT;
    if (saved.startsWith('linear-gradient')) {
      setMode('gradient');
    } else if (saved.startsWith('#') || saved.startsWith('rgb')) {
      setMode('solid');
      setSolidColor(saved);
    }
  }, []);

  if (!isOpen) return null;

  // Apply gradient
  const applyGradient = (c1, c2, deg) => {
    setColorStart(c1);
    setColorEnd(c2);
    setAngle(deg);
    const css = `linear-gradient(${deg}deg, ${c1} 0%, ${c2} 100%)`;
    document.documentElement.style.setProperty('--section-bg-gradient', css);
    localStorage.setItem('dr_mulay_active_gradient_css', css);
  };

  // Apply solid color
  const applySolid = (color) => {
    setSolidColor(color);
    const css = `linear-gradient(0deg, ${color} 0%, ${color} 100%)`;
    document.documentElement.style.setProperty('--section-bg-gradient', css);
    localStorage.setItem('dr_mulay_active_gradient_css', css);
  };

  // Reset to default
  const handleReset = () => {
    setMode('gradient');
    setColorStart('#e1d3b7');
    setColorEnd('#897d67');
    setAngle(45);
    document.documentElement.style.setProperty('--section-bg-gradient', DEFAULT_GRADIENT);
    localStorage.setItem('dr_mulay_active_gradient_css', DEFAULT_GRADIENT);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#eedfcb] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1f1b16] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#dfba79]/20 border border-[#dfba79]/40 flex items-center justify-center text-[#dfba79]">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-base sm:text-lg font-bold text-white">
                Background Theme Studio
              </h2>
              <p className="text-[11px] text-gray-300">
                Choose a solid color or customize a 2-color gradient
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Mode Switcher */}
          <div className="grid grid-cols-2 p-1 bg-[#f5efe3] rounded-xl border border-[#eedfcb]">
            <button
              onClick={() => {
                setMode('gradient');
                applyGradient(colorStart, colorEnd, angle);
              }}
              className={`flex items-center justify-center space-x-2 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                mode === 'gradient'
                  ? 'bg-white text-[#1f1b16] shadow-sm'
                  : 'text-[#6e6355] hover:text-[#1f1b16]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c5932b]" />
              <span>2-Color Gradient</span>
            </button>
            <button
              onClick={() => {
                setMode('solid');
                applySolid(solidColor);
              }}
              className={`flex items-center justify-center space-x-2 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                mode === 'solid'
                  ? 'bg-white text-[#1f1b16] shadow-sm'
                  : 'text-[#6e6355] hover:text-[#1f1b16]'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-[#c5932b]" />
              <span>Single Solid Color</span>
            </button>
          </div>

          {/* ================= 2-COLOR GRADIENT MODE ================= */}
          {mode === 'gradient' && (
            <div className="space-y-5">
              {/* Live Preview Strip */}
              <div 
                className="h-14 rounded-xl border border-[#eedfcb] shadow-inner flex items-center justify-center px-4 transition-all duration-300"
                style={{ background: `linear-gradient(${angle}deg, ${colorStart} 0%, ${colorEnd} 100%)` }}
              >
                <div className="bg-white/90 backdrop-blur-xs px-3 py-1 rounded-md text-[11px] font-bold text-[#1f1b16] shadow-xs border border-[#eedfcb]/60">
                  Live Background Preview ({angle}°)
                </div>
              </div>

              {/* Color Pickers (2 Colors) */}
              <div className="grid grid-cols-2 gap-4">
                {/* Color 1 (Start) */}
                <div className="p-3.5 bg-[#fdfbf7] rounded-xl border border-[#eedfcb] space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#6e6355] block">
                    Color 1 (Start)
                  </label>
                  <div className="flex items-center space-x-2.5">
                    <input
                      type="color"
                      value={colorStart}
                      onChange={(e) => applyGradient(e.target.value, colorEnd, angle)}
                      className="w-10 h-10 rounded-lg cursor-pointer border border-[#eedfcb] bg-transparent p-0.5"
                    />
                    <input
                      type="text"
                      value={colorStart}
                      onChange={(e) => applyGradient(e.target.value, colorEnd, angle)}
                      className="w-full px-2.5 py-1.5 text-xs font-mono font-bold bg-white border border-[#eedfcb] rounded-lg text-[#1f1b16]"
                    />
                  </div>
                </div>

                {/* Color 2 (End) */}
                <div className="p-3.5 bg-[#fdfbf7] rounded-xl border border-[#eedfcb] space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#6e6355] block">
                    Color 2 (End)
                  </label>
                  <div className="flex items-center space-x-2.5">
                    <input
                      type="color"
                      value={colorEnd}
                      onChange={(e) => applyGradient(colorStart, e.target.value, angle)}
                      className="w-10 h-10 rounded-lg cursor-pointer border border-[#eedfcb] bg-transparent p-0.5"
                    />
                    <input
                      type="text"
                      value={colorEnd}
                      onChange={(e) => applyGradient(colorStart, e.target.value, angle)}
                      className="w-full px-2.5 py-1.5 text-xs font-mono font-bold bg-white border border-[#eedfcb] rounded-lg text-[#1f1b16]"
                    />
                  </div>
                </div>
              </div>

              {/* Gradient Direction / Angle */}
              <div className="p-3.5 bg-[#fdfbf7] rounded-xl border border-[#eedfcb] space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-[#1f1b16]">
                  <span className="text-[11px] uppercase tracking-wider text-[#6e6355]">Gradient Direction</span>
                  <span className="font-mono text-[#916922] bg-[#f5efe3] px-2 py-0.5 rounded">{angle}°</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { deg: 180, label: 'Vertical' },
                    { deg: 135, label: 'Diagonal' },
                    { deg: 90, label: 'Horizontal' },
                    { deg: 45, label: 'Angle' },
                  ].map((d) => (
                    <button
                      key={d.deg}
                      type="button"
                      onClick={() => applyGradient(colorStart, colorEnd, d.deg)}
                      className={`py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                        angle === d.deg
                          ? 'bg-[#1f1b16] text-white shadow-xs'
                          : 'bg-white text-[#5c544b] border border-[#eedfcb] hover:border-[#c5932b]'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Curated 1-Click Gradient Presets */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6e6355] block">
                  Curated Presets
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {GRADIENT_PRESETS.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => applyGradient(preset.c1, preset.c2, preset.angle)}
                      className="p-2.5 bg-white border border-[#eedfcb] hover:border-[#c5932b] rounded-xl flex items-center space-x-3 text-left transition-all hover:shadow-xs cursor-pointer group"
                    >
                      <div 
                        className="w-7 h-7 rounded-lg border border-gray-300 shadow-xs flex-shrink-0"
                        style={{ background: preset.css }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-[#1f1b16] group-hover:text-[#916922] truncate">
                          {preset.name}
                        </div>
                        <div className="text-[10px] text-gray-400 font-mono">
                          {preset.c1} → {preset.c2}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= SINGLE SOLID COLOR MODE ================= */}
          {mode === 'solid' && (
            <div className="space-y-5">
              {/* Live Preview Strip */}
              <div 
                className="h-14 rounded-xl border border-[#eedfcb] shadow-inner flex items-center justify-center px-4 transition-all duration-300"
                style={{ backgroundColor: solidColor }}
              >
                <div className="bg-white/90 backdrop-blur-xs px-3 py-1 rounded-md text-[11px] font-bold text-[#1f1b16] shadow-xs border border-[#eedfcb]/60">
                  Live Solid Color Preview
                </div>
              </div>

              {/* Single Color Picker */}
              <div className="p-3.5 bg-[#fdfbf7] rounded-xl border border-[#eedfcb] space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#6e6355] block">
                  Select Background Color
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={solidColor}
                    onChange={(e) => applySolid(e.target.value)}
                    className="w-12 h-12 rounded-lg cursor-pointer border border-[#eedfcb] bg-transparent p-0.5"
                  />
                  <input
                    type="text"
                    value={solidColor}
                    onChange={(e) => applySolid(e.target.value)}
                    className="w-full px-3 py-2 text-sm font-mono font-bold bg-white border border-[#eedfcb] rounded-lg text-[#1f1b16]"
                  />
                </div>
              </div>

              {/* Curated Solid Swatches */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6e6355] block">
                  Curated Solid Swatches
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SOLID_PRESETS.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => applySolid(preset.color)}
                      className={`p-2.5 rounded-xl border text-left flex items-center space-x-2.5 transition-all cursor-pointer ${
                        solidColor.toLowerCase() === preset.color.toLowerCase()
                          ? 'bg-[#f5efe3] border-[#c5932b] shadow-xs'
                          : 'bg-white border-[#eedfcb] hover:border-[#c5932b]'
                      }`}
                    >
                      <div 
                        className="w-5 h-5 rounded-md border border-gray-300 shadow-xs flex-shrink-0"
                        style={{ backgroundColor: preset.color }}
                      />
                      <span className="text-xs font-bold text-[#1f1b16] truncate">
                        {preset.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#fdfbf7] border-t border-[#eedfcb] flex items-center justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#6e6355] hover:text-[#1f1b16] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#c5932b]" />
            <span>Reset to Default</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#1f1b16] hover:bg-[#b5936d] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
          >
            Done &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
