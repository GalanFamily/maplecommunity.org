// Maple Community — landing page.
// Stack mirrors carehub.org: React + Babel standalone + Tailwind (all via CDN), no build step.
// Content below is a starting point — edit the text/links freely and it auto-deploys on save.

const { useState, useEffect } = React;
const {
  Menu, X, ArrowRight, ArrowDown, Heart, Users, Handshake, Calendar,
  Sprout, MapPin, Mail, Phone, Quote, HandHeart,
} = window.Icons;

const ACCENT = { c900: "#1c4538", c700: "#2c6e5b", c600: "#3b8a73", c500: "#4eaa90", c400: "#94d4be", c100: "#dcefe7" };
const DISPLAY = "'Fraunces', Georgia, serif";

// ---- Editable content ------------------------------------------------------
const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Get Involved", href: "#involved" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

const PROGRAMS = [
  { Icon: HandHeart, title: "Neighbor Mutual Aid", blurb: "A simple way for neighbors to ask for and offer help — rides, groceries, a hand with repairs, or just company." },
  { Icon: Sprout, title: "Community Garden", blurb: "Shared plots, seasonal workdays, and a free produce table. Grow food, learn, and share the harvest." },
  { Icon: Users, title: "Youth & Family", blurb: "After-school activities, mentorship, and family nights that give kids a safe, welcoming place to belong." },
  { Icon: Heart, title: "Elder Connection", blurb: "Friendly visits, wellness check-ins, and tech help so our older neighbors stay connected and supported." },
];

const STATS = [
  { value: "350+", label: "neighbors reached each month" },
  { value: "40", label: "active volunteers" },
  { value: "12", label: "years serving the community" },
  { value: "100%", label: "of donations stay local" },
];

