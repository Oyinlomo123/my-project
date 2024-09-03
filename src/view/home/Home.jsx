import Amp from "../../assets/amp.png"
import juniper from"../../assets/juniper.png"
import molex from "../../assets/molex.png"
import novotel from "../../assets/novotel.png"
import samsung from "../../assets/samsung.png"
import logo from "../../assets/image.png"
import { Link } from "react-router-dom"
import Layout from "../../component/Layout"

const Home = () => {
  return (
    <>
    <div className="whole-body">
      <div className="body-content">
        <h1>We create customized solutions <br/>for <span>Black communities</span> and the<br/> businesses
         that want to <span> with them</span></h1><br/>
        <button className="btn">PARTNER WITH US <i class="ri-arrow-right-line"></i></button>
        <h2 className="solution" id="SOLUTION">OUR SOLUTION</h2>
        <div className="cards">
        <div className="card">
        <Layout
         title="Unified Communication"
         content="Build a smarter, more efficient organization. Drive transformation, optimization and automation for your organization with our intelligent network as a service (NaaS) infrastructure"
         
        />
        </div>
        <div className="card">
        <Layout
         title="Cloud-Computing"
         content="Realizing the value of cloud starts with the right understanding of cloud. When you view cloud as the enabler to drive business outcomes, great things happen to your business."
         
        />
        </div>
        <div className="card">
        <Layout
         title="Advanced&nbsp;Data Analysis"
         content="Realizing the value of cloud starts with the right understanding of cloud. When you view cloud as the enabler to drive business outcomes, great things happen to your business"
         
        />
        </div>
        </div>
        <h5 className="learn-more"><Link>Learn more <i class="ri-arrow-right-line"></i></Link></h5>
        <div className="brand">
          <h2>OUR BRAND</h2>
          <h4>We deliver tailored solutions and innovative content across diverse industries, ensuring relevance and impact.</h4>
        </div >
      </div>
  
    </div>
    <div className="marquee">
            <marquee direction="left">
            <img src={Amp} alt="" />
            <img src={juniper} alt="" />
            <img src={novotel} alt="" />
            <img src={molex} alt="" />
            <img src={samsung} alt="" />
            </marquee>
          </div>
    <div className="imgbg">
      <h1>We reach <span>100 million</span> <br/> consumers every month.</h1>
     </div>
     <div className="connect">
      <h1>Connect with Telvida on a <br></br>deeper level.<button>ABOUT US <i class="ri-arrow-right-line"></i></button></h1>
     </div>
    <footer>
      <img src={logo} alt="" />
      <div className="footer-nav">
       <table>
        <tr>
          <th> <a href="#">OUR SOLUTION</a></th>
          <th> <a href="#">PARTNER WITH US</a></th>
        </tr>
        <tr>
        <th> <a href="#">CAREERS</a></th>
        <th> <a href="#">AFFILIATE<br/> PARTNERSHIP</a></th>
        </tr>
        <tr>
        <th> <a href="#">ABOUT</a></th>
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

export default Home