import Link from 'next/link';

const Navigation = () => (
  <nav style={{ padding: '1rem', background: '#eee' }}>
    <Link href="/" style={{ marginRight: '1rem' }}>Inicio</Link>
    <Link href="/servidores" style={{ marginRight: '1rem' }}>Servidores</Link>
    <Link href="/mikrotik">Mikrotik</Link>
  </nav>
);

export default Navigation;
