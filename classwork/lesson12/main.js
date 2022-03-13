//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(data => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap')
        for (let post of data){
            let postDiv = document.createElement('div');
            postDiv.classList.add('postDiv');
            postDiv.innerHTML = `
                <h2>ID: ${post.id}</h2>
                <h3>Title: ${post.title}</h3>
                <h4>Body: ${post.body}</h4>
            `;
            let button = document.createElement('button')
            button.classList.add('btn')
            button.innerText = 'Show comment'
            button.onclick = ()=>{
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id +'/comments')
                    .then(value => value.json())
                    .then(comments => {
                        for (let comment of comments){
                            if (post.id === comment.id){
                                let postDivComment = document.createElement('div');
                                postDivComment.classList.add('comment');
                                postDivComment.innerHTML = `
                                    <h4>ID: ${comment.id}</h4>
                                    <h4>Name: ${comment.name}</h4>
                                    <h4>Email: ${comment.email}</h4>
                                    <h4>Body: ${comment.body}</h4>
                                `;
                                postDiv.append(postDivComment)
                            }
                            button.disabled = true;
                        }
                    })
            }


            postDiv.appendChild(button)
            wrap.append(postDiv);
            document.body.append(wrap);
        }
    })