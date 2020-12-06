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
// motel.removeGuests(184);
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
// const Account = function(login, email) {
//     this.login = login;
//     this.email = email;
// };
// Account.prototype.getInfo = function(login, email) {
//     return `login: ${this.login}, email: ${this.email}`;
// };

// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'
// const animal = { eats: true }
// const dog = Object.create(animal)
// dog.barks = true
// const dogKeys = Object.keys(dog)
// console.log(dogKeys)
// const Guest = function(name, room) {
//     this.name = name
//     this.room = room
// }
// const mango = new Guest('Mango', 28)
// console.log(mango)
// Write code under this line
// const Account = function(login, email) {
//     this.login = login
//     this.email = email
// }
// Account.prototype.getInfo = function(login, email) {
//     const string = `login : ${this.login}, email: ${this.email}`
//     return string
// }

// console.log(typeof Account.prototype.getInfo)
//     // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof')
// console.log(mango.getInfo())
//     // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account('Poly', 'poly@mail.com')
// console.log(poly.getInfo())
//     // 'login : Poly, email: poly@mail.com'
// const User = function(name, age, followers) {
//     this.name = name
//     this.age = age
//     this.followers = followers
// }
// User.prototype.getInfo = function(name, age, followers) {
//     const string = `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     return string
// }

// console.log(typeof User)
//     // 'function'

// const mango = new User('Mango', 2, 20)
// console.log(mango.getInfo())
//     // 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo)
//     // 'function'

// const poly = new User('Poly', 3, 17)
// console.log(poly.getInfo())
//     // 'User Poly is 3 years old and has 17 followers'
// Write code under this line
// const Storage = function(items) {
//     this.items = items
// }
// Storage.prototype.getItems = function(items) {
//     return goods
// }

// // this.addItem = function(item) {
// //     this.goods += item
// // }
// // this.removeItem = function(item) {
// //     this.goods -= item
// // }

// console.log(typeof Storage)
//     // 'function'

// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']

// const storage = new Storage(goods)

// console.log(storage.getItems())
//     /* [
//                                               'Нанитоиды',
//                                               'Пролонгер',
//                                               'Железные жупи',
//                                               'Антигравитатор'
//                                             ] */

// storage.addItem('Дроид')
// console.log(storage.getItems())
//     //     /* [
//     //       'Нанитоиды',
//     //       'Пролонгер',
//     //       'Железные жупи',
//     //       'Антигравитатор',
//     //       'Дроид'
//     //     ] */

// storage.removeItem('Пролонгер')
// console.log(storage.getItems())
//     //     /* [
//     //       'Нанитоиды',
//     //       'Железные жупи',
//     //       'Антигравитатор',
//     //       'Дроид'
//     //     ] */
// const Hero = function(name, xp) {
//     this.name = name
//     this.xp = xp
// }
// Hero.prototype.gainXp = function(amount) {
//     console.log(`${this.name} gained ${amount} experience points`)
//     this.xp += amount
// }
// const mango = new Hero('Mango', 2000)
// console.log(mango)
// mango.gainXp(3000)
// console.log(mango)
// const Warrior = function(name, xp, weapon) {
//     Hero.call(this, name, xp)
//     this.weapon = weapon
// }
// Warrior.prototype = Object.create(Hero.prototype)
// Warrior.prototype.constructor = Warrior
// Warrior.prototype.attack = function() {
//     console.log(`${this.name} attack with ${this.weapon}`)
// }
// const gedeon = new Warrior('Gedeon', 3900, 'axe')
// console.log(gedeon)
// gedeon.attack()
// gedeon.gainXp(5000)
// class Guest {}
// console.log(typeof Guest)
// console.log(Guest.prototype)

// const guest = new Guest()
// console.log(guest)
// class Guest {
//     // Собственные свойства класса размещаем в конструкторе
//     constructor(name, roomNumber) {
//         this._name = name
//         this._roomNumber = roomNumber
//     }

//     // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//     get name() {
//         return this._name
//     }

//     set name(value) {
//         this._name = value
//     }
// }

// const mango = new Guest('Mango', 26)

// // обращение к get и set не требует вызова - т.е. без ()
// console.log(mango.name) // Mango

