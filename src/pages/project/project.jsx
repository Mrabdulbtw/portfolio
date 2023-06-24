import React from 'react'
import "./project.css"
import SinglProjects from './SinglProjects'
import { projectsData } from './projectsData'


export default function Project() {
    return (
        <div className='project'>
            <div className="gif-container">
                <div className="gif-box">
                    <div className="one"></div>
                    <div className="dot"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>

            </div>
            <h4>my projects</h4>
            <div className="projects-container">
                {
                    projectsData.map((data) => {
                        return <SinglProjects  
                        name={data.projectName}
                        link={data.projectLink}
                        content={data.projectsdescription}
                        
                        />
                    })
                }
            </div>
        </div>
    )
}
