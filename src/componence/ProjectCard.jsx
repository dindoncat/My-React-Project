import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CoolModel from "../componence/CoolModel";



const ProjectCard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  console.log(props.image);
  return (
    <div className="col-3 card border-black m-2 p-2 text-start d-flex flex-column justify-content-between">
      <div>
        <img className="rounded-2" width="100%" src={props.image} alt="" />
      </div>
      <div className="mt-auto">
        <h5>{props.name}</h5>
        <Button className="w-auto me-2" variant="light" href={props.gitHub_repo} target="_blank">GitHub repo</Button>
        <Button className="w-auto me-2" variant="light" href={props.live_demo} target="_blank">Live demo</Button>
        <Button variant="success" onClick={() => setModalShow(true)}>Info</Button>
      </div>
      <CoolModel
        things={props.description}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default ProjectCard;
