import { Link } from 'react-router-dom'
import { vendors } from '../data/vendors'
import { initialOrders } from '../data/orders'

const icons = { 'burger-shack': '🍔', 'brew-beans': '☕', 'desi-bites': '🍛' }

const stages = [
  { key: 'prepping', label: 'Prepping', icon: '🍳', style: 'bg-mustard text-ink' },
  { key: 'ready', label: 'Ready', icon: '🛍️', style: 'bg-leaf text-white' },
  { key: 'picked-up', label: 'Picked Up', icon: '✅', style: 'bg-ink text-white' },
]

const count = (key) => initialOrders.filter((o) => o.stage === key).length

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="grid items-center gap-8 py-10 md:grid-cols-[1.2fr_1fr] md:py-16">
        <div>
          <h1 className="font-display text-5xl uppercase leading-none sm:text-6xl lg:text-7xl">
            <span className="reveal"><span>Skip the</span></span>
            <span className="reveal"><span>lunch queue.</span></span>
            <span className="reveal"><span className="text-tomato">Grab good food.</span></span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink/70">
            Your campus food truck & café menu with a live pickup queue. Fresh food, faster lunches, happier you.
          </p>
          <Link
            to="/menu"
            className="mt-6 inline-block rounded-full bg-tomato px-7 py-3 font-bold text-white transition active:scale-95"
          >
            View Menu →
          </Link>
        </div>
        <div className="mx-auto grid aspect-square w-full max-w-sm place-items-center rounded-[58%_42%_55%_45%/48%_58%_42%_52%] bg-mustard text-[9rem] sm:text-[11rem]">
          <span className="float">🍔</span>
        </div>
      </section>

      <section className="py-8">
        <h2 className="font-display text-2xl uppercase">Our Vendors</h2>
        <div className="mt-2 h-1 w-10 rounded bg-tomato" />
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {vendors.map((v) => (
            <Link
              key={v.id}
              to={`/vendor/${v.id}`}
              className="flex items-center gap-3 rounded-2xl border-2 border-ink/10 bg-white p-4 transition hover:-translate-y-1 hover:border-tomato"
            >
              <span className="text-4xl">{icons[v.id]}</span>
              <span>
                <span className="block font-bold">{v.name}</span>
                <span className="block text-sm text-ink/60">{v.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl uppercase">Live Order Board</h2>
            <div className="mt-2 h-1 w-10 rounded bg-tomato" />
          </div>
          <Link to="/queue" className="text-sm font-bold text-tomato">
            View all →
          </Link>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {stages.map((s) => {
            const n = count(s.key)
            return (
              <div key={s.key} className={`flex items-center gap-3 rounded-2xl p-5 ${s.style}`}>
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <p className="font-display text-lg uppercase">{s.label}</p>
                  <p className="text-sm opacity-80">
                    {n} {n === 1 ? 'order' : 'orders'}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}