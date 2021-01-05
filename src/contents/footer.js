import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small elegant-color-dark pt-4">

                <div className="container">

                    <div className="row">

                    <div className="col-md-6 mb-4 text-right">

                    <h2>Contact Me</h2>
                    <p>For any questions/commnets, please contact me. Thank you!</p>

                    </div>

                    <div className="col-md-6 mb-4">

                    <h4><i className="fas fa-envelope"></i> ocamposjero@gmail.com</h4>
                    <h4><i className="fa fa-phone"></i> +1 619 885-3285</h4>

                    </div>

                    </div>
                </div>
                <div className="footer-copyright text-center py-3"><i className="far fa-copyright"></i> 2020 Copyright:
                    <a href="https://jerocam.com/"> jerocam.com</a>
                </div>
            
            </footer>
        )
    }
}
