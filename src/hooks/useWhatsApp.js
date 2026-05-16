import { WHATSAPP } from '../data/products';

export function useWhatsApp() {
  const open = (msg = 'Olá! Vim pelo site e gostaria de solicitar um orçamento.') =>
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');

  const forProduct = (name) =>
    open(`Olá! Vim pelo site e tenho interesse em: *${name}*. Pode me ajudar?`);

  return { open, forProduct };
}
