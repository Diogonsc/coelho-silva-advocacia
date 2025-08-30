import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Função para abrir WhatsApp com mensagem personalizada
export function openWhatsApp(message?: string) {
  const defaultMessage = 'Olá! Preciso de atendimento jurídico. Pode me ajudar?';
  const finalMessage = message || defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  // Formato correto para número brasileiro: 5521982149149 (sem hífen e sem parênteses)
  window.open(`https://wa.me/5521982149149?text=${encodedMessage}`, '_blank');
}
