import Footer from "./common/Footer"
import MarginWrapper from "./common/MarginWrapper"

import Navbar from "./common/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Contact from '../src/pages/Contact/Contact'
import Products from '../src/pages/Products/Products'
import Adminpanel from '../src/Backend/Appwrite/Adminpanel'
import Home from '../src/pages/Home/Home'


function App() {

  return (
    <>
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
    </>
  )
}

export default App
