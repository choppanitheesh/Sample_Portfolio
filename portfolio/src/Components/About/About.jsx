import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am looking of opportunities to translate my theoretical
              understanding into practical applications, thereby bridging the
              gap between academic concepts and real-world scenarios.
            </p>
            <p>
              Beyond academics, I love staying updated with tech trends and
              engaging with the developer community. I'm always open to
              networking, collaborations, and meaningful discussions on AI and
              software development.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
            <h1>1+</h1>
            <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
            <h1>4+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
            <h1>10+</h1>
            <p>HAPPY CUSTOMERS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
