import { useState, useEffect, useRef } from "react";
import fver from '../assets/fver.png'
import pexels from '../assets/pexel.png'
import atla from '../assets/atla.png'
import fstudy from '../assets/fstudy.png'
import oldport from '../assets/oldport.png'
import medum from '../assets/medum.png'
import febase from '../assets/febase.png'
import utva from '../assets/utva.png'
import vica from '../assets/vica.png'
import cover from '../assets/cover.png'


import mindhaven from '../assets/mndhaven.jpeg'
import lnedln from '../assets/lnedln.jpeg'
import locaton from '../assets/locaton.jpeg'
import bank from '../assets/bank.jpeg'

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME ?? 'favjoyce';
const GITHUB_TOKEN    = import.meta.env.VITE_GITHUB_TOKEN    ?? '';

const FontLoader = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500;700&display=swap');`}</style>
);

const Icon = ({ name, size = 18, color = "currentColor", style = {} }) => {
  const icons = {
    menu: <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    close: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    arrowRight: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    arrowUpRight: <><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></>,
    arrowLeft: <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></>,
    github: <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    twitter: <><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
    youtube: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></>,
    globe: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
    smartphone: <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>,
    server: <><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></>,
    package: <><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>,
    code: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
    layers: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
    react: <><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></>,
    database: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>,
    cloud: <><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    externalLink: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></>,
    mapPin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>,
    check: <><polyline points="20 6 9 17 4 12"/></>,
    zap: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>,
    monitor: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
    activity: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
    chevronRight: <><polyline points="9 18 15 12 9 6"/></>,
    shopping: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    creditCard: <><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></>,
    image: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></>,
    truck: <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    hash: <><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></>,
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></>,
    coffee: <><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></>,
    target: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
    send: <><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
    user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    layout: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></>,
    maximize: <><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></>,
    x: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    java: <><path d="M9.5 20.5s-1.5 1-3.5.5c0 0 .5 1 3 .5"/><path d="M9 22s-2 1-4 0c0 0 .7 1.5 4 .5"/><path d="M10 17S7 18 7 16c0-2.5 4-6 4-6s3.5 4.5 2 7-3 1.5-3 1.5"/><path d="M14.5 8s2-1 1 2.5-4 4.5-4 4.5 4.5-.5 3.5 4c0 0 2-1.5 2-3.5s-4.5-4.5-4.5-4.5"/><path d="M16 22s2 1 4 0c0 0-.7 1.5-4 .5"/><path d="M15.5 20.5s1.5 1 3.5.5c0 0-.5 1-3 .5"/></>,
    cpu: <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></>,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      {icons[name] || null}
    </svg>
  );
};

