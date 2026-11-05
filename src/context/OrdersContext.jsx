import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { initialOrders } from '../data/orders'
import { vendors } from '../data/vendors'

const OrdersContext = createContext([])
const ActionsContext = createContext(() => 0)

export const useOrders = () => useContext(OrdersContext)
export const useAddOrder = () => useContext(ActionsContext)

const READY_SECONDS = 15
const DONE_SECONDS = 20
const SPAWN_EVERY = 8
const MAX_PREPPING = 5

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5)

function createOrder(id) {
  const vendor = vendors[Math.floor(Math.random() * vendors.length)]
  const count = Math.random() < 0.4 ? 2 : 1
  return {
    id,
    vendorId: vendor.id,
    items: shuffle(vendor.items).slice(0, count).map((i) => i.name),
    stage: 'prepping',
    prepTime: 30 + Math.floor(Math.random() * 46),
    elapsed: 0,
  }
}

function advance(order) {
  if (order.stage === 'prepping') {
    const elapsed = order.elapsed + 1
    if (elapsed >= order.prepTime) return { ...order, elapsed: order.prepTime, stage: 'ready', waited: 0 }
    return { ...order, elapsed }
  }
  const waited = (order.waited ?? 0) + 1
  if (order.stage === 'ready' && waited >= READY_SECONDS) return { ...order, stage: 'picked-up', waited: 0 }
  return { ...order, waited }
}

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(initialOrders)
  const nextId = useRef(Math.max(...initialOrders.map((o) => o.id)) + 1)
  const ticks = useRef(0)

  const addOrder = useCallback((vendorId, itemName) => {
    const id = nextId.current++
    setOrders((prev) => [
      ...prev,
      {
        id,
        vendorId,
        items: [itemName],
        stage: 'prepping',
        prepTime: 30 + Math.floor(Math.random() * 16),
        elapsed: 0,
      },
    ])
    return id
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      ticks.current += 1
      const fresh = ticks.current % SPAWN_EVERY === 0 ? createOrder(nextId.current++) : null

      setOrders((prev) => {
        const next = prev
          .map(advance)
          .filter((o) => !(o.stage === 'picked-up' && o.waited >= DONE_SECONDS))
        const busy = next.filter((o) => o.stage === 'prepping').length
        return fresh && busy < MAX_PREPPING ? [...next, fresh] : next
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <OrdersContext.Provider value={orders}>
      <ActionsContext.Provider value={addOrder}>{children}</ActionsContext.Provider>
    </OrdersContext.Provider>
  )
}