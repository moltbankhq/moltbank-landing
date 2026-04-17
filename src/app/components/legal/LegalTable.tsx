import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type LegalTableProps = {
  headers: string[];
  rows: ReactNode[][];
  isDarkMode: boolean;
};

export function LegalTable({ headers, rows, isDarkMode }: LegalTableProps) {
  return (
    <div className="my-4 overflow-x-auto">
      <table
        className={cn(
          'min-w-[20rem] border-collapse border text-left text-sm',
          isDarkMode ? 'border-white/[0.08]' : 'border-black/[0.08]'
        )}
      >
        <thead>
          <tr
            className={cn(
              'border-b',
              isDarkMode
                ? 'border-white/[0.08] bg-white/[0.04] text-white'
                : 'border-black/[0.08] bg-black/[0.03] text-[#050101]'
            )}
          >
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={cn(
                'border-b last:border-b-0',
                isDarkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'
              )}
            >
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
