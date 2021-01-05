import React, { Component } from 'react';
import {Front, Back, Others} from '../projects/skills';
import {imgMe} from '../assets/images/exportImg'; 
import {AiFillSafetyCertificate} from 'react-icons/ai';

export default class About extends Component {
    render() {
        return (
            <div className="spaceSection ab">
            <div className="container">
                <h2>ABOUT ME</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img className="z-depth-1 mb-3" alt="imgMe" src={imgMe}/>
                    </div>
                    <div className="col-md-8">
                        <p className="fontIBM">My name is Jeronimo Jose Ocampos Escobar. I am an entry-level Full Stack Web Developer who has excellent knowledge of frameworks and tools for Web Development. I have a passion for design, and am a highly-motivated, fast-learner who is excited to build successful websites that are very organized, easy to use and fast to load. Currently, I am seeking a job that will challenge me to improve my skill set with the latest Web Development tools.</p>
                        <div className="row iconAb fontIBM">
                            <div className="col-md-6 justify-content-center">
                                <p><AiFillSafetyCertificate size="2.5em"/>Bachelor's Degree in Information Technology</p>
                            </div>
                            <div className="col-md-6">
                                <p><AiFillSafetyCertificate size="2.5em"/>Front End Web Development Certificates</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="spaceSkills">
                    <h4 className="text-center">MY TECNHICAL SKILLS</h4>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="card text-white bg-dark">
                                <div className="card-header"><h5>FRONT END</h5></div>
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        {Front.map((data, key)=>(
                                            <div className="col-3 col-sm-2" key={key}>
                                                <a data-toggle="tooltip" title="What is it?" href={data.link}><img src={data.image} alt="imgIcon" /></a> 
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card text-white bg-dark">
                                <div className="card-header"><h5>BACK END</h5></div>
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        {Back.map((data, key)=>(
                                            <div className="col-3 col-sm-2" key={key}>
                                                <a data-toggle="tooltip" title="What is it?" href={data.link}><img src={data.image} alt="imgIcon" /></a> 
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="pt-2 col">
                            <div className="card text-white bg-dark">
                                <div className="card-header"><h5>OTHERS</h5></div>
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        {Others.map((data, key)=>(
                                            <div className="col-3 col-sm-1" key={key}>
                                                <a data-toggle="tooltip" title="What is it?" href={data.link}><img src={data.image} alt="imgIcon" /></a> 
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
