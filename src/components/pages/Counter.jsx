import React from 'react'
import { project } from '../data/dummydata'

export const Counter = () => {
  return (
    <>
      <div className="hero counter">
        <div className="container grid3 grid4">
          {project.map((item, i) => (
            <div className="box">
              <i>{item.icon}</i>
              <h1 className='heading'>{item.num}</h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
