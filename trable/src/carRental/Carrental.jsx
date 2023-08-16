import "./CarRental.css"

import locImg from "../img/locImg.png"
import dateImg from "../img/dateImg.png"
import makeImg from "../img/makeImg.png"
import a4Img from "../img/a4Img.png"
import sqImg from "../img/sqImg.png"
import m6Img from "../img/m6Img.png"


export default function Carrental() {
    return (
        <div className="carRental">
            <div className="carRentalBox">
                <div className="carRentalTitle">
                    <p className="titlePara1">How Turbo Car Rental Works</p>
                    <p className="titlePara2">The proper business solution for your developing business strategies and corporation</p>
                </div>
                <div className="carRentalBoxs">
                    <div className="rentalBoxs">
                        <img src={locImg} alt="" />
                        <p className="boxName">Search Location</p>
                        <p className="boxPara">Proper Business solution for your developing </p>
                        <p className="boxPara"> business strategies and corporation</p>
                    </div>
                    <div className="rentalBoxs">
                        <img src={dateImg} alt="" />
                        <p className="boxName">Select Date & Time</p>
                        <p className="boxPara">Proper Business solution for your developing </p>
                        <p className="boxPara"> business strategies and corporation</p>
                    </div>
                    <div className="rentalBoxs">
                        <img src={makeImg} alt="" />
                        <p className="boxName">Make Ride</p>
                        <p className="boxPara">Proper Business solution for your developing </p>
                        <p className="boxPara"> business strategies and corporation</p>
                    </div>
                </div>
            </div>
            <div className="carBox">
                <div className="carImg">
                    <img src={a4Img} alt="" />
                </div>

                <div className="carSelectBox">
                        <ul className="paraList">
                            <li className="litsItem"><a className="itemLink" href="#">Popular Cars</a></li>
                            <li className="litsItem"><a className="itemLink color" href="#">Recent Cars</a></li>
                        </ul>


                    <div className="carSelect">
                        <div className="carSelectBoxs shaddow">
                            <img src={a4Img} alt="" />
                            <div>
                                <p className="carName">Audi 2019 A4 allroad</p>
                                <p className="buyDay">Four Seater Car</p>
                                <p className="buyDay daySum">$100.00/<sub>Day</sub></p>
                            </div>
                        </div>
                        <div className="carSelectBoxs">
                            <img src={sqImg} alt="" />
                            <div>
                                <p className="carName">Audi 2019 SQ</p>
                                <p className="buyDay">Four Seater Car</p>
                                <p className="buyDay daySum">$4.00/<sub>Day</sub></p>
                            </div>
                        </div>
                        <div className="carSelectBoxs">
                            <img src={m6Img} alt="" />
                            <div>
                                <p className="carName">BMW M6 Gran Coupé</p>
                                <p className="buyDay">Four Seater Car</p>
                                <p className="buyDay daySum">$10.00/<sub>Day</sub></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}