const elCommentList = document.querySelector('.comment-list')
const elTemplateComment = document.querySelector('.comment-template').content

const token = window.localStorage.getItem('token')

if(!token) {
    window.location.replace('login.html')
}

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(comit => {
    const cometlocal = window.localStorage.getItem('id')

    const filtercommet = comit.filter(bnnma => bnnma.postId == cometlocal)

    filtercommet.forEach(commet => {

        const commentTemplate = elTemplateComment.cloneNode(true)

        const headingText = commentTemplate.querySelector('.comment-name')
        const bodyText = commentTemplate.querySelector('.comment-email')
        const commentBody = commentTemplate.querySelector('.comment-body')
        
        
        headingText.textContent = commet.name
        bodyText.textContent = commet.email
        commentBody.dataset.uuid = commet.body

        elCommentList.appendChild(commentTemplate)

    });
})

if(!token) {
    window.location.replace('login.html')
}