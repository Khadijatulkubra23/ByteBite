import { useLayoutEffect, useRef, useState } from 'react'

export default function VendorTabs({ vendors, active, onChange }) {
  const refs = useRef([])
  const [pill, setPill] = useState({ x: 0, w: 0 })

  useLayoutEffect(() => {
    const move = () => {
      const el = refs.current[vendors.findIndex((v) => v.id === active)]
      if (el) setPill({ x: el.offsetLeft, w: el.offsetWidth })
    }
    move()
    document.fonts?.ready.then(move)
    window.addEventListener('resize', move)
    return () => window.removeEventListener('resize', move)
  }, [active, vendors])

  return (
    <div className="relative flex gap-2 overflow-x-auto pb-2" role="tablist">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-[calc(100%-0.5rem)] rounded-full bg-tomato transition-all duration-300 ease-out"
        style={{ width: pill.w, transform: `translateX(${pill.x}px)` }}
      />
      {vendors.map((v, i) => (
        <button
          key={v.id}
          ref={(el) => {
            refs.current[i] = el
          }}
          role="tab"
          aria-selected={v.id === active}
          onClick={() => onChange(v.id)}
          className={`relative z-10 flex shrink-0 items-center gap-2 rounded-full border-2 px-5 py-2 font-bold transition-colors ${
            v.id === active ? 'border-transparent text-white' : 'border-ink/10 bg-white'
          }`}
        >
          <img src={v.image} alt="" width="400" height="400" className="h-7 w-7 object-contain" />
          {v.name}
        </button>
      ))}
    </div>
  )
}