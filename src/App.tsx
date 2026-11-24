import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Menu, X, Sun, Moon, ArrowUpRight, ArrowDown, MapPin, BookOpen, Headphones, Heart, Sparkles, BriefcaseBusiness } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import "./styles/app.css";
import { WorkPage, JournalPage, AtlasPage, BookshelfPage, ListeningRoomPage, AboutPage } from "./pages";

const navigation=[{label:"Home",path:"/"},{label:"The Work",path:"/work"},{label:"Journal",path:"/journal"},{label:"Atlas",path:"/atlas"},{label:"Bookshelf",path:"/bookshelf"},{label:"Listening Room",path:"/listening-room"},{label:"About",path:"/about"}];

function Navigation(){
 const [menuOpen,setMenuOpen]=useState(false); const [theme,setTheme]=useState<"light"|"dark">(()=>{const saved=localStorage.getItem("whytarun-theme");if(saved==="light"||saved==="dark")return saved;return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";});
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem("whytarun-theme",theme);},[theme]);
 const toggleTheme=()=>setTheme(current=>current==="light"?"dark":"light");
 return <header className="site-header">
  <Link className="brand" to="/" onClick={()=>setMenuOpen(false)}><span className="brand-mark">WT</span><span>WhyTarun</span></Link>
  <nav className="desktop-nav glass" aria-label="Main navigation">{navigation.map(item=><NavLink key={item.path} to={item.path} end={item.path==="/"} className={({isActive})=>isActive?"nav-link active":"nav-link"}>{item.label}</NavLink>)}</nav>
  <div className="header-actions"><button className="icon-button" onClick={toggleTheme} aria-label={theme==="light"?"Switch to dark theme":"Switch to light theme"}>{theme==="light"?<Moon size={17}/>:<Sun size={17}/>}</button><button className="icon-button mobile-menu-toggle" onClick={()=>setMenuOpen(v=>!v)} aria-expanded={menuOpen} aria-label={menuOpen?"Close navigation":"Open navigation"}>{menuOpen?<X size={18}/>:<Menu size={18}/>}</button></div>
  <AnimatePresence>{menuOpen&&<motion.nav className="mobile-nav glass" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.18}} aria-label="Mobile navigation">{navigation.map(item=><NavLink key={item.path} to={item.path} end={item.path==="/"} onClick={()=>setMenuOpen(false)} className={({isActive})=>isActive?"mobile-nav-link active":"mobile-nav-link"}>{item.label}</NavLink>)}</motion.nav>}</AnimatePresence>
 </header>;
}

const volunteerNotes=[
 {name:"PetFed",years:"2023 · 2024 · 2025",note:"Returning to community events, year after year."},
 {name:"India AI Summit",years:"2026",note:"Being part of a gathering around ideas and technology."},
 {name:"Sundowner",years:"2026",note:"Helping bring a shared experience to life."},
 {name:"Sporting Club Delhi",years:"",note:"Showing up for sport and the community around it."},
 {name:"Prakash Publications",years:"2025 · 2026",note:"Contributing time to a world built around books and ideas."}
];

function HomeV3(){return <motion.main className="home-shell home-page editorial-home" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.45,ease:"easeOut"}}>
<section className="editorial-cover" id="home">
 <div className="cover-topline"><span><i/> AN OPEN NOTEBOOK, NOT A RESUME</span><span>NEW DELHI · ALWAYS IN PROGRESS</span></div>
 <div className="cover-grid">
  <div className="cover-copy"><p className="hero-kicker">A life assembled from questions, places, people and things made.</p><h1>There is more<br/>to a person than<br/><em>what they do.</em></h1><p className="cover-deck">I'm Tarun. I work with data and technology, make things when an idea won't leave me alone, and find myself just as easily in a book, a playlist, a new place or a room full of people building something together.</p><div className="hero-actions"><Link className="primary-link" to="/about">Get to know the person <ArrowUpRight size={16}/></Link><a className="text-link" href="#the-thread">Read the story <ArrowDown size={15}/></a></div></div>
  <div className="cover-art" aria-label="Abstract editorial illustration of intersecting paths"><div className="cover-art-paper"><span className="cover-art-index">FIELD NOTES / 01</span><div className="cover-art-sun"/><div className="cover-art-path path-a"/><div className="cover-art-path path-b"/><div className="cover-art-path path-c"/><span className="cover-art-caption">curiosity<br/>keeps moving</span></div><span className="cover-margin-note">WORK · WONDER · PEOPLE · PLACES</span></div>
 </div>
 <a href="#the-thread" className="cover-scroll"><span>TURN THE PAGE</span><ArrowDown size={14}/></a>
