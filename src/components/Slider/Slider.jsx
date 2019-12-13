import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'


function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (


    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.goalaircraft.com/wp-content/uploads/2018/06/WINDSOR-JET-CIT-X-N751WJ-025-2400x1200.jpg?x76820"
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
          src="http://www.womanthology.co.uk/wp-content/uploads/2015/11/Helicopter-800-x-400.jpg"
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
          src="https://s.yimg.com/ny/api/res/1.2/BXC1SofZ_oZ4N.L5OrIlWA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en/popular_mechanics_642/f142ebb80fb4d3f559d9c17c3194740e"
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