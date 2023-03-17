import React from 'react'
import './App.css';

import Topbar from './component/Topbar';
import Home from './component/Home';
import Takethetest from './component/Takethetest';
import Contact from './component/Contact';
import Login from './component/Login';
// import Logout from './component/Logout';
import { Route,Routes} from 'react-router-dom'
import Footer from './component/Footer';

function App() {
  return (
    
    <div className='page-container'>
      <div className='content-wrap'>
      <Topbar/><br/><br /> <br />
      
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Takethetest' element={<Takethetest/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Login' element={<Login/>}/>
      {/* <Route path='/Logout' element={<Logout/>}/> */}
     </Routes> 
     </div>
    <Footer/>
    </div>
  );
}
export default App;

