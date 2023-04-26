import React, { useState } from 'react'
// import AOS from 'aos';
import 'aos/dist/aos.css';



function Take() {
    const [formData, setFormData] = useState({});



    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  // const offset=()=>{[]}
  // AOS.init({offset:350});
  
      
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData };
  
    fetch('/response9', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response9 => response9.json())
    .then(data => {
        console.log('Request succeeded:', data["output"])
        if (parseFloat(data["output"]) >= 98.7) {
          console.log("A");
          window.location.href = "/Tp";
        } else if (parseFloat(data["output"]) >= 41.15 && parseFloat(data["output"]) < 98.7) {
          console.log("B");
          window.location.href = "/Mod";
        } else if (parseFloat(data["output"]) >= 14.099999999999998 && parseFloat(data["output"]) < 41.15) {
          console.log("C");
          window.location.href = "/Min";
        // } else if (parseFloat(data["output"]) >= 60 && parseInt(data["output"]) < 70) {
        //   console.log("D");
        //   window.location.href = "/Min";       
        } else {
          console.log("Result");
        }

       


        // if(parseInt(data["output"]) >= 98.7){
        //   window.location.href = "/Tp";
        // }else if (parseInt(data["output"]) >= 41.15 && parseInt(data["output"])< 98.7 ){
        //   window.location.href = "/Mod";
        // }else if (parseInt(data["output"]) >= 14  && parseInt(data["output"])< 41.15 ){
        //   window.location.href = "/Min";
        // } else{
        //   window.location.href = "/Min";
        // }
      })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  }
  return (
  <div>
      <h2 style={{paddingBottom:"12px", paddingLeft:" 555px",paddingTop: "30px"}}> Mental Health Examine</h2>
    <div className='check'>
        <form onSubmit={handleSubmit}>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

{/* 1st que  */}

        <div className='check1'>
            <h3 >Strained?</h3> 
            
            <div className="form-check">
              <input  className="form-check-input" onChange={handleChange} value={formData.pleasure || "0"} type="radio" name="pleasure"  id="flexRadioDefault1"/>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
              Did not apply to me at all
              </label>f
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.pleasure || "1"} type="radio" name="pleasure"  id="flexRadioDefault2" />
                 <label className="form-check-label" htmlFor="flexRadioDefault2" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.pleasure || "2"} type="radio" name="pleasure"  id="flexRadioDefault3" />
                 <label className="form-check-label" htmlFor="flexRadioDefault3">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.pleasure || "3"} type="radio" name="pleasure"  id="flexRadioDefault4" />
                 <label className="form-check-label" htmlFor="flexRadioDefault4">
                 Applied to me very much, or most of the time
                </label>
            </div><br />
        </div>

{/* 2nd que  */}

        <div className='check2' data-aos="fade-bottom">
            <h3>Inadequate?</h3> 
            
            <div className="form-check">
              <input  className="form-check-input" onChange={handleChange} value={formData.Feeling || "0"} type="radio" name="Feeling"  id="flexRadioDefault5"/>
              <label className="form-check-label" htmlFor="flexRadioDefault5">
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.Feeling || "1"} type="radio" name="Feeling"  id="flexRadioDefault6" />
                 <label className="form-check-label" htmlFor="flexRadioDefault6" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.Feeling || "2"} type="radio" name="Feeling"  id="flexRadioDefault7" />
                 <label className="form-check-label" htmlFor="flexRadioDefault7">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.Feeling || "3"} type="radio" name="Feeling"  id="flexRadioDefault8" />
                 <label className="form-check-label" htmlFor="flexRadioDefault8">
                 Applied to me very much, or most of the time
                </label>
            </div><br />
        </div>

{/* 3rd que  */}

        <div className='check1'data-aos="fade-right">
            <h3>Overextended?</h3> 
            
            <div className="form-check">
              <input  className="form-check-input" onChange={handleChange} value={formData.Trouble || "0"} type="radio" name="Trouble"  id="flexRadioDefault9"/>
              <label className="form-check-label" htmlFor="flexRadioDefault9">
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.Trouble || "1"} type="radio" name="Trouble"  id="flexRadioDefault10" />
                 <label className="form-check-label" htmlFor="flexRadioDefault10" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.Trouble || "2"} type="radio" name="Trouble"  id="flexRadioDefault11" />
                 <label className="form-check-label" htmlFor="flexRadioDefault11">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.Trouble || "3"} type="radio" name="Trouble"  id="flexRadioDefault12" />
                 <label className="form-check-label" htmlFor="flexRadioDefault12">
                 Applied to me very much, or most of the time
                </label>
            </div><br />
        </div>
{/* 4th que  */}

        <div className='check2'data-aos="fade-left">
            <h3> No sense of getting ahead?</h3> 
            
            <div className="form-check">
              <input  className="form-check-input" onChange={handleChange} value={formData.tired || "0"} type="radio" name="tired"  id="flexRadioDefault13"/>
              <label className="form-check-label" htmlFor="flexRadioDefault13">
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.tired || "1"} type="radio" name="tired"  id="flexRadioDefault14" />
                 <label className="form-check-label" htmlFor="flexRadioDefault14" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.tired || "2"} type="radio" name="tired"  id="flexRadioDefault15" />
                 <label className="form-check-label" htmlFor="flexRadioDefault15">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.tired || "3"} type="radio" name="tired"  id="flexRadioDefault16" />
                 <label className="form-check-label" htmlFor="flexRadioDefault16">
                 Applied to me very much, or most of the time
                </label>
            </div><br />
        </div>

