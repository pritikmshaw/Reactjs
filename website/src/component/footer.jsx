import React from 'react';
import './css/footer.css';
import '../App.css';

function Footer(){
    return(
        <div>
            <footer>
                <div className="container-fluid mt-4 footer">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <h4 className="text-center text-white" style={{fontFamily:'redo'}}>About Us</h4><hr className="bg-white"></hr>
                            <p className="text-white" style={{textAlign:'justify'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et metus quam. Quisque nec posuere nisi. 
                                Proin consequat ante sed dui auctor accumsan. Aliquam ut sem blandit, tincidunt ante ac, convallis nisi. 
                                Integer pellentesque, diam sed iaculis dignissim, risus nisi porta nisl, vitae rutrum leo tortor non mauris. 
                                Ut vitae fermentum purus. Quisque rutrum nisi laoreet facilisis eleifend. Nulla tellus nisi, euismod quis
                            </p>
                        </div>

                        <div className="col-md-2 col-sm-12 quik">
                            <h4 className="text-center text-white" style={{fontFamily:'redo'}}>Quick Links</h4><hr className="bg-white"></hr>
                            <ul>
                                <li><a href="javascript:void(0)">Home</a></li>
                                <li><a href="javascript:void(0)">About Us</a></li>
                                <li><a href="javascript:void(0)">Membership</a></li>
                                <li><a href="javascript:void(0)">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2 col-sm-12 quik">
                            <h4 className="text-center text-white" style={{fontFamily:'redo'}}>Follow Us</h4><hr className="bg-white"></hr>
                            <ul>
                                <li><a href="javascript:void(0)">Facebook</a></li>
                                <li><a href="javascript:void(0)">Instagram</a></li>
                                <li><a href="javascript:void(0)">Twiiter</a></li>
                                <li><a href="javascript:void(0)">Youtube</a></li>
                                <li><a href="javascript:void(0)">Linked In</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-sm-12 cont">
                            <h4 className="text-center text-white" style={{fontFamily:'redo'}}>Contact Us</h4><hr className="bg-white"></hr>

                            <h5 className="text-white" style={{fontFamily:'redo'}}>Address - </h5>
                            <span>Motijheet Near max mall (Muzaffarpur), <span>842001</span></span>
                            <a href="tel:+9135467672"><i className="fa fa-mobile"></i> +91-9135467672</a>
                            <a href="tel:+9135467672"><i className="fa fa-envelope"></i> mdashraf9135@gmail.com</a>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57317.40639234915!2d85.35131718559161!3d26.120523486004643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10e8a3175529%3A0x7c2d919680f759d!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1638168058641!5m2!1sen!2sin" width="100%" height="120" style={{border:'0', marginTop:'5px'}} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div><hr style={{backgroundColor:'#fff'}}></hr>
                    <div className="container">
                        <p className="text-center text-white">&copy; Design and Developed by priti <a href="https://prity.com">Prity.com</a></p>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default Footer;