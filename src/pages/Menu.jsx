import { useState } from 'react'
import { vendors } from '../data/vendors'
import VendorTabs from '../components/VendorTabs'
import FilterChips from '../components/FilterChips'
import MenuCard from '../components/MenuCard'

export default function Menu() {
  const [active, setActive] = useState(vendors[0].id)
  const [selected, setSelected] = useState([])
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()
  const vendor = vendors.find((v) => v.id === active)
  const pool = (q ? vendors : [vendor]).flatMap((v) => v.items.map((i) => ({ ...i, vendorId: v.id })))
  const items = pool.filter((i) => selected.every((t) => i.tags.includes(t)) && i.name.toLowerCase().includes(q))

  const toggle = (t) => setSelected((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]))
  const pick = (id) => {
    setActive(id)
    setQuery('')
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="font-display text-4xl uppercase sm:text-5xl">Our Menu</h1>
      <p className="mt-1 mb-5 text-ink/70">Fresh bites. Great vibes.</p>

      <label className="block">
        <span className="sr-only">Search the menu</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search all vendors, e.g. biryani"
          className="mb-5 w-full rounded-full border-2 border-ink/10 bg-white px-5 py-3 outline-none transition focus:border-tomato"
        />
      </label>

      <VendorTabs vendors={vendors} active={active} onChange={pick} />
      <FilterChips selected={selected} onToggle={toggle} onClear={() => setSelected([])} />
      {q && <p className="mb-3 text-sm text-ink/60">Showing results from all vendors</p>}

      <div key={q ? 'search' : active} className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
        {items.length ? (
          items.map((item, i) => <MenuCard key={item.id} item={item} index={i} vendorId={item.vendorId} />)
        ) : (
          <p className="col-span-full rounded-2xl border-2 border-dashed border-ink/15 p-8 text-center text-ink/60">
            No items match your search or filters. Try clearing them.
          </p>
        )}
      </div>
    </section>
  )
}