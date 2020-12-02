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
function checkForSpam(message) {
    let result
        // Пиши код ниже этой строки
    const normalize = message[0].toUpperCase() + message.slice(1).toLowerCase
    result =
        normalize.includes('spam') || normalize.includes('sale') ? true : false

    // Пиши код выше этой строки
    return result
}
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'))
console.log(checkForSpam('Latest technology news'))
console.log(checkForSpam('JavaScript weekly newsletter'))
console.log(checkForSpam('Get best sale offers now!'))