//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
// let form = document.forms[0]
// form.onsubmit = function (e){
//     e.preventDefault();
// }
// let name = document.forms.userF.name;
// let age = document.forms.userF.age;
// let btn = document.getElementById('button')
//
//
// let submit = function (userName, userAge) {
//     let user = {
//         name: userName,
//         age: userAge
//     }
//     localStorage.setItem('key', JSON.stringify(user))
// }
// btn.onclick = function (){
//     submit(name.value, age.value)
// }



//-створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let model = document.forms.carForm.model;
let type = document.forms.carForm.type;
let volume = document.forms.carForm.volume;
let btn = document.getElementById('btn')

let submit = function (modelCar, typeCar, volumeCar){
    let auto = localStorage.getItem('car');
    let array = JSON.parse(auto) || []
    array.push({modelCar,typeCar,volumeCar})
    localStorage.setItem('car', JSON.stringify(array))
}
btn.onclick = function (){
    submit(model.value, type.value, volume.value);
}