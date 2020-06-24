import React, { useState, useEffect } from "react";
import pf from "./Api.js";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

const Details = ({ id }) => {
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    let mounted = true;
    pf.animal
      .show(+id)
      .then(response => {
        if (mounted) {
          setState({
            name: response.data.animal.name,
            animal: response.data.animal.type,
            location: `${response.data.animal.contact.address.city}, ${
              response.data.animal.contact.address.state
            }`,
            description: response.data.animal.description,
            media: response.data.animal.photos,
            breed: response.data.animal.breeds.primary,
            url: response.data.animal.url,
            loading: false
          });
        }
      })
      .catch(err => setState({ error: err }));
    return () => (mounted = false);
  }, [id, setState]);

  //const adopt = () => navigate(state.url);

  const adopt = () => {
    const url = state.url;
    window.open(url, "_blank");
  };

  if (state.loading) {
    return <h1>loading … </h1>;
  }

  const { animal, breed, location, description, media, name } = state;

  return (
    <div className="details">
      <Carousel media={media} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
        <button onClick={adopt}>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
