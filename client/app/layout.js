import './globals.css';

export const metadata = {
  title: 'TaskMatrix',
  description: 'TaskMatrix application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
