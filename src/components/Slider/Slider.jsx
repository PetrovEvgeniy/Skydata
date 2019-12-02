import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap'


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
              src="http://getwallpapers.com/wallpaper/full/6/b/2/1358586-download-fighter-jet-pictures-for-wallpaper-1920x1080.jpg"
              alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://www.womanthology.co.uk/wp-content/uploads/2015/11/Helicopter-800-x-400.jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s.yimg.com/ny/api/res/1.2/BXC1SofZ_oZ4N.L5OrIlWA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en/popular_mechanics_642/f142ebb80fb4d3f559d9c17c3194740e"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    
      );

  }

  export default Slider;