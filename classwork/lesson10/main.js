//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let divOne = document.createElement('div');
// divOne.innerText = " Контейнер 1";
// divOne.style.margin = '20px';
// document.body.appendChild(divOne);
// let divTwo = document.createElement('div');
// divTwo.innerText = 'Контейнер 2';
// divTwo.style.margin = '20px';
// document.body.appendChild(divTwo);
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name','formOne');
// divOne.appendChild(formOne)
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// divTwo.appendChild(formTwo);
//
// let inputOne = document.createElement('input');
// inputOne.setAttribute('name', 'inputOne');
//
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('name', 'inputTwo');
//
// let inputThree = document.createElement('input');
// inputThree.setAttribute('name', 'inputThree');
//
// let inputFour = document.createElement('input');
// inputFour.setAttribute('name', 'inputFour');
//
// let btn = document.createElement('button');
// btn.innerText = 'Submit';
// document.body.appendChild(btn);
//
// formOne.append(inputOne, inputTwo);
// formTwo.append(inputThree, inputFour);
//
// btn.addEventListener('click', function (){
//     console.log(document.forms.formOne.inputOne.value)
//     console.log(document.forms.formOne.inputTwo.value)
//     console.log(document.forms.formTwo.inputThree.value)
//     console.log(document.forms.formTwo.inputFour.value)
// })

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let inputOne = document.createElement('input')
// let inputTwo = document.createElement('input')
// let inputThree = document.createElement('input')
// let button = document.createElement('button')
// button.innerText = 'Create'
// document.body.append(inputOne,inputTwo,inputThree,button)
//
// button.addEventListener('click', function (){
//     let line = inputOne.value;
//     let con = inputTwo.value;
//     let inner = inputThree.value;
//
//     function createTable(line, con, inner){
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '1px solid black';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < line; i++){
//             let tr = document.createElement('tr')
//             tr.style.border = '1px solid red';
//             for (let j = 0; j < con; j++){
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid yellow'
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     createTable(line,con,inner)
// })

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let badWords = ['дурак','клоун','ванючка'];
// let inputOne = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = "Check"
// document.body.append(inputOne,button);
//
// button.addEventListener('click', function (){
//     let innerV = inputOne.value;
//     for (let mat of badWords){
//         if (mat === innerV){
//             alert('krya-krya')
//             inputOne.value = ''
//             return
//         }
//     }
// })

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
//Перевірку робити при натисканні на кнопку
let badWords = ['дурак','клоун','ванючка'];
let inputOne = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Check"
document.body.append(inputOne,button);

button.addEventListener('click', function (){
    let innerV = inputOne.value;
    for (let mat of badWords){
        if (innerV.toLowerCase().includes(`${mat}`)){
            alert('krya-krya')
            inputOne.value = ''
        }
    }

})