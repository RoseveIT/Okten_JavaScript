
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт
// потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let usersCon = document.getElementById('usersDiv')
let myFav = JSON.parse(localStorage.getItem('fav')) || []
for (let user of users){
    let divUser = document.createElement('div')
    divUser.innerText = user.name + ' '
    let btn = document.createElement('button')
    btn.innerText = 'add in my favorite'
    btn.onclick = function (){
        myFav.push(user)
        localStorage.setItem('fav', JSON.stringify(myFav))
    }
    divUser.append(btn)
    usersCon.append(divUser)
}