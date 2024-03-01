import React, { useState, createContext, useRef } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import GoogleMaps from "../componence/GoogleMaps";
import Weather from "../componence/Weather";
export const searchValue = createContext();
const ContactUs = () => {
  const [label, setLabel] = useState("WEB LAB CENTER גבעתיים ");
  const [city, setCity] = useState("Giv'atayim");
  const [position, setPosition] = useState([
    32.07579383966994, 34.80797126057344,
  ]);
  const cityInputRef = useRef();

  const toSend = { city: city, position: position, label: label };
  const locationSearch = () => {
    let inputValue = cityInputRef.current.value;
    if (inputValue === "Giv'atayim") {
      setPosition([32.07579383966994, 34.80797126057344]);
      setLabel("WEB LAB CENTER גבעתיים ");
    }
    if (inputValue === "Berlin") {
      setPosition([52.50495653261886, 13.414018242159333]);
      setLabel("WEB LAB CENTER Berlin ");
    }
    if (inputValue === "London") {
      setPosition([51.50845158323819, -0.13222996762515762]);
      setLabel("WEB LAB CENTER London ");
    }
    setCity(inputValue); // Update state with selected city
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    locationSearch();
  };
  return (
    <div className="conntact min-vh-100">
      <div className="container align-items-center p-5">
        <div className="flex-md-row card">
          <div className="col-md-9 my-3 p-3">
            <h1>Let's talk</h1>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="How can we help you?"
              ></textarea>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="row g-3 justify-content-around">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Full name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Company"
                />
              </div>
              <div className="col-md-6 ">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Work Email"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="phone"
                />
              </div>
            </div>
            <div className="col-md-2">
              <button
                onClick={() => {
                  alert("Info is sent. Thank you for your business!");
                }}
                className="btn btn-primary p-2 mt-4"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="col-md-3 p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="col mb-3">
              <h5>Get in touch instantly</h5>
              <ul className="nav flex-column">
                <li className="nav-item m-2">
                  <Link to="#" className="nav-link p-0 text-body-secondary">
                    <i
                      className="fa-solid fa-phone"
                      style={{ color: "#0056eb" }}
                    ></i>{" "}
                    Call us
                  </Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="#" className="nav-link p-0 text-body-secondary">
                    <i
                      className="fa-solid fa-comments"
                      style={{ color: "#1f4251" }}
                    ></i>{" "}
                    Live chat
                  </Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="#" className="nav-link p-0 text-body-secondary">
                    <i
                      className="fa-brands fa-lg fa-whatsapp"
                      style={{ color: "#2a511f" }}
                    ></i>{" "}
                    WhatsApp
                  </Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="#" className="nav-link p-0 text-body-secondary">
                    <i
                      className="fa-solid fa-envelope"
                      style={{ color: "#1f64db" }}
                    ></i>{" "}
                    Email us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container align-items-center p-5" onSubmit={handleSubmit}>
        <h3 className="position-relative pachuk text-center text-white">Come to Say Hello</h3>
        <Form.Select
          className="mb-2"
          aria-label="Default select example"
          ref={cityInputRef}
          name=""
          id=""
          onChange={locationSearch}
        >
          <option value="Giv'atayim">Web Lab Center Giv'atayim katzanelson 61 </option>
          <option value="Berlin">Web Lab Berlin Center dresdener 113b </option>
          <option value="London">Web Lab UK Center Carels II st 14</option>
        </Form.Select>
        <div className="row card">
          <searchValue.Provider value={toSend}>
            <Weather />
            <GoogleMaps />
          </searchValue.Provider>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
