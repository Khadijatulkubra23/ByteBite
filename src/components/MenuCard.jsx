import useCountUp from '../hooks/useCountUp'
import { tagLabel } from '../data/vendors'

const tagStyle = {
  vegan: 'bg-leaf/15 text-leaf',
  halal: 'bg-mustard/30 text-amber-800',
  'gluten-free': 'bg-sky/15 text-sky',
}

export default function MenuCard({ item, index }) {
  const price = useCountUp(item.price)

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
      <p className="mt-auto font-display text-xl">Rs. {price}</p>
    </article>
  )
}