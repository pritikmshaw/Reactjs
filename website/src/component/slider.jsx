import React from "react";
import '../App.css';
import './css/slider.css';

class Slider extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                        <h1 className="mt-3" style={{textAlign:'center'}}>WELCOME <span style={{color:'#950101', display:'block', textAlign:'center'}}>TO</span> APS PUBLIC SCHOOL</h1>
                            <p style={{fontSize:'22px', textAlign:'justify'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et metus quam. Quisque nec posuere nisi. 
                            Proin consequat ante sed dui auctor accumsan. Aliquam ut sem blandit, tincidunt ante ac, convallis nisi. 
                            Integer pellentesque, diam sed iaculis dignissim, risus nisi porta nisl, vitae rutrum leo tortor non mauris. 
                            Ut vitae fermentum purus. Quisque rutrum nisi laoreet facilisis eleifend. Nulla tellus nisi, euismod quis 
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div>
                                <img src="student1.png" alt="..." height="400px" width="250px" style={{float:'right', marginTop:'25px'}}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;