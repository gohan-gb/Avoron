import Footer from "./common/Footer"
import MarginWrapper from "./common/MarginWrapper"
<<<<<<< HEAD
import Home from "./pages/Home/Home"
=======

import Navbar from "./common/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Contact from '../src/pages/Contact/Contact'
import Products from '../src/pages/Products/Products'
import Adminpanel from '../src/Backend/Appwrite/Adminpanel'
import Home from '../src/pages/Home/Home'


>>>>>>> main
function App() {

  return (
    <>
<<<<<<< HEAD
    <Home />
     <MarginWrapper>
     {/* <h1 className="text-white text-center bg-black ">hello world</h1>
     <h1 className="text-white font-fraunceus leading-[128px] text-[128px] text-center bg-black ">Hello world</h1>
     <h1 className="text-white font-fraunceus text-8xl text-center bg-black ">Hello world</h1> 
     <h1 className="text-white font-fraunceus text-6xl text-center bg-black ">Hello world</h1>
     <h1 className="text-white font-fraunceus text-4xl text-center bg-black ">Hello world</h1>

     <h1 className="text-white text-2xl text-center bg-black ">Hello world</h1> 
     <h1 className="text-white text-xl text-center bg-black ">Hello world</h1> 
     <h1 className="text-white text-center bg-black ">Hello world</h1> 
      */}
     </MarginWrapper>
=======
     <Navbar/>
     <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-panel" element={<Adminpanel />} />
      </Routes>
     </main>
     <Footer />
>>>>>>> main
    </>
  )
}

export default App
