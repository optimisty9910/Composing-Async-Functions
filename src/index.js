const axios = require('axios');

const LIST_URL = 'https://dog.ceo/api/breeds/list/all';

// A helper method to pick one value from a list
const getRandomValue = (values) => {
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

// Helper method to retrieve a list of breeds
// https://dog.ceo/dog-api/documentation/
// returns a Promise to an array of breed names

// const getBreeds = () => {
//   // implement me!
//   return axios.get(LIST_URL).then((response) => {
//     return Object.keys(response.data.message);
//   });
// };

const getBreeds = async () => {
  try {
    const response = await axios.get(LIST_URL);
    return Object.keys(response.data.message);
  } catch (error) {
    console.error('Error fetching breeds:', error);
    return [];
  }
};

// Helper method to retrieve a random image for a
// specified breed
// https://dog.ceo/dog-api/documentation/breed
// RANDOM IMAGE FROM A BREED COLLECTION
// returns a Promise to a url (string)

// const getRandomImageForBreed = (breed) => {
//   // implement me!
//   const url = 'https://dog.ceo/api/breed/' + breed + '/images/random';
//   return axios.get(url).then((response) => {
//     return response.data.message;
//   });
// };

const getRandomImageForBreed = async (breed) => {
  try {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const response = await axios.get(url);
    return response.data.message;
  } catch (error) {
    console.error('Error fetching random image for breed:', error);
    return null;
  }
};

// use our other helpers to make a function that returns
// a random image from a random breed
// returns a Promise to a url (string)

// const getRandomDogImage = () => {
//   // implement me!
//   const randomBreed = getBreeds().then((breeds) => {
//     return getRandomValue(breeds);
//   });

//   return randomBreed.then((breed) => {
//     return getRandomImageForBreed(breed);
//   });
// };

const getRandomDogImage = async () => {
  const breeds = await getBreeds();
  const randomBreed = getRandomValue(breeds);
  const randomImage = await getRandomImageForBreed(randomBreed);

  console.log(randomImage);
};
// This is the call we would like to make work
// This function should return a Promise to a url (string)
// getRandomDogImage().then((url) => {
//   console.log(url);
// });

getRandomDogImage();
