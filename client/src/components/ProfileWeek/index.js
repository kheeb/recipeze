//ProfileWeek
import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";

function ProfileWeekCarousel({image, label}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
        <Carousel.Caption>
        <h5>Sunday</h5>
          <h3>{label}</h3>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              View Recipe
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Second slide" />
        <Carousel.Caption>
        <h5>Monday</h5>
          <h3>{label}</h3>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              View Recipe
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Third slide" />
        <Carousel.Caption>
        <h5>Tuesday</h5>
          <h3>{label}</h3>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              View Recipe
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
        <Carousel.Caption>
        <h5>Wednesday</h5>
          <h3>{label}</h3>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              View Recipe
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
        <Carousel.Caption>
        <h5>Thursday</h5>
          <h3>{label}</h3>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              View Recipe
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
        <Carousel.Caption>
        <h5>Friday</h5>
          <h3>{label}</h3>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              View Recipe
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
        <Carousel.Caption>
        <h5>Saturday</h5>
          <h3>{label}</h3>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              View Recipe
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProfileWeekCarousel;
