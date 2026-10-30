import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/menu', label: 'Menu', icon: '🍔' },
  { to: '/queue', label: 'Queue', icon: '⏱️' },
]

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t-2 border-ink/10 bg-white md:hidden">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          end
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center py-2 text-xs font-bold ${isActive ? 'text-tomato' : 'text-ink/60'}`
          }
        >
          <span className="text-xl">{t.icon}</span>
          {t.label}
        </NavLink>
      ))}
    </nav>
  )
}