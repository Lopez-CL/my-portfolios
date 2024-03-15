import React from "react";

const Resume = () => {
    return (
        <div id="resume-container">
            <h3 tabIndex='0' className="resume-heading" >PROFESSIONAL EXPERIENCE</h3>
            <div>
                <h4 className="position">Front-End Developer & UX Designer | University of California San Diego | SD, CA (2024-Present)</h4>
                <ul className="responsibilities" >
                    <li>Mentors student UX designers in a team-based approach to frontend development and design</li>
                    <li>Utilizes JavaScript frameworks, such as Angular, to build and enhance single-page applications</li>
                    <li>Translating complex Figma wireframes into functional, documented code</li>
                    <li>Utilizes JavaScript frameworks, such as Angular, to build and enhance single-page applications</li>
                    <li>Co-creating learning resources with the UX lead for site content editors, resolving A and AA accessibility issues across the Library's web properties</li>
                    <li>Bridges the worlds of design and development by crafting creative, innovative solutions that elevate the Library's digital presence</li>
                    <li>Co-creates learning resources with the UX lead for site content editors, resolving A and AA accessibility issues across the Library's web properties</li>
                    <li>Creates hybrid process documentation that incorporates development concepts into the design process at an early stage</li>
                </ul>
            </div>
            <div>
                <h4 className="position">Digital Literacy & Outreach Librarian | Borough of Manhattan Community College | NY, NY (2022-2024)</h4>
                <ul className="responsibilities" >
                    <li>Originated and Supervises a Library student-centered work study cohort of five students, which provides professional development opportunities and peer-lead services for students.</li>
                    <li>Provides consultation and instruction on sociology of technology, the use of communication technologies in the classroom, and information seeking in digital contexts..</li>
                    <li>Orchestrates discipline specific information and digital & A.I. literacy sessions for students, specifically in prompt engineering.</li>
                    <li>Lead designer and strategist for Library Instagram, <a id="IG-Link" href="https://www.instagram.com/bmcclibrary/" target="_blank">@bmcclibrary</a>.</li>
                </ul>
            </div>
            <div>
                <h4 className="position">Instructional Design & Technology Consultant | UCLA | Westwood, CA (2020-2022)</h4>
                <ul className="responsibilities" >
                    <li>Designed open online instructional resources and tutorials addressing information literacy gaps within undergraduate and graduate populations.</li>
                    <li>Serves on the Library's anti-racism initiative steering team, providing guidance, research assistance, and project management in areas such as racial climate in the workplace, recruitment & retention, and safe spaces for BIPoC staff.</li>
                    <li>Managed web content on the UCLA.library.edu ensuring that content reflects UCLA brand design standards and meets web accessibility standards.</li>
                    <li>Created social media graphics for posts related to tools and resources in humanities and social sciences on UCLA Library's account.</li>
                </ul>
            </div>
            <div>
                <h4 className="position">Catalog & Circulation Assistant | David Allan Hubbard Library | Pasadena, CA (2017-2020)</h4>
                <ul className="responsibilities" >
                    <li>Assisted Cataloging Librarian in creating copy and original records of Spanish Theological books for local catalog.</li>
                    <li>Managed and redistributed the metadata of +10,000 regional campus and main campus records in the local catalog.</li>
                    <li>Assisted library patrons in finding pertinent resources for information needs through resources in Library databases and Worldcat.</li>
                    <li>Familiarized library patrons with e-resources, computer lab software, and arrangement of print resources.</li>
                </ul>
            </div>
            <h3 className="resume-heading" tabIndex='0' >EDUCATION</h3>
            <div className="school">
                <p>Coding Dojo | Full-Stack Developer Certificate | Remote (2022-2023)</p>
            </div>
            <div className="school">
                <p>San Jose State University | Masters of Library & Information Science | San Jose, CA (2019-2021)</p>
            </div>
            <div className="school">
                <p>Fuller Theological Seminary | Masters of Divinity | Pasadena, CA (2018-2021)</p>
            </div>
            <div className="school">
                <p>Palm Beach Atlantic University | Bachelors of Arts in Religious Studies | West Palm Beach, FL (2010-2014)</p>
            </div>
        </div>
    )
}
export default Resume;