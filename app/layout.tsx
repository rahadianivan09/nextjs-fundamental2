import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', backgroundColor: '#f1f1f1' }}>
          <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
          <Link href="/profile" style={{ marginRight: '1rem' }}>Profile</Link>
          <Link href="/products/1">Produk 1</Link>
        </nav>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
