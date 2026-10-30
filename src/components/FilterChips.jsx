import { DIETARY_TAGS, tagLabel } from '../data/vendors'

export default function FilterChips({ selected, onToggle, onClear }) {
  return (
    <div className="my-5 flex flex-wrap items-center gap-2">
      {DIETARY_TAGS.map((t) => {
        const on = selected.includes(t)
        return (
          <button
            key={t}
            onClick={() => onToggle(t)}
            aria-pressed={on}
            className={`rounded-full border-2 px-4 py-1.5 text-sm font-bold transition active:scale-95 ${
              on ? 'pop border-leaf bg-leaf text-white' : 'border-ink/10 bg-white hover:border-leaf'
            }`}
          >
            {tagLabel(t)}
          </button>
        )
      })}
      <button onClick={onClear} className="ml-auto text-sm font-bold text-tomato">
        Clear all
      </button>
    </div>
  )
}