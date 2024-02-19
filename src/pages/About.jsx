import React from "react";
import Container from "react-bootstrap/Container";
import img1 from "../imges/g1.png"
import img2 from "../imges/g2.png"
import img3 from "../imges/g3.png"
import img4 from "../imges/g4.png"

const About = () => {
  return (
    <Container>
      <h2 className="featurette-heading fw-normal lh-1 mt-4">
        Web Lab in Numbers
      </h2>
      <div className="row my-5">
        <div className="infoh feature col-md-3 border-start">
          <h1 className="fs-2 text-body-emphasis">34</h1>
          <p className="lead">years in IT</p>
        </div>
        <div className="infoh col-md-3 border-start ">
          <h1 className="fs-2 text-body-emphasis">750+</h1>
          <p className="lead">IT professionals</p>
        </div>
        <div className="infoh col-md-3 border-start ">
          <h1 className="fs-2 text-body-emphasis">3600+</h1>
          <p className="lead">success stories</p>
        </div>
        <div className="infoh col-md-3 border-start ">
          <h1 className="fs-2 text-body-emphasis">30+</h1>
          <p className="lead">industries covered</p>
        </div>
      </div>
      <div className="row-md-7 my-5">
        <h2 className="featurette-heading fw-normal lh-1 mt-4">
          Average Cost of Different Web Solutions
        </h2>
        <p className="lead">
          Web development services help create all types of web-based software
          and ensure great experience for web users. Different types of web
          solutions may seem similar from the outside but we approach them
          differently and know what factors are winning in each case.
        </p>
      </div>
      <div className="container text-center">
        <div className="row justify-content-between py-3">
          <div className="col-md border rounded">
            <div className="row">
              <div className="col-1 bg-info p-1 w-100"></div>
              <div className="col-11 mt-3">
                <img
                  className="bd-placeholder-img" style={{ width: "60", height: "60" }} src={img1} alt="" />
                <h5 className="fw-bold">From $20,000</h5>
                <p className="text-start mx-2 mb-5">For a custom branded corporate website.</p>
              </div>
            </div>
          </div>
          <div className="col-md border rounded mx-md-2">
            <div className="row ">
              <div className="col-1 bg-info py-1 w-100">
              </div>
              <div className="col-11 mt-3">
                <img
                  className="bd-placeholder-img" style={{ width: "60", height: "60" }} src={img2} alt="" />
                <h5 className="fw-bold">From $70,000</h5>
                <p className="text-start mx-2 mb-5">For a self-service customer web portal.</p>
              </div>
            </div>
          </div>
          <div className="col-md border rounded">
            <div className="row">
              <div className="col-1 bg-info p-1 w-100">
              </div>
              <div className="col-11 mt-3">
                <img className="bd-placeholder-img" style={{ width: "60", height: "60" }} src={img3} alt="" />
                <h5 className="fw-bold">From $200,000</h5>
                <p className="text-start mx-2 mb-5">For an ecommerce solution with custom visual interface and business logic, integrated into a corporate IT infrastructure.</p>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col border rounded">
              <div className="row">
                <div className="col-1 bg-info p-1 w-100">
                </div>
                <div className="col-11 mt-3">
                  <img className="bd-placeholder-img" style={{ width: "60", height: "60" }} src={img4} alt="" />
                  <h5 className="fw-bold">From $400,000</h5>
                  <p className="text-start mx-2 mb-5">For complex enterprise web software, e.g., a custom EHR system.</p>
                </div>
              </div>
            </div>
            <div className="col-md-8 bg-info ms-3">
              <h5 className="text-start featurette-heading fw-bold text-white lh-1 mt-4 mb-4">Want to learn the exact cost of your solution?</h5>
              <p className="text-white fs-5 text-start">Fill out our short questionnaire and we will provide you with a custom quote within the shortest possible time.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
