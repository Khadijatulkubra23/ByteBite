import { useState } from 'react'
import { vendors } from '../data/vendors'
import VendorTabs from '../components/VendorTabs'
import FilterChips from '../components/FilterChips'
import MenuCard from '../components/MenuCard'

export default function Menu() {
  const [active, setActive] = useState(vendors[0].id)
  const [selected, setSelected] = useState([])

  const vendor = vendors.find((v) => v.id === active)
  const items = vendor.items.filter((i) => selected.every((t) => i.tags.includes(t)))
  const toggle = (t) => setSelected((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]))

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="font-display text-4xl uppercase sm:text-5xl">Our Menu</h1>
      <p className="mt-1 mb-6 text-ink/70">Fresh bites. Great vibes.</p>
      <VendorTabs vendors={vendors} active={active} onChange={setActive} />
      <FilterChips selected={selected} onToggle={toggle} onClear={() => setSelected([])} />
      <div key={active} className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
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