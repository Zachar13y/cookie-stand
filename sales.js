// array literal, literally the numbers in an array
const locations = ['pdxAirport', 'pioneerSquare', 'Powells', 'stJohns', 'waterfront']
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'];


function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
//object literal, literally the props given in an object
    
const  pdxAirport ={
    calcSales: getRandomIntInclusive,
    min: 23,
    max: 65,
    avg: 6.3

};

for (let i = 0; i < hours.length; i++){
    console.log (pdxAirport.calcSales(pdxAirport.min, pdxAirport.max,))
}


    
// };

// const pioneerSquare = {
//     min: 3,
//     max: 24,
//     avg: 1.2
// };

// const Powells = {
//     min: 11,
//     max: 38,
//     avg: 3.7
// };

// const stJohns = {
//     min: 20,
//     max: 38,
//     avg: 2.3
// };

// const waterfront = {
//     min: 2,
//     max: 16,
//     avg: 4.6
// };

