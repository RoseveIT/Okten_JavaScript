// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// function Cars(model, producer, year, max_speed, engine){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.engine = engine;
//     this.drive = function (){
//         console.log(`Їдемо зі швидкістю ${this.max_speed} на годину`);
//     }
//     this.info = function (){
//         console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, max speed - ${this.max_speed}, engine - ${this.engine}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         console.log(this.max_speed = this.max_speed + newSpeed);
//     }
//     this.changeYear = function (newValue){
//         console.log(this.year = newValue);
//     }
//     this.adddriver = function (driver){
//         this.driver = driver;
//     }
// }
// let car = new Cars ('Audi','Germany',1993,220,2.0);
// console.log(car)
// car.drive()

//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// car.info()


//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// car.increaseMaxSpeed(20)

//-- changeYear (newValue) - змінює рік випуску на значення newValue
// car.changeYear(2000);


//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// car.adddriver("Dima")
// console.log(car)


//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// class Cars{
//     constructor(model, producer, year, max_speed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine = engine;
//         this.drive = function (){
//             console.log(`Їдемо зі швидкістю ${this.max_speed} на годину`)
//         }
//         this.info = function (){
//             console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, max speed - ${this.max_speed}, engine - ${this.engine}`)
//         }
//         this.increaseMaxSpeed = function (newSpeed){
//             console.log(this.max_speed = this.max_speed+newSpeed)
//         }
//         this.changeYear = function (newValue){
//             console.log(this.year = newValue)
//         }
//         this.addDriver = function (driver){
//             console.log(this.addDriver = driver)
//         }
//     }
// }

// let car = new Cars ('Audi','Germany',1993,220,2.0);
// car.drive();

//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// car.info();

//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// car.increaseMaxSpeed(20);

//-- changeYear (newValue) - змінює рік випуску на значення newValue
// car.changeYear(2000)

//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// car.addDriver("Dima")


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Popelyushka{
//     constructor(name, year, foot_size) {
//         this.name = name;
//         this.year = year;
//         this.foot_size = foot_size;
//     }
// }
// let userPop=[
//     new Popelyushka("anna1",18,36 ),
//     new Popelyushka("anna2",19,37 ),
//     new Popelyushka("anna3",20,35 ),
//     new Popelyushka("anna4",21,33 ),
//     new Popelyushka("anna5",22,35 ),
//     new Popelyushka("anna6",23,36 ),
//     new Popelyushka("anna7",24,37 ),
//     new Popelyushka("anna8",25,39 ),
//     new Popelyushka("anna9",26,40 ),
//     new Popelyushka("anna10",27,47 )
// ]
// console.log(userPop)
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Princ {
//     constructor(name, age, find_shoes) {
//         this.name = name;
//         this.age = age;
//         this.find_shoes = find_shoes;
//     }
// }
// const princer = new Princ("Dima", 20, 47)
// console.log(princer)

//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let para = (princer,userPop)=>{
//     for (let girl of userPop){
//         if (girl.foot_size === princer.find_shoes){
//            return `Дівчина принца ${girl.name}`
//         }
//     }
// }
// console.log(para(princer,userPop))

//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let Popel = userPop.find((girl)=>girl.foot_size === princer.find_shoes);
// console.log(Popel)