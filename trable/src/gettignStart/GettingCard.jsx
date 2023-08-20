export default function GettingCard({ item, faqClass, setfaqClass }) {
    return (
        <div className="gettingBox" key={item.id}>
            <div className="startedBox">
                <p className="title">{item.name}</p>
                <button className="buttonPara title" onClick={() => faqClass !== item.id ? setfaqClass(item.id) : setfaqClass(null)}>
                    {faqClass !== item.id ? item.incerement : item.decrement}
                </button>
            </div>
            <div className={faqClass == item.id ? "faqText" : "faqText none"}>
                <p className="faqClass1">
                    {item.text}
                </p>
            </div>
        </div>
    )
}