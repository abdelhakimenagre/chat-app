import React from 'react'
import "./message.css";
import Chatliste from '../../component/chatlist/Chatliste';

export default function MessageEnvoyer() {
  const CurrentDate = new Date();
  return (
    <div className='MessageDash'>
      <div className='MessageHeader'>
        <div className='LocalTime'>
          <div className='hour'>{CurrentDate.toTimeString().slice(0,5)} UTC  </div>
          <div className='date'>  {CurrentDate.toLocaleString("default", { month: "long" })} {CurrentDate.getDate()}  {CurrentDate.getFullYear()}</div>
        </div>
        <div className='MessageButtom'>
          <button className='CreateNew'>Create New</button>
          <input type="text" placeholder='Search people, word or anything...' className='Searchbar' />
          
        </div>
      
    </div>
   
      <Chatliste/>

        
      
      
      
    </div>

  )
}
