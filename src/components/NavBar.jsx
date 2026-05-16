import { useState, useEffect } from 'react';
import { useWhatsApp } from '../hooks/useWhatsApp';
import s from './Navbar.module.css';

const links = ['Início','Serviços','Sobre','Produtos','Contato'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: wa } = useWhatsApp();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={`container ${s.inner}`}>
        <button className={s.logo} onClick={() => scrollTo('início')}>
          <span className={s.mvm}>MVM</span>
          <span className={s.sub}>Máquinas & Eletrodomésticos</span>
        </button>

        <nav className={`${s.links} ${open ? s.open : ''}`}>
          {links.map(l => (
            <button key={l} className={s.link} onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
          <button className="btn" onClick={() => { wa(); setOpen(false); }}>WhatsApp</button>
        </nav>

        <button className={s.burger} onClick={() => setOpen(!open)} aria-label="menu">
          <span style={open ? {transform:'rotate(45deg) translate(5px,5px)'} : {}} />
          <span style={open ? {opacity:0} : {}} />
          <span style={open ? {transform:'rotate(-45deg) translate(5px,-5px)'} : {}} />
        </button>
      </div>
    </header>
  );
}
