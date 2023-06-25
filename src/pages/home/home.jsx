import React from 'react'
import "./home.css"
import { AiFillHtml5 } from "react-icons/ai"
import { BiLogoCss3 } from "react-icons/bi"
import { TbBrandJavascript } from "react-icons/tb"
import { BiLogoReact } from "react-icons/bi"
import { BiLogoRedux } from "react-icons/bi"
import pic from "./assets/pic.jpg"
import resume from "./assets/resume.pdf"

export default function Home() {

  return (
    <div className='home'>


      <div className="home-left">
        <div className="details">
          <h2>Hi, i'm    <span>  Abdul</span></h2>
          <h4>frontend developer</h4>
          <p>
            I'm frontend developer.and i'm frisher,i passed out 2022 september.I was learned myself frontend development like  html,css,JavaScript,and reactJs redux toolkite,i can develop web application or any interactive webpage with responsive design... 
          </p> 
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
          <a href={resume} download >dowenlod CV</a>
        </div>
      </div>


      <div className="home-right">
        <img src={pic} alt="" />
      </div>
    </div>

  )
}
