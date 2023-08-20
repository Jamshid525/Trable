import img1 from "../img/logo.png"
import img2 from "../img/login.png"
import img3 from "../img/shop.png"
import menu from "../img/menu.png"
import "./header.css"
import { useState } from "react"

export default function Header() {
    const [navClass, setNavClass] = useState('list1 hidden')
    const [image, setImage] = useState(<img src={menu} />)
    return (
        <div className="header photo">
            <nav className="navbar">
                <ul className="list">
                    <img className="imgLogo" src={img1} alt="" />
                    <li className="listItem"><a className="itemLink1" href="#">Home</a></li>
                    <li className="listItem"><a className="itemLink1" href="#">Car Listing</a></li>
                    <li className="listItem"><a className="itemLink1" href="#">About</a></li>
                    <li className="listItem"><a className="itemLink1" href="#">News</a></li>
                    <li className="listItem"><a className="itemLink1" href="#">Contact us</a></li>
                </ul>
                <ul className="list">
                    <img src={img2} alt="" />
                    <li className="listItem"><a className="itemLink1" href="#">Login / Register</a></li>
                    <div className="shop">
                        <img className="imgShop" src={img3} alt="" />
                        <p>0</p>
                    </div>
                    <button className="listButton resImg" onClick={() => navClass == 'list1 hidden' ? setNavClass('list1') : setNavClass('list1 hidden')}>
                        {navClass == 'list1 hidden' ? image : image}
                    </button>
                </ul>
            </nav>
            <nav className="hidNavbar" >
                <ul className={navClass}>
                    <li className="listIte"><a className="itemLin1" href="#">Home</a></li>
                    <li className="listIte"><a className="itemLin1" href="#">Car Listing</a></li>
                    <li className="listIte"><a className="itemLin1" href="#">About</a></li>
                    <li className="listIte"><a className="itemLin1" href="#">News</a></li>
                    <li className="listIte"><a className="itemLin1" href="#">Contact us</a></li>
                    <li className="listIte"><a className="itemLin1" href="#">Login / Register</a></li>
                </ul>
            </nav>
            <div className="makeRide">
                <p className="firstPara">Make Your Ride</p>
                <p className="para24px">Rent a car to move from local hosts in 190+ countries.</p>
                <p className="selectPara">WHERE YOU FROM</p>
                <select className="select">
                    <option className="hiddenSelect" value="" hidden>Select Location</option>
                    <option value="">Jeep</option>
                    <option value="">Audi</option>
                    <option value="">Mercdec-benz</option>
                </select>
                <p className="selectPara">WHERE YOU FROM</p>
                <select className="select">
                    <option className="hiddenSelect" value="" hidden>Select Location</option>
                    <option value="">Jeep</option>
                    <option value="">Audi</option>
                    <option value="">Mercdec-benz</option>
                </select>
                <p className="selectPara">CHOOSE DATES</p>
                <input className="input" type="input" name="" id="" />
                <button>
                    <p>Search</p>
                </button>
            </div>
        </div>
    )
}