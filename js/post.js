const elPostList = document.querySelector('.post-list')
const elTemplate = document.querySelector('.post__template').content  

const token = window.localStorage.getItem('token')

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
    const dataSave = window.localStorage.getItem('id')

    const filterPost = data.filter(elem => elem.userId == dataSave)

    filterPost.forEach(post => {
        const postTeplate = elTemplate.cloneNode(true)

        const headingText = postTeplate.querySelector('.post-heading')
        const bodyText = postTeplate.querySelector('.post-last-text')
        const commentBtn = postTeplate.querySelector('.comment-btn')

        headingText.textContent = post.title
        bodyText.textContent = post.body
        commentBtn.dataset.uuid = post.id

        elPostList.appendChild(postTeplate)

        commentBtn.addEventListener('click', (evt) => {
            window.localStorage.setItem('userId' , evt.target.dataset.uuid)
            window.location.replace('comment.html')
          })
    });
})

if(!token) {
    window.location.replace('login.html')
}