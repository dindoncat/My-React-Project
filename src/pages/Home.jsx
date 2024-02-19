import React from "react";
import mySelfeImage from "../imges/mySelfe.jpg";
import Carousel from "../componence/MyCarousel";
import Container from "react-bootstrap/Container";
import imgHome1 from "../imges/צילום מסך 2023-11-24 123202.png"
import imgHome2 from "../imges/צילום מסך 2023-11-24 123638.png"
import imgHome3 from "../imges/צילום מסך 202311-24 123712.png"
import imgHome4 from "../imges/צילום מסך 2023-11-24 123712.png"

const Home = () => {
  return (
    <>
      <div className="divo">
        <div className="ripple-background">
          <header className="circle xxlarge shade1"></header>
          <div className="circle xlarge shade2"></div>
          <div className="circle large shade3"></div>
          <div className="circle medium shade4"></div>
          <div className="circle small shade5"></div>
          <div className="container">
            <div className="d-flex py-3 justify-content-center">
              <div className="col-7 justify-content-end">
                <div className="col">
                  <div className="row g-0 border rounded-5 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col-auto d-none d-lg-block">
                      <div className="col-auto">
                        <img src={mySelfeImage} alt="mySelfe" height="300" />
                      </div>
                    </div>
                    <div className="col p-4 d-flex flex-column position-static bg-body-tertiary">
                      <strong className="d-inline-block mb-2 text-success-emphasis">
                        Web Design Lab
                      </strong>
                      <h3 className="position-relative pachuk">
                        "You Need, We Make"
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <Container className="bg-3 justify-content-center mt-3">
        <div className="row flex-lg-row-reverse g-5 py-5">
          <div className="col-lg-6">
            <h2 className="featurette-heading fw-normal lh-1">
              Why Companies Choose <br /> Web Lab: Building Trust with
              Transparency
            </h2>
            <p className="lead">
              Outsourcing to another company, however reputable it is, always
              comes with a risk. The best we can do as a vendor to lower that
              risk is to be completely transparent about who we are, what we do,
              and where we have succeeded. At Web Lab, we bet on facts
              rather than promises — and if our hero’s story is any indication,
              that’s the first step to building trust.
            </p>
          </div>
          <iframe
            className="col-10 col-sm-8 col-lg-6"
            src={
              "https://www.youtube.com/embed/UWhuHiL8Pug?si=dFhcqS-Y3-LYtZuf&amp;start=404"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="bg-3 justify-content-center mb-5">
          <div className="row-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1 mt-4">
              What Web Solution Do You Need?
            </h2>
            <p className="lead">
              Web development services help create all types of web-based
              software and ensure great experience for web users. Different
              types of web solutions may seem similar from the outside but we
              approach them differently and know what factors are winning in
              each case.
            </p>
          </div>
          <h3>Here's Some of my Work</h3> {/* Changed to h3 tag */}
          <br />
          <div className="row row-cols-auto g-3 justify-content-between">
            <div className="col border rounded home_img">
              <img
                src={imgHome1}
                className="img-responsive"
                style={{ width: "100%" }}
                alt="zlskdkdnf"
              />
            </div>
            <div className="col border rounded home_img">
              <img
                src={imgHome2}
                className="img-responsive"
                style={{ width: "100%" }}
                alt="df/lfljgnn"
              />
            </div>
            <div className="col border rounded home_img">
              <img
                src={imgHome3}
                className="img-responsive"
                style={{ width: "100%" }}
                alt="sd.kg"
              />
            </div>
            <div className="col border rounded home_img">
              <img
                src={imgHome4}
                className="img-responsive"
                style={{ width: "100%" }}
                alt="kufg"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
