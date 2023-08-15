import img1 from "../img/logo.png"
import img2 from "../img/login.png"
import img3 from "../img/shop.png"
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <nav className="navbar">
                <ul className="list">
                    <img className="imgLogo" src={img1} alt="" />
                    <li className="listItem"><a className="itemLink" href="#">Home</a></li>
                    <li className="listItem"><a className="itemLink" href="#">Car Listing</a></li>
                    <li className="listItem"><a className="itemLink" href="#">About</a></li>
                    <li className="listItem"><a className="itemLink" href="#">News</a></li>
                    <li className="listItem"><a className="itemLink" href="#">Contact us</a></li>
                </ul>
                <ul className="list">
                    <img src={img2} alt="" />
                    <li className="listItem"><a className="itemLink" href="#">Login / Register</a></li>
                    <div className="shop">
                        <img className="imgShop" src={img3} alt="" />
                        <p>0</p>
                    </div>
                </ul>
            </nav>
            <div className="makeRide">
                <div className="makeBox">
                    <p>Make Your Ride</p>
                    <p>Rent a car to move from local hosts in 190+ countries.</p>
                    <p>WHERE YOU FROM</p>
                    <select>
                        <option value="" hidden>Select Location</option>
                        <option value="">Jeep</option>
                        <option value="">Audi</option>
                        <option value="">Mercdec-benz</option>
                    </select>
                </div>
            </div>
        </div>
    )
}