const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #060608; --s1: #0d0d14; --s2: #13131f;
    --ac: #6ee7b7; --ac2: #818cf8; --ac3: #f472b6;
    --tx: #e2e8f0; --muted: #64748b; --border: rgba(255,255,255,0.07);
    --gfont: 'Syne', sans-serif; --mfont: 'JetBrains Mono', monospace;
    --ease: cubic-bezier(0.4, 0, 0.2, 1);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  html { scroll-behavior: smooth; }
  body {
    background: var(--bg); color: var(--tx); font-family: var(--mfont);
    overflow-x: hidden; -webkit-font-smoothing: antialiased;
    text-align: start;
  }
  /* Global text-align: start for all text elements */
  p, h1, h2, h3, h4, h5, h6, span, div, li, a, label, input, textarea, button {
    text-align: start;
  }
  a { text-decoration: none; color: inherit; }

  #cursor-dot, #cursor-ring {
    position: fixed; border-radius: 50%; pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 0; transition: opacity 0.3s;
    will-change: left, top;
  }
  #cursor-dot  { width: 7px; height: 7px; background: var(--ac); z-index: 9999; mix-blend-mode: difference; }
  #cursor-ring { width: 34px; height: 34px; border: 1.5px solid rgba(110,231,183,0.5); z-index: 9998; transition: width 0.22s var(--ease), height 0.22s var(--ease), border-color 0.22s, opacity 0.3s; }
  body.has-cursor { cursor: none; }
  body.has-cursor * { cursor: none !important; }
  body.has-cursor #cursor-dot, body.has-cursor #cursor-ring { opacity: 1; }
  body.has-cursor #cursor-ring.hovering { width: 52px; height: 52px; border-color: var(--ac); }

  #hero-canvas { position: absolute; inset: 0; z-index: 0; opacity: 0.65; pointer-events: none; }
  @media (max-width: 768px) { #hero-canvas { opacity: 0.2; } }

  nav { position: fixed; top: 0; left: 0; right: 0; z-index: 300; display: flex; align-items: center; justify-content: space-between; padding: 1.2rem clamp(1.5rem,5vw,4rem); background: linear-gradient(to bottom, rgba(6,6,8,0.97) 0%, transparent 100%); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); gap: 1rem; }
  .logo { font-family: var(--gfont); font-size: 1.0rem; font-weight: 800; letter-spacing: -0.03em; color: var(--tx); z-index: 301; flex-shrink: 0; }
  .logo span { color: var(--ac); }
  .nav-links { display: flex; gap: 2.2rem; list-style: none; align-items: center; }
  .nav-links a, .nav-links button { font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); transition: color 0.2s; background: none; border: none; font-family: var(--mfont); }
  .nav-links a:hover, .nav-links button:hover { color: var(--ac); }
  .menu-toggle { display: none; background: none; border: 1px solid var(--border); color: var(--tx); padding: 0.45rem; z-index: 301; border-radius: 2px; align-items: center; justify-content: center; transition: border-color 0.2s, color 0.2s; }
  .menu-toggle:hover { border-color: var(--ac); color: var(--ac); }
  .nav-right { display: flex; align-items: center; gap: 0.6rem; flex-shrink: 0; }
  .nav-btn { padding: 0.5rem 1.3rem; border: 1px solid var(--ac); color: var(--ac); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; font-family: var(--mfont); background: transparent; transition: var(--transition); position: relative; overflow: hidden; display: inline-flex; align-items: center; gap: 0.5rem; }
  .nav-btn::before { content: ''; position: absolute; inset: 0; background: var(--ac); transform: translateX(-101%); transition: transform 0.22s var(--ease); }
  .nav-btn:hover::before { transform: translateX(0); }
  .nav-btn span, .nav-btn svg { position: relative; z-index: 1; transition: color 0.22s; }
  .nav-btn:hover span, .nav-btn:hover svg { color: var(--bg); }
  .ghost-btn { padding: 0.5rem 1rem; border: 1px solid var(--border); color: var(--muted); font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; font-family: var(--mfont); background: transparent; transition: var(--transition); display: inline-flex; align-items: center; gap: 0.4rem; }
  .ghost-btn:hover { border-color: var(--ac); color: var(--ac); }
  .mobile-projects-btn { display: none; }

  @media (max-width: 768px) {
    .mobile-projects-btn {
      display: flex; align-items: center; gap: 0.4rem; background: none;
      border: 1px solid var(--border); color: var(--muted); font-family: var(--mfont);
      font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase;
      padding: 0.42rem 0.75rem; border-radius: 2px;
      transition: border-color 0.2s, color 0.2s; order: -1;
    }
    .mobile-projects-btn:hover { border-color: var(--ac); color: var(--ac); }
    .menu-toggle { display: flex; }
    .nav-links { position: fixed; top: 0; right: -100%; height: 100vh; width: min(72%,300px); background: rgba(6,6,8,0.99); backdrop-filter: blur(24px); flex-direction: column; justify-content: center; align-items: center; gap: 2rem; transition: right 0.35s var(--ease); z-index: 299; border-left: 1px solid var(--border); }
    .nav-links.active { right: 0; }
    .nav-links a, .nav-links button { font-size: 0.9rem; }
    .ghost-btn, .nav-btn { display: none; }
  }
  .nav-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 298; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .nav-overlay.active { opacity: 1; pointer-events: all; }

  .hero { min-height: 100svh; display: flex; align-items: center; padding: clamp(5rem,12vw,9rem) clamp(1.5rem,5vw,4rem) clamp(3rem,6vw,5rem); position: relative; overflow: hidden; }
  .hero-content { position: relative; z-index: 1; max-width: 760px; width: 100%; }
  .hero-eyebrow { display: inline-flex; align-items: center; gap: 0.6rem; padding: 0.38rem 1rem; background: rgba(110,231,183,0.07); border: 1px solid rgba(110,231,183,0.18); border-radius: 100px; font-size: 0.66rem; letter-spacing: 0.14em; color: var(--ac); text-transform: uppercase; margin-bottom: 2rem; animation: fadeUp 0.7s ease both; }
  .status-dot { width: 6px; height: 6px; background: var(--ac); border-radius: 50%; animation: breathe 2.5s ease-in-out infinite; flex-shrink: 0; }
  @keyframes breathe { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  .hero-title { font-family: var(--gfont); font-size: clamp(2.6rem,9vw,6.5rem); font-weight: 800; line-height: 0.92; letter-spacing: -0.04em; margin-bottom: 1.5rem; animation: fadeUp 0.7s 0.1s ease both; text-align: start; }
  .hero-title .highlight { background: linear-gradient(135deg, var(--ac), var(--ac2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; display: block; }
  .hero-desc { font-size: clamp(0.8rem,2.8vw,0.92rem); color: var(--muted); line-height: 1.9; max-width: 500px; margin-bottom: 2.5rem; animation: fadeUp 0.7s 0.2s ease both; text-align: start; }
  .hero-desc strong { color: var(--tx); }
  .hero-ctas { display: flex; gap: 0.85rem; flex-wrap: wrap; animation: fadeUp 0.7s 0.3s ease both; }
  .cta-primary { display: inline-flex; align-items: center; gap: 0.55rem; padding: clamp(0.7rem,2vw,0.9rem) clamp(1.3rem,3vw,2rem); background: var(--ac); color: var(--bg); font-family: var(--mfont); font-size: clamp(0.68rem,2vw,0.76rem); font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; transition: var(--transition); clip-path: polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px)); }
  .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 36px rgba(110,231,183,0.32); }
  .cta-secondary { display: inline-flex; align-items: center; gap: 0.55rem; font-size: clamp(0.68rem,2vw,0.76rem); color: var(--muted); letter-spacing: 0.07em; text-transform: uppercase; transition: var(--transition); padding: clamp(0.7rem,2vw,0.9rem) clamp(1rem,2.5vw,1.5rem); border: 1px solid var(--border); }
  .cta-secondary:hover { color: var(--tx); border-color: rgba(255,255,255,0.18); }
  .hero-metrics { display: flex; flex-wrap: wrap; gap: 0; margin-top: clamp(3rem,6vw,5rem); padding-top: 2.5rem; border-top: 1px solid var(--border); animation: fadeUp 0.7s 0.4s ease both; }
  .metric { flex: 1; min-width: 100px; padding: 0 clamp(1.2rem,3vw,2rem); position: relative; }
  .metric:first-child { padding-left: 0; }
  .metric:not(:last-child)::after { content: ''; position: absolute; right: 0; top: 10%; bottom: 10%; width: 1px; background: var(--border); }
  @media (max-width: 480px) { .metric:not(:last-child)::after { display: none; } .metric { padding: 0.8rem 0; border-bottom: 1px solid var(--border); } .metric:last-child { border-bottom: none; } }
  .metric-val { font-family: var(--gfont); font-size: clamp(2rem,5vw,2.8rem); font-weight: 800; line-height: 1; letter-spacing: -0.04em; background: linear-gradient(135deg, var(--tx), var(--ac)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .metric-label { font-size: clamp(0.58rem,1.8vw,0.66rem); color: var(--muted); letter-spacing: 0.12em; text-transform: uppercase; margin-top: 0.35rem; }
  .scroll-cue { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.4rem; animation: fadeIn 1.5s 1s ease both; color: var(--muted); font-size: 0.62rem; letter-spacing: 0.15em; text-transform: uppercase; }
  @media (max-width: 768px) { .scroll-cue { display: none; } }
  .scroll-line { width: 1px; height: 44px; background: linear-gradient(to bottom, var(--ac), transparent); animation: scrollPulse 2s ease-in-out infinite; }
  @keyframes scrollPulse { 0%,100%{opacity:.3;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.15)} }

  section { padding: clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,4rem); position: relative; }
  .sec-label { font-size: clamp(0.58rem,1.8vw,0.63rem); letter-spacing: 0.24em; text-transform: uppercase; color: var(--ac); margin-bottom: 0.6rem; text-align: start; }
  .sec-title { font-family: var(--gfont); font-size: clamp(1.8rem,5vw,3.2rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 0.85rem; text-align: start; }
  .sec-divider { width: 44px; height: 2px; background: var(--ac); margin-bottom: clamp(2rem,5vw,4rem); }

  /* ABOUT */
  .about-wrap { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(2rem,6vw,6rem); align-items: start; }
  @media (max-width: 900px) { .about-wrap { grid-template-columns: 1fr; } }
  .about-body p { font-size: clamp(0.8rem,2.5vw,0.88rem); color: var(--muted); line-height: 1.95; margin-bottom: 1rem; text-align: start; }
  .about-body p strong { color: var(--tx); }
  .skills-wrap { margin-top: 1.8rem; display: grid; grid-template-columns: repeat(auto-fill,minmax(148px,1fr)); gap: 0.5rem; }
  .skill-chip { display: flex; align-items: center; gap: 0.6rem; padding: 0.65rem 1rem; background: var(--s1); border: 1px solid var(--border); font-size: 0.74rem; color: var(--tx); transition: var(--transition); position: relative; overflow: hidden; }
  .skill-chip::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--ac); transform: scaleY(0); transition: transform 0.22s; transform-origin: bottom; }
  .skill-chip:hover::before { transform: scaleY(1); }
  .skill-chip:hover { background: var(--s2); border-color: rgba(110,231,183,0.22); }
  .skill-chip svg { flex-shrink: 0; color: var(--ac); }
  .id-card { background: var(--s1); border: 1px solid var(--border); position: relative; overflow: hidden; padding: clamp(1.5rem,4vw,2rem); }
  .id-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--ac), var(--ac2), var(--ac3)); }
  .id-card::after { content: ''; position: absolute; bottom: -80px; right: -80px; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(110,231,183,0.05), transparent); pointer-events: none; }
  .id-avatar { width: 68px; height: 68px; border-radius: 3px; background: linear-gradient(135deg, var(--ac2), var(--ac)); display: flex; align-items: center; justify-content: center; font-family: var(--gfont); font-size: 1.4rem; font-weight: 800; color: white; margin-bottom: 1.4rem; }
  .id-name { font-family: var(--gfont); font-size: 1.25rem; font-weight: 700; text-align: start; }
  .id-role { font-size: 0.7rem; color: var(--ac); letter-spacing: 0.1em; margin-top: 0.15rem; text-align: start; }
  .id-rows { margin-top: 1.4rem; display: flex; flex-direction: column; gap: 0.6rem; }
  .id-row { display: flex; justify-content: space-between; align-items: center; font-size: clamp(0.68rem,2vw,0.74rem); padding-bottom: 0.6rem; border-bottom: 1px solid var(--border); gap: 1rem; }
  .id-row .lbl { color: var(--muted); display: flex; align-items: center; gap: 0.4rem; }
  .id-row .lbl svg { opacity: 0.6; }
  .id-row .val { color: var(--tx); text-align: start; }
  .open-badge { display: flex; align-items: center; gap: 0.5rem; margin-top: 1.4rem; padding: 0.65rem 1rem; background: rgba(110,231,183,0.06); border: 1px solid rgba(110,231,183,0.15); font-size: 0.68rem; color: var(--ac); letter-spacing: 0.07em; }
  .open-dot { width: 7px; height: 7px; background: var(--ac); border-radius: 50%; animation: breathe 2s infinite; flex-shrink: 0; }

  /* ── GITHUB CALENDAR SECTION ── */
  .github-bg { background: var(--s1); }
  .github-inner { max-width: 1000px; }
  .github-calendar-wrap {
    background: var(--bg);
    border: 1px solid var(--border);
    padding: clamp(1.5rem,4vw,2.5rem);
    position: relative;
    overflow: hidden;
  }
  .github-calendar-wrap::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--ac), transparent);
  }
  /* Style the react-github-calendar component */
  .github-calendar-wrap .react-activity-calendar {
    width: 100% !important;
  }
  .github-calendar-wrap .react-activity-calendar__count {
    font-family: var(--mfont);
    font-size: 0.72rem;
    color: var(--muted);
    text-align: start;
  }
  .github-calendar-wrap tspan {
    fill: var(--muted) !important;
    font-family: var(--mfont) !important;
    font-size: 10px !important;
  }
  /* Pop animation on individual contribution cells */
  .github-calendar-wrap rect[data-date] {
    transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.15s ease;
    transform-origin: center;
    cursor: pointer;
  }
  .github-calendar-wrap rect[data-date]:hover {
    transform: scale(1.5);
    filter: brightness(1.4) drop-shadow(0 0 4px rgba(110,231,183,0.7));
  }
  .github-cta { display: flex; align-items: center; gap: 0.8rem; margin-top: 1.8rem; flex-wrap: wrap; }
  .github-cta-link { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.4rem; border: 1px solid var(--border); color: var(--muted); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; transition: var(--transition); font-family: var(--mfont); }
  .github-cta-link:hover { border-color: var(--ac); color: var(--ac); }
  .github-cta-link.primary { background: var(--ac); color: var(--bg); border-color: var(--ac); font-weight: 700; }
  .github-cta-link.primary:hover { box-shadow: 0 6px 24px rgba(110,231,183,0.3); transform: translateY(-1px); }

  /* PROJECTS */
  .projects-bg { background: var(--s1); }
  .filter-tabs { display: flex; gap: 0.4rem; margin-bottom: clamp(2rem,4vw,3rem); flex-wrap: wrap; }
  .filter-tab { padding: 0.45rem 1.1rem; background: transparent; border: 1px solid var(--border); color: var(--muted); font-family: var(--mfont); font-size: clamp(0.62rem,2vw,0.68rem); letter-spacing: 0.11em; text-transform: uppercase; transition: var(--transition); display: flex; align-items: center; gap: 0.4rem; }
  .filter-tab.active, .filter-tab:hover { background: var(--ac); color: var(--bg); border-color: var(--ac); }
  .projects-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(min(100%,320px),1fr)); gap: 1.25rem; }
  .proj-card { background: var(--bg); border: 1px solid var(--border); position: relative; overflow: hidden; transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s; }
  @media (hover: hover) { .proj-card:hover { transform: translateY(-7px) scale(1.01); box-shadow: 0 22px 55px rgba(0,0,0,0.55), 0 0 0 1px rgba(110,231,183,0.15); } .proj-card:hover .proj-arrow { opacity: 1; transform: translate(0,0); } .proj-card:hover .proj-shimmer { opacity: 1; } }
  @media (hover: none) { .proj-card:active { transform: scale(0.98); } }
  .proj-shimmer { position: absolute; inset: 0; background: linear-gradient(135deg, transparent 40%, rgba(110,231,183,0.03) 100%); opacity: 0; transition: opacity 0.35s; pointer-events: none; }
  .proj-thumb { height: 185px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
  .proj-thumb-canvas { position: absolute; inset: 0; }
  .proj-thumb-icon { position: relative; z-index: 1; filter: drop-shadow(0 0 18px rgba(0,0,0,0.7)); color: white; }
  .proj-badge { position: absolute; top: 1rem; right: 1rem; z-index: 2; padding: 0.22rem 0.6rem; font-size: 0.6rem; letter-spacing: 0.09em; text-transform: uppercase; font-weight: 700; }
  .badge-web { background: rgba(110,231,183,0.1); color: var(--ac); border: 1px solid rgba(110,231,183,0.25); }
  .badge-app { background: rgba(129,140,248,0.1); color: var(--ac2); border: 1px solid rgba(129,140,248,0.25); }
  .badge-fullstack { background: rgba(244,114,182,0.1); color: var(--ac3); border: 1px solid rgba(244,114,182,0.25); }
  .proj-body { padding: clamp(1rem,3vw,1.5rem); }
  .proj-top { display: flex; justify-content: space-between; align-items: flex-start; }
  .proj-title { font-family: var(--gfont); font-size: 1rem; font-weight: 700; text-align: start; }
  .proj-arrow { color: var(--ac); opacity: 0; transform: translate(-5px,5px); transition: var(--transition); flex-shrink: 0; }
  @media (hover: none) { .proj-arrow { opacity: 1; transform: translate(0,0); } }
  .proj-desc { font-size: clamp(0.73rem,2vw,0.78rem); color: var(--muted); line-height: 1.75; margin-top: 0.6rem; text-align: start; }
  .proj-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 1.1rem; }
  .proj-tag { padding: 0.2rem 0.55rem; background: var(--s1); border: 1px solid var(--border); font-size: 0.62rem; color: var(--muted); letter-spacing: 0.04em; }
  .proj-links { display: flex; gap: 1rem; margin-top: 1.1rem; padding-top: 1.1rem; border-top: 1px solid var(--border); flex-wrap: wrap; }
  .proj-link { font-size: 0.68rem; letter-spacing: 0.09em; text-transform: uppercase; transition: opacity 0.2s; color: var(--ac); display: flex; align-items: center; gap: 0.3rem; }
  .proj-link:hover { opacity: 0.6; }
  .proj-link.ghost { color: var(--muted); }

  /* SERVICES */
  .services-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); }
  @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr; } }
  .svc-card { background: var(--bg); padding: clamp(1.5rem,4vw,2.5rem); transition: background 0.25s; position: relative; overflow: hidden; }
  .svc-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--ac), transparent); transform: scaleX(0); transition: transform 0.35s; }
  .svc-card:hover { background: var(--s1); }
  .svc-card:hover::after { transform: scaleX(1); }
  .svc-icon { width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.4rem; background: rgba(110,231,183,0.07); border: 1px solid rgba(110,231,183,0.14); color: var(--ac); }
  .svc-title { font-family: var(--gfont); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.65rem; text-align: start; }
  .svc-desc { font-size: clamp(0.74rem,2.2vw,0.79rem); color: var(--muted); line-height: 1.85; text-align: start; }
  .svc-list { list-style: none; margin-top: 1.2rem; }
  .svc-list li { font-size: 0.72rem; color: var(--muted); padding: 0.32rem 0; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 0.5rem; text-align: start; }
  .svc-list li svg { color: var(--ac); flex-shrink: 0; }

  /* SOCIAL */
  .social-wrap { display: grid; grid-template-columns: 1fr 1.2fr; gap: clamp(2rem,6vw,5rem); align-items: start; }
  @media (max-width: 900px) { .social-wrap { grid-template-columns: 1fr; } }
  .social-body p { font-size: clamp(0.79rem,2.5vw,0.85rem); color: var(--muted); line-height: 1.9; margin-bottom: 1rem; text-align: start; }
  .content-box { margin-top: 2rem; padding: clamp(1rem,3vw,1.5rem); background: var(--s1); border: 1px solid var(--border); border-left: 2px solid var(--ac); }
  .content-box-title { font-size: clamp(0.58rem,1.8vw,0.63rem); letter-spacing: 0.2em; text-transform: uppercase; color: var(--ac); margin-bottom: 0.7rem; text-align: start; }
  .content-item { display: flex; align-items: center; gap: 0.6rem; font-size: 0.75rem; color: var(--muted); padding: 0.38rem 0; border-bottom: 1px solid var(--border); text-align: start; }
  .content-item:last-child { border-bottom: none; }
  .content-item svg { color: var(--ac); flex-shrink: 0; }
  .social-list { display: flex; flex-direction: column; gap: 0.6rem; }
  .social-item { display: flex; align-items: center; gap: 1.1rem; padding: 1rem clamp(1rem,3vw,1.25rem); background: var(--s1); border: 1px solid var(--border); color: var(--tx); transition: var(--transition); position: relative; overflow: hidden; }
  .social-item::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 0; background: rgba(110,231,183,0.05); transition: width 0.3s; }
  .social-item:hover::before { width: 100%; }
  .social-item:hover { border-color: rgba(110,231,183,0.22); transform: translateX(4px); }
  .social-icon { width: 40px; height: 40px; border-radius: 3px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; position: relative; z-index: 1; color: white; }
  .social-nm { font-family: var(--gfont); font-size: clamp(0.82rem,2.5vw,0.9rem); font-weight: 700; position: relative; z-index: 1; text-align: start; }
  .social-hd { font-size: clamp(0.62rem,1.8vw,0.68rem); color: var(--muted); margin-top: 0.08rem; position: relative; z-index: 1; text-align: start; }
  .social-arr { margin-left: auto; color: var(--muted); position: relative; z-index: 1; transition: transform 0.2s, color 0.2s; }
  .social-item:hover .social-arr { transform: translateX(3px); color: var(--ac); }

  /* CONTACT */
  .contact-bg { background: var(--s1); }
  .contact-inner { max-width: 1100px; margin: 0 auto; width: 100%; }
  .contact-layout { display: grid; grid-template-columns: 1fr 1.8fr; gap: clamp(2rem,6vw,5rem); align-items: start; }
  @media (max-width: 860px) {
    .contact-layout { grid-template-columns: 1fr; gap: 2rem; }
    .contact-form { padding: 1.25rem; }
    .form-row { grid-template-columns: 1fr; }
    .form-row .form-group:first-child { border-right: none; border-bottom: 1px solid var(--border); }
  }
  .contact-left { padding-top: 0.5rem; }
  .contact-left .sec-label { display: block; }
  .contact-sub { font-size: clamp(0.78rem,2.5vw,0.83rem); color: var(--muted); line-height: 1.85; margin-bottom: 1.8rem; text-align: start; }
  .contact-email-link { display: flex; align-items: center; gap: 0.55rem; color: var(--ac); font-size: clamp(0.7rem,2vw,0.8rem); font-family: var(--mfont); transition: opacity 0.2s; margin-bottom: 1.5rem; word-break: break-all; }
  .contact-email-link:hover { opacity: 0.7; }
  .contact-detail { display: flex; align-items: center; gap: 0.55rem; font-size: 0.73rem; color: var(--muted); padding: 0.5rem 0; border-bottom: 1px solid var(--border); text-align: start; }
  .contact-detail svg { color: var(--ac); flex-shrink: 0; }

  /* Form */
  .contact-form {
    display: flex; flex-direction: column; gap: 0;
    background: rgba(13,13,20,0.6);
    border: 1px solid var(--border);
    padding: clamp(1.5rem, 4vw, 2.5rem);
    position: relative; overflow: hidden;
  }
  .contact-form::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--ac), var(--ac2), transparent);
  }
  .contact-form::after {
    content: ''; position: absolute; bottom: -60px; right: -60px;
    width: 160px; height: 160px; border-radius: 50%;
    background: radial-gradient(circle, rgba(110,231,183,0.04), transparent);
    pointer-events: none;
  }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-bottom: 0; }
  @media (max-width: 540px) {
    .form-row { grid-template-columns: 1fr; }
    .form-row .form-group:first-child { border-right: none; border-bottom: 1px solid var(--border); }
  }
  .form-group { display: flex; flex-direction: column; position: relative; border: 1px solid var(--border); margin: -1px 0 0 -1px; transition: border-color 0.25s; }
  .form-group:focus-within { border-color: rgba(110,231,183,0.5); z-index: 2; }
  .form-label { font-size: 0.55rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--muted); padding: 0.75rem 1rem 0; transition: color 0.2s; line-height: 1; text-align: start; }
  .form-group:focus-within .form-label { color: var(--ac); }
  .form-input, .form-textarea {
    background: transparent; border: none; color: var(--tx);
    font-family: var(--mfont); font-size: 0.82rem;
    padding: 0.4rem 1rem 0.75rem; outline: none; width: 100%; resize: none; line-height: 1.5;
    text-align: start;
  }
  .form-input::placeholder, .form-textarea::placeholder { color: var(--muted); opacity: 0.35; font-size: 0.75rem; }
  .form-group-full { display: flex; flex-direction: column; position: relative; border: 1px solid var(--border); margin: -1px 0 0 -1px; transition: border-color 0.25s; }
  .form-group-full:focus-within { border-color: rgba(110,231,183,0.5); z-index: 2; }
  .form-group-full .form-label { font-size: 0.55rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--muted); padding: 0.75rem 1rem 0; transition: color 0.2s; line-height: 1; text-align: start; }
  .form-group-full:focus-within .form-label { color: var(--ac); }
  .form-group-full .form-input, .form-group-full .form-textarea { background: transparent; border: none; color: var(--tx); font-family: var(--mfont); font-size: 0.82rem; padding: 0.4rem 1rem 0.75rem; outline: none; width: 100%; resize: none; line-height: 1.5; text-align: start; }
  .form-group-full .form-input::placeholder, .form-group-full .form-textarea::placeholder { color: var(--muted); opacity: 0.35; font-size: 0.75rem; }
  .form-textarea { min-height: 120px; }
  .form-submit {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.6rem;
    padding: 1rem 2rem; background: var(--ac); color: var(--bg);
    font-family: var(--mfont); font-size: 0.72rem; font-weight: 700;
    letter-spacing: 0.12em; text-transform: uppercase; border: none;
    transition: var(--transition);
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
    cursor: pointer; width: 100%; margin-top: -1px; position: relative; z-index: 1;
  }
  .form-submit:hover:not(:disabled) { box-shadow: 0 0 40px rgba(110,231,183,0.25); letter-spacing: 0.16em; }
  .form-submit:disabled { opacity: 0.55; cursor: not-allowed; }
  .form-status { font-size: 0.7rem; padding: 0.7rem 1rem; margin-top: 0.5rem; border-left: 2px solid; letter-spacing: 0.04em; text-align: start; }
  .form-status.success { color: var(--ac); border-color: var(--ac); background: rgba(110,231,183,0.05); }
  .form-status.error   { color: var(--ac3); border-color: var(--ac3); background: rgba(244,114,182,0.05); }

  footer { padding: 1.8rem clamp(1.5rem,5vw,4rem); border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; font-size: 0.68rem; color: var(--muted); flex-wrap: wrap; gap: 1rem; }
  @media (max-width: 640px) { footer { flex-direction: column; text-align: start; } }
  .foot-links { display: flex; gap: clamp(1rem,3vw,2rem); flex-wrap: wrap; justify-content: center; }
  .foot-links a { color: var(--muted); transition: color 0.2s; display: flex; align-items: center; gap: 0.35rem; }
  .foot-links a:hover { color: var(--ac); }

  .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* PROJECTS OVERLAY */
  .clones-overlay { position: fixed; inset: 0; z-index: 500; background: var(--bg); transform: translateX(100%); transition: transform 0.5s cubic-bezier(0.77,0,0.175,1); display: flex; flex-direction: column; overflow: hidden; }
  .clones-overlay.open { transform: translateX(0); }
  .clones-header { position: relative; z-index: 10; flex-shrink: 0; background: rgba(6,6,8,0.97); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); padding: 1rem clamp(1.5rem,5vw,4rem); display: flex; align-items: center; flex-wrap: wrap; gap: 0.8rem; }
  .back-btn { display: flex; align-items: center; gap: 0.45rem; color: var(--muted); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; transition: color 0.2s; background: none; border: 1px solid var(--border); font-family: var(--mfont); padding: 0.42rem 0.9rem; border-radius: 2px; }
  .back-btn:hover { color: var(--ac); border-color: var(--ac); }
  .clones-page-title { font-family: var(--gfont); font-size: clamp(1rem,3vw,1.35rem); font-weight: 800; flex: 1; text-align: start; }
  .clones-page-title span { color: var(--ac); }
  .clone-cat-tabs { display: flex; gap: 0.35rem; flex-wrap: wrap; }
  .clone-cat-tab { padding: 0.38rem 0.9rem; background: transparent; border: 1px solid var(--border); color: var(--muted); font-family: var(--mfont); font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; transition: var(--transition); }
  .clone-cat-tab.active, .clone-cat-tab:hover { background: var(--ac); color: var(--bg); border-color: var(--ac); }
  .clones-scroll { flex: 1; overflow-y: auto; padding: clamp(2rem,4vw,3.5rem) clamp(1.5rem,5vw,4rem); }
  .clones-section-label { font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--ac); margin-bottom: 1.2rem; display: flex; align-items: center; gap: 0.6rem; }
  .clones-section-label::after { content: ''; flex: 1; height: 1px; background: var(--border); }
  .clones-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(min(100%,340px),1fr)); gap: 1.25rem; margin-bottom: 3rem; }
  .clone-card { background: var(--s1); border: 1px solid var(--border); overflow: hidden; position: relative; transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s, border-color 0.25s; }
  @media (hover: hover) { .clone-card:hover { transform: translateY(-5px); box-shadow: 0 18px 45px rgba(0,0,0,0.55), 0 0 0 1px rgba(110,231,183,0.14); border-color: rgba(110,231,183,0.2); } .clone-card:hover .clone-frame-overlay { opacity: 1; } .clone-card:hover .clone-preview-btn { opacity: 1; transform: translateY(0); } }
  @media (hover: none) { .clone-card:active { transform: scale(0.98); } }
  .clone-thumb { height: 195px; position: relative; overflow: hidden; background: var(--bg); border-bottom: 1px solid var(--border); }
  .clone-thumb iframe { width: 200%; height: 200%; transform: scale(0.5); transform-origin: top left; border: none; pointer-events: none; display: block; }
  .clone-frame-overlay { position: absolute; inset: 0; background: linear-gradient(160deg, rgba(110,231,183,0.06) 0%, rgba(6,6,8,0.3) 100%); opacity: 0; transition: opacity 0.3s; }
  .clone-preview-btn { position: absolute; bottom: 0.75rem; right: 0.75rem; z-index: 3; display: flex; align-items: center; gap: 0.4rem; padding: 0.38rem 0.85rem; background: var(--ac); color: var(--bg); font-family: var(--mfont); font-size: 0.6rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border: none; opacity: 0; transform: translateY(6px); transition: opacity 0.22s, transform 0.22s; }
  @media (hover: none) { .clone-preview-btn { opacity: 1; transform: translateY(0); } }
  .clone-thumb-fallback { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.6rem; background: linear-gradient(135deg, var(--s1), var(--s2)); }
  .clone-thumb-fallback-icon { color: var(--ac); opacity: 0.5; }
  .clone-thumb-fallback-text { font-size: 0.62rem; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; }
  .clone-body { padding: 1rem 1.2rem; }
  .clone-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.4rem; }
  .clone-name { font-family: var(--gfont); font-size: 0.95rem; font-weight: 700; text-align: start; }
  .clone-badge { font-size: 0.57rem; letter-spacing: 0.09em; text-transform: uppercase; font-weight: 700; padding: 0.18rem 0.5rem; flex-shrink: 0; }
  .badge-personal { background: rgba(110,231,183,0.1); color: var(--ac); border: 1px solid rgba(110,231,183,0.25); }
  .badge-client { background: rgba(244,114,182,0.1); color: var(--ac3); border: 1px solid rgba(244,114,182,0.25); }
  .clone-desc { font-size: 0.73rem; color: var(--muted); line-height: 1.7; text-align: start; }
  .clone-meta { display: flex; align-items: center; gap: 0.6rem; margin-top: 0.8rem; padding-top: 0.8rem; border-top: 1px solid var(--border); flex-wrap: wrap; }
  .clone-tech { font-size: 0.6rem; color: var(--muted); background: var(--bg); border: 1px solid var(--border); padding: 0.14rem 0.48rem; }
  .clone-ext-link { margin-left: auto; display: flex; align-items: center; gap: 0.28rem; font-size: 0.63rem; color: var(--ac); text-transform: uppercase; letter-spacing: 0.07em; transition: opacity 0.2s; }
  .clone-ext-link:hover { opacity: 0.6; }
  .iframe-modal { position: fixed; inset: 0; z-index: 700; display: flex; flex-direction: column; background: #000; height: 90vh; }
  .iframe-bar { display: flex; align-items: center; gap: 0.8rem; padding: 0.7rem 1.2rem; background: var(--s1); border-bottom: 1px solid var(--border); flex-shrink: 0; }
  .iframe-bar-title { font-family: var(--gfont); font-size: 0.88rem; font-weight: 700; text-align: start; }
  .iframe-bar-url { font-size: 0.63rem; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 280px; flex: 1; text-align: start; }
  .iframe-close-btn { background: none; border: 1px solid var(--border); color: var(--tx); padding: 0.38rem; display: flex; align-items: center; justify-content: center; transition: border-color 0.2s, color 0.2s; flex-shrink: 0; }
  .iframe-close-btn:hover { border-color: var(--ac3); color: var(--ac3); }
  .iframe-modal iframe { flex: 1; border: none; width: 100%; background: #fff; }
`;

/* ── Hero canvas ── */
function HeroCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const load = () => {
      const T = window.THREE;
      const W = canvas.clientWidth, H = canvas.clientHeight;
      const renderer = new T.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(W, H); renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(60, W / H, 0.1, 100); camera.position.set(0, 0, 5);
      const geo = new T.TorusKnotGeometry(1.4, 0.36, 160, 30, 2, 3);
      const knot = new T.Mesh(geo, new T.MeshStandardMaterial({ color: 0x6ee7b7, emissive: 0x1a5c45, metalness: 0.9, roughness: 0.1 }));
      knot.position.set(3.5, 0, -1); scene.add(knot);
      const wire = new T.Mesh(geo, new T.MeshBasicMaterial({ color: 0x818cf8, wireframe: true, transparent: true, opacity: 0.1 }));
      wire.position.copy(knot.position); scene.add(wire);
      const ico = new T.Mesh(new T.IcosahedronGeometry(0.6, 1), new T.MeshStandardMaterial({ color: 0xf472b6, metalness: 0.8, roughness: 0.2 }));
      ico.position.set(-3.5, 1.5, -2); scene.add(ico);
      const oct = new T.Mesh(new T.OctahedronGeometry(0.45), new T.MeshStandardMaterial({ color: 0x818cf8, metalness: 0.7, roughness: 0.3 }));
      oct.position.set(-3, -1.8, -1.5); scene.add(oct);
      const pos = new Float32Array(600 * 3);
      for (let i = 0; i < pos.length; i++) pos[i] = (Math.random() - 0.5) * 20;
      const pGeo = new T.BufferGeometry(); pGeo.setAttribute('position', new T.BufferAttribute(pos, 3));
      scene.add(new T.Points(pGeo, new T.PointsMaterial({ color: 0x6ee7b7, size: 0.022, transparent: true, opacity: 0.45 })));
      scene.add(new T.AmbientLight(0xffffff, 0.3));
      const pl1 = new T.PointLight(0x6ee7b7, 3, 15); pl1.position.set(2, 3, 2); scene.add(pl1);
      const pl2 = new T.PointLight(0x818cf8, 2, 15); pl2.position.set(-2, -2, 3); scene.add(pl2);
      let mx = 0, my = 0;
      const onM = (e) => { mx = (e.clientX/innerWidth-0.5)*2; my = -(e.clientY/innerHeight-0.5)*2; };
      window.addEventListener('mousemove', onM);
      let raf;
      const animate = (t) => {
        raf = requestAnimationFrame(animate); const s = t*0.001;
        knot.rotation.x = s*0.3+mx*0.14; knot.rotation.y = s*0.5+my*0.1; wire.rotation.copy(knot.rotation);
        ico.rotation.x = s*0.7; ico.rotation.y = s*0.4; ico.position.y = 1.5+Math.sin(s*0.8)*0.28;
        oct.rotation.x = s*0.5; oct.rotation.z = s*0.6; oct.position.y = -1.8+Math.cos(s*0.6)*0.22;
        camera.position.x += (mx*0.18-camera.position.x)*0.05; camera.position.y += (my*0.13-camera.position.y)*0.05;
        camera.lookAt(0,0,0); renderer.render(scene, camera);
      };
      animate(0);
      const onR = () => { const W2=canvas.clientWidth,H2=canvas.clientHeight; renderer.setSize(W2,H2); camera.aspect=W2/H2; camera.updateProjectionMatrix(); };
      window.addEventListener('resize', onR);
      canvas._cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove',onM); window.removeEventListener('resize',onR); renderer.dispose(); };
    };
    if (window.THREE) { load(); return; }
    const s = document.createElement('script'); s.src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'; s.onload=load; document.head.appendChild(s);
    return () => { if (canvas._cleanup) canvas._cleanup(); };
  }, []);
  return <canvas ref={ref} id="hero-canvas" style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />;
}

function MiniCanvas({ color1='#6ee7b7', color2='#818cf8', shape='torus' }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c || !window.THREE) return;
    const T = window.THREE;
    const renderer = new T.WebGLRenderer({ canvas:c, alpha:true, antialias:true });
    renderer.setSize(c.clientWidth, c.clientHeight);
    const scene = new T.Scene();
    const camera = new T.PerspectiveCamera(55, c.clientWidth/c.clientHeight, 0.1, 100); camera.position.z=3;
    const mat = new T.MeshStandardMaterial({ color:new T.Color(color1), emissive:new T.Color(color2), emissiveIntensity:0.28, metalness:0.8, roughness:0.2 });
    let mesh;
    if (shape==='torus') mesh = new T.Mesh(new T.TorusGeometry(0.7,0.28,32,64),mat);
    else if (shape==='sphere') mesh = new T.Mesh(new T.SphereGeometry(0.8,32,32),mat);
    else mesh = new T.Mesh(new T.OctahedronGeometry(0.9),mat);
    scene.add(mesh); scene.add(new T.AmbientLight(0xffffff,0.5));
    const pl = new T.PointLight(new T.Color(color1),4,8); pl.position.set(2,2,2); scene.add(pl);
    let raf;
    const animate = t => { raf=requestAnimationFrame(animate); mesh.rotation.x=t*0.0004; mesh.rotation.y=t*0.0007; renderer.render(scene,camera); };
    animate(0);
    return () => { cancelAnimationFrame(raf); renderer.dispose(); };
  }, [color1,color2,shape]);
  return <canvas ref={ref} className="proj-thumb-canvas" style={{ width:'100%', height:'100%' }} />;
}

/* ── DATA ── */
const PROJECTS = [
  { id:1, title:'ShopEase E-Commerce', type:'fullstack', label:'Full Stack', badgeClass:'badge-fullstack', icon:'shopping', color1:'#f472b6', color2:'#ec4899', shape:'sphere', desc:'Scalable e-commerce with microservices architecture, real-time inventory, and seamless checkout.', stack:['Next.js','Spring Boot','Docker','Microservices','PostgreSQL'] },
  { id:2, title:'FitTrack Mobile App', type:'app', label:'Mobile App', badgeClass:'badge-app', icon:'activity', color1:'#818cf8', color2:'#6366f1', shape:'torus', desc:'Cross-platform fitness tracker with workout logging, progress charts, and social challenges.', stack:['React Native','Spring Boot','JUnit','REST API','Firebase'] },
  { id:3, title:'DevCollab Platform', type:'web', label:'Web App', badgeClass:'badge-web', icon:'users', color1:'#6ee7b7', color2:'#10b981', shape:'octa', desc:'Real-time developer collaboration tool with code sharing, video calls, and project management.', stack:['React.js','Docker','Spring Boot','WebSockets','CSS3'] },
  { id:4, title:'PayFlow Finance App', type:'app', label:'Mobile App', badgeClass:'badge-app', icon:'creditCard', color1:'#818cf8', color2:'#7c3aed', shape:'sphere', desc:'Secure mobile banking app with biometric auth, instant transfers, and spending analytics.', stack:['React Native','Spring Boot','JUnit','Docker','JWT'] },
  { id:5, title:'PortfolioCMS', type:'web', label:'Web App', badgeClass:'badge-web', icon:'image', color1:'#6ee7b7', color2:'#059669', shape:'torus', desc:'Headless CMS and portfolio builder for creatives with drag-and-drop and multi-theme support.', stack:['Next.js','HTML/CSS','React.js','Spring Boot','PostgreSQL'] },
  { id:6, title:'LogiOps Delivery', type:'fullstack', label:'Full Stack', badgeClass:'badge-fullstack', icon:'truck', color1:'#f472b6', color2:'#db2777', shape:'octa', desc:'End-to-end logistics platform with real-time tracking, route optimization, and dispatch automation.', stack:['React.js','Microservices','Spring Boot','Docker','Next.js'] },
];

const SKILLS = [
  { name:'React.js', icon:'react' },{ name:'React Native', icon:'smartphone' },
  { name:'Spring Boot', icon:'server' },{ name:'Next.js', icon:'layers' },
  { name:'Java', icon:'java' },{ name:'Docker', icon:'package' },
  { name:'Microservices', icon:'grid' },{ name:'HTML / CSS', icon:'code' },
];

const SERVICES = [
  { iconName:'monitor',    title:'Web Development',        desc:'Modern, performant web apps using React.js and Next.js.',            items:['Single Page Applications','Server-Side Rendering','API Integration','Responsive Design'] },
  { iconName:'smartphone', title:'Mobile App Development', desc:'Cross-platform iOS & Android apps with React Native.',               items:['iOS & Android','Offline Support','Push Notifications','App Store Deployment'] },
  { iconName:'server',     title:'Backend & APIs',         desc:'Scalable Java & Spring Boot services with tested RESTful APIs.',      items:['Spring Boot APIs','Java Microservices','JUnit Test Suites','Database Design'] },
  { iconName:'package',    title:'DevOps & Deployment',    desc:'Containerized deployments with Docker and CI/CD pipelines.',         items:['Docker Containers','CI/CD Pipelines','Cloud Deployment','Performance Monitoring'] },
];

const CONTENT_ITEMS = [
  { icon:'code',   text:'Code walkthroughs & tutorials' },
  { icon:'zap',    text:'Project launches & demos' },
  { icon:'coffee', text:'Dev tools & productivity' },
  { icon:'github', text:'Open source contributions' },
  { icon:'hash',   text:'Tech opinions & threads' },
];

const SOCIALS = [
  { name:'GitHub',      handle:'favjoyce',         icon:'github',    bg:'#1a1a1a',                                               href:`https://github.com/${GITHUB_USERNAME}` },
  { name:'LinkedIn',    handle:'anyia-favour',     icon:'linkedin',  bg:'#0a66c2',                                               href:'https://www.linkedin.com/in/anyia-favour-803842313/' },
  { name:'Twitter / X', handle:'anyia-favour',     icon:'twitter',   bg:'#111',                                                  href:'https://x.com/Tha_coder' },
  { name:'Instagram',   handle:'@thacoder',        icon:'instagram', bg:'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)',       href:'https://www.instagram.com/thacoder/' },
  { name:'YouTube',     handle:'Code with Joyce',  icon:'youtube',   bg:'#cc0000',                                               href:'https://www.youtube.com/@CodewithJoyce' },
];

/* ── Clone Card ── */
function CloneCard({ clone, onPreview }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgErr,    setImgErr]    = useState(false);
  const [hovered,   setHovered]   = useState(false);

  const palettes = [
    { bg:'linear-gradient(135deg,#0d1f1a,#0d2218)', accent:'#6ee7b7', icon:'globe'   },
    { bg:'linear-gradient(135deg,#0d0d1f,#111228)', accent:'#818cf8', icon:'code'    },
    { bg:'linear-gradient(135deg,#1f0d18,#220d16)', accent:'#f472b6', icon:'layout'  },
  ];
  const palette = palettes[(clone.id - 1) % 3];

  const PROJECT_IMAGES = {
    1:  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    2:  'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80',
    3:  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80',
    4:  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    5:  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80',
    6:  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80',
    7:  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    8:  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    9:  'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&q=80',
    10: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    11: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    12: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  };

  const imgSrc   = clone.image || PROJECT_IMAGES[clone.id];
  const showPhoto = imgSrc && !imgErr;

  return (
    <div className="clone-card">
      <div
        className="clone-thumb"
        style={{ background: palette.bg, cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
        onClick={() => onPreview(clone)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {showPhoto && (
          <img
            src={imgSrc}
            alt={clone.name}
            onLoad={()  => setImgLoaded(true)}
            onError={() => setImgErr(true)}
            style={{
              position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block',
              opacity: !imgLoaded ? 0 : hovered ? 0.92 : 0.68,
              transform: hovered ? 'scale(1.07)' : 'scale(1)',
              transition:'opacity 0.45s ease, transform 0.55s cubic-bezier(0.34,1.56,0.64,1)',
              willChange:'opacity, transform',
            }}
          />
        )}
        <div style={{
          position:'absolute', inset:0,
          background:`linear-gradient(to bottom, ${palette.bg.split(',')[0].replace('linear-gradient(135deg,','')}cc 0%, transparent 50%, rgba(0,0,0,0.55) 100%)`,
          opacity: hovered ? 0.4 : 1, transition:'opacity 0.45s ease', zIndex:1, pointerEvents:'none',
        }}/>
        <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity: hovered ? 0.04 : 0.08, transition:'opacity 0.45s ease', zIndex:2 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${clone.id}`} width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke={palette.accent} strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${clone.id})`}/>
        </svg>
        <div style={{
          position:'absolute', width:120, height:120, borderRadius:'50%',
          background:`radial-gradient(circle, ${palette.accent}22, transparent)`,
          top:'50%', left:'50%',
          transform: hovered ? 'translate(-50%,-50%) scale(0.6)' : 'translate(-50%,-50%) scale(1)',
          opacity: hovered ? 0.3 : 1, transition:'transform 0.45s ease, opacity 0.45s ease',
          zIndex:2, pointerEvents:'none',
        }}/>
        <div style={{
          position:'absolute', inset:0,
          background:`linear-gradient(135deg, ${palette.accent}18, transparent 60%)`,
          opacity: hovered ? 1 : 0, transition:'opacity 0.45s ease', zIndex:3, pointerEvents:'none',
        }}/>
        <div style={{
          position:'absolute', bottom: hovered ? '0.85rem' : '-2.5rem', left:'50%', transform:'translateX(-50%)',
          zIndex:4, display:'flex', alignItems:'center', gap:'0.4rem',
          padding:'0.4rem 1.1rem', background:palette.accent, color:'#060608',
          fontFamily:'var(--mfont)', fontSize:'0.6rem', fontWeight:700,
          letterSpacing:'0.1em', textTransform:'uppercase', borderRadius:2,
          transition:'bottom 0.35s cubic-bezier(0.34,1.56,0.64,1)', whiteSpace:'nowrap',
          pointerEvents: hovered ? 'auto' : 'none', boxShadow:`0 4px 18px ${palette.accent}44`,
        }}>
          <Icon name="maximize" size={11} color="#060608"/> Preview
        </div>
      </div>
      <div className="clone-body">
        <div className="clone-top">
          <div className="clone-name">{clone.name}</div>
          <span className={`clone-badge ${clone.cat==='personal'?'badge-personal':'badge-client'}`}>
            {clone.cat==='personal'?'Personal':'Client'}
          </span>
        </div>
        <p className="clone-desc">{clone.desc}</p>
        <div className="clone-meta">
          {clone.tech.map(t => <span className="clone-tech" key={t}>{t}</span>)}
          <div style={{ display:'flex', gap:'0.6rem', marginLeft:'auto', flexWrap:'wrap' }}>
            {clone.repo && (
              <a className="clone-ext-link" href={clone.repo} target="_blank" rel="noopener noreferrer" style={{ color:'var(--muted)' }}>
                <Icon name="github" size={11}/> Repo
              </a>
            )}
            <a className="clone-ext-link" href={clone.url} target="_blank" rel="noopener noreferrer">
              <Icon name="externalLink" size={11}/> Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Projects Page Overlay ── */
function ProjectsPage({ open, onClose }) {
  const [cat, setCat] = useState('all');
  const [preview, setPreview] = useState(null);

  const PROJECT_IMAGES = {
    1: bank, 2: mindhaven, 3: cover, 4: lnedln, 5: locaton,
    6: utva, 7: febase, 8: medum, 9: oldport, 10: fstudy,
    11: atla, 12: pexels, 13: fver, 14: vica,
    15: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  };

  const CLONES = [
    { id:1,  cat:'personal', name:'Online Banking App',         desc:'An Online Banking Application That works in Real Time',   url:'https://www.linkedin.com/posts/anyia-favour-803842313_springboot-javadeveloper-backenddevelopment-ugcPost-7422187805818286080-x9IW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE-uJgMBrQOPC6QXMCK4D0CnxOX1sN9rCFI', repo:null, tech:['React Js','SPRING-BOOT'], color:'#818cf8' },
    { id:2,  cat:'personal', name:'MindHaven App',              desc:'A mental health and wellness app designed to provide users with resources, tools, and a supportive community. Built with TeamMates.', url:'https://www.linkedin.com/posts/anyia-favour-803842313_softwareengineering-fullstackdeveloper-reactjs-ugcPost-7444658297393135617-Etcj?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE-uJgMBrQOPC6QXMCK4D0CnxOX1sN9rCFI', repo:null, tech:['React Js','SPRING-BOOT'], color:'#818cf8' },
    { id:3,  cat:'personal', name:'Online Groceries Mobile App', desc:'A mobile App for Shopping built with React Native', url:'https://www.linkedin.com/posts/anyia-favour-803842313_reactnative-mobiledevelopment-javascript-activity-7374322277447852033-oUZ-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE-uJgMBrQOPC6QXMCK4D0CnxOX1sN9rCFI', repo:null, tech:['React Native'], color:'#818cf8' },
    { id:4,  cat:'personal', name:'LinkedIn Mobile App Clone',   desc:'A mobile App for LinkedIn, built to test skills on React Native', url:'https://www.linkedin.com/posts/anyia-favour-803842313_reactnative-expo-mobiledevelopment-activity-7376909901756919809-DrPn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE-uJgMBrQOPC6QXMCK4D0CnxOX1sN9rCFI', repo:null, tech:['React Native'], color:'#818cf8' },
    { id:5,  cat:'personal', name:'Location Searcher Mobile App', desc:'A mobile App for getting location of places, built with React Native', url:'https://www.linkedin.com/posts/anyia-favour-803842313_reactnative-expo-javascript-activity-7379411783796613120-1Z04?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE-uJgMBrQOPC6QXMCK4D0CnxOX1sN9rCFI', repo:null, tech:['React Native'], color:'#818cf8' },
    { id:6,  cat:'personal', name:'Utiva Clone',                desc:'Pixel-perfect recreation of the Utiva landing page with smooth scroll animations and course showcases.', url:'https://utiva.netlify.app/', repo:`https://github.com/${GITHUB_USERNAME}/utivaClone`, tech:['React JS','CSS3'], color:'#6ee7b7' },
    { id:7,  cat:'personal', name:'Firebase Clone',             desc:'Firebase landing page clone with hero banner, feature sections, and a responsive card grid built with React.', url:'https://firebaseclonesjoyce.netlify.app/', repo:`https://github.com/${GITHUB_USERNAME}/Firebase`, tech:['HTML','CSS3','JavaScript'], color:'#818cf8' },
    { id:8,  cat:'personal', name:'Medium Clone',               desc:'Dark-themed reading platform with sidebar navigation, article cards, and animated transitions.', url:'https://mediumclonethacoder.netlify.app/', repo:`https://github.com/${GITHUB_USERNAME}/MediumHomePage`, tech:['React Js','CSS3'], color:'#f472b6' },
    { id:9,  cat:'personal', name:'Old Portfolio',              desc:'Original personal portfolio site showcasing earlier projects and skills.', url:'https://joyceanyia.netlify.app/', repo:`https://github.com/${GITHUB_USERNAME}/NewPort`, tech:['HTML','CSS3','JavaScript'], color:'#f472b6' },
    { id:10, cat:'personal', name:'FStudy',                     desc:'Study platform clone with course listings, progress tracking, and a clean student dashboard layout.', url:'https://fistudythacoder.netlify.app/', repo:`https://github.com/${GITHUB_USERNAME}/Fistudy`, tech:['HTML','CSS3','JavaScript'], color:'#6ee7b7' },
    { id:11, cat:'personal', name:'Atlasan',                    desc:'Clean fintech landing with animated gradient mesh, pricing cards, and integration docs navigation.', url:'https://atlasianjoyce.netlify.app/', repo:`https://github.com/${GITHUB_USERNAME}/Atlasian`, tech:['React Js','CSS3'], color:'#818cf8' },
    { id:12, cat:'personal', name:'Pexels Clone',               desc:'Photo platform clone with masonry grid, search filters, and a clean image detail view.', url:'https://thacoderpexelsclone.netlify.app/', repo:`https://github.com/${GITHUB_USERNAME}/`, tech:['HTML','CSS3','JavaScript'], color:'#f472b6' },
    { id:13, cat:'personal', name:'Fiverr Clone',               desc:'Freelance marketplace clone with gig listings, category browsing, and seller profile pages.', url:'https://fiverrrrrrr.netlify.app/', repo:`https://github.com/${GITHUB_USERNAME}/fiverr`, tech:['HTML','CSS3','JavaScript'], color:'#f472b6' },
    { id:14, cat:'client',   name:'Vicas Couture',              desc:'Fashion brand e-commerce site with product galleries, lookbook pages, and a streamlined checkout flow.', url:'https://www.vicascouture.com/', repo:null, tech:['React Js','SPRING-BOOT'], color:'#818cf8' },
    { id:15, cat:'client',   name:'Vicas Couture Dashboard',    desc:'Admin dashboard for the Vicas Couture brand — inventory, orders, and analytics in a clean UI.', url:'https://www.linkedin.com/posts/anyia-favour-803842313_fullstackdeveloper-springboot-nextjs-ugcPost-7409155900390715392-wPCK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE-uJgMBrQOPC6QXMCK4D0CnxOX1sN9rCFI', repo:null, tech:['Next Js','Tailwind CSS','SPRING-BOOT'], color:'#818cf8' },
  ];

  const CLONES_WITH_IMAGES = CLONES.map(c => ({ ...c, image: PROJECT_IMAGES[c.id] }));
  const filtered = CLONES_WITH_IMAGES.filter(c => cat === 'all' || c.cat === cat);
  const personal = filtered.filter(c => c.cat === 'personal');
  const client   = filtered.filter(c => c.cat === 'client');

  return (
    <>
      <div className={`clones-overlay ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="clones-header">
          <button className="back-btn" onClick={onClose}><Icon name="arrowLeft" size={13}/> Back</button>
          <div className="clones-page-title">Featured Projects</div>
          <div className="clone-cat-tabs">
            {[['all','All'],['personal','Personal'],['client','Client']].map(([v,l]) => (
              <button key={v} className={`clone-cat-tab${cat===v?' active':''}`} onClick={() => setCat(v)}>{l}</button>
            ))}
          </div>
        </div>
        <div className="clones-scroll">
          {(cat==='all'||cat==='personal') && personal.length > 0 && (
            <>
              <div className="clones-section-label"><Icon name="user" size={12}/> Personal Projects</div>
              <div className="clones-grid">{personal.map(c => <CloneCard key={c.id} clone={c} onPreview={setPreview}/>)}</div>
            </>
          )}
          {(cat==='all'||cat==='client') && client.length > 0 && (
            <>
              <div className="clones-section-label"><Icon name="briefcase" size={12}/> Client Projects</div>
              <div className="clones-grid">{client.map(c => <CloneCard key={c.id} clone={c} onPreview={setPreview}/>)}</div>
            </>
          )}
        </div>
      </div>

      {preview && (
        <div className="iframe-modal">
          <div className="iframe-bar">
            <div className="iframe-bar-title">{preview.name}</div>
            <div className="iframe-bar-url">{preview.url}</div>
            {preview.repo && (
              <a href={preview.repo} target="_blank" rel="noopener noreferrer" style={{ color:'var(--muted)', display:'flex', alignItems:'center', gap:'0.3rem', fontSize:'0.65rem', letterSpacing:'0.08em', textTransform:'uppercase', border:'1px solid var(--border)', padding:'0.3rem 0.7rem', flexShrink:0 }}>
                <Icon name="github" size={13}/> Repo
              </a>
            )}
            <a href={preview.url} target="_blank" rel="noopener noreferrer" style={{ color:'var(--ac)', display:'flex', alignItems:'center', gap:'0.3rem', fontSize:'0.65rem', letterSpacing:'0.08em', textTransform:'uppercase', border:'1px solid rgba(110,231,183,0.3)', padding:'0.3rem 0.7rem', flexShrink:0 }}>
              <Icon name="externalLink" size={13}/> Open Live Site
            </a>
            <button className="iframe-close-btn" onClick={() => setPreview(null)}><Icon name="x" size={18}/></button>
          </div>
          <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'var(--bg)', gap:'1.5rem', padding:'2rem', height:'100%', textAlign:'start' }}>
            {preview.image && (
              <div style={{ width:'100%', maxWidth:520, aspectRatio:'16/9', borderRadius:10, overflow:'hidden', border:'1px solid var(--border)', boxShadow:'0 8px 32px rgba(0,0,0,0.35)', position:'relative' }}>
                <img src={preview.image} alt={preview.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} onError={e => { e.target.style.display = 'none'; }}/>
                <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'40%', background:'linear-gradient(to top, rgba(0,0,0,0.55), transparent)', pointerEvents:'none' }}/>
                <div style={{ position:'absolute', bottom:10, left:12, display:'flex', gap:'0.4rem', flexWrap:'wrap' }}>
                  {preview.tech.map(t => (
                    <span key={t} style={{ fontSize:'0.58rem', fontWeight:700, letterSpacing:'0.07em', background:'rgba(0,0,0,0.6)', backdropFilter:'blur(6px)', color:'#e2e8f0', padding:'0.2rem 0.55rem', borderRadius:4, border:'1px solid rgba(255,255,255,0.12)' }}>{t}</span>
                  ))}
                </div>
              </div>
            )}
            <div>
              <div style={{ fontFamily:'var(--gfont)', fontSize:'1.1rem', fontWeight:700, marginBottom:'0.5rem', textAlign:'start' }}>{preview.name}</div>
              <div style={{ fontSize:'0.75rem', color:'var(--muted)', maxWidth:420, lineHeight:1.75, textAlign:'start' }}>
                Most sites block embedding for security reasons. Click <strong style={{ color:'var(--tx)' }}>Open Live Site</strong> above to view it in a new tab.
              </div>
            </div>
            <div style={{ display:'flex', gap:'0.8rem', flexWrap:'wrap', justifyContent:'flex-start' }}>
              <a href={preview.url} target="_blank" rel="noopener noreferrer" className="cta-primary" style={{ fontSize:'0.72rem' }}>
                <Icon name="externalLink" size={13}/> Open Live Site
              </a>
              {preview.repo && (
                <a href={preview.repo} target="_blank" rel="noopener noreferrer" className="cta-secondary" style={{ fontSize:'0.72rem' }}>
                  <Icon name="github" size={13}/> View Repository
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Contact Form ── */
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

function ContactForm() {
  const [form,   setForm]   = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState(null);
  const [errMsg, setErrMsg] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error'); setErrMsg('Please fill in name, email, and message.'); return;
    }
    if (!FORMSPREE_ID || FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
      const body = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`;
      window.location.href = `mailto:anyiafavour15@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`;
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method:'POST', headers:{ 'Content-Type':'application/json', Accept:'application/json' },
        body: JSON.stringify({ name:form.name, email:form.email, subject:form.subject, message:form.message }),
      });
      if (res.ok) { setStatus('success'); setForm({ name:'', email:'', subject:'', message:'' }); }
      else { const d = await res.json(); setStatus('error'); setErrMsg(d?.errors?.[0]?.message || 'Something went wrong.'); }
    } catch { setStatus('error'); setErrMsg('Network error — try emailing directly.'); }
  };

  const sending = status === 'sending';
  return (
    <div className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Your Name</label>
          <input className="form-input" name="name" placeholder="Anyia Favour" value={form.name} onChange={handleChange} disabled={sending}/>
        </div>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input className="form-input" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} disabled={sending}/>
        </div>
      </div>
      <div className="form-group-full">
        <label className="form-label">Subject</label>
        <input className="form-input" name="subject" placeholder="Project Inquiry / Collaboration / Hiring" value={form.subject} onChange={handleChange} disabled={sending}/>
      </div>
      <div className="form-group-full">
        <label className="form-label">Message</label>
        <textarea className="form-textarea" name="message" placeholder="Tell me about your project, timeline, and budget…" value={form.message} onChange={handleChange} disabled={sending}/>
      </div>
      {status === 'success' && <div className="form-status success">✓ Message sent! I'll get back to you within 24 hours.</div>}
      {status === 'error'   && <div className="form-status error">⚠ {errMsg}</div>}
      <button className="form-submit" onClick={handleSubmit} disabled={sending}>
        {sending ? <><Icon name="activity" size={14}/> Sending…</> : <><Icon name="send" size={14}/> Send Message</>}
      </button>
    </div>
  );
}


/* ── GitHub Contributions — no library, no token, uses public GraphQL proxy ── */
function GitHubContributions({ username }) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!GITHUB_TOKEN) {
      setError('no-token');
      setLoading(false);
      return;
    }
    const from = new Date();
    from.setFullYear(from.getFullYear() - 1);
    const to = new Date();
    const query = `{
      user(login: "${username}") {
        contributionsCollection(from: "${from.toISOString()}", to: "${to.toISOString()}") {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays { contributionCount date }
            }
          }
        }
      }
    }`;
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `bearer ${GITHUB_TOKEN}` },
      body: JSON.stringify({ query }),
    })
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(json => {
        if (json.errors) throw new Error(json.errors[0].message);
        const cal = json.data.user.contributionsCollection.contributionCalendar;
        const now = new Date();
        let totalContribs = 0;
        const weeks = cal.weeks.map(w =>
          w.contributionDays.map(d => {
            const date = new Date(d.date + 'T00:00:00');
            const count = date > now ? -1 : d.contributionCount;
            if (count > 0) totalContribs += count;
            return { date, dateStr: d.date, count };
          })
        );
        setData({ weeks, totalContribs });
        setLoading(false);
      })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [username]);

  const COLORS = [
    'rgba(255,255,255,0.05)',
    'rgba(110,231,183,0.2)',
    'rgba(110,231,183,0.42)',
    'rgba(110,231,183,0.68)',
    '#6ee7b7',
  ];
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const DAYS   = ['Mon','','Wed','','Fri','',''];
  const CELL = 11, GAP = 2;

  function getLevel(count) {
    if (count < 0) return -1;
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 9) return 3;
    return 4;
  }

  if (error === 'no-token') return (
    <div style={{ padding:'1.2rem', background:'rgba(244,114,182,0.05)', border:'1px solid rgba(244,114,182,0.2)', fontSize:'0.73rem', color:'var(--muted)', lineHeight:1.8 }}>
      <span style={{ color:'var(--ac3)' }}>⚠</span>  
    </div>
  );

  if (loading) return (
    <div style={{ display:'flex', gap:GAP, flexWrap:'wrap', opacity:0.15, padding:'1rem 0' }}>
      {Array.from({length:53}).map((_,wi) => (
        <div key={wi} style={{ display:'flex', flexDirection:'column', gap:GAP }}>
          {Array.from({length:7}).map((_,di) => (
            <div key={di} style={{ width:CELL, height:CELL, borderRadius:2, background:'var(--ac)',
              animation:`breathe ${1+(wi*7+di)%3*0.3}s ease-in-out infinite` }} />
          ))}
        </div>
      ))}
    </div>
  );

  if (error) return (
    <div style={{ padding:'1.2rem', color:'var(--ac3)', fontSize:'0.73rem' }}>
      Could not load contributions — {error}
    </div>
  );

  // Month labels
  const monthLabels = [];
  let lastMonth = -1;
  data.weeks.forEach((week, wi) => {
    const first = week.find(d => d.count >= 0);
    if (first) {
      const m = first.date.getMonth();
      if (m !== lastMonth) { monthLabels.push({ wi, label: MONTHS[m] }); lastMonth = m; }
    }
  });

  // Streaks
  const allDays = data.weeks.flat().filter(d => d.count >= 0);
  const currentStreak = (() => { let s=0; for(const d of [...allDays].reverse()){ if(d.count>0) s++; else break; } return s; })();
  const longestStreak = (() => { let m=0,c=0; for(const d of allDays){ if(d.count>0){c++;m=Math.max(m,c);}else c=0; } return m; })();

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.2rem', flexWrap:'wrap', gap:'0.5rem' }}>
        <span style={{ fontSize:'0.6rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)' }}>Contribution Activity</span>
        <span style={{ fontFamily:'var(--gfont)', fontSize:'0.85rem', fontWeight:700, color:'var(--ac)' }}>{data.totalContribs.toLocaleString()} contributions this year</span>
      </div>
      <div style={{ overflowX:'auto', paddingBottom:'0.5rem' }}>
        <div style={{ display:'flex', gap:GAP, alignItems:'flex-start', minWidth:'max-content' }}>
          {/* Day labels */}
          <div style={{ display:'flex', flexDirection:'column', gap:GAP, paddingTop: CELL+GAP+3 }}>
            {DAYS.map((d,i) => (
              <div key={i} style={{ width:24, height:CELL, fontSize:'0.55rem', color:'var(--muted)', display:'flex', alignItems:'center', letterSpacing:'0.04em' }}>{d}</div>
            ))}
          </div>
          {/* Weeks + month labels */}
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            <div style={{ display:'flex', gap:GAP, marginBottom:3, height:CELL }}>
              {data.weeks.map((_, wi) => {
                const ml = monthLabels.find(m => m.wi === wi);
                return <div key={wi} style={{ width:CELL, flexShrink:0, fontSize:'0.55rem', color:'var(--muted)', letterSpacing:'0.04em', lineHeight:1 }}>{ml?.label ?? ''}</div>;
              })}
            </div>
            <div style={{ display:'flex', gap:GAP }}>
              {data.weeks.map((week, wi) => (
                <div key={wi} style={{ display:'flex', flexDirection:'column', gap:GAP }}>
                  {week.map((day, di) => {
                    const level = getLevel(day.count);
                    if (level === -1) return <div key={di} style={{ width:CELL, height:CELL }} />;
                    return (
                      <div
                        key={di}
                        title={`${day.dateStr}: ${day.count} contribution${day.count!==1?'s':''}`}
                        style={{
                          width:CELL, height:CELL, borderRadius:2,
                          background: COLORS[level],
                          transition:'transform 0.15s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.15s',
                          cursor:'default',
                          boxShadow: level===4 ? '0 0 5px rgba(110,231,183,0.35)' : 'none',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform='scale(1.5)'; e.currentTarget.style.boxShadow='0 0 8px rgba(110,231,183,0.65)'; e.currentTarget.style.zIndex='10'; e.currentTarget.style.position='relative'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow=level===4?'0 0 5px rgba(110,231,183,0.35)':'none'; e.currentTarget.style.zIndex=''; }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Legend */}
      <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', marginTop:'1rem', justifyContent:'flex-end' }}>
        <span style={{ fontSize:'0.58rem', color:'var(--muted)' }}>Less</span>
        {COLORS.map((c,i) => <div key={i} style={{ width:CELL, height:CELL, borderRadius:2, background:c }} />)}
        <span style={{ fontSize:'0.58rem', color:'var(--muted)' }}>More</span>
      </div>
      {/* Stats bar */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:1, background:'var(--border)', border:'1px solid var(--border)', borderTop:'none', marginTop:1 }}>
        {[
          [data.totalContribs.toLocaleString(), 'Total Contributions'],
          [currentStreak, 'Current Streak'],
          [longestStreak, 'Longest Streak'],
        ].map(([val, lbl]) => (
          <div key={lbl} style={{ background:'var(--bg)', padding:'0.9rem 1.2rem', textAlign:'start' }}>
            <div style={{ fontFamily:'var(--gfont)', fontSize:'1.4rem', fontWeight:800, background:'linear-gradient(135deg,var(--tx),var(--ac))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1 }}>{val}</div>
            <div style={{ fontSize:'0.6rem', color:'var(--muted)', letterSpacing:'0.12em', textTransform:'uppercase', marginTop:'0.3rem' }}>{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── MAIN ── */
export default function Portfolio() {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [threeReady,    setThreeReady]    = useState(false);
  const [projectsOpen,  setProjectsOpen]  = useState(false);
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;
    document.body.classList.add('has-cursor');
    const dot = dotRef.current, ring = ringRef.current;
    if (!dot || !ring) return;
    const onMove = (e) => { dot.style.left=e.clientX+'px'; dot.style.top=e.clientY+'px'; requestAnimationFrame(()=>{ ring.style.left=e.clientX+'px'; ring.style.top=e.clientY+'px'; }); };
    const onOver = (e) => { if (e.target.closest('a,button,.proj-card,.social-item,.skill-chip,.filter-tab,.clone-cat-tab,.clone-card,.ghost-btn,.contrib-cell')) ring.classList.add('hovering'); };
    const onOut  = () => ring.classList.remove('hovering');
    window.addEventListener('mousemove', onMove, { passive:true });
    document.addEventListener('mouseover',  onOver, { passive:true });
    document.addEventListener('mouseout',   onOut,  { passive:true });
    return () => { document.body.classList.remove('has-cursor'); window.removeEventListener('mousemove',onMove); document.removeEventListener('mouseover',onOver); document.removeEventListener('mouseout',onOut); };
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }); }, { threshold:0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (window.THREE) { setThreeReady(true); return; }
    const s = document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    s.onload=()=>setThreeReady(true); document.head.appendChild(s);
  }, []);

  useEffect(() => {
    document.body.style.overflow = projectsOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [projectsOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <FontLoader />
      <style>{CSS}</style>
      <div id="cursor-dot"  ref={dotRef}  />
      <div id="cursor-ring" ref={ringRef} />
      <div className={`nav-overlay ${menuOpen?'active':''}`} onClick={closeMenu} />

      <nav>
        <div className="logo">Thacoder<span>.</span>Dev</div>
        <button className="menu-toggle" onClick={()=>setMenuOpen(v=>!v)} aria-label="Toggle menu">
          <Icon name={menuOpen?'close':'menu'} size={20}/>
        </button>
        <ul className={`nav-links ${menuOpen?'active':''}`}>
          {['home','about','services','contact'].map(s=>(
            <li key={s}><a href={`#${s}`} onClick={closeMenu}>{s}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="ghost-btn" onClick={()=>setProjectsOpen(true)}>
            <Icon name="layout" size={13}/> Projects
          </button>
          <a href="#contact" className="nav-btn" onClick={closeMenu}>
            <span>Hire Me</span><Icon name="arrowRight" size={13}/>
          </a>
        </div>
        <button className="mobile-projects-btn" onClick={()=>setProjectsOpen(true)}>
          <Icon name="layout" size={14}/> Projects
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <HeroCanvas/>
        <div className="hero-content">
          <div className="hero-eyebrow"><span className="status-dot"/>Available for work</div>
          <h1 className="hero-title">
            Anyia Favour<br/>
            <span className="highlight">Software Engineer</span>
          </h1>
          <p className="hero-desc">
            I build <strong>scalable backends, responsive frontends & cross‑platform mobile apps</strong>.
            I work across the full stack — from databases and APIs to pixel‑perfect UIs — always eager to learn new tools and technologies.
          </p>
          <div className="hero-ctas">
            <a  className="cta-primary" href="/anyia_favour_cv.pdf"
            download="Anyia_Favour_CV.pdf"              
>Download CV  <Icon name="arrowRight" size={14}/></a>
            <a href="#contact"  className="cta-secondary" onClick={closeMenu}><Icon name="send" size={13}/> Let's Talk</a>
          </div>
        </div>
        <div className="scroll-cue"><div className="scroll-line"/>scroll</div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="sec-label reveal">// about me</div>
        <h2 className="sec-title reveal">Who I Am</h2>
        <div className="sec-divider reveal"/>
        <div className="about-wrap">
          <div className="about-body reveal">
            <p>I'm a full‑stack software engineer passionate about building <strong>clean, performant digital products</strong>. I work across web, mobile, and backend — crafting experiences that users actually enjoy.</p>
            <p>I care deeply about code quality, system design, and shipping products that solve real problems. I'm always exploring new tools and technologies to bring the best solution to every project.</p>
          </div>
          <div className="reveal">
            <div className="id-card">
              <div className="id-avatar">AF</div>
              <div className="id-name">Anyia Favour</div>
              <div className="id-role">Full Stack Engineer</div>
              <div className="id-rows">
                {[['book','Education','Diploma. Software Engineering']].map(([ic,lb,vl])=>(
                  <div className="id-row" key={lb}>
                    <span className="lbl"><Icon name={ic} size={13}/>{lb}</span>
                    <span className="val">{vl}</span>
                  </div>
                ))}
              </div>
              <div className="open-badge"><div className="open-dot"/>Open to opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* GITHUB ACTIVITY */}
      <section id="github" className="github-bg">
        <div className="github-inner">
          <div className="sec-label reveal">// github activity</div>
          <h2 className="sec-title reveal">Contribution Grid</h2>
          <div className="sec-divider reveal"/>
          <p className="reveal" style={{ fontSize:'clamp(0.8rem,2.5vw,0.88rem)', color:'var(--muted)', lineHeight:1.9, maxWidth:560, marginBottom:'2rem', textAlign:'start' }}>
            A visual representation of my coding journey — every commit, every contribution, every day.
          </p>
          <div className="reveal github-calendar-wrap">
            <GitHubContributions username={GITHUB_USERNAME} />
          </div>
          <div className="github-cta reveal">
            <a className="github-cta-link primary" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={14}/> View GitHub Profile
            </a>
            <a className="github-cta-link" href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noopener noreferrer">
              <Icon name="code" size={14}/> All Repositories
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="sec-label reveal">// what I do</div>
        <h2 className="sec-title reveal">Services</h2>
        <div className="sec-divider reveal"/>
        <div className="services-grid">
          {SERVICES.map((s,i)=>(
            <div className="svc-card reveal" key={s.title} style={{ transitionDelay:`${i*0.09}s` }}>
              <div className="svc-icon"><Icon name={s.iconName} size={22}/></div>
              <div className="svc-title">{s.title}</div>
              <p className="svc-desc">{s.desc}</p>
              <ul className="svc-list">{s.items.map(it=><li key={it}><Icon name="chevronRight" size={13}/>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL */}
      <section id="social">
        <div className="sec-label reveal">// find me online</div>
        <h2 className="sec-title reveal">Social Media</h2>
        <div className="sec-divider reveal"/>
        <div className="social-wrap">
          <div className="reveal">
            <p>I share dev tips, project walkthroughs, and behind-the-scenes content regularly. Follow along on your preferred platform.</p>
            <p>Open to collabs, conversations about tech, or just a good dev discussion.</p>
            <div className="content-box">
              <div className="content-box-title">// what I post</div>
              {CONTENT_ITEMS.map(it=>(
                <div className="content-item" key={it.text}><Icon name={it.icon} size={13}/>{it.text}</div>
              ))}
            </div>
          </div>
          <div className="social-list reveal">
            {SOCIALS.map(s=>(
              <a className="social-item" href={s.href} key={s.name} target="_blank" rel="noopener noreferrer">
                <div className="social-icon" style={{ background:s.bg }}><Icon name={s.icon} size={18} color="white"/></div>
                <div>
                  <div className="social-nm">{s.name}</div>
                  <div className="social-hd">{s.handle}</div>
                </div>
                <span className="social-arr"><Icon name="arrowRight" size={16}/></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-bg">
        <div className="contact-inner reveal">
          <div className="contact-layout">
            <div className="contact-left">
              <div className="sec-label">// get in touch</div>
              <h2 className="sec-title" style={{ marginTop:'0.5rem' }}>Let's Build Something</h2>
              <div className="sec-divider"/>
              <p className="contact-sub">Have a project in mind? Need a reliable engineer for your team? I'm open to freelance, full-time roles, and exciting collaborations.</p>
              <a className="contact-email-link" href="mailto:anyiafavour15@gmail.com">
                <Icon name="mail" size={15} style={{ flexShrink:0 }}/>
                anyiafavour15@gmail.com
              </a>
              <div className="contact-detail" style={{ borderBottom:'none' }}><Icon name="activity" size={14}/>Usually responds ASAP</div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>© 2026 Anyia Favour — Software Engineer</div>
        <div className="foot-links">
          {SOCIALS.slice(0,3).map(s=>(
            <a href={s.href} key={s.name} target="_blank" rel="noopener noreferrer">
              <Icon name={s.icon} size={14}/>{s.name}
            </a>
          ))}
        </div>
      </footer>

      {/* PROJECTS OVERLAY */}
      <ProjectsPage open={projectsOpen} onClose={()=>setProjectsOpen(false)}/>
    </>
  );
}