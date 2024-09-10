import airtel from "../../assets/airtel.png"
import uba from "../../assets/uba.png"
import diamond from "../../assets/diamond.png"
import olam from "../../assets/olam.png"
import mobil from "../../assets/mobil.png"

const Partner = () => {
  return (
    <div>
      <div className='partner-content'>
      <div className='appreciate'><h1>We appreciate your interest in partnering with Telvida </h1></div>
      <div className='whole-form'>
        <form className='form-partner' action="">
          <div className='names'>
          <div className='fn'>
          <label htmlFor="">First Name*</label><br/>
          <input type="text"/>
          </div>
          <div className='sn'>
          <label htmlFor="">Surname Name*</label><br/>
          <input type="text"/><br/>
          </div>
          </div>
          <label htmlFor="">Title*</label>
          <input type="text"/>
          <label htmlFor="">Company*</label>
          <input type="text"/>
          <label htmlFor="">Email*</label>
          <input type="email"/>
          <label htmlFor="">Message:</label>
          <textarea cols={10}/>
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
      </div>
        <div className="ourclient">
          <h1>Clients</h1>
          <div className='client'>
            <img src="https://www.worldservicesgroup.com/files/pic/263.gif" alt="" />
            <img src={uba} alt="" />
            <img src={airtel} alt="" />
            <img src={olam} alt="" />
            <img src={diamond} alt="" />
            <img src={mobil} alt="" />
            <img src={uba} alt="" />
            <img src={airtel} alt="" />
            <img src={olam} alt="" />
            <img src={diamond} alt="" />
            <img src={mobil} alt="" />
            <img src={uba} alt="" />
            <img src={airtel} alt="" />
            <img src={olam} alt="" />
            <img src={diamond} alt="" />
            <img src={mobil} alt="" />
          </div>
        </div>
      </div>
  )
}

export default Partner