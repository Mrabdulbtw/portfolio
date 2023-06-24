import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import "./educationBox.css"

export default function EducationBox({ ed, date, gpa, depart }) {
    return (
        <div className='education-box'>
            <div className="uc-box">
                <SchoolIcon className='icon' />
                {depart}
            </div>
            <div className="us-details">
                <strong className='date'>{date}</strong>
                <p className="name-clg">
                    {ed}
                </p>
                <div className="gpa">
                    Gpa : {gpa}
                </div>
            </div>
        </div>
    )
}
