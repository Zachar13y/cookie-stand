// function Car(year, make, model, color){

//     this.year;
//     this.make;
//     this.model;
//     this.color;

//     this.bids = [];
// }

// Car.prototype.addbid = function(bid){
//     this.bid.add(bid);
// };

// const bmw = new Car('1998', 'BMW', '323', 'Silver');
// const honda = new Car('1993', 'Honda', 'Accord', 'White');


// const button = document.createElement('button');
//     button.textContent = ('Bid');
//     button.onclick = function(){
//         const name = prompt('Name:'); 
//         const bidAmount = prompt('Enter bid amount.')
//     }


function Cookie (type, price) {
    this.type = type;
    this.price = price;
}

Cookie.prototype.bakery = 'Alchemy Lab';

Cookie.prototype.addChocolateChips = function () {
    this.type = this.type ('with chocolate chips');
};

const cookie1 = new Cookie( 'sugar, $2');
const cookie2 = new Cookie( 'spice, $3');


console.log (cookie1);
console.log (cookie2);
