import { List } from '@mui/material'
import React, { useState } from 'react'
import { portfolio } from '../data/dummydata'

export const Portfolio = () => {
  const [list, setList] = useState(portfolio)
  return (
    <>
      <article>
        <div className="conatiner">
          <div className="catButton">text</div>
          <div className="content grid3">
            {list.map((items) => (
              <div className="box">
                <div className="img">
                  <img src={items.cover} alt="" />
                </div>
                <div className="overlay">
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
