import React from "react";
import "./Hero.css";
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Nitheesh Kumar,</span> i'm a Computer Science Student
      </h1>
      <p>
        Hi there! I'm a pre-final year BTech Computer Science student at Parul
        University, specializing in Artificial Intelligence. I've always been
        passionate about technology and love learning new things.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
