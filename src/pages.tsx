import { useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Headphones, MapPin, Music2, Search, BookOpen, BriefcaseBusiness, Heart, Sparkles } from "lucide-react";

const career = [
  {period:"JUL 2023 — FEB 2024", role:"Associate Analyst", company:"ProcDNA Analytics Pvt. Ltd.", story:"An early chapter in healthcare analytics, including a network-based trigger concept for medical representatives exploring HCP and KOL relationships through network-centrality techniques.", tags:["Healthcare analytics","Network science","Discovery"]},
  {period:"FEB 2024 — JAN 2026", role:"Associate Analyst", company:"Deloitte Consulting India Pvt. Ltd.", story:"Working across analytics and data workflows in pharmaceutical and clinical-research contexts, connecting technical delivery with business needs.", tags:["Consulting","Data workflows","Pharma"]},
  {period:"MAR 2026 — PRESENT", role:"Visier Functional Expert Lead", company:"Sanofi · via ManpowerGroup", story:"Working across Visier's functional and security model, Workday-connected changes, access structures, go-live support and hypercare.", tags:["Visier","Security","Workday"]}
];
const books:[string,string][] = [
  ["The Kite Runner","Khaled Hosseini"],["To Kill a Mockingbird","Harper Lee"],["I Am Missing","Tim Weaver"],["Digital Fortress","Dan Brown"],["The Red Pyramid","Rick Riordan"],["A Thousand Boy Kisses","Tillie Cole"],["The Subtle Art of Not Giving a F*ck","Mark Manson"],["Breaking Dawn and the Twilight series",""],["The Great Gatsby",""],["Room",""],["1984",""],["Angel in Paradise",""],["Black Beauty",""],["Animal Farm",""],["Beto Wali Vidhwa",""],["Train to Pakistan",""],["All You Need Is Love",""],["The Only Way Out Is Death",""],["Behind Closed Doors",""],["Wabi Sabi",""],["Book of Lost Threads",""],["Crime and Punishment",""],["Norwegian Wood",""],["Julius Caesar",""],["Challenging Caste",""],["Blood",""],["Death",""],["Gervase Phinn",""]
];
const bookColors=["#794c3e","#526b5d","#64567b","#b27c4f","#355c68","#a65d5b","#79624d","#5b6178"];
const playlists:[string,string][]=[
 ["LooneyTunes","https://music.apple.com/in/playlist/looneytunes/pl.u-55D6ZNKi8bmAMMW"],
 ["Lost in Time","https://music.apple.com/in/playlist/lost-in-time/pl.u-4JomaBNIa6Rqzz7"],
 ["Loving You Can Hurt","https://music.apple.com/in/playlist/loving-you-can-hurt/pl.u-4JomaoJsa6Rqzz7"],
 ["Mani","https://music.apple.com/in/playlist/mani/pl.u-pMylgxjH4DdAoob"],
 ["Mooooood","https://music.apple.com/in/playlist/moooood/pl.u-yZyVE31CYjbL225"],
 ["Sensei","https://music.apple.com/in/playlist/sensei/pl.u-pMylgaET4DdAoob"],
 ["Soft","https://music.apple.com/in/playlist/soft/pl.u-qxylEelT2ANorrq"],
 ["Soft Desi","https://music.apple.com/in/playlist/soft-desi/pl.u-XkD0vBrCD3XMkk7"]
];
const places=[["Chennai","Tamil Nadu"],["Jaipur","Rajasthan"],["Puducherry","Puducherry"],["Hyderabad","Telangana"],["Rishikesh","Uttarakhand"],["Bir","Himachal Pradesh"],["Varanasi","Uttar Pradesh"]] as const;
const volunteering=[["PetFed","2023 · 2024 · 2025"],["India AI Summit","2026"],["Sundowner","2026"],["Sporting Club Delhi",""],["Prakash Publications","2025 · 2026"]] as const;
const photo={
 books:"https://images.unsplash.com/photo-1701607632237-4b50076614f7?auto=format&fit=crop&w=1500&q=90",
 music:"https://images.unsplash.com/photo-1780305807144-0411e940d5ed?auto=format&fit=crop&w=1500&q=90",
 atlas:"https://images.unsplash.com/photo-1735909600958-f442498875f9?auto=format&fit=crop&w=1500&q=90",
 work:"https://images.unsplash.com/photo-1735948055457-8d816fb80a87?auto=format&fit=crop&w=1500&q=90",
 journal:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1500&q=90"
};
function Intro({index,title,subtitle,theme="dark"}:{index:string;title:ReactNode;subtitle:string;theme?:string}) {
 return <header className={`page-hero page-hero-${theme}`}><span className="eyebrow">{index} <i/></span><h1>{title}</h1><p>{subtitle}</p></header>;
}

