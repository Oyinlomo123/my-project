import logo from "././assets/image.png"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./view/home/Home"
import Layout from './component/Layout'
import { Link } from 'react-router-dom'
import About from "./view/about/About"
import Career from "./view/career/Career"
import Partner from "./view/partner/Partner"
const App = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <ul>
          <Link to="/">OUR SOLUTION</Link>
          <Link to="/about"> ABOUT </Link>
          <Link to="/career">CAREER</Link>
          <Link to="/partner" className='partner'>PARTNER WITH US <i class="ri-arrow-right-line"></i></Link>
        </ul>
      </nav>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/partner" element={<Partner/>}/>
    </Routes>
    <footer>
      <img src={logo} alt="" />
      <div className="footer-nav">
       <table>
        <tr>
          <th> <Link to="/">OUR SOLUTION</Link></th>
          <th> <a href="#">PARTNER WITH US</a></th>
        </tr>
        <tr>
        <th> <a href="#">CAREERS</a></th>
        <th> <a href="#">AFFILIATE<br/> PARTNERSHIP</a></th>
        </tr>
        <tr>
        <th> <Link to= "/about">ABOUT</Link></th>
        <th> <a href="#">PARTNER WITH US</a></th>
        </tr>
       </table>
       <div className="social-media">
       <a href="#"><i class="ri-linkedin-box-fill"></i></a>
       <a href="#"><i class="ri-instagram-line"></i></a>
       <a href="#"><i class="ri-facebook-fill"></i></a>
       </div>
      </div>
      <div className="get">
        <h1>Get our corporate new.</h1>
        <div className="mail">
        <input type="email" placeholder="email address"/>
        <button>submit&nbsp;<i class="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App