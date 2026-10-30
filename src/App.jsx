import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Vendor from './pages/Vendor'
import Queue from './pages/Queue'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/vendor/:id" element={<Vendor />} />
          <Route path="/queue" element={<Queue />} />
        </Routes>
      </main>
      <Footer />
      <BottomNav />
    </div>
  )
}