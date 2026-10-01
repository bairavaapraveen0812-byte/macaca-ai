import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  ChevronDown,
  CircleCheckBig,
  Clock3,
  Headphones,
  HeartPulse,
  Inbox,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Play,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import heroMascot from "@/assets/macca-hero-mascot.png";
import heroMascotDark from "@/assets/macca-hero-mascot-dark-ready.png";
import waveMascot from "@/assets/macca-wave-mascot.png";
import waveMascotDark from "@/assets/macca-wave-mascot-dark-ready.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Macaca AI — Human-like Agentic AI Solutions" },
      {
        name: "description",
        content:
          "AI-powered customer intelligence for call analytics, email insights, and instant customer support.",
      },
      { property: "og:title", content: "Macaca AI — Human-like Agentic AI Solutions" },
      {
        property: "og:description",
        content: "Smarter conversations and deeper insights with Macaca AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    icon: Headphones,
    title: "Audit Chimp",
    label: "AI Call Auditing System",
    text: "Turn conversations into actionable insights. Audit, analyze, and improve with AI.",
    tone: "product-mint",
  },
  {
    icon: Mail,
    title: "Inbox Peel",
    label: "Email Intelligence",
    text: "Analyze, prioritize, and turn your inbox into actionable insights.",
    tone: "product-blue",
  },
  {
    icon: Bot,
    title: "Banana Bot",
    label: "Instant Customer Support",
    text: "Automate responses, resolve queries, and keep your customers happy.",
    tone: "product-gold",
  },
];

const reviews = [
  {
    quote:
      "Macaca AI transformed how we handle customer conversations. The insights are incredible—accurate and actionable.",
    name: "Sarah Chen",
    role: "Head of Customer Support, FinTech",
    initials: "SC",
  },
  {
    quote:
      "The email analytics tool is a game-changer. We reduced our response time by 46% and improved customer satisfaction across the board.",
    name: "Rajeev M.",
    role: "Operations Manager, SaaS Company",
    initials: "RM",
  },
  {
    quote:
      "Automation, analytics, and AI — all in one platform. Macaca AI is a must-have for any modern team.",
    name: "Elena D.",
    role: "CX Director, Global BPO",
    initials: "ED",
  },
];

function ActionLink({ children, outline = false }: { children: ReactNode; outline?: boolean }) {
  return (
    <a className={outline ? "action-link action-link-outline" : "action-link"} href="#contact">
      {children}
      <ArrowRight size={15} />
    </a>
  );
}

