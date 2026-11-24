import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import "./styles/app.css";
import { WorkPage, JournalPage, AtlasPage, BookshelfPage, ListeningRoomPage, AboutPage } from "./pages";

const nav = [
  ["Home", "/"], ["Work", "/work"], ["Bookshelf", "/bookshelf"],
  ["Listening Room", "/listening-room"], ["Atlas", "/atlas"],
  ["Journal", "/journal"], ["About", "/about"]
] as const;

function Navigation() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("whytarun-theme");
    return saved === "light" ? "light" : "dark";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("whytarun-theme", theme);
  }, [theme]);
  return <header className="site-header">
    <Link to="/" className="wordmark" onClick={() => setOpen(false)}>WhyTarun<span>.</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">
      {nav.map(([label, path]) => <NavLink key={path} to={path} end={path === "/"} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>{label}</NavLink>)}
    </nav>
    <div className="nav-tools">
      <button className="theme-toggle" onClick={() => setTheme(v => v === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>{theme === "dark" ? <Sun size={17}/> : <Moon size={17}/>}</button>
      <button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={19}/> : <Menu size={19}/>}</button>
    </div>
    <AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} aria-label="Mobile navigation">
      {nav.map(([label,path]) => <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)} className={({isActive}) => isActive ? "mobile-nav-item active" : "mobile-nav-item"}>{label}<ArrowUpRight size={15}/></NavLink>)}
    </motion.nav>}</AnimatePresence>
  </header>;
}

function HomePage() {
  const rooms = [
    {name:"Work", sub:"Things I build and work on.", path:"/work", image:"https://images.unsplash.com/photo-1735948055457-8d816fb80a87?auto=format&fit=crop&w=900&q=85", tone:"work"},
    {name:"Bookshelf", sub:"Books that stayed with me.", path:"/bookshelf", image:"https://images.unsplash.com/photo-1701607632237-4b50076614f7?auto=format&fit=crop&w=900&q=85", tone:"books"},
    {name:"Listening Room", sub:"Playlists for different moods.", path:"/listening-room", image:"https://images.unsplash.com/photo-1780305807144-0411e940d5ed?auto=format&fit=crop&w=900&q=85", tone:"music"},
    {name:"Atlas", sub:"Places I've been and want to be.", path:"/atlas", image:"https://images.unsplash.com/photo-1735909600958-f442498875f9?auto=format&fit=crop&w=900&q=85", tone:"atlas"},
    {name:"Journal", sub:"Thoughts, notes and half-formed ideas.", path:"/journal", image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85", tone:"journal"},
    {name:"About", sub:"The person beyond the work.", path:"/about", image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85", tone:"about"}
  ];
  return <motion.main className="home-page" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.45}}>
    <section className="home-hero">
      <img className="hero-photo" src="https://images.unsplash.com/photo-1735909600958-f442498875f9?auto=format&fit=crop&w=2200&q=90" alt="A Himalayan village set beneath dramatic mountain peaks"/>
      <div className="hero-shade"/>
      <div className="hero-content">
        <span className="eyebrow light">THE LIVING ARCHIVE <i/></span>
        <h1>A curious<br/>technologist,<br/>reader, listener,<br/>traveller <em>and</em><br/>volunteer.</h1>
        <p>I build with data and code, read to understand people, listen for perspective, travel to feel a little smaller, and volunteer because it keeps me grounded.</p>
        <div className="hero-actions"><Link to="/about" className="button button-cream">Explore my world <ArrowUpRight size={16}/></Link><Link to="/work" className="button button-outline">What I do</Link></div>
      </div>
      <div className="hero-aside"><span>01 / A LIFE IN MANY THREADS</span><span>NEW DELHI · INDIA</span></div>
      <div className="hero-scroll"><ArrowDownRight size={17}/><span>SCROLL TO EXPLORE</span></div>
    </section>

    <section className="room-section content-wrap">
      <div className="section-topline"><span>THE DIFFERENT ROOMS</span><span>01 — 06</span></div>
      <div className="room-grid">{rooms.map((room,i)=><Link to={room.path} key={room.path} className={`room-card room-${room.tone}`}>
        <img src={room.image} alt="" loading="lazy"/>
        <div className="room-overlay"/>
        <span className="room-number">0{i+1}</span>
        <div className="room-copy"><h2>{room.name}</h2><p>{room.sub}</p><span className="room-arrow"><ArrowUpRight size={18}/></span></div>
      </Link>)}</div>
    </section>

    <section className="work-feature">
      <div className="work-feature-inner content-wrap">
        <div className="work-feature-copy"><span className="eyebrow light">THE PROFESSIONAL THREAD</span><h2>From data<br/>to real <em>impact.</em></h2><p>Three chapters across ProcDNA, Deloitte and Sanofi — working around healthcare data, analytics, ETL pipelines and systems that help people make better decisions.</p><Link to="/work" className="inline-link">Explore the work <ArrowUpRight size={16}/></Link></div>
        <div className="work-feature-image"><img src="https://images.unsplash.com/photo-1735948055457-8d816fb80a87?auto=format&fit=crop&w=1200&q=85" alt="A quiet desk with a laptop and books" loading="lazy"/><span>DATA · SYSTEMS · PEOPLE</span></div>
        <div className="work-feature-stats"><div><strong>3+</strong><span>Years of experience</span></div><div><strong>3</strong><span>Organisations</span></div><div><strong>∞</strong><span>Questions still worth asking</span></div></div>
      </div>
    </section>

    <section className="life-section content-wrap">
      <div className="life-heading"><span className="eyebrow">THE REST OF IT</span><h2>A few things<br/>that keep me <em>going.</em></h2></div>
      <p className="life-intro">Beyond work, life is a mix of stories, songs, places, games and people. These aren't side quests. They're part of the same story.</p>
      <div className="life-strip">
        <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=85" alt="Books on a shelf" loading="lazy"/>
        <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=700&q=85" alt="Music studio equipment" loading="lazy"/>
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85" alt="A mountain landscape" loading="lazy"/>
        <img src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=700&q=85" alt="Chess pieces on a board" loading="lazy"/>
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=85" alt="A motorcycle" loading="lazy"/>
      </div>
      <div className="interest-line"><span>READING</span><span>MUSIC</span><span>TRAVEL</span><span>CHESS & SPORT</span><span>VOLUNTEERING</span><span>BUILDING</span></div>
    </section>

    <section className="home-close content-wrap"><span className="eyebrow">STILL BECOMING</span><p>There is more to a person<br/>than <em>what they do.</em></p><Link to="/about" className="inline-link">A little more about me <ArrowUpRight size={16}/></Link></section>
  </motion.main>;
}

function Footer() {
  return <footer className="site-footer content-wrap"><Link to="/" className="wordmark">WhyTarun<span>.</span></Link><span>A professional mind. A personal world.</span><a href="#top">BACK TO TOP ↑</a></footer>;
}

export default function App() {
  return <div className="app-frame" id="top"><a className="skip-link" href="#main-content">Skip to content</a><Navigation/><div id="main-content" tabIndex={-1}>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/work" element={<WorkPage/>}/>
      <Route path="/journal" element={<JournalPage/>}/>
      <Route path="/atlas" element={<AtlasPage/>}/>
      <Route path="/bookshelf" element={<BookshelfPage/>}/>
      <Route path="/listening-room" element={<ListeningRoomPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="*" element={<HomePage/>}/>
    </Routes>
  </div><Footer/></div>;
}
