import { PropsWithChildren } from "react";
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme',
    default: 'Acme', // a default is required when creating a template
  },
  keywords: ['react', 'web', 'framework'],
  description: "Acme is a simple, modern, and fast web framework for React.",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
      <html lang="zh-cmn-Hans" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>


  );
}
