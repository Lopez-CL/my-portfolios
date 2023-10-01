import React from 'react'
import profile from '../assets/images/profile.png'
import coding from "../assets/images/portfolio-icons/code.png"
import design from "../assets/images/portfolio-icons/design.png"
import resume from "../assets/images/portfolio-icons/resume.png"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import email from "../assets/images/email.png"
import github from "../assets/images/github.png"
import linkedIn from "../assets/images/linkedIn.png"
const Home = (props) =>{
    const {footer, setFooterDown} = props;
    // Using the following state/function to help hard code a reset of position stylings. Issue with how background image fills out window on window resizing
    const checkFooter = (status, path) =>{
        !status&& setFooterDown(true);
        navigate(path)
    }
    const navigate = useNavigate()
    // following three variables facilitate animations for Link elements 
    const [indexHovered, setIndexHovered] = useState(null);
    const handleMouseEnter = (idx) =>{
        setIndexHovered(idx)
    }
    const handleMouseLeave = () =>{
        setIndexHovered(null)
    }
    const categories = [
        {src: coding, alt: "coding symbol", heading: "Coding", title: "Coding Portfolio", path: "coding"},
        {src: design, alt: "design symbol", heading: "Inst. Design", title: "Instructional Design Portfolio", path: "inst-design"},
        {src: resume, alt: "resume symbol", heading: "Resume", title: "Resume", path: "resume"}
    ]
    const contact = [
        { src: email, alt: "email icon", title: 'Reach out via email', href: 'mailto:darkwing24@duck.com' },
        { src: github, alt: "github icon", title: 'Reach out via GitHub', href: 'https://github.com/Lopez-CL' },
        { src: linkedIn, alt: "LinkedIn icon", title: 'Reach out via LinkedIn', href: 'https://www.linkedin.com/in/christopher-lee-lopez' },
    ]
    return (
        <div id='home-body'>
            <div id='home-container'>
                <div className='flex-item' id='profile-img'>
                    <figure>
                        <img tabindex="0" src={profile} alt="chris profile"/>
                    </figure>
                    
                </div>
                <div tabindex="0" id='about'>
                    <h2 tabindex="0" >About Me</h2>
                    <p>I'm a collaborative programmer and educator with foundational skills in full-stack web development (Python/Flask & MERN) and instructional design. Intellectually speaking, my focus lies at the intersection of social ethics, critical pedagogy, and emerging technologies (right now I'm doing a deep dive into AI ethics!) I'm always expanding my programming skills-set and seeking out new project ideas. The portfolios below capture what I have, am, and will work on. Always down to chat!</p><br></br>
                    <div className='contact-me'>
                        {
                            contact.map((item, idx) => (
                                <div>
                                    {/* Will eventually separate email icon and make a form component */}
                                    <a tabindex="0" href={item.href} target='_blank' rel="noreferrer"><img aria-description={`When icon clicked, user initiates the action: ${item.title}`} className='contact-icon' src={item.src} alt={item.alt} title={item.title} ></img></a>
                                </div>
                            ))
                        }
                    </div>
                    <p tabindex="0" >Toggle through my portfolios by using the buttons below</p><br></br>
                    <p><em>¡Pa'Lante!</em></p>
                </div>
            </div>
            <div id='project-categories'>
                {categories.map((category, idx) =>(
                    <button id='project-wrapper' tabindex="0" role='button' aria-roledescription={`navigate to ${category.title} by clicking button`} className='portfolios active-hover' 
                    onMouseEnter={e => handleMouseEnter(idx)} 
                    onMouseLeave={e => handleMouseLeave(idx)} 
                    onClick={ e => checkFooter(footer,`/${category.path}`)} >
                        <div className="category" title={category.title}>
                            
                            <img className={`cat-pic ${idx === indexHovered? "shake":''}`}   src={category.src} alt={category.alt} onClick={e=>navigate(`/${category.path}`)} />
                            <p to={`/${category.path}`} className={`${idx === indexHovered? "active-heading link":'link'}`}>{category.heading.toUpperCase()}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Home;