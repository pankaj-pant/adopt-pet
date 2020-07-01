# Adopt a pet

A simple front end application built using React. The Adopt a pet application connects to the Petfinder V2 API and allows you to access the Petfinder database of hundreds of thousands of pets ready for adoption. Based on the user input (Location, Animal type) a list of 20 animals in a 100 mile radius of the location is provided to the user.


* [Live Demo](https://adopt-a-pet-e40bc.web.app/)

## Quick start

1. [Clone the repo](#1-clone-the-repo).
1. [Generate API keys](#2-install-and-build-app).
1. [Install and build app](#3-install-and-build-app).
1. [Run the frontend](#4-run-the-frontend).

### 1. Clone the repo

Clone the `adopt-pet` repository locally. In a terminal, run:

```
$ git clone https://github.com/pankaj-pant/adopt-pet.git
$ cd adopt-pet
```

### 2. Generate API keys

Register at [PetfinderAPI](https://www.petfinder.com/developers/) to get API keys. Petfinder API allows you to search their database for available pets ready for adoption.

**Make a new `.env` file and add your secrets**

```sh
 API_KEY = your_api_key
 API_SECRET = your_api_secret
```

### 3. Install and build app

To install the dependencies run the command:

    $ npm install

### 4. Run the frontend

This command serves the app at `http://localhost:1234/`.

    $ npm run dev

## License
[MIT](https://choosealicense.com/licenses/mit/)