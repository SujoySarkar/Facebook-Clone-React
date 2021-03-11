import { FaHome } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaAccessibleIcon } from "react-icons/fa";
import { React, useState } from 'react'
import { Link } from 'react-router-dom';



function TabBar() {

    var [value, setValue] = useState(1);
    console.log(value);
    return (

        <div style={{ width: "40vw", height: '8.5vh', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>

            <Link to="/">

                <FaHome onClick={() => {
                    setValue(1);

                }} style={{ height: '30px', width: '30px', color: value == 1 ? '#15A4FA' : '#606266' }}>

                </FaHome>

            </Link>
            <Link to="/watch">
                <FaYoutube onClick={() => {
                    setValue(2);

                }} style={{ height: '30px', width: '30px', color: value == 2 ? '#15A4FA' : '#606266' }}>
                </FaYoutube>
            </Link>
            <Link to="/marketplace">
                <FaShoppingBasket onClick={() => {
                    setValue(3);
                }} style={{ height: '30px', width: '30px', color: value == 3 ? '#15A4FA' : '#606266' }}></FaShoppingBasket>


            </Link>
            <Link to="/gaming">
                <FaAccessibleIcon onClick={() => {
                    setValue(4);
                }} style={{ height: '30px', width: '30px', color: value == 4 ? '#15A4FA' : '#606266' }}></FaAccessibleIcon>


            </Link>

        </div>

    )
}

export default TabBar
