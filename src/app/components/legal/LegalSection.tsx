import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type LegalSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  isDarkMode: boolean;
};

export function LegalSection({ title, children, className, isDarkMode }: LegalSectionProps) {
  return (
    <section
      className={cn(
        'border-b py-8 last:border-b-0 last:pb-0',
        isDarkMode ? 'border-white/[0.08]' : 'border-black/[0.08]',
        className
      )}
    >
      <h2
        className={cn(
          'mb-3 text-lg font-semibold leading-snug tracking-tight md:text-xl',
          isDarkMode ? 'text-white' : 'text-[#050101]'
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'space-y-3 text-sm leading-relaxed md:text-base',
          '[&_a]:text-[#c41e05] [&_a]:underline-offset-2 [&_a:hover]:underline',
          '[&_strong]:font-semibold',
          '[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5',
          '[&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.92em]',
          isDarkMode
            ? 'text-gray-200 [&_strong]:text-white [&_code]:bg-white/[0.06] [&_code]:text-gray-100'
            : 'text-gray-800 [&_strong]:text-[#050101] [&_code]:bg-black/[0.06] [&_code]:text-[#050101]'
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function LegalSubsection({
  title,
  children,
  isDarkMode
}: {
  title: string;
  children: ReactNode;
  isDarkMode: boolean;
}) {
  return (
    <div className="mt-6 space-y-3">
      <h3
        className={cn(
          'text-base font-medium md:text-lg',
          isDarkMode ? 'text-white' : 'text-[#050101]'
        )}
      >
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function LegalCapsNotice({
  children,
  isDarkMode
}: {
  children: ReactNode;
  isDarkMode: boolean;
}) {
  return (
    <div
      className={cn(
        'mt-4 rounded-none border p-4 text-xs font-medium uppercase leading-relaxed tracking-wide md:text-sm',
        '[&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:font-normal [&_ul]:normal-case [&_ul]:tracking-normal',
        '[&_p:not(:first-child)]:mt-3',
        isDarkMode
          ? 'border-white/[0.08] bg-white/[0.03] text-gray-100'
          : 'border-black/[0.08] bg-black/[0.03] text-[#050101]'
      )}
    >
      {children}
    </div>
  );
}
