import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import { useTheme } from "../../context/ThemeContext";

const Education = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "#303a2b" : "light"));
  };
  return (
    <>
      <div className=" education" id="education">
        <h2
          className="col-12 mt-3 mb-1 text-center text-uppercase"
          onClick={handleTheme}
        >
          Education Details
        </h2>
        <hr />
        <VerticalTimeline
          lineColor={theme === "light" ? "blue" : "rgb(191, 130, 206)"}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: theme === "light" ? "white" : "rgb(35, 9, 41)",
              color: theme === "light" ? "black" : "white",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "7px solid white"
                  : "7px solid rgb(61, 17, 143)",
            }}
            date="2022 - 2024"
            iconStyle={{
              background: theme === "light" ? "#303a2b" : "rgb(31, 1, 39)",
              color: theme === "light" ? "#fff" : "rgb(191, 130, 206)",
            }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">M.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sir Padampat Singhania University (SPSU), Udaipur, IN
            </h4>
          </VerticalTimelineElement>

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
            date="2018 - 2022"
            iconStyle={{
              background: theme === "light" ? "#303a2b" : "rgb(31, 1, 39)",
              color: theme === "light" ? "#fff" : "rgb(191, 130, 206)",
            }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Geetanjali Institute of Technical Studies (GITS), Udaipur, IN
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
