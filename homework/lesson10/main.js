//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let click = document.getElementById('text')
// let button = document.getElementById('button')
// button.onclick = function (){
//     click.style.display = 'none'
// }

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.getElementById('button');
// button.onclick = function (){
//     button.style.display='none';
// }

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
// document.getElementById('button').onclick = function () {
//     let age = document.getElementById('age').value;
//     if(age >= 18){
//         console.log('Вам 18 або більше');
//     }else {
//         console.log('Вам менше 18')
//     }
// }

//- Создайте меню, которое раскрывается/сворачивается при клике
// let menuEl = document.querySelector('.menu')
// let titleEl = menuEl.querySelector('title')
// titleEl.onclick = function (){
//     menuEl.classList.toggle('hidden')
// }

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments =[
//     {title: "Ivan", body:'купи машину'},
//     {title: "Body", body:'купи квіти'},
//     {title: "Inna", body:'купи годинник'},
//     {title: "Olya", body:'купи їжу'}
// ]
// let divMain = document.createElement('div');
// for (let item of comments){
//     let div = document.createElement('div')
//     let h3 = document.createElement('h3')
//     let p = document.createElement('p')
//     let btn = document.createElement('button')
//
//     h3.innerText = item.title
//     p.innerText = item.body
//     btn.innerText = 'Close me'
//
//     btn.onclick = function (){
//         p.classList.add('pHidden')
//     }
//     div.append(h3,p,btn)
//     divMain.append(div)
// }
// document.body.appendChild(divMain)