</section>

<section className="story-thread" id="the-thread">
 <div className="story-rail"><span>THE THREAD</span><span>01 — 07</span></div>
 <div className="story-intro"><span className="section-kicker">A FEW THINGS THAT CONNECT</span><h2>Curiosity is the<br/><em>common thread.</em></h2><p>Some interests look unrelated from a distance. Up close, they share a habit: looking closer, asking another question, and staying long enough to understand.</p></div>
 <div className="thread-quote"><span className="quote-mark">“</span><p>I like finding the connections — between people and systems, information and decisions, ideas and the work it takes to bring them to life.</p><span className="quote-caption">A NOTE ABOUT HOW I MOVE THROUGH THE WORLD</span></div>
</section>

<section className="editorial-chapter work-chapter">
 <div className="chapter-side"><span>02 / THE WORK</span><BriefcaseBusiness size={19}/><span className="side-vertical">A PROFESSIONAL THREAD</span></div>
 <div className="chapter-main"><div className="chapter-heading"><span className="section-kicker">THE WORK, SO FAR</span><h2>Learning the systems.<br/><em>Finding the signal.</em></h2><p>My professional path has moved through healthcare analytics, consulting and data systems. The titles changed; the underlying question stayed familiar: how do we make complicated information useful?</p></div>
  <div className="career-ribbon"><article><span>2023 — 2024</span><h3>ProcDNA Analytics</h3><p>Healthcare data, analytics and a network-based trigger concept exploring HCP and KOL connections.</p></article><article><span>2024 — 2026</span><h3>Deloitte Consulting</h3><p>Working across analytics and data workflows in pharmaceutical and clinical-research contexts.</p></article><article><span>2026 — NOW</span><h3>Sanofi · via ManpowerGroup</h3><p>Visier functional and security ownership, Workday-connected changes, go-live support and hypercare.</p></article></div>
  <Link to="/work" className="chapter-link">Follow the professional thread <ArrowUpRight size={16}/></Link>
 </div>
</section>

<section className="editorial-chapter making-chapter">
 <div className="chapter-side"><span>03 / MAKING</span><Sparkles size={19}/><span className="side-vertical">IDEAS MADE TANGIBLE</span></div>
 <div className="chapter-main"><div className="chapter-heading"><span className="section-kicker">THE THINGS I BUILD</span><h2>Ideas are interesting.<br/><em>Making them real is better.</em></h2><p>Projects are where curiosity gets its hands dirty. Different problems, different tools — one recurring instinct to turn a question into something people can use.</p></div>
  <div className="project-ledger">
   <Link to="/work" className="project-ledger-row"><span className="ledger-no">01</span><div><span>PRODUCT · RESEARCH</span><h3>Clarity OS</h3><p>A decision-support concept for students exploring universities, courses and possible futures.</p></div><ArrowUpRight size={18}/></Link>
   <Link to="/work" className="project-ledger-row"><span className="ledger-no">02</span><div><span>PRODUCT · ENGINEERING</span><h3>Thirdwheel</h3><p>A chat-first social product shaped around thoughtful interaction and dependable conversations.</p></div><ArrowUpRight size={18}/></Link>
   <Link to="/work" className="project-ledger-row"><span className="ledger-no">03</span><div><span>CONNECTED SYSTEMS · IOT</span><h3>Smart Cradle</h3><p>A prototype combining Raspberry Pi, ESP32, sensors, messaging and a database.</p></div><ArrowUpRight size={18}/></Link>
  </div>
 </div>
</section>

