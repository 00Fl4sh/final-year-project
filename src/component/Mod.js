import React from "react";
// import { json } from "react-router-dom";


function FetchAPI(){
  // const [data , setData] = useState([]);

  // const apiGet = () => {
  //   fetch("/doc")
  //   .then((response) =>response.json())
  //   .then((json) => {
  //     console.log(json);
  //     setData(json);
  //   });
  // };

  // useEffect(() => {
  //   apiGet();

  // }, []);


  return (
    <div>
    <div className="result">
      <br />
      <br />
      <h1>So, here you are! </h1>
      <h2>We determined that you have a Moderate level of stress</h2>
    </div>
    {/* <img
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
    ></img> */}
    <p>
    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
      When to see doctor
    </button>
  </p>
  <div style={{minHeight:"120px"}}>
    <div className="collapse collapse-horizontal" id="collapseWidthExample">
      <div className="card card-body" style={{width:"300px"}}>
      If you have any signs or symptoms of a mental illness, see your primary care provider or a mental health professional. Most mental illnesses don't improve on their own, and if untreated, a mental illness may get worse over time and cause serious problems.      </div>
    </div>
  </div>

    
      
  
    
    </div>
    
);
}
export default FetchAPI;
