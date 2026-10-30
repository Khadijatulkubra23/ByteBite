import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink/10 px-4 py-10 text-center">
      <p className="font-display text-3xl">
        Byte<span className="text-tomato">Bite</span>
      </p>
      <p className="mt-2 text-sm text-ink/70">Good Food • Good Vibes • Campus Life</p>
      <nav className="mt-4 flex justify-center gap-6 text-sm font-bold">
        <Link to="/menu">Menu</Link>
        <Link to="/queue">Live Queue</Link>
      </nav>
    </footer>
  )
}