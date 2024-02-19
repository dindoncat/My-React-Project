import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Caru1 from "../imges/coru1.jpg";
import Caru2 from "../imges/caro2.jpg";
import Caru3 from "../imges/caru3.jpg";
import Caru4 from "../imges/caro4.jpg";
import { Link } from "react-router-dom";

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="text-center mt-5"
    >
      <Carousel.Item>
        <img src={Caru1} alt="First slide" />
        <Carousel.Caption style={{     }}>
          <h1 className="bg-info-subtle">
            Where Imagination Meets Code: Your Vision, Our Creation
          </h1>
          <p>
            <Link className="btn btn-lg btn-info" to="/ContactUs">
              Lerne more
            </Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Caru2} alt="Second slide" />
        <Carousel.Caption>
          <h1 className="bg-info-subtle">
            Code, Design, Delight: We Build Web Wonders
          </h1>
          <p>
            <Link className="btn btn-lg btn-info" to="/ContactUs">
              Learn more
            </Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Caru3} alt="Third slide" />
        <Carousel.Caption>
          <h1 className="bg-info-subtle">
            Elevate Your Online Presence with Our Design Wizardry.
          </h1>
          <p>
            <Link className="btn btn-lg btn-info" to="/ContactUs">
              Learn more
            </Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Caru4} alt="Fourth slide" />
        <Carousel.Caption>
          <h1 className="bg-info-subtle">
            Crafting Digital Excellence, One Code at a Time
          </h1>
          <p>
            <Link className="btn btn-lg btn-info" to="/ContactUs">
              Browse gallery
            </Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
