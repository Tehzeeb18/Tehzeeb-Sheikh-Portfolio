import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";
const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 Some of the Stack I know 👇
          </p>
        <div className="row">
          {TechstackList.map((tech) => (
              <div key={tech._id} className="col-md-6 col-xl-4 col-lg-6 ">  
                {/* number of technology you want to display className="col-md-3" or className="col-md-4" */}
                <div className="card m-2 " >
                  <div className="card-content hello">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center ">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;