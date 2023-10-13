import React from "react";
import { availableProjects } from "../common/constants";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../navigation/paths";
import CustomButton from "../components/CustomButton";

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="projects">
        {availableProjects.map((item, index) => {
          return (
            <div
              onClick={() => {
                navigate(`${PATHS.PROJECTS}/${item.id}`);
              }}
              key={index}
              className="projects__item"
            >
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
      <CustomButton onClick={() => {}} title="Create" />
    </>
  );
};

export default Projects;
