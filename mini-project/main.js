let wrap = document.createElement('div');
wrap.classList.add('wrap');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        for (let user of users) {
            let divUserLine = document.createElement('div')
            divUserLine.classList.add('divUserLine')
            let divUser = document.createElement('div');
            divUser.classList.add('divUser');
            divUser.innerHTML = `<b>${user.id}.</b> ${user.name}`;
            let a = document.createElement('a');
            a.classList.add('a');
            a.innerText = 'Show'
            a.href = `./user-details.html?data=${JSON.stringify(user)}`
            divUserLine.append(divUser, a);
            wrap.appendChild(divUserLine)
        }

    })

document.body.appendChild(wrap);