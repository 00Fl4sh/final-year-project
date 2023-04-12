import Container from "react-bootstrap/Container";
// import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import httpClient from "../httpClient";
import React, { useState, useEffect } from "react";
// import img1 from './img/hehe.png';
import { Link } from "react-router-dom";

const Topbar=()=> {
  const [user, setUser] = useState(null);

  const logoutUser = async () => {
    await httpClient.post("//localhost:5000/logout");
    window.location.href = "/";
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/@me");
        setUser(resp.data);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);


  return (
    <>
      <main
        className="Container"
        style={{
          overflow: "hidden",
          backgroundcolor: "black",
          position: "fixed",
          top: 0,
          zIndex:1,
          width: "100%",
        }}
      >
        <Navbar className="bgnav" variant="light" style={{ zIndex: "1" }}>
          <Container>
            <Navbar.Brand as={Link} to="/Home">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTnkGSO5XnuRIOKzs82_sq1nV-RYEhT_hO1sUv15-XOwHcwP-d0XtLeGK1g7-2Mw5Lvw&usqp=CAU"
                  width="50"
                  height="50"
                  alt="hehe"
                  style={{ borderRadius: "30px", border: "2px solid white" }}
                />
              </div>
            </Navbar.Brand>
            <Navbar.Brand as={Link} to="/Home" style={{ fontWeight: "bold" }}>
              HAPPY HORMONES
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="nav-links" as={Link} to="/Home">
                Home
              </Nav.Link>
              {user != null ? (
                <>
              <Nav.Link className="nav-links" as={Link} to="/Takethetest">
                Take the Test
              </Nav.Link>
              
                  {/* <Nav.Link className="nav-links" as={Link} to="/Profile">
                    Profile
                  </Nav.Link> */}

              <Nav.Link className="nav-links" as={Link} to="/Location">
                NearBy psychiatrist
              </Nav.Link>

                  <button style={{padding:"9px",
    marginLeft: "37vw",
    borderRadius:"20px",
    background: "#bdaeae",
    /* text-decoration: none; */
    border:"bisque"}}
 onClick={logoutUser}>logout</button>
                </>
              ) : (
                <>
              <Nav.Link className="nav-links" as={Link} to="/SignIn">
                Take the Test
              </Nav.Link>
              <Nav.Link className="nav-links" as={Link} to="/SignIn">
              NearBy psychiatrist
              </Nav.Link>
                  <Nav.Link className="nav-links" as={Link} to="/SignIn">
                    Sign In
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
      </main>
    </>
  );
}

export default Topbar;
