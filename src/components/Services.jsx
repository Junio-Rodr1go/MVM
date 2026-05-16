import s from './Services.module.css';

const list = [
  { icon: '🔧', title: 'Manutenção',             desc: 'Assistência técnica especializada em eletrodomésticos residenciais e comerciais.' },
  { icon: '⚙️', title: 'Venda de Peças',         desc: 'Peças originais e compatíveis para todas as marcas e modelos.' },
  { icon: '🏭', title: 'Equipamentos Industriais',desc: 'Venda e manutenção de equipamentos para restaurantes e cozinhas industriais.' },
  { icon: '🚀', title: 'Atendimento Rápido',      desc: 'Diagnóstico ágil e solução eficiente para minimizar seu tempo parado.' },
];

export default function Services() {
  return (
    <section className={s.section} id="serviços">
      <div className="container">
        <div className={s.head}>
          <span className={s.label}>O que fazemos</span>
          <h2>Nossos <span>Serviços</span></h2>
          <p>Soluções completas para residências, restaurantes e indústrias.</p>
        </div>
        <div className={s.grid}>
          {list.map((item, i) => (
            <div key={i} className={s.card}>
              <div className={s.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
