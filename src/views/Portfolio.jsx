import React from "react";
// Coding interface imports
import Carousel from "../components/Carousel";
import Projects from "../components/Projects";
import { edtechIcons, codeProjs, langIcons, modules } from "../components/data";
import { useParams } from "react-router-dom";
const Portfolio = () =>{
    let skills = [];
    let projs = [];
    // function that handles what route is taken and which category of skills and projects to display
    const {str} = useParams();
    if(str === 'coding'){
        skills = langIcons
        projs = codeProjs
    }
    else if((str === 'inst-design')){
        skills = edtechIcons
        projs = modules
    }
    return (
        <div>
            <h3 className="port-heading">{ str === 'coding'?`Languages & Frameworks`: `Communication & Education Technologies` }</h3>
                <Carousel skills = {skills} />
            <h3 className="port-heading">{ str === 'coding'?`Projects`: `Learning Modules` }</h3>
                <Projects projects = {projs}/>
        </div>
    )
}

export default Portfolio;