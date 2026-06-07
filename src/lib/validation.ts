import { z } from 'zod';

export const registrationSchema = z.object({
  fullName: z
    .string()
    .min(3, 'Nama lengkap minimal 3 karakter')
    .max(100, 'Nama lengkap maksimal 100 karakter'),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('Format email tidak valid'),
  whatsapp: z
    .string()
    .min(10, 'Nomor WhatsApp minimal 10 digit')
    .max(15, 'Nomor WhatsApp maksimal 15 digit')
    .regex(/^[0-9+]+$/, 'Nomor WhatsApp hanya boleh berisi angka'),
  course: z.string(),
  batch: z
    .string()
    .min(1, 'Pilih batch yang diinginkan'),
  experience: z
    .string()
    .min(1, 'Pilih tingkat pengalaman coding'),
  goal: z
    .string()
    .min(10, 'Tujuan mengikuti kelas minimal 10 karakter')
    .max(500, 'Tujuan mengikuti kelas maksimal 500 karakter'),
  notes: z
    .string()
    .max(500, 'Catatan tambahan maksimal 500 karakter')
    .optional()
    .or(z.literal('')),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