{/* 5th que  */}

        <div className='check1'data-aos="fade-bottom">
            <h3>Swamped by your responsibilities?</h3> 
            
            <div className="form-check">
              <input  className="form-check-input" onChange={handleChange} value={formData.Poor || "0"} type="radio" name="Poor"  id="flexRadioDefault17"/>
              <label className="form-check-label" htmlFor="flexRadioDefault17">
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.Poor || "1"} type="radio" name="Poor"  id="flexRadioDefault18" />
                 <label className="form-check-label" htmlFor="flexRadioDefault18" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.Poor || "2"} type="radio" name="Poor"  id="flexRadioDefault19" />
                 <label className="form-check-label" htmlFor="flexRadioDefault19">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.Poor || "3"} type="radio" name="Poor"  id="flexRadioDefault20" />
                 <label className="form-check-label" htmlFor="flexRadioDefault20">
                 Applied to me very much, or most of the time
                </label>
            </div><br />
        </div>


{/* 6rd que */}
<div className='check2'data-aos="fade-right">
            <h3>That the odds were against you?</h3> 
            
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Feeling_bad || "0"}  name="Feeling_bad" id="flexRadioDefault21"/>
              <label className="form-check-label" htmlFor="flexRadioDefault21" >
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Feeling_bad || "1"}  name="Feeling_bad" id="flexRadioDefault22" />
                 <label className="form-check-label" htmlFor="flexRadioDefault22" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-checkover_react">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Feeling_bad || "2"}  name="Feeling_bad" id="flexRadioDefault23" />
                 <label className="form-check-label" htmlFor="flexRadioDefault23">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Feeling_bad || "3"}  name="Feeling_bad" id="flexRadioDefault24" />
                 <label className="form-check-label" htmlFor="flexRadioDefault24">
                 Applied to me very much, or most of the time
                </label>
            </div>
            </div>


{/* 7rd que */}
<div className='check1'data-aos="fade-left">
            <h3>that there wasn't enough time to get to everything?</h3> 
            
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={handleChange} value={formData.concentrating || "0"} name="concentrating" id="flexRadioDefault25"/>
              <label className="form-check-label" htmlFor="flexRadioDefault25" >
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.concentrating || "1"} name="concentrating" id="flexRadioDefault26" />
                 <label className="form-check-label" htmlFor="flexRadioDefault26" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.concentrating || "2"} name="concentrating" id="flexRadioDefault27" />
                 <label className="form-check-label" htmlFor="flexRadioDefault27">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.concentrating || "3"} name="concentrating" id="flexRadioDefault28" />
                 <label className="form-check-label" htmlFor="flexRadioDefault28" >
                 Applied to me very much, or most of the time
                </label>
            </div>
            </div>


{/* 8rd que */}
<div className='check2'data-aos="fade-bottom">
            <h3>like you were rushed?</h3> 
            
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Moving || "3"} name="Moving" id="flexRadioDefault29"/>
              <label className="form-check-label" htmlFor="flexRadioDefault29" >
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Moving || "3"} name="Moving" id="flexRadioDefault30" />
                 <label className="form-check-label" htmlFor="flexRadioDefault30" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Moving || "3"} name="Moving" id="flexRadioDefault31" />
                 <label className="form-check-label" htmlFor="flexRadioDefault31">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Moving || "3"} name="Moving" id="flexRadioDefault32" />
                 <label className="form-check-label" htmlFor="flexRadioDefault32">
                 Applied to me very much, or most of the time
                </label>
            </div>
            </div>

{/* 9rd que */}
<div className='check1'data-aos="fade-bottom">
            <h3>like you couldn't cope?</h3> 
            
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Thoughts || "0"} name="Thoughts" id="flexRadioDefault33"/>
              <label className="form-check-label" htmlFor="flexRadioDefault33" >
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Thoughts || "1"} name="Thoughts" id="flexRadioDefault34" />
                 <label className="form-check-label" htmlFor="flexRadioDefault34" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Thoughts || "2"} name="Thoughts" id="flexRadioDefault35" />
                 <label className="form-check-label" htmlFor="flexRadioDefault35">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.Thoughts || "3"} name="Thoughts" id="flexRadioDefault36" />
                 <label className="form-check-label" htmlFor="flexRadioDefault36">
                 Applied to me very much, or most of the time
                </label>
            </div>
            </div>
            <button className="cssbuttons-io-button" type='submit'    style={{ margin:"28px 400px"}}>
          Submit
          <div className="icon">
            <svg
              xmlns="htResult ://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              ></path>
            </svg>
          </div>
        </button>
            
            
        </form>
    </div>
  </div>

  )
}



export default Take;
// {/* //         </form>
// //         <button className="cssbuttons-io-button">
// //           {" "}
// //           Get started
// //           <div className="icon">
// //             <svg */}
// {/* //               xmlns="http://www.w3.org/2000/svg"
// //               viewBox="0 0 24 24"
// //               width="24"
// //               height="24"
// //             >
// //               <path fill="none" d="M0 0h24v24H0z"></path>
// //               <path */}
// {/* //                 fill="currentColor"
// //                 d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
// //               ></path>
// //             </svg> */}
// {/* //           </div>
// //         </button> */}

// {/* //       </div>
// //     </>
// //   ); */}
// {/* // } */}