import logo from "../../assets/image.png"
import { Link } from "react-router-dom"
import Layout from "../../component/Layout"

const Home = () => {
  return (
    <>
    <div className="whole-body">
      <div className="body-content">
        <div className="creat">
        <h1>We create customized solutions <br/>for <span>Black communities</span> and the<br/> businesses
         that want to <span> with them</span></h1><br/>
        <button className="btn">PARTNER WITH US <i class="ri-arrow-right-line"></i></button>
        </div>
        <div>
        <h2 className="solution">OUR SOLUTION</h2>
        <div className="all-card">
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
        </div>

        <div className="learn">
        <h5 className="learn-more"><a href="#">Learn more <i class="ri-arrow-right-line"></i></a></h5>
        </div>
      </div>
     </div>
    </div>
  
    <div className="imgbg">
      <h1>We reach <span>100 million</span> <br/> consumers every month.</h1>
     </div>
     <div className="connect">
      <h1>Connect with Telvida on a <br></br>deeper level.<Link to="/about"><button> ABOUT US<i class="ri-arrow-right-line"></i></button></Link></h1>
     </div>
    
  </> 
  )
}

export default Home