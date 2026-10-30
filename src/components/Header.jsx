import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/menu', label: 'Menu' },
  { to: '/queue', label: 'Live Queue' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-display text-2xl">
          Byte<span className="text-tomato">Bite</span>
        </Link>
        <nav className="hidden items-center gap-8 font-bold md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? 'text-tomato' : 'hover:text-tomato')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <span className="flex items-center gap-2 text-sm font-bold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tomato opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-tomato" />
          </span>
          Live
        </span>
      </div>
    </header>
  )
}