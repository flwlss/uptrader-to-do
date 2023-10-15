import React, { useState } from "react";
import { availableProjects } from "../common/constants";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../navigation/paths";
import CustomButton from "../components/CustomButton";
import CreateProject from "../modals/CreateProject";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <CreateProject
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
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
      <CustomButton
        style={{ width: 350 }}
        onClick={() => {
          setShowModal(true);
        }}
        title="Создать"
      />
    </>
  );
};

export default Projects;
