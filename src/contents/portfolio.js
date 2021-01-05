import React, { Component } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import {projects, imgDG, options} from '../projects/myprojects';
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';
import {FaCheckSquare} from 'react-icons/fa';

export default class Portfolio extends Component {

    state = { isOpen:false };
    modalClose = () => this.setState({ isOpen: false });
    modalOpen = value => {this.setState({ isOpen: value })};

    render() {
            return (
                <div className="spaceSection">
                    <div className="container">
                    <h2>PORTFOLIO</h2>
                    <h3>Websites</h3>
                    <div className="row">
                    {projects.map((data, key) => (
                        <div className="col-6 col-md-4" key={key}>          
                            <div className="card mb-5">
                                <div className="view overlay">
                                    <img className="card-img" src={data.image} alt="imgWeb"/>
                                    <div className="mask blue-gradient text-center">
                                        <Button id="btnStyle" variant="outline-light" onClick={() => this.modalOpen(data.id)}><i className="fas fa-clone left"></i> View project</Button>
                                        <Modal className="modal-open" show={this.state.isOpen === data.id} onHide={this.modalClose} name={data.name} size="xl">
                                            <Modal.Header closeButton>
                                                <Modal.Title><h2>{data.name} Website</h2></Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div className="row">
                                                    <div className="col-12 col-md-7">
                                                        <img className="z-depth-1" src={data.imageScreen} alt="imgWeb" style={{width:"100%"}}/>
                                                    </div>
                                                    <div className="col-12 col-md-5 pt-2">
                                                        <h4>Technologies used to build this website:</h4>
                                                        <div className="row mb-4 pt-4">
                                                            {data.techused.map((lp, id)=>(
                                                                <div className="col-6"key={id}>
                                                                    <h5><FaCheckSquare/> {lp.prog}</h5>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <Alert variant="info" className="text-center">Click <Alert.Link href={data.gitLink} target="_blank">here</Alert.Link> to get the source code from GitHub.</Alert>
                                                    </div>
                                                </div> 
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <a className="btn btn-elegant" href={data.link} target="_blank" rel="noreferrer">Go to Website</a>
                                                <Button variant="danger" onClick={this.modalClose}>Close</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <h3>Graphic Designs</h3>
                        <SimpleReactLightbox>
                          <SRLWrapper options={options}>
                                  <div className="row imgDG">
                                      {imgDG.map((data,key)=>(
                                      <div className="col-6 col-md-3 mb-4" key={key}>
                                          <div className="view overlay">
                                            <a href={data.src} data-attribute="SRL"><img className="z-depth-1" src={data.thumbnail} alt={data.caption}/><div className="mask rgba-blue-light"><i className="fas fa-search-plus"></i></div></a>
                                          </div>
                                      </div>))}
                                  </div>
                            </SRLWrapper>
                        </SimpleReactLightbox>
                    </div>
                </div>
            )
    }
}