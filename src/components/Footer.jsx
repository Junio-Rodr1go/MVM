import { useWhatsApp } from '../hooks/useWhatsApp';
import s from './Footer.module.css';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  const { open } = useWhatsApp();
  return (
    <footer className={s.footer}>
      <div className={`container ${s.grid}`}>
        <div>
          <div className={s.logo}>MVM</div>
          <p className={s.desc}>Especialistas em manutenção de eletrodomésticos, venda de peças e equipamentos industriais.</p>
          <button className="btn" onClick={open}>Fale Conosco</button>
        </div>
        <div>
          <h4 className={s.title}>Navegação</h4>
          <ul className={s.list}>
            {['início','serviços','sobre','produtos','contato'].map(id => (
              <li key={id}><button onClick={() => scrollTo(id)}>{id.charAt(0).toUpperCase() + id.slice(1)}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={s.title}>Endereços</h4>
          <ul className={s.list}>
            <li>Av. Gov. Mario Covas, 2625</li>
            <li>Av. Odorino Perenha, 814</li>
          </ul>
          <h4 className={s.title} style={{marginTop:'1.5rem'}}>Horários</h4>
          <ul className={s.list}>
            <li>Seg–Sex: 08h–18h</li>
            <li>Sábado: 08h–13h</li>
          </ul>
        </div>
      </div>
      <div className={s.bottom}>
        <p>© {new Date().getFullYear()} MVM Máquinas e Eletrodomésticos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