// mango.name = 'Mango the Fluffy'
// console.log(mango.name) // Mango the Fluffy
// class Calc {
//     constructor() {}
//     static get PI() {
//         return 3.14
//     }
//     static add(...args) {
//         return args.reduce((acc, next) => acc + next, 0)
//     }
//     static mult(...args) {
//         return args.reduce((acc, next) => acc * next, 1)
//     }
// }
// console.log(Calc.PI)
// console.log(Calc.add(9, 9, 6))
// console.log(Calc.mult(8, 9, 2))
//
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message
//         // Пиши код ниже этой строки
//     const totalPrice = pricePerDroid * orderedQuantity
//     if (totalPrice === customerCredits) {
//         customerCredits -= totalPrice
//         message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`
//     } else if (totalPrice > customerCredits) {
//         message = 'Недостаточно средств на счету!'
//     } else if ((customerCredits -= totalPrice)) {
//         message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`
//     }
//     // Пиши код выше этой строки
//     return message
// }
// console.log(makeTransaction(1000, 3, 15000))
// console.log(makeTransaction(500, 10, 5000))
// class Storage {
//     constructor(items) {
//         this.items = items
//     }
//     getItems() {
//         return this.items
//     }
//     addItem(item) {
//         this.items.push(item)
//         return this.items
//     }
//     removeItem(item) {
//         const index = this.items.indexOf(item)
//         if (index === 1) {
//             this.items.splice(index, 1)
//         }
//         //console.log(typeof Storage);
//         // 'function'
//     }
// }
// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']

// const storage = new Storage(goods)

// console.log(storage.getItems())
//     /* [
//                                                       'Нанитоиды',
//                                                       'Пролонгер',
//                                                       'Железные жупи',
//                                                       'Антигравитатор'
//                                                     ] */

// storage.addItem('Дроид')
// console.log(storage.getItems())
//     /* [
//                                                       'Нанитоиды',
//                                                       'Пролонгер',
//                                                       'Железные жупи',
//                                                       'Антигравитатор',
//                                                       'Дроид'
//                                                     ] */

// storage.removeItem('Пролонгер')
// console.log(storage.getItems())
//     /* [
//                                                       'Нанитоиды',
//                                                       'Железные жупи',
//                                                       'Антигравитатор',
//                                                       'Дроид'
//                                                     ] */
// function checkStorage(available, ordered) {
//     let message
//         // Пиши код ниже этой строки
//     if (ordered === 0) {
//         message = 'В заказе еще нет товаров'
//     } else if (ordered > available) {
//         message = 'Слишком большой заказ, на складе недостаточно товаров!'
//     } else {
//         message = 'Заказ оформлен, с вами свяжется менеджер'
//     }

//     // Пиши код выше этой строки
//     return message
// }
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0
//     const BRONZE_DISCOUNT = 0.02
//     const SILVER_DISCOUNT = 0.05
//     const GOLD_DISCOUNT = 0.1
//     let discount
//         // Пиши код ниже этой строки
//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT
//     }
//     if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT
//     }
//     if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT
//     }
//     if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT
//     }

//     // Пиши код выше этой строки
//     return discount
// }
// function checkStorage(available, ordered) {
//     let message
//         // Пиши код ниже этой строки

//     message =
//         ordered > available ?
//         'На складе недостаточно товаров!' :
//         'Заказ оформлен, с вами свяжется менеджер'
// }

// // Пиши код выше этой строки
// return message
// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam'
//     let message

//     switch (password) {
//         case null:
//             message = 'Отменено пользователем!'
//             break
//         case ADMIN_PASSWORD:
//             message = 'Добро пожаловать!'
//             break

//             message = 'Доступ запрещен, неверный пароль!'
//                 // default:
//                 //     message = 'Доступ запрещен, неверный пароль!'
//             break
//         default:
//             0
//     }
//     return message
// }
// console.log(checkPassword('polyhax'))
// console.log(checkPassword(null))

// console.log(checkPassword('jqueryismyjam'))
// console.log(checkPassword('mangohackzor'))
// function checkForSpam(message) {
//     let result
//         // Пиши код ниже этой строки
//     const normalize = message.toLowerCase()
//     if (normalize.includes('sale')) {
//         result = true
//     }
//     if (normalize.includes('spam')) {
//         result = true
//     }

//     // Пиши код выше этой строки
//     return result
// }

// console.log(checkForSpam('Latest technology news'))
// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam'
//         // Пиши код ниже этой строки

