//Favorites
import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";



//Carousel
function FavoritesCarousel({image, label}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
        <Carousel.Caption>
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

export default FavoritesCarousel;