//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника
// let ploS = (a,b) => a*b;
// console.log(ploS(10,20));

//- створити функцію яка обчислює та повертає площу кола
// let ploC = (r) => Math.PI*Math.pow(r,2);
// console.log(ploC(3));

//- створити функцію яка обчислює та повертає площу циліндру
// let ploC = (r,h) => 2*Math.PI*r*h;
// console.log(ploC(3, 4));

//- створити функцію яка приймає масив та виводить кожен його елемент
// let arr = (array) =>{
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// arr([1,2,3,"SSS",true,false]);


//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let par = (p) =>{
//     document.write(`<p>${p}</p>`);
// }
// par("SSS");

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ull = (item) =>{
//     document.write(`<ul>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`</ul>`);
// }
// console.log(ull("SSS"));

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ull = (item, lii) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < lii; i++) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`)
// }
// ull("DDD",10);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let full = (arr) =>{
//     document.write(`<ol>`);
//     for (let i = 0; i < arr.length; i++) {
//             document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ol>`);
// }
// full([1,2,3,4,"SSS", "DDD",false]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let full = (obg) =>{
//     for (let ob of obg) {
//         document.write(`<div>${ob.id}. ${ob.name} ${ob.age}</div>`)
//     }
// }
// full([
//     {
//         id:1,
//         name: 'Rosr',
//         age: 18
//     },
//     {
//         id:2,
//         name: 'dima',
//         age: 18
//     },
//     {
//         id:3,
//         name: 'anna',
//         age: 18
//     }
// ])