import React from "react";
import "./About.css";
import Tehzeeb_pic from "../../assets/images/Tehzeeb_pic.jpg";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        {/* <div className="row"> */}
        <div className="about-img">
          <img src={Tehzeeb_pic} alt="profile_pic" />
        </div>
        <div className="about-content">
          <h1>About me</h1>
          <p>
            Hello! I’m a full-stack developer with a knack for building
            interactive and user-friendly applications. Skilled in React.js,
            Node.js, Express.js, JavaScript, Tailwind CSS, and database
            management, I am equipped to handle both frontend and backend
            challenges.
            <br></br>I have a deep passion for creating elegant user interfaces
            that balance aesthetics and functionality, with React being my
            favorite tool for the job. On the backend, I enjoy working with
            Node.js to ensure the seamless flow of data and performance.
            <br></br>
            What drives me as a developer is my love for learning and taking on
            new challenges. Whether it's diving into a new technology or solving
            a complex problem, I’m always eager to grow. When I’m not coding,
            you’ll find me enjoying a cup of coffee, listening to music, or
            brainstorming new ideas to work on.
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default About;
