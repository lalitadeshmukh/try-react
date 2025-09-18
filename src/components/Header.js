import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router";

const Header = () => {
        const [buttonNameReact, setButtonNameReact] = useState("Login");

        // if no dependacy array () then => useEffect is called on every render  Ex: seEffect (() => {});
        // id dependacy array is empty ([]) then => useEffect is called on initial render just once Ex: seEffect (() => {}, []);
        // id dependacy array is is assigned ([buttonNameReact]) then => useEffect is called on when the depenency buttonNameReact is change in it could be mutliple values comma separated values: seEffect (() => {}, [buttonNameReact]);
        useEffect (() => {
            console.log("useEffect called");
        },[buttonNameReact]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Food logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link className="home" to="./">Home</Link></li>
                    <li><Link className="about" to="./about">AboutUs</Link></li>
                    <li><Link className="contact" to="./contact">ContactUs</Link></li>
                    <li>Cart</li>
                    <li>
                        <button 
                            className="login-btn" 
                            onClick={()=> {
                                buttonNameReact ==="Login" ? setButtonNameReact("Logout") : setButtonNameReact("Login");
                                }}>
                                {buttonNameReact}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
