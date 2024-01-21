
const request = require('./node_modules/request');



const breedName = process.argv[2];



request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  if (error) {
    console.error('Error occured:', error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length > 0) {

    console.log(`Breed Name: ${data[0].name}`);
    console.log(`Description: ${data[0].description}`);
  } else {
    console.log(`Breed '${breedName}' not found.`);
  }
});
