import React from 'react';
import '../App.css';

class Top_Header extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 top-header">
                            <div className="container">
                               <div className="row">
                               <div className="col-md-4 col-sm-12">
                                    <div className="mob">
                                        <a href="tel:+9135467672"><i className="fa fa-phone"></i> +91-9135467672</a>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-12">
                                    <div className="mail">
                                        <a href="javascript:void(0)"><i className="fa fa-envelope"></i> mdashraf9135@gmail.com</a>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-12">
                                    <div className="social">
                                        <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                                        <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                                        <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                                        <a href="https://www.youtube.com"><i className="fa fa-youtube"></i></a>
                                    </div>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top_Header;