import "./ClientSays.css"

import star from "../img/star.png"
import seline from "../img/girl_seline.png"
import cto from "../img/boy_cto.png"
import ceo from "../img/boy_ceo.png"
import phone from "../img/phone__location.png"
import appStore from "../img/app-store.png"
import googlePlay from "../img/google-play.png"

export default function ClientSays() {
    return (
        <div className="clientSays">
            <p className="clientSaysTitle">What Client Says</p>
            <div className="clientCommment">
                <div className="commentBoxs">
                    <p>Great theme and great support! We use it for party
                        <br />equipment rentals and it works fine.</p>
                    <div className="commentImg">
                        <img className="img" src={seline} alt="" />
                        <div className="personWork">
                            <p className="name">Product Designer</p>
                            <p className="name">Seline</p>
                            <div>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commentBoxs">
                    <p>Great theme and great support! We use it for party
                        <br />equipment rentals and it works fine.</p>
                    <div className="commentImg">
                        <img className="img" src={cto} alt="" />
                        <div className="personWork">
                            <p className="name">CTO</p>
                            <p className="name">Joy Baker</p>
                            <div>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commentBoxs">
                    <p>Great theme and great support! We use it for party
                        <br />equipment rentals and it works fine.</p>
                    <div className="commentImg">
                        <img className="img" src={ceo} alt="" />
                        <div className="personWork">
                            <p className="name">CEO</p>
                            <p className="name">John Doe</p>
                            <div>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clientUser">
                <img src={phone} alt="" />
                <div className="userBox">
                    <p className="userBoxPara">Turbo App Available in
                        <br /> Android & iOS</p>
                    <p className="userboxPara">The proper business solution for your developing business strategic and
                        <br /> corporation</p>
                    <div className="userInfo">
                        <input className="userNum" type="text" placeholder="8189 - 9876" />
                        <button className="button">
                            <p className="btnPara">Send Link</p>
                        </button>
                    </div>
                    <p className="findPara">Or Find in</p>
                    <div className="clientApp">
                        <img className="appImg" src={appStore} alt="" />
                        <img className="appImg" src={googlePlay} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}