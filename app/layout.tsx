import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lynx Optimizer',
  description: 'Official Lynx Optimizer website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a1a] text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}