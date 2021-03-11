import React from 'react'
import IconTitleRow from './IconTitleRow'
import { GoPerson } from "react-icons/go";
import { RiVirusFill } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FaBuffer } from "react-icons/fa";
import { FaDiscourse } from "react-icons/fa";

function LeftElements() {
    return (
        <div style={{ width: '25vw', height: '91vh',alignItems:'center',display:'flex',flexDirection:'column' }} >
            <IconTitleRow icon={<GoPerson style={{height:'25px',width:'25px',color:'blueviolet'}}></GoPerson>} title='Afran Sarkar'></IconTitleRow>
            <IconTitleRow icon={<RiVirusFill style={{height:'25px',width:'25px',color:'blueviolet'}}></RiVirusFill>} title='Covid 19 Information'></IconTitleRow>
            <IconTitleRow icon={<RiPagesLine style={{height:'25px',width:'25px',color:'blueviolet'}}></RiPagesLine>} title='Pages'></IconTitleRow>
            <IconTitleRow icon={<FaUserFriends style={{height:'25px',width:'25px',color:'blueviolet'}}></FaUserFriends>} title='Friends'></IconTitleRow>
            <IconTitleRow icon={<HiUserGroup style={{height:'25px',width:'25px',color:'blueviolet'}}></HiUserGroup>} title='Groups'></IconTitleRow>
            
            <IconTitleRow icon={<FaBuffer style={{height:'25px',width:'25px',color:'blueviolet'}}></FaBuffer>} title='Market Place'></IconTitleRow>
            <IconTitleRow icon={<FaDiscourse style={{height:'25px',width:'25px',color:'blueviolet'}}></FaDiscourse>} title='Watch'></IconTitleRow>
            <hr style={{width:'22vw'}} ></hr>

        </div>
    )
}

export default LeftElements
