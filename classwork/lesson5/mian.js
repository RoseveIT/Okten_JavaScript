// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let min = (a,b,c) =>{
//     if (a < b && a < c){
//         console.log(a);
//     }else if (b < a && b < c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }
// min(2,1,3);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let min = (a,b,c) =>{
//     if (a > b && a > c){
//         console.log(a);
//     }else if (b > a && b > c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }
// min(1,2,3);

//- створити функцію яка повертає найбільше число з масиву
// let fn = (...arr) => {
//     let max = arr[0];
//     for (let ar of arr) {
//         if (ar > max){
//             max = ar;
//         }
//     }
//     return max;
// }
// console.log(fn(1, 2, 35, 6, 8, 100, 233));

//- створити функцію яка повертає найменьше число з масиву
// let fn = (...arr) => {
//     let min = arr[0];
//     for (let ar of arr){
//         if (ar < min){
//             min = ar;
//         }
//     }
//     return min;
// }
// console.log(fn(  2, 35, 6, 8, 100, 233));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let fn = (...arr)=>{
//     let sum = 0;
//     for (let ar of arr){
//         sum += ar;
//     }
//     return sum;
// }
// console.log(fn(1,2,10,200))

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let fn = (...arr) =>{
//     let sum = 0;
//     for (let ar of arr){
//         sum += ar;
//     }
//     return arf = sum/arr.length
// }
// console.log(fn(1,2,10));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let fn = (...numbers) => {
//     let min = numbers[0];
//     let max = numbers[0]
//     for (let number of numbers){
//         if(number > max) {
//             max = number;
//         }
//         if (number < min){
//             min = number;
//         }
//     }
//     console.log(max);
//     return min;
// }
// document.write(`<div>${fn(2,3,4,5,6,7,8,9,10)}</div>`)

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let fn = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random()*100));
//     }
//     return arr;
// }
// console.log(fn(10));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// let fn = (lenght, limit) => {
//     let arr = [];
//     for (let i = 0; i < lenght; i++) {
//         arr.push(Math.round(Math.random()*limit))
//     }
//     return arr;
// }
// console.log(fn(10, 2));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let fn = (...array) => {
//     let mas = []
//     for (let i = array.length - 1, ri= 0; i >= 0; i--,ri++) {
//         // mas.push(array[i]);
//         mas[ri] = array[i];
//     }
//     return mas;
// }
// console.log(fn(1, 2, 3, 4, 5, 6));