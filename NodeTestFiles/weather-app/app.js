const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

//console.log(argv);

var encodedAddress = encodeURIComponent(argv.address);

request({url: `http://www.mapquestapi.com/geocoding/v1/address?key=9n7GAL3xenUMCLsQbZGG5WWYBHdj6ilV&location=1${encodedAddress}`, json: true}, (error, response, body) => {

  if(error) {
    console.log('Unable to Connect');
  } else {
    console.log(JSON.stringify(body, undefined, 2));  //PRETTY prints JSON object
  }

});
