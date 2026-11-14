import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Vendor from './pages/Vendor'
import Queue from './pages/Queue'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/vendor/:id" element={<Vendor />} />
          <Route path="/queue" element={<Queue />} />
        </Routes>
      </main>
      <Footer />
      <BottomNav />
      <Cursor />
    </div>
  )
}