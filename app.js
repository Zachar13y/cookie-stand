'use strict.';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//const locations = ['airport', 'pioneer' , 'powells' , 'stjohns' , 'waterfront'];

const airport = new Store ('Portland Airport' , 23 , 65 , 6.3);
const pioneer = new Store ('Pioneer Square' , 3 , 24 , 1.2);
const powells = new Store ('Powell\'s Bookstore' , 11 , 38 , 3.7);
const stjohns = new Store ('St Johns' , 20 , 38 , 2.3);
const waterfront = new Store ('Waterfront' , 2 , 16 , 4.6);
const hawthorne = new Store ( 'Hawthorne', 5, 20, 3);

function Store (name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.salesByHour = [];

    for (let i = 0; i < hours.length; i++){
        const hour = hours[i];
        const numCustomers = getRandom(this.min, this.max);
        const numCookies = Math.round(numCustomers * this.avg);
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        };
        this.salesByHour.push(oneHour);
    }
    
    console.log( this.salesByHour );
}


// //Random customer number generator.
function getRandom (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const mainList = document.getElementById('list');
const trow = document.createElement('TR');
mainList.appendChild(trow);

const space = document.createElement('TH');
space.textContent = '';
trow.appendChild(space);

for (let i = 0; i < hours.length; i++) {
    const tHead = document.createElement('TH');
    tHead.textContent = hours[i];
    trow.appendChild(tHead);
};

Store.prototype.build = function () {


    const trCookie = document.createElement('TR');
    mainList.appendChild(trCookie);
    const locNames = document.createElement('TH');
    locNames.textContent = this.name;
    trCookie.appendChild(locNames);

    for (let i = 0; i < this.salesByHour.length; i++){
        const tdCookie = document.createElement('TD');
        tdCookie.textContent = this.salesByHour[i].cookiesSold;
        trCookie.appendChild(tdCookie);
    }

    let totals = 0;

    for (let i = 0; i < hours.length; i++){
        totals = totals + this.salesByHour[i].cookiesSold;

        console.log (totals);
    }

};

console.log( 'airport.row = ', airport.row );

// for (let i = 0; i < hours.length; i++){
//     const totals = ProgressEvent.total(numCookies)
//}

// const tbody = document.getElementById('table-body');
// tbody.appendChild(airportRow);

airport.build();
pioneer.build();
powells.build();
stjohns.build();
waterfront.build();
hawthorne.build();
//render()mainList;


// renderHoursRow ();

console.log (airport);

