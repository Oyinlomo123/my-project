import logo from "../assets/image.png"
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from "../view/home/Home"
import Layout from '../component/Layout'
import { Link } from 'react-router-dom'
import About from "../view/about/About"
import Career from "../view/career/Career"
import Partner from "../view/partner/Partner"
import Nav from "../component/Nav"

const File = () => {
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
      menu.textContent = '✕'; 
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
       <div>
    <Routes>
      <Route element={<Nav/>}/>
      <Route path='/' element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/partner" element={<Partner/>}/>
    </Routes>
    <footer>
    <Link to="/"><img src={logo} alt="" /></Link>
      <div className="footer-nav">
       <table>
        <tr>
          <th> <Link to="/">OUR SOLUTION</Link></th>
          <th> <Link to="/partner">PARTNER WITH US</Link></th>
        </tr>
        <tr>
        <th> <Link to="/career">CAREERS</Link></th>
        <th> <Link tof="#">AFFILIATE<br/> PARTNERSHIP</Link></th>
        </tr>
        <tr>
        <th> <Link to= "/about">ABOUT</Link></th>
        <th> <Link to="/partner">PARTNER WITH US</Link></th>
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
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="blank"><button>submit&nbsp;<i class="ri-arrow-right-line"></i></button></a>
        </div>
      </div>
    </footer>
    </div>
    </div>
  )
}

export default File