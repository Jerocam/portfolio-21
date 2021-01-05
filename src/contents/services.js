import React, { Component } from 'react';
import {servCards} from '../projects/services';

export default class Services extends Component {
    render() {
        return (
            <div className="spaceSection serv">
                <div className="container">
                    <h2>MY SERVICES</h2>
                    <h3>I can work confidently in a number of different areas</h3>
                    <div className="row">
                        {servCards.map((data, key)=>(
                            <div key={key} className="col-6 col-md-4">
                                <div className="card border-info mb-4">
                                    <img className="mx-auto d-block" src={data.image} alt="imgCard"/>
                                    <div className="card-body text-info text-center">
                                        <h4 className="card-title">{data.name}</h4>
                                        <p className="card-text fontIBM">{data.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
