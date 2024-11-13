import MarginWrapper from "./common/MarginWrapper"
import { Route, Routes } from 'react-router-dom'
import Adminpanel from '../src/Backend/Appwrite/Adminpanel'
import Home from '../src/pages/Home/Home'


function App() {

  return (
    <>
     {/* <MarginWrapper>
     <h1 className="text-white text-center bg-black ">hello world</h1>
     <h1 className="text-white font-fraunceus leading-[128px] text-[128px] text-center bg-black ">Hello world</h1>
     <h1 className="text-white font-fraunceus text-8xl text-center bg-black ">Hello world</h1> 
     <h1 className="text-white font-fraunceus text-6xl text-center bg-black ">Hello world</h1>
     <h1 className="text-white font-fraunceus text-4xl text-center bg-black ">Hello world</h1>

     <h1 className="text-white text-2xl text-center bg-black ">Hello world</h1> 
     <h1 className="text-white text-xl text-center bg-black ">Hello world</h1> 
     <h1 className="text-white text-center bg-black ">Hello world</h1> 
     
     </MarginWrapper> */}

      
     <Routes>
        <Route path="/admin-panel" element={<Adminpanel />} />
        <Route path="/home" element={<Home />} />
     </Routes>
    </>
  )
}

export default App
