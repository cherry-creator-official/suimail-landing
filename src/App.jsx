import { Navigate, Routes, Route } from "react-router-dom"
import HeroSection from "./components/Herosection.jsx"
import FeaturesSection from "./components/features.jsx"
import Future from "./components/Future.jsx"
import Footer from "./components/Footer.jsx"
import Whitepaper from "./components/Whitepaper.jsx"

const Home = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <Future />
    <Footer />
  </>
)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whitepaper" element={<Whitepaper />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
