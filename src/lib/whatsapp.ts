import { WHATSAPP_NUMBER } from './constants';
import type { RegistrationFormData } from '@/types/registration';

export function buildWhatsAppMessage(data: RegistrationFormData): string {
  let message = `Halo Admin DevStart

Saya ingin mendaftar kelas ${data.course}.

Nama: ${data.fullName}
Email: ${data.email}
WhatsApp: ${data.whatsapp}
Batch: ${data.batch}
Pengalaman: ${data.experience}
Tujuan: ${data.goal}`;

  if (data.notes && data.notes.trim()) {
    message += `\nCatatan: ${data.notes}`;
  }

  message += '\n\nMohon informasi selanjutnya. Terima kasih.';

  return message;
}

export function openWhatsApp(message: string): void {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