export function WorkPage(){
 return <motion.main className="inner-page work-page" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>
  <Intro index="01 / THE WORK" title={<>Building with data,<br/>people and <em>purpose.</em></>} subtitle="A professional journey through healthcare analytics, consulting and data systems."/>
  <section className="work-lead"><div><span className="eyebrow">THE THREAD THROUGH IT ALL</span><h2>Understand the system.<br/><em>Find the signal.</em></h2><p>My work sits around data, technology and business — turning complex problems into reliable, useful systems. The details below stay intentionally high-level where work is client-sensitive.</p></div><img src={photo.work} alt="A quiet, warmly lit workspace" /></section>
  <section className="career-section"><div className="section-heading"><span className="eyebrow">THE PROFESSIONAL STORY</span><h2>Three chapters.<br/><em>One evolving path.</em></h2></div><div className="career-list">{career.map((job,i)=><article className="career-item" key={job.company}><span className="career-count">0{i+1}</span><div className="career-meta"><span>{job.period}</span><h3>{job.role}</h3><strong>{job.company}</strong></div><div className="career-story"><p>{job.story}</p><div className="tag-list">{job.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section>
  <section className="project-section"><div className="section-heading"><span className="eyebrow">INDEPENDENT BUILDS</span><h2>Things I've <em>made.</em></h2></div><div className="project-grid"><article><span>01 / PRODUCT · RESEARCH</span><h3>Clarity OS</h3><p>A decision-support concept helping students explore universities, courses and possible pathways using research and structured information.</p></article><article><span>02 / PRODUCT · ENGINEERING</span><h3>Thirdwheel</h3><p>A chat-first web application focused on dependable messaging, thoughtful interaction design and a careful release process.</p></article><article><span>03 / CONNECTED SYSTEMS</span><h3>Smart Cradle</h3><p>An IoT prototype combining Raspberry Pi, ESP32, sensors, messaging and a database to explore a more responsive cradle.</p></article></div></section>
 </motion.main>;
}

export function BookshelfPage(){
 const [selected,setSelected]=useState(0); const [query,setQuery]=useState("");
 const filtered=useMemo(()=>books.map((book,index)=>({book,index})).filter(({book})=>book.join(" ").toLowerCase().includes(query.toLowerCase())),[query]);
 const current=books[selected];
 return <motion.main className="inner-page bookshelf-page" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>
  <Intro index="02 / THE BOOKSHELF" theme="warm" title={<>A room full of<br/><em>other worlds.</em></>} subtitle="Twenty-eight confirmed title entries. Not a reading leaderboard — a shelf of stories, ideas and perspectives."/>
  <section className="library-hero"><img src={photo.books} alt="A warmly lit, shadowy library filled with books"/><div className="library-hero-copy"><span className="eyebrow light">THE READING ROOM · 01—28</span><h2>Some books stay<br/>long after the <em>last page.</em></h2><p>Browse the titles. Choose one to bring it forward. Personal notes will live here when they're ready — never filled in by guesswork.</p><span className="library-count">28 <small>CONFIRMED ENTRIES</small></span></div></section>
  <section className="library-browser"><div className="browser-heading"><div><span className="eyebrow">THE SHELVES</span><h2>Find your <em>next return.</em></h2></div><label className="book-search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search titles or authors" aria-label="Search books"/></label></div>
   <div className="library-layout"><div className="book-grid">{filtered.map(({book,index})=><button key={book[0]} onClick={()=>setSelected(index)} className={selected===index?"book-object selected":"book-object"} style={{"--book-color":bookColors[index%bookColors.length]} as React.CSSProperties}><span>{String(index+1).padStart(2,"0")}</span><strong>{book[0]}</strong><small>{book[1]||"AUTHOR NOT RECORDED"}</small></button>)}{filtered.length===0&&<p className="empty-result">No title matches that search.</p>}</div>
    <aside className="book-detail"><span className="eyebrow">PULLED FROM THE SHELF · {String(selected+1).padStart(2,"0")}/28</span><div className="detail-book" style={{"--book-color":bookColors[selected%bookColors.length]} as React.CSSProperties}><span>{String(selected+1).padStart(2,"0")}</span><strong>{current[0]}</strong><small>{current[1]||"ON THE SHELF"}</small></div><div className="book-detail-copy"><h3>{current[0]}</h3><p>{current[1]||"Author not recorded in the current catalogue."}</p><div className="reader-note"><span>A NOTE FROM THE READER</span><p>No personal note has been added for this title yet. The space stays open rather than inventing what the book meant.</p></div><div className="detail-controls"><button onClick={()=>setSelected((selected+books.length-1)%books.length)} aria-label="Previous book"><ArrowLeft size={16}/> Previous</button><button onClick={()=>setSelected((selected+1)%books.length)} aria-label="Next book">Next <ArrowRight size={16}/></button></div></div></aside>
   </div>
  </section>
 </motion.main>;
}

export function ListeningRoomPage(){
 const [active,setActive]=useState(0); const [view,setView]=useState<"covers"|"index">("covers");
 const [name,url]=playlists[active];
 return <motion.main className="inner-page listening-page" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>
  <Intro index="03 / THE LISTENING ROOM" theme="music" title={<>A soundtrack for<br/><em>different selves.</em></>} subtitle="Eight saved playlists. Different moods, memories and versions of a day. Pick a sleeve and open the original on Apple Music."/>
  <section className="listening-hero"><img src={photo.music} alt="A record player in a warm, atmospheric listening room"/><div className="listening-hero-overlay"/><div className="listening-now"><span className="eyebrow light">CURRENTLY IN THE ROOM · 0{active+1}/08</span><h2>{name}</h2><p>One of eight saved listening spaces.</p><a href={url} target="_blank" rel="noreferrer" className="button button-cream">Open in Apple Music <ArrowUpRight size={16}/></a></div><div className="listening-stamp">SIDE A<br/>PLAY IT LOUD</div></section>
  <section className="playlist-section"><div className="browser-heading"><div><span className="eyebrow">THE PLAYLIST ARCHIVE</span><h2>Choose a <em>mood.</em></h2></div><div className="view-switch"><button className={view==="covers"?"active":""} onClick={()=>setView("covers")}>COVERS</button><button className={view==="index"?"active":""} onClick={()=>setView("index")}>INDEX</button></div></div>
   {view==="covers"?<div className="playlist-grid">{playlists.map(([title],i)=><button key={title} onClick={()=>setActive(i)} className={active===i?"playlist-card active":"playlist-card"}><span className="playlist-no">SIDE A · 0{i+1}</span><div className={`playlist-artwork artwork-${i%4}`}><span>{title}</span><i/></div><span className="playlist-title">{title}</span><small>{active===i?"NOW SELECTED":"SELECT PLAYLIST"} <ArrowUpRight size={12}/></small></button>)}</div>:<div className="playlist-index">{playlists.map(([title],i)=><button key={title} className={active===i?"active":""} onClick={()=>setActive(i)}><span>0{i+1}</span><strong>{title}</strong><span>{active===i?"SELECTED":"OPEN PLAYLIST"}</span><ArrowUpRight size={15}/></button>)}</div>}
  </section>
 </motion.main>;
}

export function AtlasPage(){
 const [active,setActive]=useState(0); const [showAll,setShowAll]=useState(false);
 const [city,state]=places[active];
 return <motion.main className="inner-page atlas-page" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>
  <Intro index="04 / THE ATLAS" theme="atlas" title={<>Places, paths<br/>and <em>passages.</em></>} subtitle="A growing map of places that have crossed my path. Seven confirmed destinations; plenty of room left on the map."/>
  <section className="atlas-feature"><img src={photo.atlas} alt="A Himalayan village and mountain landscape"/><div className="atlas-feature-overlay"/><div className="atlas-feature-copy"><span className="eyebrow light">A PERSONAL GEOGRAPHY · INDIA</span><span className="atlas-number">0{active+1} / 07</span><h2>{city}</h2><p>{state}, India</p><span className="atlas-photo-note">A landscape for the journey — not a photograph attributed to this specific stop.</span></div></section>
  <section className="atlas-index"><div className="browser-heading"><div><span className="eyebrow">THE PLACE INDEX</span><h2>Pick a <em>pin.</em></h2></div><button className="text-control" onClick={()=>setShowAll(v=>!v)}>{showAll?"SHOW SELECTED":"VIEW ALL PLACES"} <ArrowUpRight size={14}/></button></div><div className="place-grid">{places.map(([place,region],i)=><button key={place} className={active===i?"place-item active":"place-item"} onClick={()=>setActive(i)}><span>0{i+1}</span><strong>{place}</strong><small>{region}</small><ArrowUpRight size={15}/></button>)}</div>{showAll&&<p className="atlas-note">These are the seven confirmed places in the current archive. Dates, photographs and individual travel notes have not yet been added.</p>}</section>
 </motion.main>;
}

export function JournalPage(){
 const [active,setActive]=useState("All notes");
 const topics=["All notes","Ideas & curiosity","Technology & society","Books & culture","Everyday observations"];
 return <motion.main className="inner-page journal-page" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>
  <Intro index="05 / THE JOURNAL" theme="journal" title={<>Thoughts in<br/><em>progress.</em></>} subtitle="A notebook for observations, questions, reading notes and ideas that are still finding their shape."/>
  <section className="journal-hero"><img src={photo.journal} alt="A notebook and pen on a writing desk"/><div className="journal-paper"><span className="eyebrow">NOTEBOOK NO. 01 · OPEN</span><h2>Not every thought<br/>arrives <em>finished.</em></h2><p>Some begin as a question on the way home. Some start in the margin of a book. Some take a while to become words.</p><span className="handwritten">Still figuring it out.</span></div></section>
  <section className="journal-topics"><div><span className="eyebrow">POSSIBLE THREADS</span><h2>Where a thought<br/>might <em>begin.</em></h2></div><div className="topic-list">{topics.map(topic=><button key={topic} onClick={()=>setActive(topic)} className={active===topic?"active":""}>{topic}<ArrowUpRight size={15}/></button>)}</div><div className="journal-empty"><span>SELECTED NOTEBOOK · {active.toUpperCase()}</span><h3>The page is still open.</h3><p>No published entries yet. This space will hold actual writing, not placeholder articles or borrowed quotations.</p></div></section>
 </motion.main>;
}

export function AboutPage(){
 return <motion.main className="inner-page about-page" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>
  <Intro index="06 / THE PERSON BEHIND THE PAGES" theme="about" title={<>Beyond the<br/><em>résumé.</em></>} subtitle="The work is one chapter. The rest is books, music, places, people, sport, volunteering and an enduring curiosity about how things fit together."/>
  <section className="about-lead"><div className="about-portrait"><img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85" alt="A quiet landscape at sunset"/><span>STILL BECOMING</span></div><div className="about-statement"><span className="eyebrow">A LITTLE CONTEXT</span><p>I like understanding how things connect: people and systems, information and decisions, ideas and the work it takes to bring them to life. I don't want life to fit into one neat category. This site is a home for all the different things that make it mine.</p><span className="about-signoff">Curious by nature. Always.</span></div></section>
  <section className="about-interests"><div className="section-heading"><span className="eyebrow">THE MANY OPEN TABS</span><h2>A few things that<br/><em>make a life.</em></h2></div><div className="interest-grid"><article><span>01</span><h3>Reading</h3><p>Books, ideas and the occasional rabbit hole.</p></article><article><span>02</span><h3>Music</h3><p>A playlist for nearly every kind of day.</p></article><article><span>03</span><h3>Sport</h3><p>Cricket, chess, football, badminton and the joy of trying.</p></article><article><span>04</span><h3>Exploring</h3><p>New places, long walks and greener surroundings.</p></article><article><span>05</span><h3>Making</h3><p>Small digital products, prototypes and experiments.</p></article><article><span>06</span><h3>People</h3><p>Volunteering, events and being part of a community.</p></article></div></section>
  <section className="community-section"><div><span className="eyebrow">SHOWING UP</span><h2>Time given,<br/><em>not counted.</em></h2><p>Volunteering has been one way to be part of gatherings and communities beyond my day-to-day work.</p></div><div className="community-list">{volunteering.map(([name,years])=><article key={name}><Heart size={15}/><strong>{name}</strong><span>{years||" "}</span></article>)}</div></section>
  <section className="about-ending"><span className="eyebrow">A WORK IN PROGRESS</span><h2>Still becoming.<br/><em>Always paying attention.</em></h2><Link to="/" className="inline-link">Back to the beginning <ArrowUpRight size={15}/></Link></section>
 </motion.main>;
}
