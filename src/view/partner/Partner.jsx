import React from 'react'

const Partner = () => {
  return (
    <div>
      <div className='partner-content'>
      <div><h1>We appreciate your interest in partnering with Blavity Inc</h1></div>
      <div>
        <form action="">
          <label htmlFor="">First Name*</label>
          <input type="text"/>
          <label htmlFor="">Surname Name*</label>
          <input type="text"/><br/>
          <label htmlFor="">Title*</label>
          <input type="text"/>
          <label htmlFor="">Company*</label>
          <input type="text"/>
          <label htmlFor="">Email*</label>
          <input type="email"/>
          
        </form>
      </div>
      </div>
    </div>
  )
}

export default Partner