//     if (password === ADMIN_PASSWORD) {
//         return `Добро пожаловать!`
//     }
//     if (password !== ADMIN_PASSWORD) {
//         return `Доступ запрещен, неверный пароль!`
//     }
// }
// console.log(checkPassword('mangohackzor'))
// console.log(checkPassword('polyhax'))
// console.log(checkPassword('jqueryismyjam'))
// Write code under this line
// class Car {
//     // Write code under this line
//     static getSpecs(car) {
//         return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price} `
//     }
//     constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
//         this.maxSpeed = maxSpeed
//         this.speed = speed
//         this.isOn = isOn
//         this.distance = distance
//         this._price = price
//     }
//     get price() {
//         return this._price
//     }
//     set price(value) {
//         this._price = value
//     }
//     turnOn() {
//         this.isOn = true
//     }
//     turnOff() {
//         this.isOn = true
//         this.speed = 0
//     }
//     accelerate(value) {
//         if (this.speed + value <= this.maxSpeed) {
//             this.speed += value
//         } else {
//             this.speed = this.maxSpeed
//         }
//     }
//     decelerate(value) {
//         if (this.speed - value > 0) {
//             this.speed -= value
//         } else {
//             this.speed = 0
//         }
//     }
//     drive(hours) {
//         if (this.isOn) {
//             this.distance += this.speed * hours
//         }
//     }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 })
// mustang.turnOn()
// mustang.accelerate(50)
// mustang.drive(2)
// Car.getSpecs
// console.log(Car.getSpecs(mustang));
// ('maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000')

// mustang.decelerate(20)
// mustang.drive(1)
// mustang.turnOff()

// console.log(Car.getSpecs(mustang));
// ('maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000')

// console.log(mustang.price) // 2000
// mustang.price = 4000
// console.log(mustang.price) // 4000
// function checkStorage(available, ordered) {
//     // Пиши код ниже этой строки
//     let message

//     if (ordered === 0) {
//         return (message = 'В заказе еще нет товаров')
//     }
//     if (ordered > available) {
//         return (message = 'Слишком большой заказ, на складе недостаточно товаров!')
//     }
//     return (message = 'Заказ оформлен, с вами свяжется менеджер')
// }
// console.log(checkStorage(100, 50))
// console.log(checkStorage(100, 130))
// console.log(checkStorage(70, 0))
// console.log(checkStorage(200, 20))
// console.log(checkStorage(200, 250))
// console.log(checkStorage(150, 0))
// function slugify(title) {
//     // Пиши код ниже этой строки
//     const toSplit = title.split(' ')
//     const slug = toSplit.join('-')
//     return slug.toLowerCase()
//         // Пиши код выше этой строки
// }
// console.log(slugify('Массивы для новичков'))
// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
//     const newArray = firstArray.concat(secondArray)
//     if (newArray.length > maxLength) {
//         return newArray.slice(0, maxLength)
//     }
//     console.log(newArray)
//         // Пиши код выше этой строки
// }

// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3))
// console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4))
// function calculateTotal(number) {
//     // Пиши код ниже этой строки
//     let result
//     for (let i = 0; i <= number; i += 1) {
//         return number
//     }

//     // Пиши код выше этой строки
// }
// console.log(calculateTotal(1)) //1
// console.log(calculateTotal(7)) //28
// console.log(calculateTotal(18)) //171
// const start = 3
// const end = 7

// for (let i = start; i <= end; i += 1) {
//     // Дополни эту строку
//     console.log((i = i + i))
// }
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин']

// for (let i = 0; i <= fruits.length; i += 1) {
//     // Дополни эту строку
//     const fruit = fruits[i] // Дополни эту строку
//     console.log(fruit)
// }
// function findLongestWord(str) {
//     let strSplit = str.split(' ')
//     let longestWord = 0
//     for (let i = 0; i < strSplit.length; i += 1) {
//         if (strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length
//         }
//     }
//     return longestWord
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
// function createArrayOfNumbers(min, max) {
//     const numbers = []
//         // Пиши код ниже этой строки

//     for (let i = min; i <= max; i += 1) {
//         numbers.push[i]
//         console.log(numbers)
//             // Пиши код выше этой строки
//     }
//     return numbers
// }
// console.log(createArrayOfNumbers(14, 17))
// function filterArray(numbers, value) {
//     // Пиши код ниже этой строки
//     const result = []
//     for (let i = 0; i <= numbers.length; i += 1)
//         if (numbers[i] > value) {
//             result.push(numbers[i])
//         }

//     return result
//         // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([1, 2, 3, 4, 5], 4))
// console.log(filterArray([1, 2, 3, 4, 5], 5))
// console.log(filterArray([12, 24, 8, 41, 76], 20))
// function checkFruit(fruit) {
//     const fruits = ['яблоко', 'слива', 'груша', 'апельсин']

//     if (fruits.includes(fruit)) {
//         return true
//     } else {
//         return false
//     } // Дополни эту строку
// }
// console.log(checkFruit('слива'))
// console.log(checkFruit('груша'))
// console.log(checkFruit('мандарин'))
// console.log(checkFruit('Груша'))
// console.log(checkFruit('яблоко'))
function getCommonElements(array1, array2) {
    const result = []
    for (let i = 0; i < array1.length; i += 1)
        if (array1.includes(array2[i])) {
            result.push(array2[i])
        }
    return result
}
console.log(getCommonElements([1, 2, 3], [2, 4]))
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))