const EVENTS = [
  { date: "Jun 14", title: "Saturday Garden Workday", time: "9:00 AM · Maple Park", note: "All ages — tools and gloves provided." },
  { date: "Jun 21", title: "Community Potluck", time: "5:30 PM · The Commons", note: "Bring a dish to share. Everyone welcome." },
  { date: "Jul 4", title: "Neighborhood Block Party", time: "12:00 PM · Maple St.", note: "Music, food, and games for the whole street." },
];
// ---------------------------------------------------------------------------

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <svg viewBox="0 0 36 32" className="w-11 h-10" aria-hidden="true">
        <g style={{ mixBlendMode: "multiply" }}>
          <circle cx="18" cy="10" r="9" fill={ACCENT.c700} />
          <circle cx="11" cy="21" r="9" fill={ACCENT.c500} fillOpacity="0.92" />
          <circle cx="25" cy="21" r="9" fill={ACCENT.c400} fillOpacity="0.92" />
        </g>
      </svg>
      <span className="text-[24px] tracking-tight" style={{ color: "#1f1b16", fontFamily: DISPLAY, fontWeight: 600 }}>
        Maple<span style={{ color: ACCENT.c700, fontStyle: "italic", fontWeight: 500 }}>Community</span>
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#fbf7ed]/90 backdrop-blur border-b border-black/5 shadow-sm" : ""}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-medium text-[#3a322a] hover:text-[#2c6e5b] transition-colors">{l.name}</a>
          ))}
          <a href="#donate" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm hover:opacity-90 transition" style={{ background: ACCENT.c700 }}>
            Donate <Heart width={16} height={16} fill="white" stroke="white" />
          </a>
        </nav>
        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#fbf7ed] border-b border-black/5 px-5 py-4 space-y-3">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-[16px] font-medium text-[#3a322a]">{l.name}</a>
          ))}
          <a href="#donate" onClick={() => setOpen(false)} className="block text-center rounded-full px-5 py-3 font-semibold text-white" style={{ background: ACCENT.c700 }}>Donate</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-5 sm:px-8 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-40" style={{ background: ACCENT.c400 }} />
      <div className="max-w-6xl mx-auto relative">
        <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium" style={{ background: ACCENT.c100, color: ACCENT.c900 }}>
          <MapPin width={14} height={14} /> A neighborhood nonprofit
        </span>
        <h1 className="mt-6 text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] font-medium" style={{ fontFamily: DISPLAY }}>
          Neighbors building a stronger<br className="hidden sm:block" /> place to <span style={{ color: ACCENT.c700, fontStyle: "italic" }}>belong</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] sm:text-[20px] leading-relaxed text-[#4a4036]">
          Maple Community brings people together through mutual aid, shared spaces, and local programs — so no one in our neighborhood has to go it alone.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#involved" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[16px] font-semibold text-white shadow-sm hover:opacity-90 transition" style={{ background: ACCENT.c700 }}>
            Get involved <ArrowRight width={18} height={18} />
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[16px] font-semibold border border-black/15 hover:bg-black/5 transition">
            Learn more <ArrowDown width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="text-[14px] font-semibold tracking-wide uppercase" style={{ color: ACCENT.c600 }}>Our Mission</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-tight font-medium" style={{ fontFamily: DISPLAY }}>
            A community is the people who show up for each other.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[#4a4036]">
            We started as a handful of neighbors with a shared belief: that small, consistent acts of care add up to a place where everyone thrives. Today we run programs across food, family, and connection — all powered by volunteers who live right here.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-[#4a4036]">
            We're independent, locally funded, and open to all. Whoever you are, there's a place for you at the table.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl p-6 bg-white/60 border border-black/5">
              <div className="text-[34px] font-semibold leading-none" style={{ fontFamily: DISPLAY, color: ACCENT.c700 }}>{s.value}</div>
              <div className="mt-2 text-[14px] text-[#5a5046] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="px-5 sm:px-8 py-20 sm:py-28" style={{ background: ACCENT.c100 }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-[14px] font-semibold tracking-wide uppercase" style={{ color: ACCENT.c600 }}>What We Do</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-tight font-medium" style={{ fontFamily: DISPLAY }}>Programs that meet real needs</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {PROGRAMS.map(({ Icon, title, blurb }) => (
            <div key={title} className="rounded-2xl p-7 bg-white border border-black/5 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: ACCENT.c100, color: ACCENT.c700 }}>
                <Icon width={24} height={24} />
              </div>
              <h3 className="mt-5 text-[21px] font-semibold" style={{ fontFamily: DISPLAY }}>{title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-[#4a4036]">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Involved() {
  const cards = [
    { Icon: Handshake, title: "Volunteer", blurb: "Give a few hours a month. We'll match you to something you'll love.", cta: "Sign up", href: "#contact" },
    { Icon: Heart, title: "Donate", blurb: "Every dollar stays local and goes straight to programs.", cta: "Give now", href: "#donate" },
    { Icon: Users, title: "Partner", blurb: "Local business or org? Let's build something together.", cta: "Reach out", href: "#contact" },
  ];
  return (
    <section id="involved" className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-[14px] font-semibold tracking-wide uppercase" style={{ color: ACCENT.c600 }}>Get Involved</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-tight font-medium" style={{ fontFamily: DISPLAY }}>There's a place for you here</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cards.map(({ Icon, title, blurb, cta, href }) => (
            <div key={title} className="rounded-2xl p-7 border border-black/10 flex flex-col">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: ACCENT.c100, color: ACCENT.c700 }}>
                <Icon width={24} height={24} />
              </div>
              <h3 className="mt-5 text-[21px] font-semibold" style={{ fontFamily: DISPLAY }}>{title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-[#4a4036] flex-1">{blurb}</p>
              <a href={href} className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold" style={{ color: ACCENT.c700 }}>
                {cta} <ArrowRight width={16} height={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="px-5 sm:px-8 py-20 sm:py-28" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <p className="text-[14px] font-semibold tracking-wide uppercase" style={{ color: ACCENT.c600 }}>What's Coming Up</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-tight font-medium" style={{ fontFamily: DISPLAY }}>Upcoming events</h2>
          </div>
          <Calendar width={40} height={40} style={{ color: ACCENT.c400 }} />
        </div>
        <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {EVENTS.map((e) => (
            <div key={e.title} className="py-5 flex items-center gap-5">
              <div className="shrink-0 w-16 text-center">
                <div className="text-[13px] uppercase tracking-wide text-[#8a7f72]">{e.date.split(" ")[0]}</div>
                <div className="text-[26px] font-semibold leading-none" style={{ fontFamily: DISPLAY, color: ACCENT.c700 }}>{e.date.split(" ")[1]}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-[18px] font-semibold">{e.title}</h3>
                <p className="text-[15px] text-[#5a5046]">{e.time} · {e.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quotes() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <Quote width={40} height={40} className="mx-auto" style={{ color: ACCENT.c400 }} />
        <blockquote className="mt-6 text-[clamp(1.5rem,3.2vw,2.2rem)] leading-snug font-medium" style={{ fontFamily: DISPLAY }}>
          “When I moved here I didn't know a soul. Maple Community is the reason this place finally feels like home.”
        </blockquote>
        <p className="mt-6 text-[15px] font-medium text-[#5a5046]">— A Maple neighbor</p>
      </div>
    </section>
  );
}

function Donate() {
  return (
    <section id="donate" className="px-5 sm:px-8 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto rounded-3xl px-8 py-14 sm:px-14 text-center" style={{ background: ACCENT.c900 }}>
        <h2 className="text-[clamp(2rem,4vw,3rem)] leading-tight font-medium text-white" style={{ fontFamily: DISPLAY }}>
          Keep good things growing
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-[17px] leading-relaxed" style={{ color: ACCENT.c100 }}>
          Your gift funds the garden, the potlucks, the rides, and the visits. 100% stays in the neighborhood.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#donate" className="rounded-full px-7 py-3.5 text-[16px] font-semibold text-white" style={{ background: ACCENT.c500 }}>Give monthly</a>
          <a href="#donate" className="rounded-full px-7 py-3.5 text-[16px] font-semibold bg-white text-[#1c4538]">One-time gift</a>
        </div>
        <p className="mt-5 text-[13px]" style={{ color: ACCENT.c400 }}>Connect your donation platform here (e.g. Donorbox, Givebutter, or PayPal).</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 sm:px-8 py-20 sm:py-28" style={{ background: ACCENT.c100 }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-[14px] font-semibold tracking-wide uppercase" style={{ color: ACCENT.c600 }}>Contact</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-tight font-medium" style={{ fontFamily: DISPLAY }}>Come say hello</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#4a4036]">
            Questions, ideas, or just want to get involved? We'd love to hear from you.
          </p>
          <div className="mt-8 space-y-4">
            <a href="mailto:hello@maplecommunity.org" className="flex items-center gap-3 text-[16px] font-medium hover:underline">
              <Mail width={20} height={20} style={{ color: ACCENT.c700 }} /> hello@maplecommunity.org
            </a>
            <div className="flex items-center gap-3 text-[16px] font-medium">
              <Phone width={20} height={20} style={{ color: ACCENT.c700 }} /> (555) 123-4567
            </div>
            <div className="flex items-center gap-3 text-[16px] font-medium">
              <MapPin width={20} height={20} style={{ color: ACCENT.c700 }} /> The Commons, 100 Maple St.
            </div>
          </div>
        </div>
        <form className="rounded-2xl bg-white p-7 border border-black/5 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks! Connect this form to email or a form service to receive messages."); }}>
          <div>
            <label className="text-[14px] font-medium">Name</label>
            <input className="mt-1 w-full rounded-lg border border-black/15 px-3 py-2.5 outline-none focus:border-[#2c6e5b]" type="text" required />
          </div>
          <div>
            <label className="text-[14px] font-medium">Email</label>
            <input className="mt-1 w-full rounded-lg border border-black/15 px-3 py-2.5 outline-none focus:border-[#2c6e5b]" type="email" required />
          </div>
          <div>
            <label className="text-[14px] font-medium">Message</label>
            <textarea rows={4} className="mt-1 w-full rounded-lg border border-black/15 px-3 py-2.5 outline-none focus:border-[#2c6e5b]" required />
          </div>
          <button type="submit" className="w-full rounded-full px-5 py-3 font-semibold text-white" style={{ background: ACCENT.c700 }}>Send message</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-12 border-t border-black/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-[14px] text-[#6a6055]">© {new Date().getFullYear()} Maple Community. A neighborhood nonprofit.</p>
        <div className="flex gap-5 text-[14px] font-medium text-[#3a322a]">
          {NAV_LINKS.slice(0, 3).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#2c6e5b]">{l.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Programs />
        <Involved />
        <Events />
        <Quotes />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
