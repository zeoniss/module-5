// const Hotel = function(name, stars, capasity) {
//     this.name = name;
//     this.stars = stars;
//     this.capasity = capasity;
//     this.guestCount = 0;
//     this.greet = function(guestName) {
//         console.log(`Hello ${guestName}, wellcome to the ${this.name}`);
//         this.addGuests = function(amount) {
//             this.guestCount += amount;
//         };
//         this.removeGuests = function(amount) {
//             this.guestCount -= amount;
//         };
//     };
// };
// const hotel = new Hotel('Resort hotel', 5, 100);
// console.log(hotel);
// const motel = new Hotel('Sunrise hotel', 3, 500);
// console.log(motel);
// motel.greet('Vladimir Kriukov');
// motel.addGuests(223);
// const mango = {
//     name: 'Mango',
//     sales: 12,
//     sale(product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}`;
//     },
// };
// console.log(mango.sales);
// console.log(mango.sale('laptor'));
// console.log(mango.sales);
// Write code under this line
const Account = function(login, email) {
    this.login = login;
    this.email = email;
};
Account.prototype.getInfo = function(login, email) {
    return `login: ${this.login}, email: ${this.email}`;
};

console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'