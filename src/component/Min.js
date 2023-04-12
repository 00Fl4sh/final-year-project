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
      <h2>We determined that you have a minimal level of stress</h2>
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

    
      
  
    
    </div>
    
);
}
export default FetchAPI;
