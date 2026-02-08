<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Pules - Productivity for Students</title>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0d59f2",
                        "background-light": "#f5f6f8",
                        "background-dark": "#0A0A0A", // User requested #0A0A0A
                        "surface-dark": "#121212",
                        "border-dark": "#27272a", // Zinc 800
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "mono": ["JetBrains Mono", "monospace"],
                    },
                    backgroundImage: {
                        'grid-pattern': "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
                    }
                },
            },
        }
    </script>
<style>
        /* Custom Utilities */
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .grid-bg {
            background-size: 40px 40px;
            mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
            -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }

        .shimmer-btn {
            background: linear-gradient(110deg, #0d59f2 45%, #4f8aff 55%, #0d59f2);
            background-size: 200% 100%;
            animation: shine 3s infinite linear;
        }

        @keyframes shine {
            to {
                background-position-x: -200%;
            }
        }

        .marquee-container {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-zinc-300 font-display antialiased overflow-x-hidden selection:bg-primary/30 selection:text-white">
<!-- Navigation -->
<nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
<div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div class="flex items-center gap-2 text-white hover:text-primary transition-colors cursor-pointer">
<span class="material-symbols-outlined text-primary">bolt</span>
<span class="text-lg font-bold tracking-tight">Pules</span>
</div>
<div class="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a class="hover:text-white transition-colors" href="#">Features</a>
<a class="hover:text-white transition-colors" href="#">Manifesto</a>
<a class="hover:text-white transition-colors" href="#">Pricing</a>
<a class="hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div class="flex items-center gap-4">
<a class="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button class="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold py-2 px-4 rounded-full border border-white/10 transition-all">
                    Get Early Access
                </button>
</div>
</div>
</nav>
<!-- Hero Section -->
<section class="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<!-- Grid Background -->
<div class="absolute inset-0 z-0 opacity-[0.15] grid-bg bg-grid-pattern pointer-events-none"></div>
<div class="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-8 animate-fade-in-up">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                v2.0 Now Available
            </div>
<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Master Your Focus.<br/>
<span class="text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-600">Tracking for Serious Students.</span>
</h1>
<p class="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                The high-performance workspace for academic excellence. Built for flow state, engineered for deep work, and designed to disappear.
            </p>
<div class="flex flex-col sm:flex-row items-center gap-4">
<button class="shimmer-btn h-12 px-8 rounded-full text-white font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(13,89,242,0.3)] hover:shadow-[0_0_30px_rgba(13,89,242,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                    Start Tracking
                    <span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
<button class="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2 group">
<span class="material-symbols-outlined text-lg text-zinc-400 group-hover:text-white transition-colors">terminal</span>
                    Read the Manifesto
                </button>
</div>
</div>
</section>
<!-- Bento Grid Section -->
<section class="relative z-10 max-w-6xl mx-auto px-6 pb-32">
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Card 1: Deep Work Analytics (Large) -->
<div class="md:col-span-2 glass-panel rounded-xl p-6 md:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
<div class="flex justify-between items-start mb-6">
<div>
<h3 class="text-white text-lg font-semibold flex items-center gap-2">
<span class="material-symbols-outlined text-primary">analytics</span>
                            Deep Work Analytics
                        </h3>
<p class="text-zinc-500 text-sm mt-1">Focus trends over the last 30 days</p>
</div>
<div class="flex gap-2">
<span class="text-xs px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5">Daily</span>
<span class="text-xs px-2 py-1 rounded bg-primary/20 text-primary border border-primary/20">Weekly</span>
</div>
</div>
<div class="w-full h-48 relative flex items-end justify-between gap-1 px-2">
<!-- Abstract Chart Bars -->
<div class="w-full h-full absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-lg"></div>
<svg class="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,40 L0,30 C10,32 20,25 30,28 C40,30 50,15 60,10 C70,5 80,12 90,8 L100,5 L100,40 Z" fill="url(#gradient)" opacity="0.2"></path>
<path d="M0,30 C10,32 20,25 30,28 C40,30 50,15 60,10 C70,5 80,12 90,8 L100,5" fill="none" stroke="#0d59f2" stroke-width="0.5" vector-effect="non-scaling-stroke"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#0d59f2"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
<!-- Interactive looking tooltip -->
<div class="absolute top-1/4 left-2/3 transform -translate-x-1/2 flex flex-col items-center">
<div class="bg-zinc-800 border border-zinc-700 text-white text-xs px-2 py-1 rounded mb-1 shadow-lg">4.5 hrs</div>
<div class="w-px h-24 bg-primary/50 border-r border-dashed border-primary"></div>
<div class="w-2 h-2 rounded-full bg-primary mt-[-4px]"></div>
</div>
</div>
</div>
<!-- Card 2: Pomodoro Engine -->
<div class="md:col-span-1 glass-panel rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:border-white/20 transition-all duration-300">
<div class="absolute top-4 left-4 z-10">
<h3 class="text-white text-sm font-semibold flex items-center gap-2">
<span class="material-symbols-outlined text-zinc-400 text-lg">timer</span>
                        Engine
                    </h3>
</div>
<div class="relative w-40 h-40 flex items-center justify-center mt-4">
<!-- Progress Ring BG -->
<svg class="w-full h-full transform -rotate-90">
<circle cx="80" cy="80" fill="transparent" r="70" stroke="rgba(255,255,255,0.05)" stroke-width="4"></circle>
<circle cx="80" cy="80" fill="transparent" r="70" stroke="#0d59f2" stroke-dasharray="440" stroke-dashoffset="110" stroke-linecap="round" stroke-width="4"></circle>
</svg>
<div class="absolute text-center">
<div class="text-3xl font-mono font-bold text-white tracking-tighter">25:00</div>
<div class="text-xs text-zinc-500 uppercase tracking-widest mt-1">Focus</div>
</div>
</div>
<div class="flex gap-2 mt-4 w-full">
<button class="flex-1 bg-white/5 hover:bg-white/10 text-white text-xs py-2 rounded border border-white/5 transition-colors">Pause</button>
<button class="flex-1 bg-white/5 hover:bg-white/10 text-white text-xs py-2 rounded border border-white/5 transition-colors">Stop</button>
</div>
</div>
<!-- Card 3: Distraction Shield -->
<div class="md:col-span-1 glass-panel rounded-xl p-6 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
<div class="flex justify-between items-start">
<div>
<h3 class="text-white text-sm font-semibold flex items-center gap-2">
<span class="material-symbols-outlined text-red-400 text-lg">block</span>
                            Shield
                        </h3>
<p class="text-zinc-500 text-xs mt-1">Block active</p>
</div>
<div class="w-10 h-6 rounded-full bg-primary flex items-center justify-end px-1 cursor-pointer">
<div class="w-4 h-4 rounded-full bg-white shadow-sm"></div>
</div>
</div>
<div class="flex gap-3 mt-6">
<div class="bg-zinc-900/50 p-2 rounded-lg border border-white/5 flex items-center justify-center w-10 h-10">
<span class="material-symbols-outlined text-zinc-500 text-lg">public</span>
</div>
<div class="bg-zinc-900/50 p-2 rounded-lg border border-white/5 flex items-center justify-center w-10 h-10">
<span class="material-symbols-outlined text-zinc-500 text-lg">chat</span>
</div>
<div class="bg-zinc-900/50 p-2 rounded-lg border border-white/5 flex items-center justify-center w-10 h-10">
<span class="material-symbols-outlined text-zinc-500 text-lg">videogame_asset</span>
</div>
<div class="flex items-center justify-center w-10 h-10 text-xs text-zinc-500">
                        +12
                    </div>
</div>
</div>
<!-- Card 4: Subject Goals (Medium) -->
<div class="md:col-span-2 glass-panel rounded-xl p-6 flex flex-col group hover:border-white/20 transition-all duration-300">
<div class="flex justify-between items-center mb-6">
<h3 class="text-white text-sm font-semibold flex items-center gap-2">
<span class="material-symbols-outlined text-green-400 text-lg">flag</span>
                        Subject Goals
                    </h3>
<button class="text-xs text-zinc-500 hover:text-white transition-colors">Edit Goals</button>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
<!-- Item 1 -->
<div class="space-y-2">
<div class="flex justify-between text-xs">
<span class="text-zinc-300">Linear Algebra</span>
<span class="text-zinc-500">85%</span>
</div>
<div class="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[85%] rounded-full"></div>
</div>
</div>
<!-- Item 2 -->
<div class="space-y-2">
<div class="flex justify-between text-xs">
<span class="text-zinc-300">Macroeconomics</span>
<span class="text-zinc-500">42%</span>
</div>
<div class="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div class="h-full bg-purple-500 w-[42%] rounded-full"></div>
</div>
</div>
<!-- Item 3 -->
<div class="space-y-2">
<div class="flex justify-between text-xs">
<span class="text-zinc-300">Data Structures</span>
<span class="text-zinc-500">60%</span>
</div>
<div class="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div class="h-full bg-emerald-500 w-[60%] rounded-full"></div>
</div>
</div>
<!-- Item 4 -->
<div class="space-y-2">
<div class="flex justify-between text-xs">
<span class="text-zinc-300">Research Paper</span>
<span class="text-zinc-500">12%</span>
</div>
<div class="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div class="h-full bg-yellow-500 w-[12%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Setup Section -->
<section class="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<!-- Left: Description -->
<div class="space-y-8">
<div>
<h2 class="text-3xl font-bold text-white mb-4">Setup in 30 Seconds</h2>
<p class="text-zinc-400 leading-relaxed">
                        Pules is designed to integrate seamlessly into your workflow. Configure your subjects, sync your calendar, and start your first deep work session via CLI or our intuitive GUI.
                    </p>
</div>
<ul class="space-y-4">
<li class="flex items-start gap-3">
<div class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
<span class="material-symbols-outlined text-green-500 text-sm font-bold">check</span>
</div>
<div>
<p class="text-white text-sm font-medium">Connect your institution</p>
<p class="text-zinc-500 text-xs mt-0.5">Auto-import course schedules and deadlines.</p>
</div>
</li>
<li class="flex items-start gap-3">
<div class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
<span class="material-symbols-outlined text-green-500 text-sm font-bold">check</span>
</div>
<div>
<p class="text-white text-sm font-medium">Define your stack</p>
<p class="text-zinc-500 text-xs mt-0.5">Select allowed apps for Deep Work mode.</p>
</div>
</li>
<li class="flex items-start gap-3">
<div class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
<span class="material-symbols-outlined text-green-500 text-sm font-bold">check</span>
</div>
<div>
<p class="text-white text-sm font-medium">Initiate Flow</p>
<p class="text-zinc-500 text-xs mt-0.5">One click to block distractions and start tracking.</p>
</div>
</li>
</ul>
<button class="text-primary text-sm font-medium hover:text-primary/80 flex items-center gap-1 group">
                    View Documentation 
                    <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
<!-- Right: Terminal Mockup -->
<div class="rounded-xl bg-[#09090b] border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
<!-- Terminal Header -->
<div class="bg-zinc-900/80 px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
<div class="flex gap-1.5">
<div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
<div class="w-3 h-3 rounded-full bg-[#febc2e]"></div>
<div class="w-3 h-3 rounded-full bg-[#28c840]"></div>
</div>
<div class="flex-1 text-center text-zinc-500 text-xs">user@pules-env ~</div>
</div>
<!-- Terminal Body -->
<div class="p-6 space-y-2 text-zinc-300 min-h-[300px]">
<div class="flex">
<span class="text-green-500 mr-2">➜</span>
<span class="text-blue-400 mr-2">~</span>
<span class="typing-text">pules init study-session</span>
</div>
<div class="text-zinc-500 pt-1">Initializing workspace environment...</div>
<div class="text-zinc-500">Loading modules: <span class="text-white">analytics</span>, <span class="text-white">blocker</span>, <span class="text-white">timer</span></div>
<div class="pt-2">
<div class="flex justify-between text-zinc-400 text-xs mb-1">
<span>Syncing Canvas LMS...</span>
<span>Done (0.4s)</span>
</div>
<div class="w-full h-1 bg-zinc-800 rounded overflow-hidden">
<div class="h-full bg-green-500 w-full"></div>
</div>
</div>
<div class="pt-2">
<div class="flex justify-between text-zinc-400 text-xs mb-1">
<span>Blocking Social Media...</span>
<span>Done (0.1s)</span>
</div>
<div class="w-full h-1 bg-zinc-800 rounded overflow-hidden">
<div class="h-full bg-green-500 w-full"></div>
</div>
</div>
<div class="text-green-400 pt-4">✔ Session Ready. Deep work timer set for 50m.</div>
<div class="flex pt-2">
<span class="text-green-500 mr-2">➜</span>
<span class="text-blue-400 mr-2">~</span>
<span class="animate-pulse">_</span>
</div>
</div>
</div>
</div>
</section>
<!-- Social Proof Marquee -->
<section class="border-t border-white/5 py-12 bg-background-dark relative overflow-hidden">
<p class="text-center text-zinc-500 text-xs font-medium uppercase tracking-widest mb-8">Trusted by students at top universities</p>
<div class="marquee-container w-full overflow-hidden flex relative">
<div class="flex gap-16 min-w-full animate-[marquee_20s_linear_infinite] items-center justify-around whitespace-nowrap px-8">
<!-- Logos - using text placeholders with specific fonts to simulate university logos for cleaner output without external images -->
<span class="text-xl font-serif text-zinc-600 font-bold opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">HARVARD</span>
<span class="text-xl font-sans text-zinc-600 font-bold opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 tracking-tight">MIT</span>
<span class="text-xl font-serif text-zinc-600 font-bold opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">Stanford</span>
<span class="text-xl font-sans text-zinc-600 font-bold opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">Berkeley</span>
<span class="text-xl font-serif text-zinc-600 font-bold opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">Cambridge</span>
<span class="text-xl font-sans text-zinc-600 font-bold opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">ETH Zürich</span>
<span class="text-xl font-serif text-zinc-600 font-bold opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">OXFORD</span>
<!-- Duplicate for seamless loop -->
<span class="text-xl font-serif text-zinc-600 font-bold opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">HARVARD</span>
<span class="text-xl font-sans text-zinc-600 font-bold opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 tracking-tight">MIT</span>
<span class="text-xl font-serif text-zinc-600 font-bold opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">Stanford</span>
<span class="text-xl font-sans text-zinc-600 font-bold opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">Berkeley</span>
</div>
</div>
</section>
<!-- Footer -->
<footer class="border-t border-white/5 bg-background-dark py-12">
<div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div class="flex items-center gap-2 text-white">
<span class="material-symbols-outlined text-zinc-500">bolt</span>
<span class="text-sm font-semibold text-zinc-300">Pules</span>
</div>
<div class="text-zinc-500 text-sm">
                © 2023 Pules Inc. Designed for flow.
            </div>
<div class="flex gap-6">
<a class="text-zinc-500 hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined text-lg">home</span>
</a> <!-- Abstract icon -->
<a class="text-zinc-500 hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined text-lg">mail</span>
</a>
<a class="text-zinc-500 hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined text-lg">alternate_email</span>
</a>
</div>
</div>
</footer>
<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    </style>
</body></html>