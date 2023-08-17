import "./Footer.css"
// img
import send from "../img/send.png"
import logo from "../img/logo.png"
import facebook from "../img/facebok.png"
import twitter from "../img/twitter.png"
import instagram from "../img/instagram.png"
import youtube from "../img/youtub.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerNeedNum">
                <p className="footerNeed">Need help renting online ? </p>
                <p className="footerNum">(855) 962-3621</p>
            </div>
            <div className="footerLink">
                <ul className="footerList">
                    <li className="listItem"><a className="itemLink" href="#">Car Listing</a></li>
                    <li className="listItem"><a className="itemLink" href="#">Home</a></li>
                </ul>
                <ul className="footerList">
                    <li className="listItem"><a className="itemLink" href="#">About</a></li>
                    <li className="listItem"><a className="itemLink" href="#">Contact us</a></li>
                    <li className="listItem"><a className="itemLink" href="#">My account</a></li>
                </ul>
                <ul className="footerList">
                    <li className="listItem"><a className="itemLink" href="#">Cart</a></li>
                    <li className="listItem"><a className="itemLink" href="#">Checkout</a></li>
                    <li className="listItem"><a className="itemLink" href="#">Shop</a></li>
                </ul>
                <div className="sendLink">
                    <p className="linkPara">Sign up for get our newsletter</p>
                    <div className="sendItem">
                        <input type="text" placeholder="Your Email..." />
                        <button>
                            <img src={send} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="footerEnd">
                <div className="endItem">
                    <img className="endImg" src={logo} alt="" />
                    <p className="endPara">© 2022 Turbo, Inc. All Right Reserved.</p>
                </div>
                <div className="endItem1">
                    <img src={facebook} alt="" className="itemImg" />
                    <img src={twitter} alt="" className="itemImg" />
                    <img src={instagram} alt="" className="itemImg" />
                    <img src={youtube} alt="" className="itemImg" />
                </div>
            </div>
        </div>
    )
}