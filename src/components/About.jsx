import { useWhatsApp } from '../hooks/useWhatsApp';
import s from './About.module.css';

const features = ['Peças originais e garantidas','Técnicos certificados','Atendimento em domicílio','Orçamento sem compromisso'];

export default function About() {
  const { open } = useWhatsApp();
  return (
    <section className={s.section} id="sobre">
      <div className="container">
        <div className={s.grid}>
          <div className={s.imgWrap}>
            <img src="https://placehold.co/560x420/1a1a1a/f5c518?text=MVM+Oficina" alt="Oficina MVM" loading="lazy" />
            <div className={s.badge}>+10 anos de experiência</div>
          </div>
          <div>
            <span className={s.label}>Sobre a MVM</span>
            <h2 className={s.title}>Referência em <span>Assistência Técnica</span> na região</h2>
            <p className={s.text}>Há mais de 10 anos no mercado, a MVM atende residências, restaurantes e cozinhas industriais com qualidade e agilidade.</p>
            <p className={s.text}>Contamos com duas unidades estrategicamente localizadas e uma equipe técnica altamente qualificada.</p>
            <ul className={s.features}>
              {features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <button className="btn" onClick={open}>Falar no WhatsApp</button>
          </div>
        </div>
      </div>
    </section>
  );
}
