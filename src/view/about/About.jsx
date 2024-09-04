import Amp from "../../assets/amp.png"
import juniper from"../../assets/juniper.png"
import molex from "../../assets/molex.png"
import novotel from "../../assets/novotel.png"
import samsung from "../../assets/samsung.png"

const About = () => {
  return (
    <div>
      <div className='header'>
        <h1>A Heritage Corporation<br/>
        <span>for this Generation</span></h1>
      </div>
      <div className='our-story'>
      <div className='story'>
          <h1>Our&nbsp;Story</h1><hr/>
      </div>
      <div className='story-content'>
      <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, tempora ea vel sint distinctio quasi deleniti amet magni aperiam. Unde, eveniet exercitationem totam libero et pariatur nam voluptatibus? Nemo, adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in rerum eius exercitationem, sint incidunt voluptates tempore! Sint incidunt delectus temporibus quae, suscipit asperiores. Eveniet eaque ipsa temporibus aut necessitatibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quod dolores, suscipit nobis culpa accusantium corrupti porro? Unde maiores, voluptatum facere et beatae blanditiis obcaecati, quaerat, non doloribus voluptate aperiam.</h4>
      </div>
      <div className='division'>
        <h1 className='division-h1'>Our Division</h1>
        <div className='square'></div>
        <div className='our-division'>
          <div className='mission'>
            <h1>OUR MISSION</h1>
            <h4>To connect people and communities by 
              bridging the gap between technology 
              and human needs, ensuring that every 
              customer's communication needs are 
              met with innovation, affordability and 
              accessibility.
            </h4>
          </div>
          <div className='vission'>
            <h1>OUR VISSION</h1>
            <h4>To become a world-class 
              telecommunications company, 
              connecting people and businesses across 
              borders and enabling seamless global 
              communication.
            </h4>
          </div>
        </div>
        <hr className='line' />
        <div className='with-us'>
          <div>
            <h1>PARTNER WITH US </h1>
            <button className="btn">CLICK HERE<i class="ri-arrow-right-line"></i></button>
          </div>
          <div>
            <h1>WORK WITH US </h1>
            <button className="btn">CLICK HERE<i class="ri-arrow-right-line"></i></button>
          </div>
        </div>
        <hr className='linee' />
        <div className='investor'>
          <h1>Our&nbsp;Partner</h1><hr/>
      </div>
      <div className="marquee">
          <img src={samsung} alt="" />
          <img src={Amp} alt="" />
          <img src={molex} alt="" />
          <img src={novotel} alt="" />
          <img src={juniper} alt="" />
          <img src={novotel} alt="" />
          <img src={juniper} alt="" />
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default About