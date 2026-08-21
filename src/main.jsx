import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { experience, projects, skillGroups } from './data/projects';
import './styles.css';

const navigation = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Work', '#experience'],
  ['Projects', '#projects'],
  ['OS', '/os'],
  ['Contact', '#contact']
];

function logDev(event, context = {}) {
  if (import.meta.env.DEV) {
    console.debug('[portfolio]', { event, ...context });
  }
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function DeviceMockup({ src, alt, className = '' }) {
  const displayRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const display = displayRef.current;
    const image = imageRef.current;
    if (!display || !image) return undefined;

    const setScrollDistance = () => {
      const overflow = Math.max(0, image.getBoundingClientRect().height - display.getBoundingClientRect().height);
      image.style.setProperty('--scroll-offset', '-' + Math.round(overflow) + 'px');
    };

    const observer = new ResizeObserver(setScrollDistance);
    observer.observe(display);
    image.addEventListener('load', setScrollDistance);
    requestAnimationFrame(setScrollDistance);

    return () => {
      observer.disconnect();
      image.removeEventListener('load', setScrollDistance);
    };
  }, [src]);

  return (
    <div className={'device-mockup ' + className}>
      <span className="device-button device-action" aria-hidden="true" />
      <span className="device-button device-volume-up" aria-hidden="true" />
      <span className="device-button device-volume-down" aria-hidden="true" />
      <span className="device-button device-power" aria-hidden="true" />
      <div className="device-shell">
        <span className="device-island" aria-hidden="true" />
        <div className="device-display" ref={displayRef}>
          <img ref={imageRef} src={src} alt={alt} />
        </div>
        <span className="device-home" aria-hidden="true" />
      </div>
    </div>
  );
}

