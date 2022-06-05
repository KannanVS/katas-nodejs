const fs = require('fs');
const JSONStream = require('JSONStream');
const { exit } = require('process');

// deconstruct input argument
const [ inputID ] = process.argv.slice(2);

// function to parse the json file
const getStream = () => {
  const file = 'input.json';
  const stream = fs.createReadStream(file, { encoding: 'utf8' });
  const parser = JSONStream.parse('*');
  return stream.pipe(parser);
}

getStream().on('data', (parsedData) => {
  // check ID and display the name
  if (parsedData.id === parseInt(inputID)) {
    console.log(parsedData.name);
    // stop the process after finding the result
    exit();
  }
});
