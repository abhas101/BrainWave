import Filler from "./components/Filler";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ProductPage from "./components/ProductPage";
import TopBar from "./components/TopBar";
import SignUpFooter from './components/SignUpFooter.jsx'
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="pageWrapper overflow-x-hidden">
        <TopBar />
        <Navbar />
        <Hero />
        <Logos/>
        <ProductPage/>
        <Pricing/>
        <SignUpFooter/>
        <Footer/>
        {/* <Filler/> */}


      </div>

    </>
  )
}