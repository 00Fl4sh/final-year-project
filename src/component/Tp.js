import React, {useState ,   useEffect} from "react";
// import { json } from "react-router-dom";


function FetchAPI(){
  const [data , setData] = useState([]);

  const apiGet = () => {
    fetch("/doc")
    .then((response) =>response.json())
    .then((json) => {
      console.log(json);
      setData(json);
    });
  };

  useEffect(() => {
    apiGet();

  }, []);


  return (
    <div>
    <div className="result">
      <br />
      <br />
      <h1>So, here you are! </h1>
      <h2>We determined that you have a high level of stress</h2>
      <h2>Please Welcome!! </h2>
      <h3> WE ARE READY TO HELP YOU </h3>
    </div>
    <img
      src="https://img.freepik.com/free-photo/two-people-holding-hands-together-with-love-warmth-wooden-table_1150-26177.jpg"
      alt="img2"
      style={{
        borderRadius: "144px",
        height: "299px",
        width: "302px",
        marginLeft: "977px",
        marginTop: "-333px",
        marginBottom: "100px",
      }}
    ></img>

    <div
      style={{
        backgroundColor: " -webkit-repeating-radial-gradient(grey,bisque)",
        paddingBottom: "40px",
      }}
    >
      <h4> STEPS TO REDUCE STRESS</h4>
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

  
    <div style={{ margin: "99px" }}>
      <div className="flex-container">
        <h3 style={{ padding: "130px 0px 0px 10px", letterSpacing: "5px" }}>
          Suggestions
        </h3>
        <div style={{display :"flex"}}>
            {data.map(item =>
              <div className="btn">
              
              <a href={item.profile_link} target='_blank' rel="noreferrer">{item.doc_name}</a>
              <br />
              {/* {item.year_of_exp} Years Experience Overall */}

              {item.year_of_exp} Years Experience Overall
              <br />
              {item.locality}
              <br />
              {item.consulting_fee} Consultation fees at Clinic
              <br />
              {item.patient_stories} Patient stories
              <br />
              {item.doc_recommmendation} Rating
              <br />
              </div> 
              // <li key={item.id}>{item.doc_name}</li> 
              )}
        </div>
      </div>
    </div>
    </div>
    
);
}
export default FetchAPI;
