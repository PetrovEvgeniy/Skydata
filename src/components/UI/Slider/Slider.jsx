import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'


function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    if(e){
      setDirection(e.direction);
    }
  };

  return (


    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperset.com/w/full/2/e/9/32376.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to SkyData</h3>
          <p>Explore a world full of modern and futuristic aircraft.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperset.com/w/full/3/f/8/32478.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Join us</h3>
          <p>Create a free account and list your favourite aircraft.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperset.com/w/full/1/d/3/32382.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Have fun</h3>
          <p>
            Share with your friends.
              </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );

}

export default Slider;