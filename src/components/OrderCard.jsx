import { vendors } from '../data/vendors'

const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

export default function OrderCard({ order }) {
  const vendor = vendors.find((v) => v.id === order.vendorId)
  const done = order.stage === 'picked-up'

  return (
    <article className={`rounded-xl p-3 shadow-sm ${done ? 'bg-white/10 text-white' : 'bg-white text-ink'}`}>
      <div className="flex items-center justify-between gap-2">
        <p>
          <span className="font-display">#{order.id}</span> <span className="font-bold">{vendor.name}</span>
        </p>
        <img src={vendor.image} alt="" width="400" height="400" className="h-8 w-8 object-contain" />
      </div>
      <p className="mt-1 text-sm opacity-70">{order.items.join(', ')}</p>

      {order.stage === 'prepping' && (
        <>
          <div className="mt-3 flex justify-between text-xs font-bold">
            <span>Ready in</span>
            <span>{mmss(order.prepTime - order.elapsed)}</span>
          </div>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full rounded-full bg-tomato"
              style={{ width: `${(order.elapsed / order.prepTime) * 100}%` }}
            />
          </div>
        </>
      )}
      {order.stage === 'ready' && <p className="mt-3 text-xs font-bold text-leaf">Collect at the counter</p>}
      {done && <p className="mt-3 text-xs font-bold opacity-70">Picked up</p>}
    </article>
  )
}