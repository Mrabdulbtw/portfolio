import React from 'react'
import "./singleProjects.css"
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import { Link } from 'react-router-dom';

export default function SinglProjects({ link, name, content }) {
  return (
    <div className='single-projects'>
    <div className="bondel">
    <CodeOffOutlinedIcon className='icon' />
      <strong>{name}</strong>
    </div>
      <p className="content">
        {content}
      </p>
      <a href={link}>view</a>
    </div>
  )
}
