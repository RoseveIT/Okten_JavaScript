let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
let userCon = document.createElement('div')
userCon.innerText = `${JSON.stringify(user)}`
let btn = document.createElement('button')
btn.innerText = 'post of current user'
let containerPost = document.createElement('div')
containerPost.classList.add('containerPost')
btn.onclick = function (){
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (let post of posts) {
                let postCon = document.createElement('div');
                postCon.classList.add('postCon');
                let titlePost = document.createElement('div')
                titlePost.classList.add('titlePost')
                titlePost.innerHTML = `<b>Title:</b> ${post.title}`;
                let a = document.createElement('a');
                a.innerText = 'Show post'
                a.classList.add('a')
                a.href = `./post-details.html?data=${JSON.stringify(post)}`
                postCon.append(titlePost,a)
                containerPost.append(postCon)
            }
            btn.disabled = true;
        })
}
userCon.appendChild(btn)
document.body.append(userCon, containerPost)