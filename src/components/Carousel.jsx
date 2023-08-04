import { useParams } from "react-router-dom";
const LanguageCarousel = (props) => {
    const {str} = useParams();
    let heading = ""
    const { skills } = props;
    if(str === "coding"){
        heading = "Languages & Frameworks"
    }
    else if (str === "inst-design") {
        heading = "Communication & Education Technologies"
    }
    else{
        heading = null
    }
    return (
        <>
            <h3 className="port-heading">{heading}</h3>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    {skills.map((item, idx) => (
                        <div key={idx}>
                            <img className="lang-icon" title={item.title} alt={`${item.title} icon`} src={item.src} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default LanguageCarousel;