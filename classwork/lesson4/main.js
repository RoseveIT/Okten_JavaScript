//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function addWords(a,b,c){
//     if (a < b && a < c){
//         console.log(a);
//     }else if (b < a && b < c){
//         console.log(b);
//     }else {
//         console.log(c);
//     }
// }
// addWords(5, 10, 2);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function addWords(a,b,c){
//     if (a > b && a > c){
//         console.log(a);
//     }else if (b > a && b > c){
//         console.log(b);
//     }else {
//         console.log(c);
//     }
// }
// addWords(5, 10, 2);

//- створити функцію яка повертає найбільше число з масиву
// let x = [2,3,6,9,22,14];
// function arrNumb(array){
//     let max = array[0];
//     for (let number of array){
//         if (number > max){
//             max = number;
//         }
//     }
//     return max;
// }
// console.log(arrNumb(x));


//- створити функцію яка повертає найменьше число з масиву
// let x = [33,22,55,23,61,5,2000];
// function minNumb(array){
//     let min = array[0];
//     for (let number of array){
//         if (number < min){
//             min = number;
//         }
//     }
//     return min;
// }
// console.log(minNumb(x));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sumNum(...numbers){
//     let sum = 0;
//     for (let number of numbers){
//     sum += number;
//     }
//     return sum;
// }
// console.log(sumNum(1,2,18));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function sumNum(numbers){
//     let sum = 0;
//     for (let number of numbers){
//         sum += number;
//     }
//     return sum = sum/numbers.length;
// }
// let a = sumNum([2, 8, 10])
// console.log(a);

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function numB(...numbers){
//     let min = numbers[0];
//     let max =numbers[0];
//     for (let number of numbers){
//         if (number < min){
//             min = number;
//         }
//         if (number > max){
//             max = number;
//         }
//     }
//     console.log(max);
//     return min
// }
// console.log(numB(12,5,48,99));

//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function genRan(numbers){
//     let array = [];
//     for (let i = 0; i < numbers; i++) {
//         array.push(Math.round(Math.random()*100))
//
//     }
//     return array;
// }
// console.log(genRan(100));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function genRan(lim){
//     let arr = [];
//     for (let i = 0; i < lim; i++) {
//         arr.push(Math.round(Math.random() * lim))
//     }
//     return arr;
// }
// document.write(`${genRan(50)}`)

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function array(...mas){
//     let mas = [];
//     for (let i = mas.length - 1; ri = 0; i >= 0; i--; ri++) {
//         newArr[ri] = newArr[i];
//     }
//     return newArr
// }
// document.write(`${array([1,2,3,4,5])}`);


