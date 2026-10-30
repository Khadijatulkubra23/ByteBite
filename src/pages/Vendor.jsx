import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { vendors } from '../data/vendors'
import FilterChips from '../components/FilterChips'
import MenuCard from '../components/MenuCard'

function VendorView({ vendor }) {
  const [selected, setSelected] = useState([])
  const items = vendor.items.filter((i) => selected.every((t) => i.tags.includes(t)))
  const toggle = (t) => setSelected((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]))

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <Link to="/menu" className="text-sm font-bold text-tomato">
        ← Back to menu
      </Link>
      <div className="mt-4 grid items-center gap-6 sm:grid-cols-[1fr_auto]">
        <div>
          <h1 className="font-display text-4xl uppercase sm:text-6xl">{vendor.name}</h1>
          <p className="mt-2 text-lg text-ink/70">{vendor.tagline}</p>
        </div>
        <div className="grid h-32 w-32 place-items-center rounded-[58%_42%_55%_45%/48%_58%_42%_52%] bg-mustard text-6xl sm:h-40 sm:w-40 sm:text-7xl">
          <span className="float">{vendor.icon}</span>
        </div>
      </div>
      <FilterChips selected={selected} onToggle={toggle} onClear={() => setSelected([])} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
        {items.length ? (
          items.map((item, i) => <MenuCard key={item.id} item={item} index={i} />)
        ) : (
          <p className="col-span-full rounded-2xl border-2 border-dashed border-ink/15 p-8 text-center text-ink/60">
            No items match these filters. Clear a filter to see more.
          </p>
        )}
      </div>
    </section>
  )
}

export default function Vendor() {
  const { id } = useParams()
  const vendor = vendors.find((v) => v.id === id)

  if (!vendor) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 className="font-display text-4xl uppercase">Vendor not found</h1>
        <Link to="/menu" className="mt-4 inline-block font-bold text-tomato">
          ← Back to menu
        </Link>
      </section>
    )
  }

  return <VendorView key={vendor.id} vendor={vendor} />
}