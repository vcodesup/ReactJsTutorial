import { useState } from "react";
import { LOGO_URL  } from "../utils/constants";
const Header = () => {
    const [btnStatus,setBtnStatus] = useState("Login") 
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        btnStatus === "Login" ? setBtnStatus("Logout") : setBtnStatus("Login")
                     }} className="login-btn">
                        {btnStatus}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;