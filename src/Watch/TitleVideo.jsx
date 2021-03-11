import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import ReactPlayer from 'react-player'

function TitleVideo() {
    return (
        <div style={{margin:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between',borderRadius:'10px', width: '55vw', height: '80vh',backgroundColor:'white' }}>
            {/* List Tile  */}
            <div style={{display:'flex',paddingTop:'10px',paddingLeft:'10px',paddingRight:'10px',alignItems:'center',justifyContent:'space-between'}}>
               
                <div style={{display:'flex',alignItems:'center',}}>
                <div style={{ height:'50px',width:'50px',borderRadius:'50%',backgroundColor:'green',border:'1px solid grey'}}></div>
                <div style={{width:'10px'}}></div>
                <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column', height:'40px',}}>
                    <p style={{margin:'0',fontWeight:'bold',fontSize:'18px',textAlign:'left'}}>Afran Sarkar</p>
                    <p style={{margin:'0',fontSize:'12px',textAlign:'left'}}>March 2, 2021</p>
                </div>
                
                </div>
                <BsThreeDots></BsThreeDots>
            </div>
            <br></br>
            <ReactPlayer  width='55vw' height='64vh' controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
        </div>
    )
}

export default TitleVideo
