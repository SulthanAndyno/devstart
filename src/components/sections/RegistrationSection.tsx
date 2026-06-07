'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, Loader2, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { registrationSchema, type RegistrationSchema } from '@/lib/validation';
import { buildWhatsAppMessage, openWhatsApp } from '@/lib/whatsapp';
import {
  BATCH_OPTIONS,
  CODING_EXPERIENCE_OPTIONS,
  COURSE_INFO,
} from '@/lib/constants';

export default function RegistrationSection() {
  const containerRef = useScrollReveal();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      course: COURSE_INFO.name,
    },
  });

  const onSubmit = async (data: RegistrationSchema) => {
    setStatus('loading');

    // Short delay for loading state
    await new Promise((r) => setTimeout(r, 800));

    setStatus('success');

    // Build and open WhatsApp after brief success state
    setTimeout(() => {
      const message = buildWhatsAppMessage(data);
      openWhatsApp(message);
      reset();
      setStatus('idle');
    }, 1500);
  };

  return (
    <section id="pendaftaran" className="bg-cream-dark section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pendaftaran"
          title="Daftar Kelas Sekarang"
          description="Isi form berikut dan kamu akan diarahkan ke WhatsApp untuk konfirmasi pendaftaran."
        />

        <div className="max-w-2xl mx-auto" data-reveal>
          <div className="glass-card p-6 md:p-10">
            {/* Toast */}
            {status === 'success' && (
              <div className="toast toast-success flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-pacific" />
                <span>Pendaftaran berhasil! Mengarahkan ke WhatsApp...</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-slate-800 text-sm font-medium mb-2"
                >
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  {...register('fullName')}
                />
                {errors.fullName && (
                  <p className="text-rose-500 text-xs mt-1.5">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-slate-800 text-sm font-medium mb-2"
                  >
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-rose-500 text-xs mt-1.5">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-slate-800 text-sm font-medium mb-2"
                  >
                    Nomor WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="whatsapp"
                    type="text"
                    placeholder="081234567890"
                    className={`form-input ${errors.whatsapp ? 'error' : ''}`}
                    {...register('whatsapp')}
                  />
                  {errors.whatsapp && (
                    <p className="text-rose-500 text-xs mt-1.5">{errors.whatsapp.message}</p>
                  )}
                </div>
              </div>

              {/* Course (auto-set) */}
              <div>
                <label
                  htmlFor="course"
                  className="block text-slate-800 text-sm font-medium mb-2"
                >
                  Pilihan Kelas
                </label>
                <input
                  id="course"
                  type="text"
                  className="form-input opacity-60 cursor-not-allowed"
                  readOnly
                  {...register('course')}
                />
              </div>

              {/* Batch & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="batch"
                    className="block text-slate-800 text-sm font-medium mb-2"
                  >
                    Pilihan Batch <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="batch"
                    className={`form-input ${errors.batch ? 'error' : ''}`}
                    {...register('batch')}
                  >
                    <option value="">Pilih batch</option>
                    {BATCH_OPTIONS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.batch && (
                    <p className="text-rose-500 text-xs mt-1.5">{errors.batch.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-slate-800 text-sm font-medium mb-2"
                  >
                    Pengalaman Coding <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="experience"
                    className={`form-input ${errors.experience ? 'error' : ''}`}
                    {...register('experience')}
                  >
                    <option value="">Pilih pengalaman</option>
                    {CODING_EXPERIENCE_OPTIONS.map((exp) => (
                      <option key={exp} value={exp}>
                        {exp}
                      </option>
                    ))}
                  </select>
                  {errors.experience && (
                    <p className="text-rose-500 text-xs mt-1.5">{errors.experience.message}</p>
                  )}
                </div>
              </div>

              {/* Goal */}
              <div>
                <label
                  htmlFor="goal"
                  className="block text-slate-800 text-sm font-medium mb-2"
                >
                  Tujuan Mengikuti Kelas <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="goal"
                  rows={3}
                  placeholder="Contoh: Ingin membuat website portfolio untuk melamar kerja"
                  className={`form-input resize-none ${errors.goal ? 'error' : ''}`}
                  {...register('goal')}
                />
                {errors.goal && (
                  <p className="text-rose-500 text-xs mt-1.5">{errors.goal.message}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-slate-800 text-sm font-medium mb-2"
                >
                  Catatan Tambahan{' '}
                  <span className="text-slate-400 font-normal">(opsional)</span>
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  placeholder="Catatan atau pertanyaan tambahan"
                  className="form-input resize-none"
                  {...register('notes')}
                />
                {errors.notes && (
                  <p className="text-rose-500 text-xs mt-1.5">{errors.notes.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full btn-primary justify-center group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Memproses...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Berhasil!
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4" />
                    Daftar Melalui WhatsApp
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
