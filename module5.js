const Hotel = function(name, stars, capasity) {
    this.name = name;
    this.stars = stars;
    this.capasity = capasity;
};
const hotel = new Hotel('Resort hotel', 5, 100);
console.log(hotel);