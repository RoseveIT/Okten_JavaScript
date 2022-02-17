//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let userArr=[
    new User(4,"Rost", "Lunyo", "rostyslav.77755@gmail.com","0633229061"),
    new User(5,"Dima", "Lunyoee", "rost@gmail.com","0633229061"),
    new User(3,"Oleg", "Lun", "rostyslav.5@gmail.com","0633229061"),
    new User(2,"Lyoha", "nyo", "rostyslav@gmail.com","0633229061"),
    new User(1,"Body", "L", "yslav.77755@gmail.com","0633229061"),
    new User(6,"Sasha", "yo", "rostyslav.77755@gmail.com","0633229061"),
    new User(7,"Vlad", "o", "av.77755@gmail.com","0633229061"),
    new User(8,"Jenya", "Lu", "styslav.77755@gmail.com","0633229061"),
    new User(9,"Nazar", "gnyo", "lav.77755@gmail.com","0633229061"),
    new User(10,"Volodya", "yow", "rost55@gmail.com","0633229061")
]
// console.log(userArr);


//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUserarr = userArr.filter((us)=>{
//     if (us.id % 2 === 0){
//         return us
//     }})
// console.log(filterUserarr);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(userArr.sort((a,b)=>a.id - b.id));

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let clientsArr = [
//     new Client(1,'rost',"lunyo",'rostyslav.gmail.com','0633229061',['shoes',"notebook","iphone"]),
//     new Client(3,'rost',"lunyo",'rostyslav.gmail.com','0633229061',['shoes']),
//     new Client(4,'rost',"lunyo",'rostyslav.gmail.com','0633229061',['shoes',"notebook"]),
//     new Client(5,'rost',"lunyo",'rostyslav.gmail.com','0633229061',['shoes',"notebook","iphone",'car']),
//     new Client(6,'rost',"lunyo",'rostyslav.gmail.com','0633229061',['shoes',"notebook"]),
//     new Client(7,'rost',"lunyo",'rostyslav.gmail.com','0633229061',['shoes',"notebook","iphone"]),
//     new Client(2,'rost',"lunyo",'rostyslav.gmail.com','0633229061',['shoes']),
//     new Client(8,'rost',"lunyo",'rostyslav.gmail.com','0633229061',['shoes',"notebook","iphone"]),
//     new Client(9,'rost',"lunyo",'rostyslav.gmail.com','0633229061',["iphone",'duplom']),
//     new Client(10,'rost',"lunyo",'rostyslav.gmail.com','0633229061',["table","sony"]),
// ]
// console.log(clientsArr);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clientsArr.sort((a, b) => a.order.length - b.order.length));