//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function s(a, b){
//     return a * b;
// }
// console.log(s(10,20));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
// function s(r){
//     return Math.PI*Math.pow(r,2);
// }
// console.log(s(5));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function s(h, r){
//     return 2*Math.PI*r*h;
// }
// console.log(s(5,7))

//- створити функцію яка приймає масив та виводить кожен його елемент
// let x = [10,11,12];
// function arrs(array){
//     for (let name of array){
//         console.log(name);
//     }
// }
// arrs(x);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let x = "Javascript";
// function name(text){
//     document.write(`<p>${text}</p>`)
// }
// name("css");
// name(x);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function name(item){
//     document.write(`<ul>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`</ul>`);
// }
// name("Rost");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function name(x,y){
//     document.write(`<ul>`)
//     for (i = 0; i<x; i++){
//         document.write(`<li>${y}</li>`)
//     }
//     document.write(`</ul>`)
// }
// name(2,444)

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arr(...elem){
//     document.write(`<ul>`);
//     for (i = 0; i < elem.length; i++){
//         document.write(`<li>${elem[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// arr(12,typeof 43,'fff',typeof "qqq",typeof false, true);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let x = [{
//         id:1,
//         name:"Rostyslav",
//         age:18
//      }, {
//         id:2,
//         name:"Pavel",
//         age:18
//     }, {
//         id:3,
//         name:"Ivan",
//         age:18
//     }];
// function names(obg){
//     for (let obqs of obg){
//         document.write(`<div>${obqs.id} ${obqs.name} ${obqs.age}<div>`)
//     }
// }
// names(x);