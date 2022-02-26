const eluserList = document.querySelector('.user__list')
const elListItem = document.getElementById('user__list-item')
const elTemplateUser = document.getElementById('template__user').content

const LogOutBtn = document.querySelector('.logout-btn')
const token = window.localStorage.getItem('token')


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users =>
  users.forEach(user => {
      const userTemplate = elTemplateUser.cloneNode(true)
      
      const userName = userTemplate.getElementById('name')
      const userUserName = userTemplate.getElementById('user__name')
      const userEmail = userTemplate.getElementById('user__email')
      const userNumber = userTemplate.getElementById('user__number')
      const userWebSite = userTemplate.getElementById('web__site')
      const insideStreet = userTemplate.getElementById('inside-street')
      const insideCity = userTemplate.getElementById('inside-city')
      const postBtn = userTemplate.getElementById('more')
      
      userName.textContent = user.name
      userUserName.textContent = user.username
      userEmail.textContent = user.email
      userEmail.href = 'mailto:'
      userNumber.textContent = user.phone
      userWebSite.textContent = user.website 
      insideStreet.textContent = user.address.street   
      insideCity.textContent = user.address.city   
      postBtn.dataset.uuid = user.id
      
      eluserList.appendChild(userTemplate)

      postBtn.addEventListener('click', (e) => {
          userListPosts.innerHTML = null
          userListComment.innerHTML = null
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(posts => {
          const postId = e.target.dataset.uuid
          posts.forEach(posted => {
              const postTemplate = templatePost.cloneNode(true)
              if (postId == posted.userId) {
                  const titlePost = postTemplate.getElementById('title__post')
                  const bodyPost = postTemplate.getElementById('body__post')
                  const commentBtn = postTemplate.getElementById('comments__btn')
                  
                  commentBtn.dataset.uuid = posted.id
                  titlePost.textContent = posted.title
                  bodyPost.textContent = posted.body
                  
                  userListPosts.appendChild(postTemplate) 
                  
                }
            });
            
        })
    });
    
    
})
)
if(!token) {
    window.location.replace('login.html')
}

LogOutBtn.addEventListener('click', () => {
    window.localStorage.removeItem('token')
    window.location.replace('login.html')
})
