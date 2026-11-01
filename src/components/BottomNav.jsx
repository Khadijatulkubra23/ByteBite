import { NavLink } from 'react-router-dom'
import { HomeIcon, MenuIcon, ClockIcon } from './Icons'

const tabs = [
  { to: '/', label: 'Home', Icon: HomeIcon },
  { to: '/menu', label: 'Menu', Icon: MenuIcon },
  { to: '/queue', label: 'Queue', Icon: ClockIcon },
]

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t-2 border-ink/10 bg-white md:hidden">
      {tabs.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-bold ${isActive ? 'text-tomato' : 'text-ink/60'}`
          }
        >
          <Icon />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}