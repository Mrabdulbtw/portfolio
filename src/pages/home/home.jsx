import React from 'react'
import "./home.css"
import { AiFillHtml5 } from "react-icons/ai"
import { BiLogoCss3 } from "react-icons/bi"
import { TbBrandJavascript } from "react-icons/tb"
import { BiLogoReact } from "react-icons/bi"
import { BiLogoRedux } from "react-icons/bi"
import pic from "./assets/pic.jpg"


export default function Home() {

  return (
    <div className='home'>


      <div className="home-left">
        <div className="details">
          <h2>Hi, i'm    <span>  Abdul</span></h2>
          <h4>frontend developer</h4>
          <p>
            A frontend developer is a professional who focuses on creating the visual and interactive elements of a website or web application. They use languages like HTML, CSS, and JavaScript to build user interfaces that are visually appealing and functional. Their responsibilities include implementing designs, ensuring compatibility across different browsers and devices, optimizing performance, and collaborating with other team members. Frontend developers stay updated with the latest tools and technologies to deliver excellent user experiences on the web.</p>
          <div className="skills">
            <h3>skills</h3>
            <div className="icons">
              <AiFillHtml5 className="icon" />
              <BiLogoCss3 className="icon" />
              <TbBrandJavascript className="icon" />
              <BiLogoReact className="icon" />
              <BiLogoRedux className="icon" />
            </div>
          </div>
          <a href={pic} download>dowenlod CV</a>
        </div>
      </div>


      <div className="home-right">
        <img src={pic} alt="" />
      </div>
    </div>

  )
}
