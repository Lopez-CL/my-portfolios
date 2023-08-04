import {React, useState} from "react";
import { useParams } from "react-router-dom";

const Projects = (props) =>{
    const {str} = useParams();
    const {projects} = props
    const [currentProjIdx, setCurrentProjIdx] = useState(null)
    const onMouseEnterHandle = idx =>{
        setCurrentProjIdx(idx);
    }
    const onMouseLeaveHandle = () =>{
        setCurrentProjIdx(null);
    }
    let heading = ""
    if(str === "coding"){
        heading = "Projects"
    }
    else if (str === "inst-design") {
        heading = "Learning Modules"
    }
    else{
        heading = null
    }
    return (
        <div>
            <h3 className="port-heading">{heading}</h3>
            <div className="portfolio-projects">
                {str === "coding"&&
                    projects.map((item,idx) =>(
                        <div className={idx===currentProjIdx? "portfolio-project-active":"portfolio-project"} onMouseEnter={e => onMouseEnterHandle(idx)} onMouseLeave={e => onMouseLeaveHandle(idx)} >
                            <div className= "image-container">
                                <img className={idx===currentProjIdx? "active-img":""} src={item.projIcon} alt={`icon for ${item.title}`}/>
                                <h3>{item.title}</h3>
                            </div>
                            <div className="description-container">
                                <p className="proj-card-text"><strong>Specs:</strong> {item.techSpec}</p>
                                <p className="proj-card-text"><strong>Description:</strong> {item.description}</p>
                                <p className="proj-card-text"><a href={item.url} target="_blank" rel="noreferrer">CHECK OUT THE REPO</a></p>
                            </div>
                        </div>
                    ))}
                {str === "inst-design"&&
                projects.map((item,idx) =>(
                    <div className={idx===currentProjIdx? "portfolio-project-active":"portfolio-project"} onMouseEnter={e => onMouseEnterHandle(idx)} onMouseLeave={e => onMouseLeaveHandle(idx)} >
                        <div className= "image-container">
                            <img className={idx===currentProjIdx? "active-img":""} src={item.reSrc} alt={`icon for ${item.title}`}/>
                            <h3>{item.title}</h3>
                        </div>
                        <div className="description-container">
                            <p className="proj-card-text"><strong>Resource Type:</strong> {item.mode}</p>
                            <p className="proj-card-text"><strong>Description:</strong> {item.description}</p>
                            <p className="proj-card-text"><a href={item.url} target="_blank" rel="noreferrer">EXPLORE RESOURCE</a></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects