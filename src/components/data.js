import python from "../assets/images/carousel-folder/python.png"
import html from "../assets/images/carousel-folder/html.png"
import css from "../assets/images/carousel-folder/css.png"
import js from "../assets/images/carousel-folder/js.png"
import node from "../assets/images/carousel-folder/node.png"
import react from "../assets/images/carousel-folder/react.png"
import bootstrap from "../assets/images/carousel-folder/bootstrap.png"
import jquery from "../assets/images/carousel-folder/jquery.png"
import MySql from "../assets/images/carousel-folder/MySQL.png"
import sql from "../assets/images/carousel-folder/sql.png"
import mongo from "../assets/images/carousel-folder/mongodb.png"
import superSocial from "../assets/images/proj-icons/superSocial.png"
import researcher from "../assets/images/proj-icons/researcherVillage.png"
import audition from "../assets/images/carousel-folder/audition.png"
import canva from "../assets/images/carousel-folder/canva.png"
import h5p from "../assets/images/carousel-folder/H5P.jpeg"
import hypothesis from "../assets/images/carousel-folder/hypothesis.png"
import moovly from "../assets/images/carousel-folder/moovly.jpg"
import prempro from "../assets/images/carousel-folder/prempro.png"
import tableau from "../assets/images/carousel-folder/tableau.png"
import wordpress from "../assets/images/carousel-folder/wordpress-icon.png"
import zotero from "../assets/images/carousel-folder/zotero-icon.png"
import aiLec from "../assets/images/proj-icons/aiLec.png"
import infoLit from "../assets/images/proj-icons/infoLit.png"
import positionality from "../assets/images/proj-icons/positionality.png"
import articles from "../assets/images/proj-icons/articles.png"
import findingimages from "../assets/images/proj-icons/findingimages.png"
import annotatedbibs from "../assets/images/proj-icons/annotatedbibs.png"
import dataliteracy from "../assets/images/proj-icons/dataliteracy.png"

// objects for coding carousel
export const langIcons = [
    { title: "python", src: python },
    { title: "html", src: html },
    { title: "css", src: css },
    { title: "js", src: js },
    { title: "node", src: node },
    { title: "react", src: react },
    { title: "bootstrap", src: bootstrap },
    { title: "jquery", src: jquery },
    { title: "MySql", src: MySql },
    { title: "sql", src: sql },
    { title: "mongo", src: mongo }]
// 
export const codeProjs = [
    {
        projIcon: superSocial,
        title: "Super Social Reader",
        gitHubUrl: "https://github.com/Lopez-CL/super_social_reader",
        techSpec: "Python, Flask, SQL, HTML, CSS, jQuery, AJAX",
        description: "A social reader tracker for superhero comic book readers to connect, discuss, and keep track of the comics they read.",
    },
    {
        projIcon: researcher,
        title: "Researcher Village",
        url: "https://github.com/Coding-Dojo-Project-Team/Researcher-Village",
        techSpec: "Python, Flask, SQL, HTML, CSS, jQuery",
        description: "Registered students can create, update, and delete research project to-do lists that help them create tasks, keep track of project status, and categorize research projects by subject."
    }]
// objects for inst-design interface
export const edtechIcons = [
    { title: "audition", src: audition },
    { title: "canva", src: canva },
    { title: "h5p", src: h5p },
    { title: "hypothesis", src: hypothesis },
    { title: "moovly", src: moovly },
    { title: "prempro", src: prempro },
    { title: "tableau", src: tableau },
    { title: "zotero", src: zotero },
    { title: "wordpress", src: wordpress },
]
//objects for instructional design modules and lesson plans
export const modules = [
    {
        reSrc: aiLec,
        title: "AI Literacy Intro",
        mode: "Slides",
        url: "https://www.canva.com/design/DAFb466sOPo/qQ3esq1sXlpwWTq6v5R-mQ/view?utm_content=DAFb466sOPo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
        description: "Registered students can create, update, and delete research project to-do lists that help them create tasks, keep track of project status, and categorize research projects by subject."
    },
    {
        reSrc: infoLit,
        title: "Information Literacy 101",
        mode: "Slides",
        url: "https://www.canva.com/design/DAFMgu4dzBE/b2fQZVSQKaCfNT-l3xbcqQ/view?utm_content=DAFMgu4dzBE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
        description: "Registered students can create, update, and delete research project to-do lists that help them create tasks, keep track of project status, and categorize research projects by subject."
    },
    {
        reSrc: positionality,
        title: "Positionality and Resources",
        mode: "H5P Module",
        url: "https://uclalibrary.github.io/research-tips/positionality/",
        description: "This resource introduces learners to the concept of positionality, explains how their positionality shapes their research process, and helps them identify ways to remain aware of their positionality."
    },
    {
        reSrc: articles,
        title: "Breaking Down Academic Articles",
        mode: "H5P Module",
        url: "https://uclalibrary.github.io/research-tips/breaking-down-academic-articles/",
        description: "A webcomic tutorial that walks through the most important aspects of an academic article, to help you prepare for class discussion on the article(s) or take away essential information from the article to support future research."
    },
    {
        reSrc: findingimages,
        title: "Finding Images @ UCLA Library",
        mode: "H5P Module",
        url: "https://uclalibrary.github.io/research-tips/finding-images/",
        description: "An interactive webcomic is your introduction to finding digital images at the UCLA Library and beyond! It covers how to find image databases and online exhibits, as well as how to approach searching for and citing online images."
    },
    {
        reSrc: annotatedbibs,
        title: "Annotated Bibliographies",
        mode: "H5P Module",
        url: "https://uclalibrary.github.io/research-tips/annotated-bibliographies/",
        description: "Webcomic that wlaks students through the reasons why their instructor would assign an AB and explains several types of annotated bibliographies that a student might be asked to create."
    },
    {
        reSrc: dataliteracy,
        title: "Intro to Data Literacy",
        mode: "H5P Module",
        url: "https://uclalibrary.github.io/research-tips/dataliteracy/",
        description: "Introduces learners to a variety of ways different academic disciplines conduct data research; it also helps data research beginners appreciate the contextual factors that shape the definition of data."
    },
]