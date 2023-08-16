import "./Other_Car.css"
// image
import camaro from "../img/camaro.png"
import gla__45 from "../img/gla__45.png"
import a4Img from "../img/a4Img.png"
import star from "../img/star.png"
import jeep_wrangler from "../img/jeep__wrangler.png"
import hyundai from "../img/hyundai.png"
import porsche from "../img/porsche_718.png"
import btn__vector from "../img/btn__vector.png"


export default function Other_Car() {
    return (
        <div className="otherCar">
            <p className="otherCarTitle">Others available cars</p>
            <div className="otherCarSearch">
                <p>Search</p>
                <input type="search" placeholder="ENTER TO SEARCH" />
                <p>Car Model</p>
                <select className="optionP" name="" id="">
                    <option className="optionP" value="" hidden>Car Model</option>
                    <option value="">Chevrolet</option>
                    <option value="">Mercedes</option>
                    <option value="">Audi</option>
                </select>
                <p>Rating</p>
                <select className="optionP" name="" id="">
                    <option className="optionP" value="" hidden>Choose Rating</option>
                    <option value="">Dodge</option>
                    <option value="">Hyundai</option>
                    <option value="">Porsche</option>
                </select>
            </div>
            <div className="otherCarBox">
                <div className="otherCarBoxs">
                    <div className="carBoxs">
                        <img className="boxImg" src={camaro} alt="" />
                        <p className="carName">Chevrolet Camaro 2016</p>
                        <p className="carNum">Six</p>
                        <div className="starPara">
                            <p>$8.00 /<sub>Day</sub></p>
                            <div className="star">
                                <img src={star} alt="" />
                                <p className="starNum">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="carBoxs">
                        <img className="boxImg" src={gla__45} alt="" />
                        <p className="carName">Mercedes-AMG GLA 45 4MATIC</p>
                        <p className="carNum">Four</p>
                        <div className="starPara">
                            <p>$100.00 /<sub>Day</sub></p>
                            <div className="star">
                                <img src={star} alt="" />
                                <p className="starNum">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="carBoxs">
                        <img className="boxImg" src={a4Img} alt="" />
                        <p className="carName">Audi 2019 A4 allroad</p>
                        <p className="carNum">Four</p>
                        <div className="starPara">
                            <p>$100.00 /<sub>Day</sub></p>
                            <div className="star">
                                <img src={star} alt="" />
                                <p className="starNum">0</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Other available to car boxs 2 piece */}
                <div className="otherCarBoxs">
                    <div className="carBoxs">
                        <img className="boxImg" src={jeep_wrangler} alt="" />
                        <p className="carName">JEEP 2018 WRANGLER</p>
                        <p className="carNum">Five</p>
                        <div className="starPara">
                            <p>$10.00 /<sub>Day</sub></p>
                            <div className="star">
                                <img src={star} alt="" />
                                <p className="starNum">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="carBoxs">
                        <img className="boxImg" src={hyundai} alt="" />
                        <p className="carName">Hyundai Accent Limited Edition</p>
                        <p className="carNum">Four</p>
                        <div className="starPara">
                            <p>$90.00 /<sub>Day</sub></p>
                            <div className="star">
                                <img src={star} alt="" />
                                <p className="starNum">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="carBoxs">
                        <img className="boxImg" src={porsche} alt="" />
                        <p className="carName">Porsche 718 Cayman</p>
                        <p className="carNum">Five</p>
                        <div className="starPara">
                            <p>$8.00 /<sub>Day</sub></p>
                            <div className="star">
                                <img src={star} alt="" />
                                <p className="starNum">0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="otherCarButton">
                <p>See All</p>
                <img src={btn__vector} alt="" />
            </button>
        </div>
    )
}