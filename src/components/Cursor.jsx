import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const el = ref.current
    const root = document.documentElement
    root.classList.add('cursor-on')

    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      el.style.opacity = 1
    }
    const over = (e) => {
      el.dataset.big = e.target.closest('a, button, article') ? '1' : '0'
      el.dataset.hide = e.target.closest('input, textarea') ? '1' : '0'
    }
    const leave = () => {
      el.style.opacity = 0
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leave)
      root.classList.remove('cursor-on')
    }
  }, [])

  return (
    <div ref={ref} aria-hidden="true" className="burger-cursor">
      <img src="/food/classic-smash-burger.webp" alt="" width="34" height="34" />
    </div>
  )
}