import React from 'react'

function CreateStory(props) {
    return (
        <div style={{height:'30vh',width:'9vw',boxShadow: '-4px 6px 5px #808080', backgroundColor:'blueviolet',borderRadius:'20px',position:'relative',boxSizing:'border-box',marginLeft:'6px'}}>
        <h5 style={{color:'white',position:'absolute',bottom:'5px',left:'20px',right:'20px'}}>{props.title}</h5>
        </div>
    )
}

export default CreateStory