function SectionKicker({ children, index }) {
  return (
    <div className="section-kicker">
      <span className="line" />
      <span>{children}</span>
      <span>§{index}</span>
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Back to top">
        NA<span>.</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(([label, href]) => (
          <a href={href} key={href}>{label}</a>
        ))}
      </nav>
      <a className="header-cta" href="mailto:maheshwarinaman513@gmail.com">
        Say hello <Arrow />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        onClick={() => {
          setMenuOpen(!menuOpen);
          logDev('mobile-menu-toggle', { open: !menuOpen });
        }}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      {menuOpen && (
        <div className="mobile-nav" id="mobile-nav">
          <nav aria-label="Mobile navigation">
            {navigation.map(([label, href], index) => (
              <a
                href={href}
                key={href}
                style={{ '--i': index }}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="mailto:maheshwarinaman513@gmail.com" onClick={closeMenu}>
            Start a project <Arrow />
          </a>
        </div>
      )}
    </header>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('lock-scroll');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('lock-scroll');
    };
  }, [onClose]);

  return (
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <button className="modal-backdrop" aria-label="Close project details" onClick={onClose} />
      <article className={'modal-panel accent-' + project.accent}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
          Close ×
        </button>
        <div className="modal-heading">
          <span>CASE · {project.number}</span>
          <p>{project.category}</p>
          <h2 id="project-modal-title">{project.name}</h2>
        </div>
        <div className="modal-overview">
          <p className="modal-copy">{project.details}</p>
          <div className="modal-images">
            {project.images.map((image, index) => (
              <DeviceMockup
                className="modal-device"
                key={image}
                src={image}
                alt={project.name + ' app screen ' + (index + 1)}
              />
            ))}
          </div>
        </div>
        <div className="case-study-grid">
          {project.capabilities.map((group) => (
            <section className="case-study-block" key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          ))}
        </div>
        <section className="case-flow">
          <h3>Product flow</h3>
          <ol>{project.flow.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol>
        </section>
        <section className="case-technologies">
          <h3>Used in this app</h3>
          <div className="modal-stack">
            {project.technologies.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>
        <section className="case-evidence">
          <h3>Implemented areas</h3>
          <div>{project.evidence.map((item) => <span key={item}>{item}</span>)}</div>
        </section>
      </article>
    </div>
  );
}

function PhoneOS() {
  const [activeProject, setActiveProject] = useState(null);
  const [clock, setClock] = useState('');

  useEffect(() => {
    const updateClock = () => setClock(
      new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );
    updateClock();
    const interval = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const openProject = (project) => {
    setActiveProject(project);
    logDev('os-project-open', { project: project.id });
  };

  return (
    <main className="phone-os">
      <a className="os-back" href="/">← Back to portfolio</a>
      <p className="os-label">Naman Asawa · Mobile product developer</p>
      <section className="phone-frame" aria-label="Naman OS">
        <div className="phone-screen">
          <div className="phone-status">
            <span>{clock}</span>
            <span>◔ ◔ ▰</span>
          </div>
          <div className="phone-island" />
          <div className="os-widgets">
            <article className="os-profile-widget">
              <img src="/work/naman-asawa.jpg" alt="" />
              <div><span>Available for</span><strong>React Native<br />work</strong></div>
            </article>
            <article className="os-work-widget">
              <span>SELECTED WORK</span>
              <strong>07</strong>
              <p>mobile products</p>
            </article>
          </div>
          <p className="os-section-label">PROJECT LIBRARY</p>
          <div className="os-app-grid">
            {projects.map((project, index) => (
              <button
                className={'os-app accent-' + project.accent}
                key={project.id}
                type="button"
              style={{ '--app-index': index }}
              onClick={() => openProject(project)}
            >
                <span className="os-app-icon os-logo-icon"><img src={project.logo} alt="" /></span>
                <span>{project.name}</span>
              </button>
            ))}
            <a className="os-app os-contact-app" href="tel:+918696281302" aria-label="Call Naman Asawa">
              <span className="os-app-icon os-call-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21.3 16.2v3.1a2.1 2.1 0 0 1-2.3 2.1A18.1 18.1 0 0 1 3.1 5.5 2.1 2.1 0 0 1 5.2 3.2h3.1a1 1 0 0 1 1 .9c.1 1.1.3 2.2.7 3.2a1 1 0 0 1-.2 1.1L8.5 9.7a14.2 14.2 0 0 0 5.8 5.8l1.3-1.3a1 1 0 0 1 1.1-.2c1 .4 2.1.6 3.2.7a1 1 0 0 1 .9 1.5Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Contact</span>
            </a>
          </div>
          <div className="os-dock">
            <a href="/"><span>⌂</span><small>Portfolio</small></a>
            <a href="/Naman-Asawa-Resume.pdf" download><span>↓</span><small>Resume</small></a>
            <a href="mailto:maheshwarinaman513@gmail.com"><span>✉</span><small>Email</small></a>
          </div>
          <div className="phone-home-indicator" />
          {activeProject && (
            <article className={'os-window accent-' + activeProject.accent}>
              <button type="button" className="os-window-close" onClick={() => setActiveProject(null)}>×</button>
              <img src={activeProject.images[0]} alt={activeProject.name + ' app screen'} />
              <div>
                <span>CASE · {activeProject.number}</span>
                <h1>{activeProject.name}</h1>
                <p>{activeProject.category}</p>
                <button type="button" onClick={() => setActiveProject(null)}>Close project</button>
              </div>
            </article>
          )}
        </div>
      </section>
      <p className="os-hint">Tap a project to open its product card.</p>
    </main>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [copyState, setCopyState] = useState('Copy email');

  const openProject = (project) => {
    setSelectedProject(project);
    logDev('project-open', { project: project.id });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('maheshwarinaman513@gmail.com');
      setCopyState('Email copied');
      logDev('email-copy');
    } catch {
      setCopyState('Use email link');
      logDev('email-copy-failed');
    }
    window.setTimeout(() => setCopyState('Copy email'), 2400);
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <section className="hero" id="top">
          <div className="hero-meta">
            <span>[ PORTFOLIO · MMXXVI ]</span>
            <span>REACT NATIVE DEVELOPER</span>
            <span>UDAIPUR, INDIA</span>
          </div>
          <div className="hero-grid">
            <div>
              <h1>NAMAN<br />ASAWA<span>.</span></h1>
              <p className="hero-copy">
                I build dependable mobile products — from real-time logistics to thoughtful consumer experiences.
              </p>
            </div>
            <div className="portrait-wrap">
              <div className="portrait-note">MOBILE · PRODUCT · SYSTEMS</div>
              <img src="/work/naman-asawa.jpg" alt="Naman Asawa" />
              <div className="portrait-frame" aria-hidden="true" />
            </div>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View selected work <Arrow /></a>
            <a className="button" href="/os">Open Naman OS <Arrow /></a>
            <a className="button" href="/Naman-Asawa-Resume.pdf" download>Resume · PDF <span aria-hidden="true">↓</span></a>
            <a className="button" href="#contact">Get in touch <Arrow /></a>
          </div>
          <div className="hero-footer">
            <span><i /> Scroll to explore</span>
            <span>001 / 007</span>
          </div>
        </section>

        <div className="marquee" aria-label="Core skills">
          <div>
            <span>React Native</span><b>✦</b><span>Product Systems</span><b>✦</b>
            <span>Payments</span><b>✦</b><span>Real-time</span><b>✦</b>
            <span>Mobile UX</span><b>✦</b><span>React Native</span><b>✦</b>
            <span>Product Systems</span><b>✦</b><span>Payments</span><b>✦</b>
          </div>
        </div>

        <section className="about section" id="about">
          <SectionKicker index="02">ABOUT / APPROACH</SectionKicker>
          <div className="about-head">
            <h2>I BUILD MOBILE<br />EXPERIENCES THAT FEEL<br /><em>USEFUL</em> FROM DAY ONE.</h2>
          </div>
          <div className="manifesto">
            <div><span>01 / 03</span><h3>Product first</h3></div>
            <p>I start with the real user journey: discover, decide, pay, track and return. The interface should make every next step feel obvious.</p>
            <div><span>02 / 03</span><h3>System minded</h3></div>
            <p>Good mobile work is more than screens. I connect APIs, authentication, maps, payments, roles and notifications into a dependable system.</p>
            <div><span>03 / 03</span><h3>Delivery focused</h3></div>
            <p>I ship responsive React Native products across Android and iOS, with care for performance, edge cases and the details users actually notice.</p>
          </div>
          <div className="stats">
            <div><strong>07</strong><span>PRODUCTS SHOWCASED</span></div>
            <div><strong>02</strong><span>ROLES AT WEBSENOR</span></div>
            <div><strong>RN</strong><span>PRIMARY PLATFORM</span></div>
            <div><strong>24/7</strong><span>PRODUCT THINKING</span></div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <SectionKicker index="03">TOOLBOX</SectionKicker>
          <div className="split-heading">
            <h2>STACK &amp;<br /><em>SIGNAL.</em></h2>
            <p>Tools selected for secure, real-world mobile product delivery.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.label}>
                <div className="card-meta">
                  <span>0{index + 1} · {group.label}</span>
                  <span>{group.items.length} ITEMS</span>
                </div>
                <div className="skill-pills">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section" id="experience">
          <SectionKicker index="04">TRAJECTORY</SectionKicker>
          <div className="experience-layout">
            <h2>WHERE I’VE<br /> <em>SHIPPED.</em></h2>
            <div className="timeline">
              {experience.map((role) => (
                <article className="role-card" key={role.title}>
                  <div className="timeline-dot" />
                  <div className="role-meta"><span>{role.period}</span><span>{role.location}</span></div>
                  <h3>{role.company}</h3>
                  <p className="role-title">{role.title}</p>
                  <ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </article>
              ))}
              <div className="education">
                <p>EDUCATION</p>
                <div>
                  <article><span>2022 — 2026</span><h3>JECRC University</h3><p>B.Tech Computer Science Engineering · CGPA 8.0</p></article>
                  <article><span>2020 — 2022</span><h3>Career Point Gurukul</h3><p>CBSE Class X &amp; XII</p></article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <SectionKicker index="05">SELECTED WORK</SectionKicker>
          <div className="projects-intro">
            <h2>PRODUCTS<br />THAT <em>SHIPPED.</em></h2>
            <p>Seven mobile products across real estate, fintech, logistics, mobility, social discovery, food ordering and research.</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className={'project-card accent-' + project.accent + (index % 2 ? ' reverse' : '')} key={project.id}>
                <div className="project-visuals">
                  <div className="project-number">CASE · {project.number}</div>
                  <DeviceMockup className="screen-main" src={project.images[0]} alt={project.name + ' mobile screen'} />
                  <DeviceMockup className="screen-side" src={project.images[1]} alt={project.name + ' product detail screen'} />
                </div>
                <div className="project-content">
                  <div className="project-meta"><span>/{project.number} — {project.category}</span><span>{project.role}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <button className="text-button" type="button" onClick={() => openProject(project)}>
                    View project <Arrow />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <SectionKicker index="06">CONTACT</SectionKicker>
          <div className="contact-hero">
            <h2>LET’S<br /><em>MAKE IT.</em></h2>
            <p>Open to React Native roles, product teams and mobile work that needs a reliable execution partner.</p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:maheshwarinaman513@gmail.com">Start a project <Arrow /></a>
            <button className="button" type="button" onClick={copyEmail}>{copyState} <span aria-hidden="true">⧉</span></button>
          </div>
          <div className="contact-grid">
            <a href="mailto:maheshwarinaman513@gmail.com"><span>Email</span><strong>maheshwarinaman513@gmail.com</strong><Arrow /></a>
            <a href="https://github.com/namanmah2121" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/namanmah2121</strong><Arrow /></a>
            <a href="https://in.linkedin.com/in/naman-asawa" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>linkedin.com/in/naman-asawa</strong><Arrow /></a>
            <a href="tel:+918696281302"><span>Phone</span><strong>+91 86962 81302</strong><Arrow /></a>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026 NAMAN ASAWA. BUILT FOR THE WORK.</span>
        <span>UDAIPUR · IN</span>
        <a href="#top">↑ BACK TO TOP</a>
      </footer>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}

function PortfolioRouter() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return path === '/os' ? <PhoneOS /> : <App />;
}

createRoot(document.getElementById('root')).render(<PortfolioRouter />);