function Brand() {
  return (
    <a href="#home" className="brand" aria-label="Macaca AI home">
      <span className="brand-mark">
        <Bot size={22} strokeWidth={2.5} />
      </span>
      <span>Macaca <b>AI</b></span>
    </a>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="kicker">
      <Bot size={12} />
      {children}
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("macaca-theme", nextTheme ? "dark" : "light");
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("macaca-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="page-width nav-inner">
          <Brand />
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Products <ChevronDown size={13} /></a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <div className="nav-actions">
            <ActionLink outline>Request Demo</ActionLink>
            <a className="action-link" href="#contact">Contact Sales</a>
          </div>
          <button
            className="theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section id="home" className="hero page-width">
        <div className="hero-copy">
          <Kicker>AI-Powered Customer Intelligence</Kicker>
          <h1>Macaca AI delivers <span>human-like</span><br />Agentic AI solutions</h1>
          <p>
            From voice and email analytics to real-time call auditing, our AI agents empower teams across your enterprise—turning conversations, data, and customer signals into actionable insights.
          </p>
          <div className="hero-actions">
            <ActionLink>Request Demo</ActionLink>
            <ActionLink outline>Explore Products</ActionLink>
          </div>
        </div>

        <div className="hero-visual">
          <img src={darkMode ? heroMascotDark : heroMascot} alt="Macaca AI assistant working on a laptop" width={1024} height={1024} />
          <div className="float-card call-card">
            <strong>Call Analytics</strong>
            <div className="waveform" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, index) => <i key={index} />)}
            </div>
            <Play size={18} fill="currentColor" />
          </div>
          <div className="float-card email-card">
            <strong>Email Insights</strong>
            <span><Mail size={24} /> <i /></span>
          </div>
          <div className="float-card sentiment-card">
            <strong>Sentiment</strong>
            <span className="sentiment-value"><CircleCheckBig size={32} /> <small>Positive<br /><b>92%</b></small></span>
          </div>
          <div className="float-card bars-card"><BarChart3 size={52} /></div>
          <div className="hello-note">Hi, I'm<br />Macaca AI!</div>
        </div>
      </section>

      <section className="metrics page-width" aria-label="Company statistics">
        <Metric icon={<Phone />} value="1M+" label="Calls Analyzed Daily" />
        <Metric icon={<CircleCheckBig />} value="95%" label="Customer Satisfaction" />
        <Metric icon={<Building2 />} value="500+" label="Enterprise Clients" />
        <Metric icon={<TrendingUp />} value="40%" label="Efficiency Improvement" />
      </section>

      <section className="trusted page-width">
        <p>TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
        <div className="logo-row">
          <span>◈ TechCorp</span><span>◌ GlobalData</span><span>✣ Innovate<br /><b>Solutions</b></span>
          <span>◒ airtel</span><span>◬ TATA</span><span>Infosys</span>
        </div>
      </section>

      <section id="about" className="conversation section-band">
        <div className="page-width split-section">
          <div className="section-copy">
            <Kicker>OUR SOLUTIONS</Kicker>
            <h2>Smarter Conversations.<br /><span>Deeper Insights.</span></h2>
            <p>From sentiment analysis to compliance monitoring, Audit Chimp gives you complete visibility into every call.</p>
            <ul className="check-list">
              <li><Check /> Understand customer queries</li>
              <li><Check /> Track sentiment and emotion</li>
              <li><Check /> Detect urgent and important messages</li>
              <li><Check /> Integrate with your existing tools</li>
            </ul>
            <ActionLink>Explore Audit Chimp</ActionLink>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <section id="products" className="products page-width">
        <Kicker>OUR PRODUCTS</Kicker>
        <h2>Powerful AI solutions for every stage of the customer journey.</h2>
        <p className="section-intro">From intelligent call auditing to email analytics and automated customer support, Macaca AI gives you the tools to work smarter, faster, and grow your business.</p>
        <div className="product-grid">
          {products.map(({ icon: Icon, title, label, text, tone }) => (
            <article className={`product-card ${tone}`} key={title}>
              <div className="product-heading"><span><Icon /></span><div><h3>{title}</h3><small>{label}</small></div></div>
              <p>{text}</p>
              <a href="#contact">Explore <ArrowRight size={14} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="impact section-band">
        <div className="page-width impact-grid">
          <div>
            <Kicker>WHY MACACA AI?</Kicker>
            <h2>Built for Real Business Impact</h2>
            <p className="section-intro">Our AI Agents are designed to be intelligent, adaptable, and secure—so you can move faster, work smarter, and stay ahead.</p>
            <div className="benefit-grid">
              <Benefit icon={<Sparkles />} title="Real-time Intelligence" text="Instant insights, real results." />
              <Benefit icon={<Zap />} title="Higher Efficiency" text="Automate the routine." />
              <Benefit icon={<MessageCircle />} title="Better Customer Experience" text="Understand. Respond. Delight." />
              <Benefit icon={<Building2 />} title="Scalable Platform" text="Grow without limits." />
              <Benefit icon={<ShieldCheck />} title="Enterprise Ready" text="Secure & compliant." />
              <Benefit icon={<Clock3 />} title="Always On" text="24/7 support and monitoring." />
            </div>
          </div>
          <div className="impact-visual">
            <div className="speech-bubble">I'm Macaca AI!<br /><b>Your 24/7 AI assistant.</b></div>
            <img src={darkMode ? waveMascotDark : waveMascot} alt="Macaca AI assistant waving" loading="lazy" width={1024} height={768} />
            <div className="impact-card"><CircleCheckBig /><span>Customer Sentiment<small>Positive <b>92%</b></small></span></div>
          </div>
        </div>
      </section>

      <section className="enterprise page-width">
        <Kicker>ENTERPRISE SOLUTIONS</Kicker>
        <h2>AI for Every Business Need</h2>
        <p className="section-intro">Secure, scalable, and built for the modern enterprise. Macaca AI helps teams across industries turn conversations into measurable outcomes.</p>
        <div className="enterprise-row">
          <Industry icon={<ShieldCheck />} name="BFSI" />
          <Industry icon={<HeartPulse />} name="Healthcare" />
          <Industry icon={<ShoppingBag />} name="Retail & E-commerce" />
          <Industry icon={<Phone />} name="Telecom" />
          <Industry icon={<Building2 />} name="Travel & Hospitality" />
          <Industry icon={<Sparkles />} name="EdTech" />
        </div>
      </section>

      <section className="reviews page-width">
        <Kicker>WHAT OUR CLIENTS SAY</Kicker>
        <h2>Trusted by teams, loved by customers.</h2>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
              <blockquote>“{review.quote}”</blockquote>
              <div className="reviewer"><span>{review.initials}</span><p><b>{review.name}</b><small>{review.role}</small></p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="final-cta page-width">
        <img src={darkMode ? waveMascotDark : waveMascot} alt="Macaca AI mascot" loading="lazy" width={1024} height={768} />
        <div><small>READY TO GET STARTED</small><h2>Let's Build a Smarter,<br />More Human Tomorrow</h2><p>Unlock the full potential of your customer conversations with Macaca AI.</p></div>
        <div className="cta-actions"><ActionLink>Request Demo</ActionLink><ActionLink outline>Contact Sales</ActionLink></div>
      </section>

      <footer className="site-footer page-width">
        <div className="footer-main"><Brand /><nav><a href="#home">Home</a><a href="#about">About</a><a href="#products">Products</a><a href="#contact">Contact</a></nav><div className="socials"><a href="#contact" aria-label="LinkedIn"><Linkedin /></a><a href="#contact" aria-label="X"><X /></a><a href="#contact" aria-label="YouTube"><Youtube /></a></div></div>
        <div className="footer-bottom"><span>© 2026 Macaca AI. All rights reserved.</span><span>Smarter Conversations. Better Decisions.</span></div>
      </footer>
    </main>
  );
}

function Metric({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return <div className="metric"><span>{icon}</span><p><b>{value}</b><small>{label}</small></p></div>;
}

function Benefit({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <div className="benefit"><span>{icon}</span><p><b>{title}</b><small>{text}</small></p></div>;
}

function Industry({ icon, name }: { icon: ReactNode; name: string }) {
  return <div className="industry">{icon}<span>{name}</span></div>;
}

function DashboardMockup() {
  return (
    <div className="dashboard-mockup">
      <aside><Brand /><a className="active">Dashboard</a><a>Conversations</a><a>Knowledge Base</a><a>Settings</a></aside>
      <div className="conversation-list"><b>Conversations</b>{["Sarah Johnson", "Mike Chan", "Priya Sharma", "Daniel Lee", "Aisha Khan"].map((name, index) => <div key={name}><span>{name.slice(0, 1)}</span><p><b>{name}</b><small>{["Order Tracking", "Return Policy", "Product enquiry", "Billing Issue", "Technical support"][index]}</small></p><i>{index + 2}m</i></div>)}</div>
      <div className="chat-panel"><b>Sarah Johnson</b><div className="chat-bubble incoming">Can I track my order?</div><div className="chat-bubble outgoing">Sure! Here's your tracking link. Your order is on the way. 📦</div><button type="button">View Details <ArrowRight size={12} /></button><div className="chat-input">Type a message… <ArrowRight size={13} /></div></div>
    </div>
  );
}