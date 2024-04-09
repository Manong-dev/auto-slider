import React, { useState, useEffect } from "react";
import { images } from "./images";
import "./slider.css";

const Slider= () => {
  const [image, setImage] = useState(0);

  const lastPic = () => {
    image === 0 ? setImage(2) : setImage(image - 1);
  };

  const nextPic = () => {
    image === 2 ? setImage(0) : setImage(image + 1);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      nextPic();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div
      className="Carousel"
      style={{ backgroundImage: `url(${images[image].img})` }}
    >
      <div className="Inner">
        <div className="left" onClick={lastPic}>
          {"<"}
        </div>
        <div className="info__container">
          <div className="title__center">
            <h1>{images[image].title}</h1>
          </div>  
          <div className="text__center">
            <p>{images[image].text}</p>
          </div>
        </div>
        <div className="right" onClick={nextPic}>
          {">"}
        </div>
      </div>

      {/* <div className="bottom">
        {images.map((pic) => (
          <div key={pic.id}>
            <img
              src={pic.img}
              alt=""
              style={image === pic.id ? { opacity: 1 } : { opacity: 0.33 }}
              onClick={() => {
                setImage(pic.id);
              }}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Slider;