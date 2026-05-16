import { useState } from 'react';
import { useWhatsApp } from '../hooks/useWhatsApp';
import s from './Contact.module.css';

export default function Contact() {
  const { open } = useWhatsApp();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    open(`Olá! Me chamo *${form.name}*.\nTelefone: ${form.phone}\n\n${form.message}`);
  };

  return (
    <section className={s.section} id="contato">
      <div className="container">
        <div className={s.head}>
          <span className={s.label}>Fale conosco</span>
          <h2>Entre em <span>Contato</span></h2>
          <p>Estamos prontos para atender você da melhor forma.</p>
        </div>

        <div className={s.grid}>
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.field}>
              <label>Nome</label>
              <input type="text" placeholder="Seu nome completo" value={form.name}
                onChange={e => setForm({...form, name: e.target.value})} required />
            </div>
            <div className={s.field}>
              <label>Telefone</label>
              <input type="tel" placeholder="(11) 99999-9999" value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})} required />
            </div>
            <div className={s.field}>
              <label>Mensagem</label>
              <textarea rows={5} placeholder="Descreva o que você precisa..."
                value={form.message} onChange={e => setForm({...form, message: e.target.value})} required />
            </div>
            <button type="submit" className="btn" style={{width:'100%', justifyContent:'center'}}>
              Enviar pelo WhatsApp
            </button>
          </form>

          <div className={s.info}>
            <div className={s.card}>
              <span className={s.icon}>💬</span>
              <div>
                <h4>WhatsApp</h4>
                <p>Atendimento rápido e direto</p>
                <button className="btn" style={{marginTop:'0.75rem'}} onClick={open}>Abrir WhatsApp</button>
              </div>
            </div>
            <div className={s.card}>
              <span className={s.icon}>📍</span>
              <div>
                <h4>Endereços</h4>
                <p>Av. Gov. Mario Covas, 2625</p>
                <p>Av. Odorino Perenha, 814</p>
              </div>
            </div>
            <div className={s.card}>
              <span className={s.icon}>🕐</span>
              <div>
                <h4>Horários</h4>
                <p>Segunda a Sexta: 08h – 18h</p>
                <p>Sábado: 08h – 13h</p>
              </div>
            </div>
            <div className={s.mapWrap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjM!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" height="100%"
                style={{border:0}} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MVM"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
