import s from './Testimonials.module.css';

const list = [
  { name: 'Carlos Mendes',  role: 'Dono de Restaurante',          text: 'A MVM salvou meu restaurante! Consertaram meu fogão industrial em menos de 24h. Atendimento impecável.' },
  { name: 'Ana Paula',      role: 'Cliente Residencial',           text: 'Encontrei a peça da minha lavadora que ninguém tinha. Preço justo e entrega rápida. Super recomendo!' },
  { name: 'Roberto Silva',  role: 'Gerente de Cozinha Industrial', text: 'Parceiros de confiança há 3 anos. Sempre resolvem nossos problemas com agilidade e profissionalismo.' },
];

export default function Testimonials() {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.head}>
          <span className={s.label}>Depoimentos</span>
          <h2>O que nossos <span>clientes</span> dizem</h2>
        </div>
        <div className={s.grid}>
          {list.map((t, i) => (
            <div key={i} className={s.card}>
              <div className={s.stars}>★★★★★</div>
              <p className={s.text}>"{t.text}"</p>
              <div className={s.author}>
                <div className={s.avatar}>{t.name[0]}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
