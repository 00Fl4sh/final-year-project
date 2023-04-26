
import { useState, useEffect } from "react";
// import $ from "jquery";
import { useNavigate } from "react-router-dom";

function SemiCircleProgressBar({ percent }) {
  let bar;
  percent=60;
  
  
  useEffect(() => {
    bar = document.getElementById("bar");
  }, []);
  
  function setProgress(percent) {
    const p = 180 - (percent / 100) * 180;  
    bar.style.transform = `rotate(-${p}deg)`;
  }
  
  useEffect(() => {
    setProgress(percent);
  }, [percent]);
  
  const Navigate=useNavigate();
  return (
    <>
    <div className="wrapper">  
      <div className="circle-out">
        <div id="bar" className="circle"></div>
        <span className="text">Moderate</span>
      </div>

    </div>
    <br/>
    <h5 style={{marginLeft:"80px",color:"teal"}}>Moderate levels of Symptoms seen in depression</h5>
    <p style={{background:"teal",color:"white",padding:"10px", width:"30%",marginLeft:"80px",borderRadius:"10px",letterSpacing:"1px", marginTop:"30px"}}>
     people who score like  you may experiance low mood fatique, or disinterest in 
      plesurable activities. you may enjoy a life and try your best to go about your 
      daily routine, but these symptoms can frequenty affect you.
    </p>
    <div style={{marginLeft:"790px",color:"teal", marginBottom:'0px',marginTop:'-490px' }} >

    <h2 >Find Near-by psychiatrist here</h2>

        <button className="cssbuttons-io-button" style={{background:"teal", color:"white", marginLeft:"460px", marginTop:"-50px"}} onClick={()=>Navigate('/Location')}>
          Click Me...</button>
          <br/>

    <h4 style={{marginRight:"60px"}}> STEPS TO REDUCE STRESS</h4>
      <div className="inside">
        <p className="labber2">1.Sit or lie down in a comfortable place.</p>
        <div id="triangle-down"></div>

        <p className="labber">
          {" "}
          2.Bring your awareness to your breaths without trying to change
          howyou're breathing.
        </p>
        <div id="triangle-down2"></div>

        <p className="labber2">
          3.Alternate between normal and deep breaths a few times. Notice any
          differences between normal breathing and deep breathing. Notice how
          your abdomen expands with deep inhalations.
        </p>
        <div id="triangle-down"></div>

        <p className="labber">
          4.Note how shallow breathing feels compared to deep breathing.
        </p>
        <div id="triangle-down2"></div>

        <p className="labber2">
          5.Practice your deep breathing for a few minutes.
        </p>
        <div id="triangle-down"></div>

        <p className="labber">
          6.Place one hand below your belly button, keeping your belly
          relaxed, and notice how it rises with each inhale and falls with
          each exhale.
        </p>
        <div id="triangle-down2"></div>

        <p className="labber2">7.Let out a loud sigh with each exhale.</p>
        <div id="triangle-down"></div>

        <p className="labber">
          8.Begin the practice of breath focus by combining this deep
          breathing with imagery and a focus word or phrase that will support
          relaxation.
        </p>
        <div id="triangle-down2"></div>

        <p className="labber2">
          9.You can imagine that the air you inhale brings waves of peace and
          calm throughout your body. Mentally say, “Inhaling peace and calm.”{" "}
        </p>
        <div id="triangle-down"></div>

        <p className="labber">
          10.Imagine that the air you exhale washes away tension and anxiety.
          You can say to yourself, “Exhaling tension and anxiety.”
        </p>
        {/* <div id="triangle-down"></div> */}
      </div>
    </div>  
    <h4 style={{fontWeight:"500", marginTop:"40px", marginRight:"818px"}}>There are different types of depression</h4><br/>
    <h6 style={{fontWeight:"600", marginLeft:"40px"}}>Major Depressive Disorder (MDD)</h6>
{/* 
<h6 style={{color:"teal"}}> More commonly known as Major Depression, an MDD diagnosis means you probably feel depressed most of the time, multiple days in a week.
Symptoms of Major Depression:</h6> */}
<ul style={{marginLeft:"20px"}}>
  <li>Loss of interest in day-to-day activities</li>
  <li>Loss of pleasure from activities you would normally enjoy</li>
  <li>Trouble falling asleep at night, and feeling drowsy during daytime</li>
  <li> Feeling restless or agitated but cannot explain why</li>
  <li>Unable to concentrate or make decisions</li>
  <li>Feelings of low self-worth</li>
  <li> Suicidal thoughts</li>
</ul>
<h6 style={{fontWeight:"600",marginLeft:"40px"}}>Persistent Depressive Disorder (PDD)</h6> 
{/* <h6 style={{color:"teal"}}>Depression that lasts for 2 years or longer is classified as Persistent Depressive Disorder. Two depressive conditions – dysthymia (low-grade persistent depression) and chronic major depression – that were diagnosed separately in the past now fall under PDD.
Symptoms of PDD:</h6> */}
<ul style={{marginLeft:"20px"}}>
<li>Drastic changes in sleep patterns – sleeping too much or too little</li>
<li>Drastic changes in eating patterns – overeating or not eating enough</li>
<li>Constant fatigue and low energy levels </li>
<li>Feelings of helplessness and low self-esteem</li>
<li>enable to concentrate or make decisions</li>

</ul>

</>
  );
}

export default SemiCircleProgressBar;
