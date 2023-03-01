import React from 'react'
import Typewriter from 'typewriter-effect'
import { home } from '../data/dummydata'

export const Hero = () => {
  return (
    <section className="hero banner">
      {home.map((val, i) => (
        <div className="heroContainer">
          <h3>{val.text}</h3>
          <h1>
            <Typewriter 
              options = {{ 
                strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                autoStart: true,
                loop: true
              }}
            />
          </h1>
          <p>{val.desc}</p>
          <button className="primaryBtn">Download CV</button>
        </div>
      ))}
    </section>
  )
}
