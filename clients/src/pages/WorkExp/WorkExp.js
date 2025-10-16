import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import { useTheme } from "../../context/ThemeContext";

const WorkExp = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "#303a2b" : "light"));
  };
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2
            className="col-12 mt-3 mb-1 text-center text-uppercase"
            onClick={handleTheme}
          >
            Work Experience
          </h2>
          <hr />

          <VerticalTimeline
            lineColor={theme === "light" ? "blue" : "rgb(191, 130, 206)"}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: theme === "light" ? "white" : "rgb(31, 3, 37)",
                color: theme === "light" ? "black" : "white",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "7px solid white"
                    : "7px solid rgb(61, 17, 143)",
              }}
              date="2024 - Present"
              iconStyle={{
                background: theme === "light" ? "#303a2b" : "rgb(31, 1, 39)",
                color: theme === "light" ? "#fff" : "rgb(191, 130, 206)",
              }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Research Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Shodh AI, Jaipur
              </h4>
              <p>
                Developed an AI-based interviewing tool. Built official Shodh
                AI's responsive website with real-time Twitter feed updates.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
