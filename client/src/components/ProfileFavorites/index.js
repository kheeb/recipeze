//Favorites
import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";

function favoritesCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={recipeImg} alt="First slide" />
        <Carousel.Caption>
          <h3>{recipeName}</h3>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              View Recipe
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={recipeImg} alt="Second slide" />
        <Carousel.Caption>
          <h3>{recipeName}</h3>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              View Recipe
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={recipeImg} alt="Third slide" />
        <Carousel.Caption>
          <h3>{recipeName}</h3>
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

export default favoritesCarousel;
