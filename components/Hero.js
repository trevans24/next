
import React from 'react'
import data from '../assets/data/about.json'
import '../styles/components/_hero.scss'

const Hero = props => (
  <div className="home-hero">
    <div className="title-wrapper">
      <h1 className="name">Troy Evans</h1>
      <span className="title">full stack web developer</span>
      <span className="subtitle">Occupying Denver, CO</span>
    </div>
  </div>
);

export default Hero;
