import { Menu } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navlink } from '../data/dummydata'
import logo from "../data/images/logo.png"

export const Header = () => {
  const [responsive, setResponsive] = useState()
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((link, i) => (
              <Link to={link.url}>{link.text}</Link>
            ))}
          </div>
          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <Menu className="icon"></Menu>
          </button>
        </div>
      </header>
    </>
  )
}
