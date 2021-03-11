import './App.css';
import { React, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Watch from './Pages/Watch';
import MarketPlace from './Pages/MarketPlace';
import Gaming from './Pages/Gaming';
import PopUp from './Components/PopUp';
import { FaFacebook } from "react-icons/fa";
import TabBar from './Components/TabBar';
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import RoundShape from './Components/RoundShape';

function App() {

  var [value, setValue] = useState(false);

  const handleValue = ()=>{
    value==false?setValue(true):setValue(false);
  }
 

  return (
    <div className="App" style={{ position: 'relative' }}>

      <Router>
        {/* Top Bar */}

        <div className="top-bar" style={{
          height: '8.5vh',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 1px 3px #808080',
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-between"
        }}>

          {/* Left Items */}
          <div style={{ width: '24vw', display: 'flex', justifyContent: "space-evenly", alignItems: 'center' }}>
            <FaFacebook style={{ color: '#15A4FA', height: '40px', width: '40px', }}></FaFacebook>
            <input placeholder='Search Facebook' style={{
              borderRadius: '20px', height: '5vh', width: '18vw',
              border: 'none', fontSize: '18px', backgroundColor: '#F0F2F5',
              paddingLeft: '15px',
              outlineColor:'transparent'

            }}></input>


          </div>

          {/* Middle Items */}
          <TabBar></TabBar>

          {/* End Items */}

          <div style={{ width: "30vw", height: '8.5vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <div style={{ width: '10vw', height: '8.5vh', justifyContent: "space-around", display: 'flex', alignItems: 'center' }}>
              <div style={{ borderRadius: '50%', height: '30px', display: 'flex', width: '30px', backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>

              </div>
              <h4>Afran Sarkar</h4>
            </div>
            <div style={{ width: '18vw', height: '8.5vh', justifyContent: "space-around", display: 'flex', alignItems: 'center' }}>
              <div onClick={()=>handleValue()} ><RoundShape icon={<IoMdAdd style={{ height: '23px', width: '23px' }} ></IoMdAdd>}  ></RoundShape></div>
              <div onClick={()=>handleValue()} ><RoundShape icon={<AiOutlineMessage style={{ height: '23px', width: '23px' }} ></AiOutlineMessage>}  ></RoundShape></div>
              <div onClick={()=>handleValue()} ><RoundShape icon={<MdNotifications style={{ height: '23px', width: '23px' }} ></MdNotifications>}  ></RoundShape></div>
              <div onClick={()=>handleValue()} ><RoundShape icon={<BiMenuAltLeft style={{ height: '23px', width: '23px' }} ></BiMenuAltLeft>}  ></RoundShape></div>
           
           
            </div>

          </div>



        </div>
        {/* Speacer */}

        <div style={{ height: '0.5vh', }}></div>
        {/* Switch */}

        <Switch>

          <Route path='/' exact component={Home} ></Route>
          <Route path='/watch' component={Watch}></Route>
          <Route path='/marketplace' component={MarketPlace}></Route>
          <Route path='/gaming' component={Gaming}></Route>

        </Switch>
      
      </Router>
      
      {/* Pop Up */}
      
      {value==true?<PopUp></PopUp>:<div></div>}

    </div>
  );
}

export default App;
