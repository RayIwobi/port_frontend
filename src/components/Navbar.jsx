import { useState } from 'react';
import './nav.css';

const links = [
  ['home', 'Home'], ['about', 'About'], ['services', 'What I do'],
  ['projects', 'Projects'], ['skills', 'Skills'], ['experience', 'Experience'], ['contact', 'Contact']
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };
  return <header className="site-header">
    <a className="brand-mark" href="#home" onClick={(e) => { e.preventDefault(); goTo('home'); }}><span>R</span><b>Raymond Iwobi</b></a>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
    <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
      {links.map(([id, label]) => <button key={id} onClick={() => goTo(id)}>{label}</button>)}
      <a className="nav-cta" href="mailto:rayicon@gmail.com">Let’s talk <span>↗</span></a>
    </nav>
  </header>;
}
