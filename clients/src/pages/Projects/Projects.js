import React from "react";
import "./Projects.css";
// import { BsGithub} from "react-icons/bs";
import weatherapp from "../../assets/images/weatherapp.png"
import chatapp from "../../assets/images/chatapp.png"
import codecrakers from "../../assets/images/codecrakers1.png"

const Projects = () => {
  return (
    <>
    <div className="main-div">
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center ">
        Explore the journey of my creativity and problem-solving, from concept to completion, where ideas transform into impactful solutions and highlight my passion for coding, design, and creating meaningful experiences.
        </p>
        <div className="row" id="ads">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="card rounded">
              <div className="card-image">
                {/* <span className="card-notify-badge">Full stack</span> */}
                <img
                  src={weatherapp}
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">HTML</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                  React Weather App
                  </h5>
                </div>
                <div className="ad-btn-div">
                  <a
                    className="ad-btn"
                    href="https://github.com/Tehzeeb18/React-Weather-App"
                    target="blank"
                  >
                    View
                  </a>
                  {/* <a
                    className="ad-btn"
                    href="https://github.com/Tehzeeb18"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsGithub size={25} />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="card rounded">
              <div className="card-image">
                {/* <span className="card-notify-badge">Mobile App</span> */}
                <img
                  src={chatapp}
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node JS</span>

                <span className="card-detail-badge">WebSockets</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Chat Application</h5>
                </div>
                <div className="ad-btn-div">
                  <a
                    className="ad-btn"
                    href="https://github.com/Tehzeeb18/Chat-Applications-using-WebSockets"
                    target="blank"
                  >
                    View
                  </a>
                  {/* <a
                    className="ad-btn"
                    href="https://github.com/Tehzeeb18/Chat-Applications-using-WebSockets"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsGithub size={25} />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="card rounded">
              <div className="card-image">
                {/* <span className="card-notify-badge">Backend</span> */}
                <img
                  src={codecrakers}
                  alt="project3"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>

                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">Bootstrap</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                <h5 className="text-uppercase">Code Crackers Tutorial & Blogging Website</h5>
                </div>
                <div className="ad-btn-div">
                  <a
                    className="ad-btn"
                    href="https://github.com/Tehzeeb18/Code-Crackers-Website"
                    target="blank"
                  >
                    View
                  </a>
                  {/* <a
                    className="ad-btn"
                    href="https://github.com/Tehzeeb18/Code-Crackers-Website"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsGithub size={25} />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Projects;
