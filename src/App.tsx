import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Menu, X, Sun, Moon, ArrowUpRight, ArrowDown, MapPin, BookOpen, Headphones, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import "./styles/app.css";
import { WorkPage, JournalPage, AtlasPage, BookshelfPage, ListeningRoomPage, AboutPage } from "./pages";

const navigation=[{label:"Home",path:"/"},{label:"The Work",path:"/work"},{label:"Journal",path:"/journal"},{label:"Atlas",path:"/atlas"},{label:"Bookshelf",path:"/bookshelf"},{label:"Listening Room",path:"/listening-room"},{label:"About",path:"/about"}];

function Navigation(){
 const [menuOpen,setMenuOpen]=useState(false); const [theme,setTheme]=useState<"light"|"dark">("light");
 const toggleTheme=()=>{const next=theme==="light"?"dark":"light";setTheme(next);document.documentElement.dataset.theme=next;};
 return <header className="site-header">
  <Link className="brand" to="/" onClick={()=>setMenuOpen(false)}><span className="brand-mark">WT</span><span>WhyTarun</span></Link>
  <nav className="desktop-nav glass" aria-label="Main navigation">{navigation.map(item=><NavLink key={item.path} to={item.path} end={item.path==="/"} className={({isActive})=>isActive?"nav-link active":"nav-link"}>{item.label}</NavLink>)}</nav>
  <div className="header-actions"><button className="icon-button" onClick={toggleTheme} aria-label={theme==="light"?"Switch to dark theme":"Switch to light theme"}>{theme==="light"?<Moon size={17}/>:<Sun size={17}/>}</button><button className="icon-button mobile-menu-toggle" onClick={()=>setMenuOpen(v=>!v)} aria-expanded={menuOpen} aria-label={menuOpen?"Close navigation":"Open navigation"}>{menuOpen?<X size={18}/>:<Menu size={18}/>}</button></div>
  <AnimatePresence>{menuOpen&&<motion.nav className="mobile-nav glass" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.18}} aria-label="Mobile navigation">{navigation.map(item=><NavLink key={item.path} to={item.path} end={item.path==="/"} onClick={()=>setMenuOpen(false)} className={({isActive})=>isActive?"mobile-nav-link active":"mobile-nav-link"}>{item.label}</NavLink>)}</motion.nav>}</AnimatePresence>
 </header>;
}
function HomeV3(){return <motion.main className="home-shell home-page" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.45,ease:"easeOut"}}>
<section className="home-hero-section" id="home"><div className="eyebrow"><span className="eyebrow-dot"/> A PERSONAL DIGITAL SPACE</div><div className="hero-layout"><div className="hero"><p className="hero-kicker">The work. The wonder. Everything in between.</p><h1>A little world<br/><em>of my own.</em></h1><p className="hero-copy">I work with data, technology and ideas. I build things, explore things, and collect stories along the way.</p><div className="hero-actions"><Link className="primary-link" to="/work">Explore the work <ArrowUpRight size={16}/></Link><Link className="text-link" to="/about">A little about me</Link></div></div><div className="hero-art" aria-hidden="true"><div className="hero-art-inner"><span className="art-label">Curiosity is a compass</span><span className="art-orbit orbit-one"/><span className="art-orbit orbit-two"/><span className="art-glass"/></div></div></div><a href="#home-explore" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a></section>
<section className="home-section work-preview" id="home-explore"><div className="section-heading"><div><span className="section-kicker">01 / THE WORK</span><h2>Curiosity,<br/><em>put to work.</em></h2></div><p className="section-intro">A few things I've made, helped shape, or couldn't stop thinking about. Always learning by building.</p></div><div className="project-grid">
<Link className="project-card project-clay" to="/work"><span className="project-number">01</span><span className="project-category">Product · Research</span><h3>Clarity OS</h3><p>A decision-support concept for students exploring universities, courses and possible futures.</p><span className="project-link">Explore project <ArrowUpRight size={16}/></span></Link>
<Link className="project-card project-lilac" to="/work"><span className="project-number">02</span><span className="project-category">Product · Engineering</span><h3>Thirdwheel</h3><p>A chat-first social product, shaped around thoughtful design and dependable conversations.</p><span className="project-link">Explore project <ArrowUpRight size={16}/></span></Link>
<Link className="project-card project-sage" to="/work"><span className="project-number">03</span><span className="project-category">IoT · Prototyping</span><h3>Smart Cradle</h3><p>An exploration in connected sensors, embedded systems and a more responsive cradle.</p><span className="project-link">Explore project <ArrowUpRight size={16}/></span></Link></div><div className="section-bottom-link"><Link to="/work" className="text-link">View all work <ArrowUpRight size={15}/></Link></div></section>
<section className="home-section life-preview" id="life"><div className="section-heading"><div><span className="section-kicker">02 / OUTSIDE THE SCREEN</span><h2>Life is more<br/><em>than a job.</em></h2></div><p className="section-intro">A collection of places, pages, sounds and small things that make a life feel like its own.</p></div><div className="life-grid">
<Link to="/atlas" className="life-card atlas-card"><MapPin size={18}/><span className="life-card-kicker">THE ATLAS</span><h3>Somewhere<br/>along the way.</h3><p>Places visited, paths taken, and places still on the map.</p><div className="place-chips">{["Chennai","Jaipur","Puducherry","Hyderabad","Rishikesh","Bir","Varanasi"].map(place=><span key={place}>{place}</span>)}</div><ArrowUpRight className="life-arrow" size={18}/></Link>
<Link to="/bookshelf" className="life-card books-card"><BookOpen size={18}/><span className="life-card-kicker">THE BOOKSHELF</span><h3>Stories I keep<br/>close.</h3><p>Books that stayed with me, challenged me, or found me at the right time.</p><span className="life-card-bottom">A growing shelf <ArrowUpRight size={15}/></span></Link>
<Link to="/listening-room" className="life-card music-card"><Headphones size={18}/><span className="life-card-kicker">THE LISTENING ROOM</span><h3>Soundtrack<br/>to the in-between.</h3><p>Eight playlists. Many moods. No particular order.</p><div className="playlist-mini">{["LooneyTunes","Lost in Time","Loving You Can Hurt","Mani"].map(name=><span key={name}>{name}</span>)}</div><span className="life-card-bottom">Step inside <ArrowUpRight size={15}/></span></Link></div></section>
<section className="home-journal-band"><div className="journal-band-mark"><Sparkles size={18}/></div><div><span className="section-kicker">03 / NOTES TO SELF & THE WORLD</span><h2>Thoughts, in progress.</h2><p>Little reflections, observations, things I'm learning, and ideas I haven't quite figured out yet.</p></div><Link to="/journal" className="journal-cta">Visit the journal <ArrowUpRight size={16}/></Link></section><section className="home-closing"><p>Still becoming. Always curious.</p><Link to="/about" className="text-link">Get to know me <ArrowUpRight size={15}/></Link></section></motion.main>}
function Footer(){return <footer className="site-footer"><span>WhyTarun © {new Date().getFullYear()}</span><span>A professional mind. A personal world.</span><a href="#top" aria-label="Back to top">↑</a></footer>}
export default function App() {
  return (
    <div className="app-frame" id="top">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeV3 />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/atlas" element={<AtlasPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
        <Route path="/listening-room" element={<ListeningRoomPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<HomeV3 />} />
      </Routes>
      <Footer />
    </div>
  );
}
