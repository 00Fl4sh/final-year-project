import React from 'react'
import { useNavigate } from "react-router-dom";


export default function Flex() {
    const Navigate=useNavigate();

  return (
    <>
    
    <div className="flex">

            <div>
                <h5>Know Your Stress Level</h5> 
                <p>
                Determine how much you are "stressed" in order to control your mental stress!    
                </p>
            <button className='btn1' >TAKE THE TEST</button>
            </div>
          
            <div>
                <h5>Know Your Depression Level</h5> 
               <p>Experiencing persistent sadness or loss of interest in previously enjoyed activities. And/or if you're feeling hopeless or helpless, it's a good idea to spare your 2 minutes.
                </p> 
                <button className='btn2'onClick={()=>Navigate('/TakeTest9')}>TAKE THE TEST</button>
            </div>
          
            <div>
                <h5>Know Your anxiety Level</h5> 
                <p> If you are experiencing excessive and persistent worrying or fear about everyday situations or events, it’s a better idea to
                assess your anxiety level. Take out your 2minutes. 
                </p>
                <button className='btn3' >TAKE THE TEST</button>
            </div>
    </div>
      <div>
        <button className='heal' onClick={()=>Navigate('/Takethetest')}>
          <h3>Check your General Mental State here... </h3>
        </button>  
          <p style={{paddingLeft:"84vw", position: "relative",marginRight:"289px",marginTop: "-57px",zIndex: "0",textDecoration:"underline",fontWeight: "600"}}>#loveyourself</p>
      </div>  
  </>
  )
}
