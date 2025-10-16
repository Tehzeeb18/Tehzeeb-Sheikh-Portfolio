import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Tehzeeb_Sheikh_Resume_CV from "../../assets/docs/Tehzeeb_Sheikh_Resume_CV.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <div className="home-content-div">
            <h3>Hi 👋 I'm </h3>
            <h1>Tehzeeb Sheikh</h1>
            <h3>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "Mern Stack Developer!",
                    "Frontend developer (ReactJS)!",
                    "Backend developer (NodeJS)!",
                    "Web developer!",
                    "UI/UX developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://wa.me/917073991252?text=Hi%20Tehzeeb%2C%20I%20am%20interested%20in%20hiring%20you%20for%20a%20web%20development%20project.
"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a
              className="btn btn-cv"
              href={Tehzeeb_Sheikh_Resume_CV}
              download="Tehzeeb_Sheikh_Resume_CV1.pdf"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
