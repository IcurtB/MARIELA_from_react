import React from "react";
import MarielaLogo from '../img/mariela_logo.svg';
import ShopIcon from '../img/shop_icon.svg'
const Header = () => {
    return (
        <header className="flex">
            <div>
                <img src={MarielaLogo} alt="" />
            </div>
            <div className="flex">
                <p>Home</p>
                <p>About me</p>
                <p>Products</p>
                <p>Contact me</p>
                <div>
                    <img src={ShopIcon} alt="" />
                </div>
            </div>
        </header>
    )
}
export default Header