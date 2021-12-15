import React from 'react';
import './css/teacher_pic.css';
import '../App.css';

function Teacher(){
    return(
        <div>
            <div className="container mt-5 mb-5 teacher">
            <h1 className="text-center" style={{fontFamily:'redo'}}>Our <span style={{color:'#630000'}}>Teacher</span></h1><hr style={{backgroundColor:'#630000'}}></hr>
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div>
                           <img src="t1.jpg" alt="..." height="250px" width="100%"></img>
                           <span>Prity</span>
                           <span>Biology</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div>
                           <img src="t2.jpg" alt="..." height="250px" width="100%"></img>
                           <span>Priyanka Sarkar</span>
                           <span>Physics</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div>
                           <img src="t3.jpg" alt="..." height="250px" width="100%"></img>
                           <span>Dibya Kumari</span>
                           <span>Computer</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div>
                           <img src="t4.jpg" alt="..." height="250px" width="100%"></img>
                           <span>Shrimohan Row</span>
                           <span>Math</span>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-md-3 col-sm-12">
                        <div>
                           <img src="t5.jpg" alt="..." height="250px" width="100%"></img>
                           <span>Prity</span>
                           <span>Biology</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div>
                           <img src="t6.jpg" alt="..." height="250px" width="100%"></img>
                           <span>Debjyoti Sarkar</span>
                           <span>NodeJs</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div>
                           <img src="t7.jpg" alt="..." height="250px" width="100%"></img>
                           <span>Devraj Kumar</span>
                           <span>Computer</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div>
                           <img src="t8.jpg" alt="..." height="250px" width="100%"></img>
                           <span>Shrimohan Row</span>
                           <span>Math</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teacher;