import React from 'react'

const Footer = (props) => {
    const {footer} = props;
    let currentYear = new Date().getFullYear();
    return (
        <div id={footer? "footer": "footer-abs"}> <p>©️ Chris Lopez {currentYear}</p></div>
    )
}

export default Footer