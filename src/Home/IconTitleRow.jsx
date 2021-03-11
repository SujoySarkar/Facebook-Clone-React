import React from 'react'

function IconTitleRow(props) {
    return (
        <div style={{ 
            display: 'flex',
         height: '7vh',
         
          width: '20vw',
         margin:'5px',
         boxSizing:'border-box',
         alignItems:'center',
         
          }}>
           {props.icon}
           <div style={{width:'10px'}}></div>
           <h5>{props.title}</h5>


        </div>
    )
}

export default IconTitleRow
