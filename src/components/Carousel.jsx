import { useRef, useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const Carousel = (props) => {
    const anchor = useRef(null)
    const [idx, setIdx] = useState(0)
    const [animate, setAnimate] = useState(true)
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
    useEffect(() =>{
        setAnimate(true);
        const timer = setTimeout(() =>{
        setAnimate(false);
        }, 1000);
        return () => clearTimeout(timer)
    }, [idx])
    const shiftCarouselRight = e => {
        console.log(idx)
        idx < 2 && setIdx(idx + 1)
    }
    const shiftCarouselLeft = e => {
        console.log(idx)
        idx > 0 && setIdx(idx - 1)
    }
    return (
        <>
            {heading ? <h3 tabIndex='0' className="port-heading">{heading}</h3> : ''}
            <a id="skip-link" href="#projects" onClick={handleClick}>Skip Carousel</a>
            <div  className="carousel-container">
                <div className="carousel-wrapper" aria-description="Carousel of icons that represent programming languages and frameworks that I have practical knowledge in.">
                    {skills[idx] && skills[idx].map((item, index) => (
                        <img tabIndex='0' key={index} className={`lang-icon ${animate?'active-icon':''}`} title={item.title} alt={`${item.title} icon`} src={item.src} />
                    ))}
                </div>
                <div className="carousel-handler">
                    <button tabIndex='0' role="button" aria-roledescription="Shifts carousel of images to the left" style={idx===0?{opacity:.5}:{opacity:1, cursor:'pointer'}}  className="shift-key move-left" onClick={shiftCarouselLeft}></button>
                    <button tabIndex='0' role="button" aria-roledescription="Shifts carousel of images to the right" style={idx===2?{opacity:.5}:{opacity:1, cursor:'pointer'}}  className="shift-key move-right" onk onClick={shiftCarouselRight}></button>
                </div>
            </div>

        </>
    );
};

export default Carousel;