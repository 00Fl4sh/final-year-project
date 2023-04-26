import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function QuestionForm() {
  const [formData, setFormData] = useState({});



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// const offset=()=>{[]}
AOS.init({offset:350});

    
const handleSubmit = async (e) => {
  e.preventDefault();
  const data = { ...formData };

  fetch('/response21', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response21 => response21.json())
  .then(data => {
      console.log('Request succeeded:', data["output"])
      if (parseInt(data["output"]) > 4.6) {
        window.location.href = "/Tp"
      } else {
        window.location.href = "/Result"
      }
    })
  .catch(error => {
    console.error('An error occurred:', error);
  });
}



  
  return (
  <div>
  <h2 style={{paddingBottom:"12px", paddingLeft:" 555px",paddingTop: "30px"}}> Mental Health Examine</h2>
    <div className='check'>
        <form   onSubmit={handleSubmit}>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

{/* 1st que  */}

<div className='check1'data-aos="fade-right">
            <h3  >I found it hard to wind down</h3> 
            
            <div className="form-check">
              <input  className="form-check-input" onChange={handleChange} value={formData.wind_down || "0"} type="radio" name="wind_down"  id="flexRadioDefault1"/>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.wind_down || "1"} type="radio" name="wind_down"  id="flexRadioDefault2" />
                 <label className="form-check-label" htmlFor="flexRadioDefault2" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.wind_down || "2"} type="radio" name="wind_down"  id="flexRadioDefault3" />
                 <label className="form-check-label" htmlFor="flexRadioDefault3">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.wind_down || "3"} type="radio" name="wind_down"  id="flexRadioDefault4" />
                 <label className="form-check-label" htmlFor="flexRadioDefault4">
                 Applied to me very much, or most of the time
                </label>
            </div><br />
        </div>

{/* 2nd que  */}

        <div className='check2' data-aos="fade-bottom">
            <h3>I was aware of dryness of my mouth</h3> 
            
            <div className="form-check">
              <input  className="form-check-input" onChange={handleChange} value={formData.dryness_mouth || "0"} type="radio" name="dryness_mouth"  id="flexRadioDefault5"/>
              <label className="form-check-label" htmlFor="flexRadioDefault5">
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.dryness_mouth || "1"} type="radio" name="dryness_mouth"  id="flexRadioDefault6" />
                 <label className="form-check-label" htmlFor="flexRadioDefault6" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.dryness_mouth || "2"} type="radio" name="dryness_mouth"  id="flexRadioDefault7" />
                 <label className="form-check-label" htmlFor="flexRadioDefault7">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.dryness_mouth || "3"} type="radio" name="dryness_mouth"  id="flexRadioDefault8" />
                 <label className="form-check-label" htmlFor="flexRadioDefault8">
                 Applied to me very much, or most of the time
                </label>
            </div><br />
        </div>

{/* 3rd que  */}

        <div className='check1'data-aos="fade-right">
            <h3>I couldn't seem to experience any positive feeling at all</h3> 
            
            <div className="form-check">
              <input  className="form-check-input" onChange={handleChange} value={formData.no_positive_feeling || "0"} type="radio" name="no_positive_feeling"  id="flexRadioDefault9"/>
              <label className="form-check-label" htmlFor="flexRadioDefault9">
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.no_positive_feeling || "1"} type="radio" name="no_positive_feeling"  id="flexRadioDefault10" />
                 <label className="form-check-label" htmlFor="flexRadioDefault10" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.no_positive_feeling || "2"} type="radio" name="no_positive_feeling"  id="flexRadioDefault11" />
                 <label className="form-check-label" htmlFor="flexRadioDefault11">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.no_positive_feeling || "3"} type="radio" name="no_positive_feeling"  id="flexRadioDefault12" />
                 <label className="form-check-label" htmlFor="flexRadioDefault12">
                 Applied to me very much, or most of the time
                </label>
            </div><br />
        </div>
{/* 4th que  */}

        <div className='check2'data-aos="fade-left">
            <h3>I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion)</h3> 
            
            <div className="form-check">
              <input  className="form-check-input" onChange={handleChange} value={formData.breathing_difficulty || "0"} type="radio" name="breathing_difficulty"  id="flexRadioDefault13"/>
              <label className="form-check-label" htmlFor="flexRadioDefault13">
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.breathing_difficulty || "1"} type="radio" name="breathing_difficulty"  id="flexRadioDefault14" />
                 <label className="form-check-label" htmlFor="flexRadioDefault14" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.breathing_difficulty || "2"} type="radio" name="breathing_difficulty"  id="flexRadioDefault15" />
                 <label className="form-check-label" htmlFor="flexRadioDefault15">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.breathing_difficulty || "3"} type="radio" name="breathing_difficulty"  id="flexRadioDefault16" />
                 <label className="form-check-label" htmlFor="flexRadioDefault16">
                 Applied to me very much, or most of the time
                </label>
            </div><br />
        </div>

