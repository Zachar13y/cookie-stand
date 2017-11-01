'use strict';
// array literal, literally the numbers in an array
const locations = ['pdxAirport', 'pioneerSquare', 'Powells', 'stJohns', 'waterfront'];
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;}//The maximum is inclusive and the minimum is inclusive
                                    
const  pdx = {
    name: 'PDX Airport',            //change const names!!!!!
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesSold: hourlySales
    
};

const Powells = {
    min: 11,
    max: 38,
    avg: 3.7,
    hourlySales: hourlySales
};

const stJohns = {
    min: 20,
    max: 38,
    avg: 2.3,
    hourlySales: hourlySales
};

const waterfront = {
    min: 2,
    max: 16,
    avg: 4.6,
    hourlySales: hourlySales
};

const pioneerSquare = {
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesSold: hourlySales
};

function hourlySales(){
    const salesPerHour = [];
    for (let i = 0; i < hours.length; i++){
        const hour = hours[i];
        const numCustomers = getRandomIntInclusive(this.min, this.max);
        const numCookies = Math.floor(numCustomers * this.avg);
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        };
        salesPerHour.push(oneHour);
    }
    this.salesPerHour = salesPerHour;
}
pdx.cookiesSold();
console.log(pdx);

// for (let i = 0; i <= hours.length; i++){
//     pdxAirport.hourlySales(pdxAirport.min, pdxAirport.max);
//     Powells.hourlySales(Powells.min, Powells.max);
//     stJohns.hourlySales(stJohns.min, stJohns.max);
//     waterfront.hourlySales(stJohns.min, stJohns.max);
//     pioneerSquare.hourlySales(pioneerSquare.min, pioneerSquare.max);
//}
//console.log(locations);
console.log(locations);
console.log(numCustomers);

