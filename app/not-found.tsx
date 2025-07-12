import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>😵 404 - Halaman Tidak Ditemukan</h1>
      <p>Sepertinya kamu nyasar, bro. Balik ke halaman utama yuk!</p>
      <div style={{ marginTop: '2rem' }}>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none',
          }}
        >
          Balik ke Home
        </Link>
      </div>
    </div>
  );
}