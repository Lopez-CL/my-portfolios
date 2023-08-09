import { useRef } from "react";
import { useParams } from "react-router-dom";
const LanguageCarousel = (props) => {
    const anchor = useRef(null)
    const handleClick = event => {
        const target = anchor.current
        if (target) {
            target.focus();
        }
    }
    const { str } = useParams();
    //for deployed GH pages web app, the default route automatically triggers this component to show. Conditional logic with useParams determine if a defined path is posted.
    let heading = ""
    const { skills } = props;
    if (str === "coding") {
        heading = "Languages & Frameworks"
    }
    else if (str === "inst-design") {
        heading = "Communication & Education Technologies"
    }
    else {
        heading = null
    }
    return (
        <>
            {heading ? <h3 tabIndex='0' className="port-heading">{heading}</h3> : ''}
            <a id="skip-link" href="#projects" onClick={handleClick}>Skip Carousel</a>
            <div className="carousel-container" aria-description="Running carousel of icons that represent programming languages and frameworks that I have practical knowledge in.">
                <div className="carousel-wrapper">
                    {skills.map((item, idx) => (
                        <img key={idx} role="img" className="lang-icon" title={item.title} alt={`${item.title} icon`} src={item.src} />

                    ))}
                </div>
            </div>
        </>
    );
};

export default LanguageCarousel;