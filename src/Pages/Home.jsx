import React from 'react'
import LeftElements from '../Home/LeftElements'
import Story from '../Home/Story'
import '../App.css';


function Home() {
    return (
        <div style={{ display: 'flex', backgroundColor: '#F0F2F5' }}>

            {/* Start */}

            <div style={{ width: '25vw', height: '91vh' }}>
                <LeftElements></LeftElements>
            </div>

            {/* Center */}
             
            <div style={{width: '50vw', height: '91vh',alignItems:'center',display:'block',overflow:'auto',flexDirection:'column'}}>
         
                 <br></br>
                <Story></Story>
               
                <br></br>
                <br></br>
                <div style={{margin:'auto', width: '40vw', height: '20vh', backgroundColor: 'white', borderRadius: '10px', boxShadow: ' 1px 1px 10px #808080', }}></div>
                <br></br>
                <div style={{margin:'auto', width: '40vw', height: '10vh',backgroundColor: 'white', borderRadius: '10px', boxShadow: ' 1px 1px 10px #808080', }}></div>
                <br></br>
                <div style={{margin:'auto', width: '40vw', height: '80vh', backgroundColor: 'white', borderRadius: '10px', boxShadow: ' 1px 1px 10px #808080', }}></div>
                <br></br>

               
            </div>

            {/* End */}

            <div style={{ width: '25vw', height: '91vh' }}></div>

        </div>
    )
}

export default Home
