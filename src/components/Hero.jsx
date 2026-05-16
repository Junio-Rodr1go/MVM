import { useWhatsApp } from '../hooks/useWhatsApp';
import s from './Hero.module.css';

export default function Hero() {
  const { open } = useWhatsApp();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={s.hero} id="início">
      <div className={s.glow} />
      <div className={`container ${s.content}`}>
        <span className={s.tag}>Assistência Técnica Especializada</span>
        <h1 className={s.title}>
          Soluções em <span>Máquinas</span><br />e Eletrodomésticos
        </h1>
        <p className={s.desc}>
          Manutenção, venda de peças e equipamentos para residências,
          restaurantes e cozinhas industriais. Atendimento rápido e confiável.
        </p>
        <div className={s.btns}>
          <button className="btn" onClick={open}>Solicitar Orçamento</button>
          <button className="btn-o" onClick={() => scrollTo('produtos')}>Ver Catálogo</button>
        </div>
        <div className={s.stats}>
          <div><strong>+10 anos</strong><span>de experiência</span></div>
          <div><strong>+5.000</strong><span>clientes atendidos</span></div>
          <div><strong>2</strong><span>unidades</span></div>
        </div>
      </div>
    </section>
  );
}