{/* 5th que  */}

        <div className='check1'data-aos="fade-bottom">
            <h3>I found it difficult to work up the initiative to do things</h3> 
            
            <div className="form-check">
              <input  className="form-check-input" onChange={handleChange} value={formData.difficult_to_work || "0"} type="radio" name="difficult_to_work"  id="flexRadioDefault17"/>
              <label className="form-check-label" htmlFor="flexRadioDefault17">
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.difficult_to_work || "1"} type="radio" name="difficult_to_work"  id="flexRadioDefault18" />
                 <label className="form-check-label" htmlFor="flexRadioDefault18" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.difficult_to_work || "2"} type="radio" name="difficult_to_work"  id="flexRadioDefault19" />
                 <label className="form-check-label" htmlFor="flexRadioDefault19">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onChange={handleChange} value={formData.difficult_to_work || "3"} type="radio" name="difficult_to_work"  id="flexRadioDefault20" />
                 <label className="form-check-label" htmlFor="flexRadioDefault20">
                 Applied to me very much, or most of the time
                </label>
            </div><br />
        </div>


{/* 6rd que */}
<div className='check2'data-aos="fade-right">
            <h3>I tended to over-react to situations</h3> 
            
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={handleChange} value={formData.over_react || "0"}  name="over_react" id="flexRadioDefault21"/>
              <label className="form-check-label" htmlFor="flexRadioDefault21" >
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.over_react || "1"}  name="over_react" id="flexRadioDefault22" />
                 <label className="form-check-label" htmlFor="flexRadioDefault22" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-checkover_react">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.over_react || "2"}  name="over_react" id="flexRadioDefault23" />
                 <label className="form-check-label" htmlFor="flexRadioDefault23">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.over_react || "3"}  name="over_react" id="flexRadioDefault24" />
                 <label className="form-check-label" htmlFor="flexRadioDefault24">
                 Applied to me very much, or most of the time
                </label>
            </div>
            </div>


{/* 7rd que */}
<div className='check1'data-aos="fade-left">
            <h3>I experienced trembling (eg, in the hands)</h3> 
            
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={handleChange} value={formData.trembling || "0"} name="trembling" id="flexRadioDefault25"/>
              <label className="form-check-label" htmlFor="flexRadioDefault25" >
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.trembling || "1"} name="trembling" id="flexRadioDefault26" />
                 <label className="form-check-label" htmlFor="flexRadioDefault26" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.trembling || "2"} name="trembling" id="flexRadioDefault27" />
                 <label className="form-check-label" htmlFor="flexRadioDefault27">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.trembling || "3"} name="trembling" id="flexRadioDefault28" />
                 <label className="form-check-label" htmlFor="flexRadioDefault28" >
                 Applied to me very much, or most of the time
                </label>
            </div>
            </div>


{/* 8rd que */}
<div className='check2'data-aos="fade-bottom">
            <h3>I felt that I was using a lot of nervous energy</h3> 
            
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={handleChange} value={formData.use_nervous_energy || "0"} name="use_nervous_energy" id="flexRadioDefault29"/>
              <label className="form-check-label" htmlFor="flexRadioDefault29" >
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.use_nervous_energy || "1"} name="use_nervous_energy" id="flexRadioDefault30" />
                 <label className="form-check-label" htmlFor="flexRadioDefault30" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.use_nervous_energy || "2"} name="use_nervous_energy" id="flexRadioDefault31" />
                 <label className="form-check-label" htmlFor="flexRadioDefault31">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.use_nervous_energy || "3"} name="use_nervous_energy" id="flexRadioDefault32" />
                 <label className="form-check-label" htmlFor="flexRadioDefault32">
                 Applied to me very much, or most of the time
                </label>
            </div>
            </div>

{/* 9rd que */}
<div className='check1'data-aos="fade-bottom">
            <h3>I was worried about situations in which I might panic and make a fool of myself</h3> 
            
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={handleChange} value={formData.panic || "0"} name="panic" id="flexRadioDefault33"/>
              <label className="form-check-label" htmlFor="flexRadioDefault33" >
              Did not apply to me at all
              </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.panic || "1"} name="panic" id="flexRadioDefault34" />
                 <label className="form-check-label" htmlFor="flexRadioDefault34" >
                 Applied to me to some degree, or some of the time                 
               </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.panic || "2"} name="panic" id="flexRadioDefault35" />
                 <label className="form-check-label" htmlFor="flexRadioDefault35">
                 Applied to me to a considerable degree, or a good part of time
                 </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" type="radio" onChange={handleChange} value={formData.panic || "3"} name="panic" id="flexRadioDefault36" />
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
              height="24"
            >
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

export default QuestionForm;