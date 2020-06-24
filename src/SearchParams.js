import React, { useState, useEffect } from "react";
import pf from "./Api.js";
import useDropDown from "./useDropDown";
import Results from "./Results";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animalTypes, setAnimalTypes] = useState([]);
  const [animal, AnimalDropDown] = useDropDown("Animal", "Dog", animalTypes);

  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropDown, setBreed] = useDropDown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const animals = await pf.animal.search({
      type: animal,
      location: location,
      breed: breed
    });

    setPets(animals.data.animals || []);
  }

  useEffect(() => {
    pf.animalData.types().then(response => {
      //console.log(response.data.types);
      const arr = response.data.types.map(item => item.name);
      setAnimalTypes(arr);
    });

    setBreeds([]);
    setBreed("");
    pf.animalData.breeds(animal).then(response => {
      //console.log(response.data.breeds);
      const breedStrings = response.data.breeds.map(breedObj => breedObj.name);
      setBreeds(breedStrings);
    });
  }, [location, animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={event => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location *
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
