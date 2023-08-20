import { useState } from "react"
import "./Getting.css"
import GettingCard from "./GettingCard"

export default function Getting() {


    const [getFaqs, setGetFaqs] = useState([
        {
            id: 1,
            name: "How to contact riders with emergency?",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
            incerement: "+",
            decrement: "-"
        },
        {
            id: 2,
            name: "App installation failed, how to update system information?",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
            incerement: "+",
            decrement: "-"
        },
        {
            id: 3,
            name: "Website response taking time, how to improve??",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
            incerement: "+",
            decrement: "-"
        },
        {
            id: 4,
            name: "New updates fixed all bugs and issues",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
            incerement: "+",
            decrement: "-"
        },
    ])


    const [faqClass, setfaqClass] = useState(null)

    return (
        <div className="gettingStart">
            <p className="gattingTitle">Getting Started</p>
            <div className="faqs">
                {
                    getFaqs.map(item => (
                        <GettingCard item={item} faqClass={faqClass} setfaqClass={setfaqClass}/>
                    ))
                }

            </div>
        </div>
    )
}