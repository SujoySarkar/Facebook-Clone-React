import React from 'react'
import TitleVideo from '../Watch/TitleVideo'

function Watch() {


    return (
        <div style={{ display: 'flex', height: '91vh', width: '100vw',backgroundColor:'#F0F2F5'  }}>
            {/* Left Bar */}
            <div style={{ width: '25vw',backgroundColor:'white', boxShadow:'1px 3px 5px #808080',  height: '91vh' }}>
            
            </div>
            <br></br>
            {/* Right Bar */}
            <div style={{ width: '75vw', height: '91vh',overflow:'auto'}}>
               <br></br>
               <TitleVideo></TitleVideo>
               <br></br>
               <br></br>
               <TitleVideo></TitleVideo>

            </div>

        </div>
    )
}

export default Watch
