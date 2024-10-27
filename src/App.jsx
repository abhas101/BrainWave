import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ProductPage from "./components/ProductPage";
import TopBar from "./components/TopBar";
import SignUpFooter from './components/SignUpFooter.jsx'
import Footer from "./components/Footer.jsx";
import Tape from "./components/Tape.jsx";

export default function App() {
  return (
    <>
      <div className="pageWrapper overflow-x-hidden bg-gradient-to-r from-violet-200 to-pink-200" id="body">
        <TopBar />
        <Navbar />
        <Hero />
        <Logos/>
        <Tape/>
        <ProductPage/>
        <Pricing/>
        <SignUpFooter/>
        <Footer/>
      </div>

    </>
  )
}