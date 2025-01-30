import React from "react"
import Tabari from "../assets/image0 (1).jpeg"

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate web developer with experience in React and modern web technologies. I love creating intuitive and efficient user interfaces that provide a seamless experience for users. I'm always eager to learn new technologies and improve my skills to create better products.
          </p>
          <p>
            When I'm not coding, you can find me hiking, reading, or playing video games. I'm always looking for new adventures and challenges to keep life exciting!
          </p>
        </div>
        <div className="about-image">
          <img src={Tabari}/>
        </div>
      </div>
    </section>
  )
}

export default About