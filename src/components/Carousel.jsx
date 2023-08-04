const LanguageCarousel = (props) => {
    const {skills} = props;
    return (
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    {skills.map((item, idx) => (
                        <div key={idx}>
                            <img className="lang-icon" title={item.title} alt={`${item.title} icon`} src={item.src}/>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default LanguageCarousel;