<section className="life-interlude">
 <div className="interlude-heading"><span className="section-kicker">04 / THE LIFE AROUND IT</span><h2>The other things<br/>are not <em>side quests.</em></h2><p>They are part of the same story. Sometimes they are the reason the story has somewhere interesting to go.</p></div>
 <div className="interlude-columns">
  <Link to="/bookshelf" className="interlude-entry reading-entry"><span className="entry-index">A · THE BOOKSHELF</span><BookOpen size={22}/><h3>Lives I haven't lived.<br/><em>Worlds I get to enter.</em></h3><p>Twenty-eight confirmed title entries, and a shelf still being rediscovered. Reading is a way of borrowing another point of view.</p><span className="entry-foot">OPEN THE READING ROOM <ArrowUpRight size={15}/></span></Link>
  <Link to="/atlas" className="interlude-entry atlas-entry"><span className="entry-index">B · THE ATLAS</span><MapPin size={22}/><h3>A few places<br/><em>that made the map.</em></h3><p>Chennai, Jaipur, Puducherry, Hyderabad, Rishikesh, Bir and Varanasi. Seven confirmed places; no need to turn them into a checklist.</p><span className="entry-foot">WANDER THE ATLAS <ArrowUpRight size={15}/></span></Link>
  <Link to="/listening-room" className="interlude-entry listening-entry"><span className="entry-index">C · THE LISTENING ROOM</span><Headphones size={22}/><h3>Some days need words.<br/><em>Some need a soundtrack.</em></h3><p>Eight playlists, from LooneyTunes to Soft Desi. A small archive of different moods and different versions of a day.</p><span className="entry-foot">ENTER THE LISTENING ROOM <ArrowUpRight size={15}/></span></Link>
 </div>
</section>

<section className="editorial-chapter people-chapter">
 <div className="chapter-side"><span>05 / SHOWING UP</span><Heart size={19}/><span className="side-vertical">TIME GIVEN, NOT COUNTED</span></div>
 <div className="chapter-main"><div className="chapter-heading"><span className="section-kicker">VOLUNTEERING & COMMUNITY</span><h2>Some things matter<br/><em>because you show up.</em></h2><p>Volunteering has been another way to be part of something beyond my own work — helping at events, meeting people and contributing time where a pair of hands is useful.</p></div>
  <div className="volunteer-ledger">{volunteerNotes.map((item,i)=><article key={item.name}><span className="volunteer-no">0{i+1}</span><div><h3>{item.name}</h3><p>{item.note}</p></div>{item.years&&<span className="volunteer-years">{item.years}</span>}</article>)}</div>
 </div>
</section>

<section className="interests-coda">
 <div><span className="section-kicker">06 / THINGS I RETURN TO</span><h2>A few more<br/><em>open tabs.</em></h2><p>Sport, greener places, books, music, long conversations, building small things, and learning how the world works. No ranking. No neat categories.</p></div>
 <div className="interest-words"><span>Cricket</span><span>Chess</span><span>Football</span><span>Badminton</span><span>Reading</span><span>Volunteering</span><span>Travel</span><span>Technology</span><span>Writing</span><span>Music</span><span>Marathons</span><span>Curiosity</span></div>
 <Link to="/about" className="chapter-link">A little more about me <ArrowUpRight size={16}/></Link>
</section>

<section className="home-journal-band editorial-journal"><div className="journal-band-mark"><Sparkles size={18}/></div><div><span className="section-kicker">07 / NOTES TO SELF & THE WORLD</span><h2>Some thoughts are still taking shape.</h2><p>The journal is kept open for reflections, observations, ideas and questions worth putting into words. No filler, no invented entries.</p></div><Link to="/journal" className="journal-cta">Visit the journal <ArrowUpRight size={16}/></Link></section>
<section className="editorial-finale"><span className="section-kicker">A SMALL SIGN-OFF</span><p>Still becoming.<br/><em>Always paying attention.</em></p><Link to="/about" className="text-link">Meet the person behind the pages <ArrowUpRight size={15}/></Link></section>
</motion.main>}

function Footer(){return <footer className="site-footer"><span>WhyTarun © {new Date().getFullYear()}</span><span>A professional mind. A personal world.</span><a href="#top" aria-label="Back to top">↑</a></footer>}
export default function App() {
  return (
    <div className="app-frame" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navigation />
      <div id="main-content" tabIndex={-1}>
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
      </div>
      <Footer />
    </div>
  );
}
