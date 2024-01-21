
const request = require('./node_modules/request');

const fetchBreedDescription = function(breedName, callback) {

  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      console.error('Error occured:', error);
      return;
    }
  });

};

module.exports = { fetchBreedDescription };