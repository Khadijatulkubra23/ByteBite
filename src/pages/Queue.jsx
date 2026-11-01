import { initialOrders } from '../data/orders'
import OrderCard from '../components/OrderCard'
import { FlameIcon, BagIcon, CheckIcon } from '../components/Icons'

const columns = [
  { key: 'prepping', label: 'Prepping', Icon: FlameIcon, style: 'bg-mustard text-ink' },
  { key: 'ready', label: 'Ready', Icon: BagIcon, style: 'bg-leaf text-white' },
  { key: 'picked-up', label: 'Picked Up', Icon: CheckIcon, style: 'bg-ink text-white' },
]

export default function Queue() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="font-display text-4xl uppercase sm:text-5xl">Live Order Board</h1>
      <p className="mt-1 text-ink/70">Track your order in real time. Fresh food, just a little wait!</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {columns.map(({ key, label, Icon, style }) => {
          const list = initialOrders.filter((o) => o.stage === key)
          return (
            <div key={key} className={`flex flex-col gap-3 rounded-2xl p-4 ${style}`}>
              <h2 className="flex items-center justify-between font-display uppercase">
                <span className="flex items-center gap-2">
                  <Icon />
                  {label}
                </span>
                <span>{list.length}</span>
              </h2>
              {list.length ? (
                list.map((o) => <OrderCard key={o.id} order={o} />)
              ) : (
                <p className="text-sm opacity-70">No orders here yet.</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}