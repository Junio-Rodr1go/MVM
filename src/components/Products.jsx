import { useState, useMemo } from 'react';
import { products } from '../data/products';
import { useWhatsApp } from '../hooks/useWhatsApp';
import s from './Products.module.css';

const cats = ['Todos', 'Peças', 'Industrial', 'Equipamentos'];

export default function Products() {
  const [cat, setCat] = useState('Todos');
  const [q, setQ] = useState('');
  const { forProduct } = useWhatsApp();

  const filtered = useMemo(() =>
    products.filter(p =>
      (cat === 'Todos' || p.cat === cat) &&
      (!q || p.name.toLowerCase().includes(q.toLowerCase()))
    ), [cat, q]);

  return (
    <section className={s.section} id="produtos">
      <div className="container">
        <div className={s.head}>
          <span className={s.label}>Catálogo</span>
          <h2>Peças e <span>Equipamentos</span></h2>
          <p>Encontre o que você precisa e solicite orçamento pelo WhatsApp.</p>
        </div>

        <div className={s.controls}>
          <input
            className={s.search}
            type="text"
            placeholder="Buscar produto ou peça..."
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <div className={s.filters}>
            {cats.map(c => (
              <button key={c} className={`${s.filter} ${cat === c ? s.active : ''}`} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className={s.grid}>
            {filtered.map(p => (
              <div key={p.id} className={s.card}>
                <div className={s.imgWrap}>
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <span className={s.badge}>{p.cat}</span>
                </div>
                <div className={s.body}>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className={s.foot}>
                  <span className={s.price}>Consulte</span>
                  <button className="btn" onClick={() => forProduct(p.name)}>Orçamento</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={s.empty}>
            <p>Nenhum produto encontrado.</p>
            <button className="btn-o" onClick={() => { setQ(''); setCat('Todos'); }}>Limpar filtros</button>
          </div>
        )}
      </div>
    </section>
  );
}
