import React from "react";

const Resume = () => {
    return (
        <div id="resume-container">
            <h3 className="resume-heading" >PROFESSIONAL EXPERIENCE</h3>
            <div>
                <h4 className="position">Student Success Librarian | Borough of Manhattan Community College | NY, NY (2022-Present)</h4>
                <ul className="responsibilities" >
                    <li>Originated a Library student-centered work study cohort of four students, which provides professional development opportunities and peer-lead services for students.</li>
                    <li>Coordinates student workshops on emerging technologies for use in educational contexts.</li>
                    <li>Provides in-depth research assistance and consultation on educational technologies.</li>
                    <li>Lead designer and strategist for Library Instagram, @bmcclibrary.</li>
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
            <h3 className="resume-heading" >EDUCATION</h3>
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