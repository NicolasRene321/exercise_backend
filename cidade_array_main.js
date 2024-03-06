const readlineSync = require('readline-sync');
const City = require('./cidade_class');

console.log("====================================");
console.log(" Data of the city and Population");
console.log("====================================");

let name = readlineSync.question("Write the name of the city: ");
let state = readlineSync.question("Write the name of the state: ");
let numPopulation = readlineSync.question("Write the population number: ");
let numMen = readlineSync.question("Write the men number: ");
let numWomen = readlineSync.question("Write the women number: ");


const city = new City(name, state, numPopulation, numMen, numWomen);
let menPercentage = city.percentageMen(); 
let womenPercentage = city.percentageWomen(); 

console.log("====================================");
console.log(" Result about data of the city");
console.log("====================================");
console.log(`The men percentage is ${menPercentage.toFixed(0)} % of ${numPopulation} habitants`);
console.log(`The women percentage is ${womenPercentage.toFixed(0)} % of ${numPopulation} habitants`);