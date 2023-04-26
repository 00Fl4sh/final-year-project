import React from 'react'
import './App.css';
import Topbar from './component/Topbar';
import Tp from './component/Tp';
import Home from './component/Home';
import Takethetest from './component/Takethetest';
import Profile from './component/Profile';
import SignUp from './component/SignUp';   
import SignIn from './component/SignIn';
import Footer from './component/Footer';
import Location from './component/Location';
import {Routes,Route} from 'react-router-dom'
import Result from './component/Result';
import TakeTest9 from './component/TakeTest9';
import Use   from './component/Use';
import Flex from './component/Flex';
import Top from './component/Top';
import Min from './component/Min';
import Mod from './component/Mod';
// import Minimal from './component/Minimal';
// import Container from 'react-bootstrap/esm/Container';
// import { Switch} from 'react-router-dom'

function App() {
  return (
    <>
    
    <div className='page-container'>
      <div className='content-wrap'>
      <Topbar/><br/><br /> <br />
      {/* <Container> */}
      <Routes>  
      {/* <Switch> */}
          <Route exact path='/' element={<Home/>}/> 
          <Route path='/Home' element={<Home/>}/> 
          <Route path='/Tp' element={<Tp/>}/>
          {/* <Route path='/SignIn' element={<Takethetest/>}/> */}
          <Route path='/Takethetest' element={<Takethetest/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/SignIn' element={<SignIn/>}/> 
          <Route path='/Location' element={<Location/>}/> 
          <Route path='/Result' element={<Result/>}/> 
          <Route path='/TakeTest9' element={<TakeTest9/>}/>
          <Route path='/Use' element={<Use/>}/>
          <Route path='/Flex' element={<Flex/>}/>
          <Route path='/Top' element={<Top/>}/>
          <Route path='/Min' element={<Min/>}/>
          <Route path='/Mod' element={<Mod/>}/>




      {/* </Switch> */}
      </Routes> 
      {/* </Container> */}
      </div> 
    </div>
    <Footer/>      
    </>
  );
}
export default App;

