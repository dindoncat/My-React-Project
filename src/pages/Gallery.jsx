import React, { useState } from "react";
import MyPaginationBtn from "../componence/MyPagnationBtn"; // corrected import path
import projects from "../jsons/project.json";
import ProjectCard from "../componence/ProjectCard"; // corrected import path

const Gallery = () => {
  const projectsArr = projects;
  const PROJECTS_PER_PAGE = 3; // corrected variable name
  const [arr, setArr] = useState(projectsArr.slice(0, PROJECTS_PER_PAGE));
  const [start, setStart] = useState(0);
  const [activeBtn, setActiveBtn] = useState(1);
  const [buttonNum, setButtonNumber] = useState(1);
  const totalPages = Math.ceil(projectsArr.length / PROJECTS_PER_PAGE); // corrected variable name

  const creatCards = (arr) => {
    const compsArr = arr.map((item) => (
      <ProjectCard
        key={item.id}
        name={item.name}
        description={item.description}
        gitHub_repo={item.gitHub_repo}
        live_demo={item.live_demo}
        image={item.image}
      />
    ));
    return compsArr;
  };
  const onEachBtn = (pageNumber) => {
    const startIndex = (pageNumber - 1) * PROJECTS_PER_PAGE;
    const endIndex = Math.min(
      startIndex + PROJECTS_PER_PAGE,
      projectsArr.length
    );
    const tempArr = projectsArr.slice(startIndex, endIndex);
    setArr(tempArr);
    setStart(startIndex);
    setActiveBtn(pageNumber);
    setButtonNumber(pageNumber);
  };
  const creatPaginationButtons = () => {
    const buttons = [];
    for (let index = 1; index <= totalPages; index++) {
      buttons.push(
        <MyPaginationBtn
          key={index}
          onEach={onEachBtn} // corrected prop name
          number={index}
          activeBtn={activeBtn}
        />
      );
    }
    return buttons;
  };

  const next = () => {
    const startIndex = start + PROJECTS_PER_PAGE;
    const tempArr = projectsArr.slice(
      startIndex,
      startIndex + PROJECTS_PER_PAGE
    );
    setArr(tempArr);
    setStart(startIndex);
    setActiveBtn(buttonNum + 1);
    setButtonNumber(buttonNum + 1);
  };

  const back = () => {
    const startIndex = start - PROJECTS_PER_PAGE;
    const tempArr = projectsArr.slice(
      startIndex,
      startIndex + PROJECTS_PER_PAGE
    );
    setArr(tempArr);
    setStart(startIndex);
    setActiveBtn(buttonNum - 1);
    setButtonNumber(buttonNum - 1);
  };

  return (
    <main className="container-fluid bg-light ">
      <div className="container my-4 ">
        <div className="d-flex flex-column justify-content-between MINHIET">
          <div className="row justify-content-evenly text-center">
            {creatCards(arr)}
          </div>
          <nav
            className="d-flex justify-content-center my-3 mt-auto"
            aria-label="..."
          >
            <ul className="pagination">
              <li className="page-item ">
                <button
                  className="page-link"
                  onClick={back}
                  disabled={start === 0}
                >
                  Back
                </button>
              </li>
              {creatPaginationButtons()}
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={next}
                  disabled={start + PROJECTS_PER_PAGE >= projectsArr.length}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Gallery;