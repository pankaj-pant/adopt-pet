import React, { useState, useEffect } from "react";

const Carousel = ({ media }) => {
  const [state, setState] = useState({
    photos: [],
    active: 0
  });

  useEffect(() => {
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    setState({ photos: photos, active: 0 });
  }, [media]);

  const { photos, active } = state;

  const handleIndexClick = event => {
    setState({
      ...state,
      active: +event.target.dataset.index
    });
  };

  return (
    <div className="carousel">
      <img src={photos[active]} alt="animal" />
      <div className="carousel-smaller">
        {photos.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
            onClick={handleIndexClick}
            data-index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
