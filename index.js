const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  console.log('Response', desc);
  if (error) {
    console.log('Error fetch details:', error);
    return;
  } 
  
    const data = JSON.parse(desc);

    if (data.length > 0) {

      console.log(`Breed Name: ${data[0].name}`);
      console.log(`Description: ${data[0].description}`);
    } else {
      console.log(`Breed '${breedName}' not found.`);
    }
  
});