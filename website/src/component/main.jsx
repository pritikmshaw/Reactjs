import React from "react";
import '../App.css';
import Top_Header from "./top-header";
import Menu from "./menu";
import Slider from "./slider";
import About from "./about";
import Teacher from "./teacher_pic";
import Footer from "./footer";

function Main(){
    return(
        <div>
            <Top_Header />
            <Menu />
            <Slider />
            <About />
            <Teacher />
            <Footer />
        </div>
    );
}

export default Main;