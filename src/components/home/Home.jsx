import React from 'react'
import { About } from '../pages/About'
import { Counter } from '../pages/Counter'
import { Hero } from './Hero'
import { Services } from '../pages/Services'
import { Portfolio } from '../pages/Portfolio'

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
    </>
  )
}
