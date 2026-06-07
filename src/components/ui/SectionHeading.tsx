'use client';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span
          data-reveal
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-cerulean/20 bg-cerulean/5 text-yale"
        >
          {badge}
        </span>
      )}
      <h2
        data-reveal
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight gradient-text mb-4"
      >
        {title}
      </h2>
      {description && (
        <p
          data-reveal
          className={`text-slate-600 text-base sm:text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
