//a) додає клас з назвою групи, елементу з ід main_header
// let addNewClass = document.getElementById('main_header');
// addNewClass.classList.add('xxx')

// b) робить шириниу елементу ul 400px
// let widthUl400 = document.querySelector('body > ul')
// widthUl400.style.width = '400px'
// widthUl400.style.border = "1px solid black"

//c) робить шириниу всіх елементів з класом linkList шириною 50%
// let widthAll50 = document.getElementsByClassName('linkList');
// for (let child of widthAll50){
//     child.style.width = '50%'
//     child.style.border = '1px solid black'
// }

//d) отримує текст який зберігається в елементі з класом listElement2
// let elementsByClassName = document.getElementsByClassName('listElement2');
// console.log(elementsByClassName);
// elementsByClassName[0].innerHTML = '<a href="#" >New Txt</a>'

//e) отримує всі елементи li та змінює ім колір фону на сірий
// let getLiChangeBg = document.getElementsByTagName('li');
// for (let child of getLiChangeBg){
//     child.style.background = 'silver'
//     child.style.border = '1px solid black'
// }

//f) отримує всі елементи 'a' та додає їм клас anchor
// let anchor = document.getElementsByTagName('a');
// for (let childAnchor of anchor){
//     childAnchor.classList.add('anchor')
// }

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
// let allTagA = document.getElementsByTagName('a');
// for (let childTagA of allTagA){
//     if (childTagA.innerText === 'link3'){
//         childTagA.style.fontSize = '40px'
//     }
// }

//h) отримує всі елементи 'a' та додає їм клас element_XXX.
// Де XXX - текстовий контент елементу a
// let allTagA = document.getElementsByTagName('a');
// for (let childTag of allTagA){
//     childTag.classList.add(`document_${childTag.innerText}`)
// }

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let allElementsChangeBg = document.getElementsByClassName('sub-header');
// for (let child of allElementsChangeBg){
//     child.style.background = prompt('enter color:')
// }

//  j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
//  Колір отримати з prompt()
// let allSub_header = document.getElementsByClassName('sub-header');
// for (let childAllSub of allSub_header){
//     if (childAllSub.innerText === 'content 2 segment'){
//         childAllSub.style.color = prompt(`enter color:`)
//     }
// }

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let con1ChangeTxt = document.getElementsByClassName('content_1');
// con1ChangeTxt[0].innerText = prompt(`Enter txt:`)

//l) отримати елементи p та змінити їм padding на 20px
// let pChangePadd20 = document.getElementsByTagName('p');
// for (let child of pChangePadd20){
//     child.style.padding = '20px'
//     child.style.border = '1px solid black'
// }

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let elementsByClassName = document.getElementsByClassName('text2');
// elementsByClassName[0].innerText = 'dec-2021';