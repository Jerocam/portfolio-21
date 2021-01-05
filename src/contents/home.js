import React, { Component } from 'react';
import {imgLogo, imgIconDown} from '../assets/images/exportImg';
import resumePDF from '../assets/ocampos_jeronimo.pdf';

export default class Home extends Component {
    render() {
        return (
            <div className="bgDark">
                <div className="container space">
                    <div className="text-center">
                        <img src={imgLogo} alt="logo" id="logoJO"/>
                        <h1>Jeronimo Jose Ocampos</h1>
                        <h2 className="fontIBM"><i className="fas fa-code"></i> Hello, I am a Full Stack Web Developer with a passion for learning </h2>
                        <div className="row justify-content-center">
                            <div className="col-md-auto col-4">
                                <a id="v1" href="https://github.com/Jerocam" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                                <div id="visible1"><h3>GITHUB</h3></div>
                            </div>
                            <div className="col-md-auto col-4">
                                <a id="v2" href="https://www.linkedin.com/in/jerocam-226" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                <div id="visible2"><h3>linkedin</h3></div>
                            </div>
                            <div className="col-md-auto col-4">
                                <a id="v3" target="_blank" rel="noreferrer" href={resumePDF}><i className="fas fa-file"></i></a>
                                <div id="visible3"><h3>RESUME</h3></div>
                            </div>
                        </div>
                        <div>
                            <img alt="imgdown" src={imgIconDown} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
