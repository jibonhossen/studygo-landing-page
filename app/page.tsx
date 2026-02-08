"use client";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BellOff,
  Check,
  Terminal,
  Zap,
  BarChart3,
  Timer,
  Shield,
  Flag,
  Globe,
  MessageCircle,
  Gamepad2,
  Home,
  Mail,
  AtSign,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-300 font-[var(--font-sans)] antialiased overflow-x-hidden">
      <Navigation />
      <Hero />
      <BentoGrid />
      <SetupSection />
      <SocialProof />
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white hover:text-[#0d59f2] transition-colors cursor-pointer">
          <Zap className="h-5 w-5 text-[#0d59f2]" />
          <span className="text-lg font-bold tracking-tight">Study Go</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a className="hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-white transition-colors" href="#manifesto">Manifesto</a>
          <a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
          <a className="hover:text-white transition-colors" href="#changelog">Changelog</a>
        </div>
        <div className="flex items-center gap-4">
          <a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
          <button className="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold py-2 px-4 rounded-full border border-white/10 transition-all">
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] grid-bg pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d59f2]/10 border border-[#0d59f2]/20 text-[#0d59f2] text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d59f2] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d59f2]"></span>
          </span>
          v2.0 Now Available
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Master Your Focus.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-600">
            Tracking for Serious Students.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
          The high-performance workspace for academic excellence. Built for flow state, engineered for deep work, and designed to disappear.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="shimmer-btn h-12 px-8 rounded-full text-white font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(13,89,242,0.3)] hover:shadow-[0_0_30px_rgba(13,89,242,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
            Start Tracking
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2 group">
            <Terminal className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
            Read the Manifesto
          </button>
        </div>
      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Deep Work Analytics (Large) */}
        <div className="md:col-span-2 glass-panel rounded-xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-white text-lg font-semibold flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[#0d59f2]" />
                Deep Work Analytics
              </h3>
              <p className="text-zinc-500 text-sm mt-1">Focus trends over the last 30 days</p>
            </div>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5">Daily</span>
              <span className="text-xs px-2 py-1 rounded bg-[#0d59f2]/20 text-[#0d59f2] border border-[#0d59f2]/20">Weekly</span>
            </div>
          </div>
          <div className="w-full h-48 relative flex items-end justify-between gap-1 px-2">
            <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-[#0d59f2]/5 to-transparent rounded-lg"></div>
            <AnalyticsChart />
            {/* Tooltip */}
            <div className="absolute top-1/4 left-2/3 transform -translate-x-1/2 flex flex-col items-center">
              <div className="bg-zinc-800 border border-zinc-700 text-white text-xs px-2 py-1 rounded mb-1 shadow-lg">4.5 hrs</div>
              <div className="w-px h-24 bg-[#0d59f2]/50 border-r border-dashed border-[#0d59f2]"></div>
              <div className="w-2 h-2 rounded-full bg-[#0d59f2] mt-[-4px]"></div>
            </div>
          </div>
        </div>

        {/* Card 2: Pomodoro Engine */}
        <div className="md:col-span-1 glass-panel rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden group transition-all duration-300">
          <div className="absolute top-4 left-4 z-10">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <Timer className="h-4 w-4 text-zinc-400" />
              Engine
            </h3>
          </div>
          <PomodoroTimer />
          <div className="flex gap-2 mt-4 w-full">
            <button className="flex-1 bg-white/5 hover:bg-white/10 text-white text-xs py-2 rounded border border-white/5 transition-colors">Pause</button>
            <button className="flex-1 bg-white/5 hover:bg-white/10 text-white text-xs py-2 rounded border border-white/5 transition-colors">Stop</button>
          </div>
        </div>

        {/* Card 3: Distraction Shield */}
        <div className="md:col-span-1 glass-panel rounded-xl p-6 flex flex-col justify-between group transition-all duration-300">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white text-sm font-semibold flex items-center gap-2">
                <BellOff className="h-4 w-4 text-red-400" />
                Shield
              </h3>
              <p className="text-zinc-500 text-xs mt-1">Block active</p>
            </div>
            <div className="w-10 h-6 rounded-full bg-[#0d59f2] flex items-center justify-end px-1 cursor-pointer">
              <div className="w-4 h-4 rounded-full bg-white shadow-sm"></div>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <div className="bg-zinc-900/50 p-2 rounded-lg border border-white/5 flex items-center justify-center w-10 h-10">
              <Globe className="h-4 w-4 text-zinc-500" />
            </div>
            <div className="bg-zinc-900/50 p-2 rounded-lg border border-white/5 flex items-center justify-center w-10 h-10">
              <MessageCircle className="h-4 w-4 text-zinc-500" />
            </div>
            <div className="bg-zinc-900/50 p-2 rounded-lg border border-white/5 flex items-center justify-center w-10 h-10">
              <Gamepad2 className="h-4 w-4 text-zinc-500" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 text-xs text-zinc-500">
              +12
            </div>
          </div>
        </div>

        {/* Card 4: Subject Goals (Medium) */}
        <div className="md:col-span-2 glass-panel rounded-xl p-6 flex flex-col group transition-all duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <Flag className="h-4 w-4 text-green-400" />
              Subject Goals
            </h3>
            <button className="text-xs text-zinc-500 hover:text-white transition-colors">Edit Goals</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            <ProgressBar label="Physics" value={85} color="bg-[#0d59f2]" />
            <ProgressBar label="Chemistry" value={42} color="bg-purple-500" />
            <ProgressBar label="Biology" value={60} color="bg-emerald-500" />
            <ProgressBar label="Higher Math" value={12} color="bg-yellow-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AnalyticsChart() {
  return (
    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0d59f2" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M0,40 L0,30 C10,32 20,25 30,28 C40,30 50,15 60,10 C70,5 80,12 90,8 L100,5 L100,40 Z"
        fill="url(#chart-gradient)"
        opacity="0.2"
      />
      <path
        d="M0,30 C10,32 20,25 30,28 C40,30 50,15 60,10 C70,5 80,12 90,8 L100,5"
        fill="none"
        stroke="#0d59f2"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function PomodoroTimer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : s)), 1000);
    return () => clearInterval(id);
  }, [running]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const progress = seconds / (25 * 60);
  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative w-40 h-40 flex items-center justify-center mt-4">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="80" cy="80" r="70" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="transparent"
          stroke="#0d59f2"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-mono font-bold text-white tracking-tighter">{mm}:{ss}</div>
        <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Focus</div>
      </div>
    </div>
  );
}

function ProgressBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs">
        <span className="text-zinc-300">{label}</span>
        <span className="text-zinc-500">{value}%</span>
      </div>
      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function SetupSection() {
  return (
    <section id="manifesto" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Description */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Setup in 30 Seconds</h2>
            <p className="text-zinc-400 leading-relaxed">
              Study Go is designed to integrate seamlessly into your workflow. Configure your subjects, sync your calendar, and start your first deep work session via CLI or our intuitive GUI.
            </p>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check className="h-3 w-3 text-green-500" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Connect your institution</p>
                <p className="text-zinc-500 text-xs mt-0.5">Auto-import course schedules and deadlines.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check className="h-3 w-3 text-green-500" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Define your stack</p>
                <p className="text-zinc-500 text-xs mt-0.5">Select allowed apps for Deep Work mode.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check className="h-3 w-3 text-green-500" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Initiate Flow</p>
                <p className="text-zinc-500 text-xs mt-0.5">One click to block distractions and start tracking.</p>
              </div>
            </li>
          </ul>
          <button className="text-[#0d59f2] text-sm font-medium hover:text-[#0d59f2]/80 flex items-center gap-1 group">
            View Documentation
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const universities = [
    "HARVARD", "MIT", "Stanford", "Berkeley", "Cambridge", "ETH Zürich", "OXFORD"
  ];

  return (
    <section className="border-t border-white/5 py-12 bg-[#0A0A0A] relative overflow-hidden">
      <p className="text-center text-zinc-500 text-xs font-medium uppercase tracking-widest mb-8">
        Trusted by students at top universities
      </p>
      <div className="marquee-container w-full overflow-hidden flex relative">
        <div className="flex gap-16 min-w-full animate-marquee items-center justify-around whitespace-nowrap px-8">
          {[...universities, ...universities].map((uni, idx) => (
            <span
              key={idx}
              className={`text-xl font-bold text-zinc-600 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 ${idx % 2 === 0 ? 'font-serif' : 'font-sans tracking-tight'
                }`}
            >
              {uni}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white">
          <Zap className="h-4 w-4 text-zinc-500" />
          <span className="text-sm font-semibold text-zinc-300">Study Go</span>
        </div>
        <div className="text-zinc-500 text-sm">
          © 2026 Study Go Inc. Designed for flow.
        </div>
        <div className="flex gap-6">
          <a className="text-zinc-500 hover:text-white transition-colors" href="#">
            <Home className="h-5 w-5" />
          </a>
          <a className="text-zinc-500 hover:text-white transition-colors" href="#">
            <Mail className="h-5 w-5" />
          </a>
          <a className="text-zinc-500 hover:text-white transition-colors" href="#">
            <AtSign className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
