import logo from "././assets/image.png"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./view/home/Home"
import Layout from './component/Layout'
import { Link } from 'react-router-dom'
import About from "./view/about/About"
const App = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <ul>
          <Link to="/">OUR SOLUTION</Link>
          <Link >CASE STUDY</Link>
          <Link to= "/about">ABOUT</Link>
          <Link className='partner'>PARTNER WITH US <i class="ri-arrow-right-line"></i></Link>
        </ul>
      </nav>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    
    </>
  )
}

export default App