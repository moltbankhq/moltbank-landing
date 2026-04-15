import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { cn } from '../ui/utils';
import darkMoltLogo from 'figma:asset/5efd1251d9853e37402b89ddef8137f1359fd96b.png';
import lightMoltLogo from 'figma:asset/31acd87f6e6fd7399715d0018ec02db8ca79c71f.png';

type LegalLayoutProps = {
  title: string;
  lastUpdated: string;
  effectiveDate: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
  children: ReactNode;
};

export function LegalLayout({
  title,
  lastUpdated,
  effectiveDate,
  isDarkMode,
  toggleTheme,
  children
}: LegalLayoutProps) {
  return (
    <div
      className={cn(
        'min-h-screen transition-colors duration-300',
        isDarkMode ? 'bg-[#050101] text-white' : 'bg-white text-[#050101]'
      )}
    >
      <header
        className={cn(
          'sticky top-0 z-20 backdrop-blur-md transition-colors',
          isDarkMode
            ? 'bg-[#050101]/90 border-b border-white/[0.06]'
            : 'bg-white/90 border-b border-black/[0.08]'
        )}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link
            to="/"
            className={cn(
              'inline-flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer',
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-[#050101]'
            )}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            Back
          </Link>

          <Link to="/" className="flex items-center cursor-pointer" aria-label="Moltbank home">
            <img
              src={isDarkMode ? darkMoltLogo : lightMoltLogo}
              alt="Moltbank"
              className="h-7 w-auto"
            />
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors cursor-pointer',
              isDarkMode
                ? 'border-white/[0.08] text-gray-300 hover:bg-white/[0.04] hover:text-white'
                : 'border-black/[0.08] text-gray-700 hover:bg-black/[0.04] hover:text-[#050101]'
            )}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <header
          className={cn(
            'border-b pb-6',
            isDarkMode ? 'border-white/[0.08]' : 'border-black/[0.08]'
          )}
        >
          <h1
            className={cn(
              'text-3xl font-bold tracking-tight md:text-4xl',
              isDarkMode ? 'text-white' : 'text-[#050101]'
            )}
          >
            {title}
          </h1>
          <dl
            className={cn(
              'mt-4 space-y-1 text-sm',
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            )}
          >
            <div>
              <dt className="inline font-medium">
                <span className={isDarkMode ? 'text-gray-200' : 'text-[#050101]'}>Last Updated:</span>
              </dt>{' '}
              <dd className="inline">{lastUpdated}</dd>
            </div>
            <div>
              <dt className="inline font-medium">
                <span className={isDarkMode ? 'text-gray-200' : 'text-[#050101]'}>Effective Date:</span>
              </dt>{' '}
              <dd className="inline">{effectiveDate}</dd>
            </div>
          </dl>
        </header>

        <div className="pt-2">{children}</div>
      </main>
    </div>
  );
}
