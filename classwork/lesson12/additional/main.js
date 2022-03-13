//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
       let wrap = document.createElement('div');
       wrap.classList.add('wrap');
       for (let user of users){
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            userDiv.innerHTML = `
                <h3>ID: ${user.id}</h3>
                <p><b>Name:</b> ${user.name}</p>
                <p><b>Userame:</b> ${user.username}</p>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Address:</b></p>
                <ul>
                    <li>Street: ${user.address.street}</li>
                    <li>Suite: ${user.address.suite}</li>
                    <li>City: ${user.address.city}</li>
                    <li>Zipcode: ${user.address.zipcode}</li>
                    <li>Geo:
                        <ul>
                            <li>Lat: ${user.address.geo.lat}</li>
                            <li>Lng: ${user.address.geo.lng}</li>
                        </ul>
                    </li>
                </ul>
             `;
            let btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = 'Show posts'
            btn.onclick = ()=>{
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id +'/posts')
                    .then(value => value.json())
                    .then(posts => {
                    for (let post of posts){
                        if (user.id === post.userId){
                            let postDivUser = document.createElement('div');
                            postDivUser.classList.add('postDivUser');
                            postDivUser.innerHTML = `
                            <h4><b>ID-inner:</b> ${post.id}</h4>
                            <p><b>Title:</b> ${post.title}</p>
                            <p><b>Body:</b> ${post.body}</p>
                            `;
                            let btnComment = document.createElement('button');
                            btnComment.classList.add('btnComment');
                            btnComment.innerText = 'Show comment'
                            btnComment.onclick = ()=>{
                                fetch('https://jsonplaceholder.typicode.com/posts'+ post.id +'/comments')
                                    .then(value => value.json())
                                    .then(comments => {
                                        for (let comment of comments){
                                            if (post.id === comment.postId){
                                                let postDivComment = document.createElement('div');
                                                postDivComment.classList.add('comment');
                                                postDivComment.innerHTML = `
                                                    <h4>ID: ${comment.id}</h4>
                                                    <h4>Name: ${comment.name}</h4>
                                                    <h4>Email: ${comment.email}</h4>
                                                    <h4>Body: ${comment.body}</h4>
                                                    `;
                                                postDivUser.append(postDivComment)
                                            }
                                            btnComment.disabled = true;
                                        }

                                        })
                            }

                            postDivUser.appendChild(btnComment)
                            userDiv.appendChild(postDivUser)
                        }
                        btn.disabled = true;
                    }
                    })
            }

            userDiv.appendChild(btn)
             wrap.append(userDiv);
             document.body.appendChild(wrap)
       }
    });