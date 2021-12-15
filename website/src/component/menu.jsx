import React from 'react';
import '../App.css';
import './css/menu.css';

class Menu extends React.Component{
    render(){
        return(
            <div>
               <div className="container-fluid menu-area">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <div>
                                    <img src="logo.jpg" alt="..." height="80px" width="87px" className="mt-2"></img>
                                </div>
                            </div>

                            <div className="col-md-9 col-sm-12">
                                <div className="nav">
                                    <ul>
                                        <li><a href="javascript:void(0)">Home</a></li>
                                        <li><a href="javascript:void(0)">About Us</a></li>
                                        <li><a href="javascript:void(0)">Membership</a></li>
                                        <li><a href="javascript:void(0)">Rules & Regulation</a></li>
                                        <li><a href="javascript:void(0)">Gallery</a></li>
                                        <li><a href="javascript:void(0)">Contact Us</a></li>
                                    </ul>
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

export default Menu;