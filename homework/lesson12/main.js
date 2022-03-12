//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(data => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         for (let postItem of data){
//             let postDiv = document.createElement('div');
//             postDiv.classList.add('postDiv');
//             postDiv.innerHTML = `
//                 <h2>ID: ${postItem.id}</h2>
//                 <h3><b>Title:</b> ${postItem.title}</h3>
//                 <p><b>Body:</b> ${postItem.body}</p>
//             `;
//             wrap.append(postDiv);
//             document.body.appendChild(wrap);
//         }
//     });

//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(data =>{
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         for (let comment of data){
//             let commentDiv = document.createElement('div');
//             commentDiv.classList.add('comment')
//             commentDiv.innerHTML=`
//                 <h2>ID: ${comment.id}</h2>
//                 <h3>Name: ${comment.name}</h3>
//                 <h3>Email: ${comment.email}</h3>
//                 <h4>Body: ${comment.body}</h4>
//             `;
//             wrap.appendChild(commentDiv);
//             document.body.appendChild(wrap);
//         }
//     })
