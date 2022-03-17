// callback hell
// setTimeout(()=>{
//     let num = 1;
//     console.log(num, 'Підйом о 8:45')
//     setTimeout(()=>{
//         num++;
//         console.log(num, 'Дати їсти котові')
//         setTimeout(()=>{
//             num++;
//             console.log(num, 'о 9:15 підключитися на пару')
//             setTimeout(()=>{
//                 num++;
//                 console.log(num, 'Поки ідуть лекції можна зробити завдання/тести')
//                 setTimeout(()=>{
//                     num++;
//                     console.log(num, 'Обід, пари закінчилися')
//                     setTimeout(()=>{
//                         num++;
//                         console.log(num, 'Піти помитися')
//                         setTimeout(()=>{
//                             num++;
//                             console.log(num, 'Поснідати(пообідати)')
//                             setTimeout(()=>{
//                                 num++;
//                                 console.log(num, 'Віддихати якийсь час(зіграти в пк ігри)')
//                                 setTimeout(()=>{
//                                     num++;
//                                     console.log(num, 'Після того вчити матеріал та зробити завдання з курсів Okten')
//                                     setTimeout(()=>{
//                                         num++;
//                                         console.log(num, 'Також вивчення ще одного курс(Js+React+Redux)')
//                                         setTimeout(()=>{
//                                             num++;
//                                             console.log(num, 'Перекус')
//                                             setTimeout(()=>{
//                                                 num++;
//                                                 console.log(num, 'Віддих')
//                                                 setTimeout(()=>{
//                                                     num++;
//                                                     console.log(num, 'Розпалити камін')
//                                                     setTimeout(()=>{
//                                                         num++;
//                                                         console.log(num, 'Нагодувати кота')
//                                                         setTimeout(()=>{
//                                                             num++;
//                                                             console.log(num, 'Перегляд лекцій або іншого цікаво матеріалу')
//                                                             setTimeout(()=>{
//                                                                 num++;
//                                                                 console.log(num, 'Перекус')
//                                                                 setTimeout(()=>{
//                                                                     num++;
//                                                                     console.log(num, 'Віддих/ігри/навчання')
//                                                                     setTimeout(()=>{
//                                                                         num++;
//                                                                         console.log(num, 'Спати коли мозок захоче')
//                                                                         setTimeout(()=>{
//                                                                             num++;
//                                                                             console.log(num, 'Сон 7-9 год')
//                                                                         },2000)
//                                                                     },2000)
//                                                                 },2000)
//                                                             },2000)
//                                                         },2000)
//                                                     },2000)
//                                                 },2000)
//                                             },2000)
//                                         },2000)
//                                     },2000)
//                                 },2000)
//                             },2000)
//                         },2000)
//                     },2000)
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
// },2000)

//promise
// /////////////////////////////////////////////////////////Варіант-1
// new Promise((resolve, reject) =>  {
//     let num = 1;
//     setTimeout(()=>{
//         console.log(`${num}. Підйом о 8:45`)
//         num++;
//         resolve(num);
//     },2000)
// })
//     .then(num => {
//         return new Promise((resolve,reject) => {
//             setTimeout(()=>{
//                 console.log(`${num}. Дати їсти котові`)
//                 num++;
//                 resolve(num);
//             },2000)
//         })
//     })
//     .then(num => {
//         return new Promise((resolve,reject) => {
//             setTimeout(()=>{
//                 console.log(`${num}. о 9:15 підключитися на пару`)
//                 num++;
//                 resolve(num);
//             },2000)
//         })
//     })
//     .then(num => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log(`${num}. Поки ідуть лекції можна зробити завдання/тести`)
//             num++;
//             resolve(num);
//         },2000)
//     })
// })
//     .then(num => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log(`${num}. Обід, пари закінчилися`)
//             num++;
//             resolve(num);
//         },2000)
//     })
// })
//     .then(num => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log(`${num}. Піти помитися`)
//             num++;
//             resolve(num);
//         },2000)
//     })
// })
//     .then(num => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log(`${num}. і т.д.`)
//             num++;
//             resolve(num);
//         },1000)
//     })
// })
// /////////////////////////////////////////////////////////Варіант-2
// function timeList(num, txt, sec){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`${num}. ${txt}`)
//             num++;
//             resolve(num);
//         },sec)
//     })
// }
// timeList(1,'Підйом о 8:45',2000)
//     .then(value => timeList(value,'Дати їсти котові', 2000))
//     .then(value => timeList(value,'о 9:15 підключитися на пару',2000))
//     .then(value => timeList(value,'Поки ідуть лекції можна зробити завдання/тести',2000))
//     .then(value => timeList(value,'Обід, пари закінчилися',2000))
//     .then(value => timeList(value,'Піти помитися',2000))
//     .then(value => timeList(value,'і т.д.',1000))