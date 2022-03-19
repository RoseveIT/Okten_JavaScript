
let url = new URL(location.href);
let posts = JSON.parse(url.searchParams.get('data'));
let wrap = document.createElement('div');
wrap.classList.add('add');
let postCon = document.createElement('div')
postCon.innerText = `${JSON.stringify(posts)}`
let commentsPost = document.createElement('div');
fetch(`https://jsonplaceholder.typicode.com/posts/${posts.id}/comments`)
    .then(value => value.json())
    .then(data =>{
        for (let comment of data) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('commentDiv');
            commentDiv.innerHTML = `<b>${comment.name}</b> - ${comment.body}`
            commentsPost.append(commentDiv)
        }
    })
wrap.append(postCon, commentsPost)
document.body.appendChild(wrap)