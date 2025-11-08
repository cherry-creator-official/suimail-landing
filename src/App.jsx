import { BrowserRouter,Navigate, Routes, Route } from 'react-router-dom';
import HeroSection from './components/Herosection.jsx';
import FeaturesSection from './components/features.jsx';
import Future from './components/Future.jsx'
import Footer from './components/Footer.jsx';
const App = () => {
 
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <FeaturesSection />
            <Future />
            <Footer />
          </>
        }
      />
      <Route path="/whitepaper" element={<WhitePaper />} />
    </Routes>
  );
};

export default App;
