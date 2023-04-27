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

import Stress from './component/Stress';
import MinimalStress from './component/MinimalStress';
import MinStress from './component/MinStress';
import HighStress from './component/HighStress';
import ModStress from './component/ModStress';

import Anxiety from './component/Anxiety';
import MinAnxiety from './component/MinAnxiety';
import ModAnxiety from './component/ModAnxiety';
import MinimalAnxiety from './component/MinimalAnxiety';
import HighAnxiety from './component/HighAnxiety';
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
          <Route path='/Stress' element={<Stress/>}/>
          <Route path='/MinimalStress' element={<MinimalStress/>}/>
          <Route path='/MinStress' element={<MinStress/>}/>
          <Route path='/HighStress' element={<HighStress/>}/>
          <Route path='/ModStress' element={<ModStress/>}/>
          
          <Route path='/Anxiety' element={<Anxiety/>}/>
          <Route path='/MinAnxiety' element={<MinAnxiety/>}/>
          <Route path='/ModAnxiety' element={<ModAnxiety/>}/>
          <Route path='/HighAnxiety' element={<HighAnxiety/>}/>
          <Route path='/MinimalAnxiety' element={<MinimalAnxiety/>}/>





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

