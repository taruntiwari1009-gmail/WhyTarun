import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Menu, X, Sun, Moon, ArrowUpRight, ArrowDown, MapPin, BookOpen, Headphones, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import "./styles/app.css";

const navigation=[{label:"Home",path:"/"},{label:"The Work",path:"/work"},{label:"Journal",path:"/journal"},{label:"Atlas",path:"/atlas"},{label:"Bookshelf",path:"/bookshelf"},{label:"Listening Room",path:"/listening-room"},{label:"About",path:"/about"}];
const pageNames:Record<string,string>={work:"The Work",journal:"Journal",atlas:"Atlas",bookshelf:"Bookshelf","listening-room":"Listening Room",about:"About"};

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
function Home(){return <motion.main className="home-shell" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.45,ease:"easeOut"}}>
 <div className="eyebrow"><span className="eyebrow-dot"/> A PERSONAL DIGITAL SPACE</div>
 <section className="hero"><p className="hero-kicker">The work. The wonder. Everything in between.</p><h1>A little world<br/><em>of my own.</em></h1><p className="hero-copy">I work with data, technology and ideas. I build things, explore things, and collect stories along the way.</p><div className="hero-actions"><Link className="primary-link" to="/work">Explore the work <ArrowUpRight size={16}/></Link><Link className="text-link" to="/about">A little about me</Link></div></section>
 <section className="home-intro-grid" aria-label="Explore the website"><Link to="/work" className="intro-panel work-panel"><span className="panel-index">01 / THE WORK</span><h2>Curiosity,<br/>put to work.</h2><p>Projects, research, craft and the things I make.</p><ArrowUpRight className="panel-arrow" size={18}/></Link><Link to="/journal" className="intro-panel life-panel"><span className="panel-index">02 / THE LIFE</span><h2>Life is more<br/>than a job.</h2><p>Places, books, music, thoughts and little discoveries.</p><ArrowUpRight className="panel-arrow" size={18}/></Link></section>
 <div className="home-note"><span>Currently shaping this space</span><span>Delhi, India · {new Date().getFullYear()}</span></div>
</motion.main>}
function Placeholder({slug}:{slug:string}){const title=pageNames[slug]??"Page";return <main className="placeholder-page"><div className="eyebrow"><span className="eyebrow-dot"/> THE PERSONAL ARCHIVE</div><h1>{title}</h1><p>This corner is taking shape. More soon.</p><Link to="/" className="text-link">← Back home</Link></main>}
function Footer(){return <footer className="site-footer"><span>WhyTarun © {new Date().getFullYear()}</span><span>A professional mind. A personal world.</span><a href="#top" aria-label="Back to top">↑</a></footer>}
export default function App(){return <div className="app-frame" id="top"><div className="ambient ambient-one"/><div className="ambient ambient-two"/><Navigation/><Routes><Route path="/" element={<Home/>}/>{Object.keys(pageNames).map(slug=><Route key={slug} path={"/"+slug} element={<Placeholder slug={slug}/>}/>)} /><Route path="*" element={<Placeholder slug="about"/>}/></Routes><Footer/></div>}