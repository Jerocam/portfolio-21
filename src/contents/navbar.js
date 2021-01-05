import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class Navbar extends Component {
    render() {
        return (   
            <ul className="nav justify-content-center py-4 bgDark">
                <li className="nav-item">
                    <Link className="nav-link" to="navHome" spy={true} smooth={true} offset={-70} duration={600}>HOME</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="navAbout" spy={true} smooth={true} offset={-70} duration={600}>ABOUT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="navServ" spy={true} smooth={true} offset={-70} duration={600}>SERVICES</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="navPortf" spy={true} smooth={true} offset={-70} duration={600}>PORTFOLIO</Link>
                </li>
            </ul>
        )
    }
}
