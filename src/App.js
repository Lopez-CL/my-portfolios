import './App.css';
import {React, useState} from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './views/Portfolio';
import Resume from './components/Resume';
function App() {
  // Using the following state to help hard code a reset of position stylings. Issue with how background image fills out window on window resizing
  const [footerDown, setFooterDown] = useState(false)
  return (
    <div className='app-container' >
      <BrowserRouter>
        <Navbar/> 
        {/* I want home content of home component to show throughout SPA */}
          <Home footer = {footerDown} setFooterDown = {setFooterDown}/>
        <Routes>
          <Route path="/:str"  element={<Portfolio/>}/>
          <Route path="/resume"  element={<Resume/>}/>
        </Routes>
        <div>
          <Footer footer = {footerDown}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
