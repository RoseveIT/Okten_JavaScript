// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let name = (str, symvol) => {
//     let newArr =[];
//     if (str.includes(symvol)){
//         let a = str.split(symvol)
//         a.forEach((item)=>{
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(" "))
//     }
// }
// name('Hermione__Granger', "_")
// name('Ron---Whisley', "-")
// name('Harry..Potter', ".")


//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let ranNumber = (length,num) =>{
//     let newArr = [];
//     for (let i=0; i<length; i++){
//         newArr.push(Math.floor(Math.random()*num));
//     }
//     return newArr
// }
// console.log(ranNumber(10, 100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     Відсортувати його за допомоги sort
// let randomSort = (length,num)=>{
//     let newArr =[];
//     for (let i=0;i<length;i++){
//         newArr.push(Math.floor(Math.random()*num));
//     }
//     return newArr.sort((a,b)=>a-b);
// }
// console.log(randomSort(10, 100));

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let randomPar = (length,num)=>{
//     let newArr = [];
//     for (let i=0; i<length; i++){
//         newArr.push(Math.floor(Math.random()*num))
//     }
//     return newArr.filter((value) => value % 2 === 0);
// }
// console.log(randomPar(10, 1000));

//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let ranMapcall = (length, num)=>{
//     let newArr =[];
//     for (let i=0;i<length;i++){
//         newArr.push(Math.floor(Math.random()*num));
//     }
//     return newArr.map(value => value.toString())
// }
// console.log(ranMapcall(10, 50));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
// let sortNumbers = (num, direction)=> {
//     if(direction === '>') return num.sort((a,b)=>a-b);
//     if(direction === '<') return num.sort((a,b)=>b-a);
// }
// console.log(sortNumbers([11, 21, 3], "<"));

//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort(function (a,b) {
//     return a.monthDuration-b.monthDuration
// }));

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(function (value){
//     return value.monthDuration >= 5
// }))