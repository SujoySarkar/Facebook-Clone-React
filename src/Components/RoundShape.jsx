import React from 'react'


function RoundShape(props) {
     
    return (
        <div style={{ borderRadius: '50%', height: '40px', display: 'flex', width: '40px', backgroundColor: '#D8DADF', justifyContent: 'center', alignItems: 'center' }}>
            {props.icon}
            
        </div>
    )
}

export default RoundShape
