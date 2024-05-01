import { PropsWithChildren } from "react";
import type { Metadata } from 'next';

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
    <html lang="zh-cmn-Hans">
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>

  );
}
