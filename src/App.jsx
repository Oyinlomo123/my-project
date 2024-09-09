import logo from "././assets/image.png"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./view/home/Home"
import Layout from './component/Layout'
import { Link } from 'react-router-dom'
import About from "./view/about/About"
import Career from "./view/career/Career"
import Partner from "./view/partner/Partner"
const App = () => {

  const menu =()=>{
    var menuState = document.getElementById('smallNav')
    var style = window.getComputedStyle(menuState);
    var menu = document.getElementById('menu')
    console.log(style.display)
    if (style.display=="block"){
      menuState.style.display = "none"
      menu.innerText = '☰';
    }else{
      menuState.style.display = "block"
      menu.innerText = '✖'; 
    }
    
  }

  
  return (
    <div>
   
      <nav>
        <img src={logo} alt="" />
        <ul className="nav-link" id="navbar">
          <Link to="/">OUR SOLUTION</Link>
          <Link to="/about"> ABOUT </Link>
          <Link to="/career">CAREER</Link>
          <Link to="/partner" className='partner'>PARTNER WITH US <i class="ri-arrow-right-line"></i> </Link>
        </ul>
        <button id="menu" onClick={menu}><i class="ri-menu-line"></i>
        <i id="close" class="ri-close-large-fill"></i></button>
        
        <div className="small-nav" id="smallNav">
        <ul className="small-nav-ul">
          <Link to="/">OUR SOLUTION</Link><hr/>
          <Link to="/about"> ABOUT </Link><hr/>
          <Link to="/career">CAREER</Link><hr/>
          <Link to="/partner" className=''>PARTNER WITH US <i class="ri-arrow-right-line"></i></Link>
        </ul>
        </div>
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
    </div>
  )
}

export default App