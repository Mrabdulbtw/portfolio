import React from 'react'
import "./education.css"
import { EducationData } from './educationData';
import EducationBox from './education-box';
export default function Education() {

    return (
        <div className='education'>
            <h2>Education Time line & details</h2>
            <div className="education-container">
                {
                    EducationData.map((data) => {
                        return <EducationBox
                            ed={data.Education}
                            date={data.date}
                            gpa={data.gpa}
                            depart={data.department} />
                    })
                }
            </div>

        </div>
    )
}
