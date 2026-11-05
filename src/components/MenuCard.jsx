import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useCountUp from '../hooks/useCountUp'
import { useAddOrder } from '../context/OrdersContext'
import { tagLabel } from '../data/vendors'

const tagStyle = {
  vegan: 'bg-leaf/15 text-leaf',
  halal: 'bg-mustard/30 text-amber-800',
  'gluten-free': 'bg-sky/15 text-sky',
}

export default function MenuCard({ item, index, vendorId }) {
  const price = useCountUp(item.price)
  const addOrder = useAddOrder()
  const [placed, setPlaced] = useState(null)

  useEffect(() => {
    if (!placed) return
    const t = setTimeout(() => setPlaced(null), 5000)
    return () => clearTimeout(t)
  }, [placed])

  return (
    <article
      className="card-in flex flex-col gap-2 rounded-2xl border-2 border-ink/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--color-ink)]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <img
        src={item.image}
        alt=""
        width="400"
        height="400"
        loading="lazy"
        className="mx-auto aspect-square w-full max-w-40 object-contain"
      />
      <h3 className="font-bold leading-tight">{item.name}</h3>
      <div className="flex min-h-6 flex-wrap gap-1.5">
        {item.tags.map((t) => (
          <span key={t} className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${tagStyle[t]}`}>
            {tagLabel(t)}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between gap-2 pt-1">
        <p className="font-display text-xl">Rs. {price}</p>
        <span aria-live="polite">
          {placed ? (
            <Link to="/queue" className="pop rounded-full bg-leaf px-3 py-1.5 text-xs font-bold text-white">
              #{placed} placed. Track →
            </Link>
          ) : (
            <button
              onClick={() => setPlaced(addOrder(vendorId, item.name))}
              className="rounded-full bg-tomato px-4 py-1.5 text-sm font-bold text-white transition active:scale-95"
            >
              Order now
            </button>
          )}
        </span>
      </div>
    </article>
  )
}