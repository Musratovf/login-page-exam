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
      const postBtn = userTemplate.getElementById('post-btn')
      
      userName.textContent = user.name
      userUserName.textContent = user.username
      userEmail.textContent = user.email
      userEmail.href = 'mailto:',
      userNumber.textContent = user.phone
      userWebSite.textContent = user.website 
      insideStreet.textContent = user.address.street   
      insideCity.textContent = user.address.city   
      postBtn.dataset.uuid = user.id
      
      eluserList.appendChild(userTemplate)

      postBtn.addEventListener('click', (evt) => {
        window.localStorage.setItem('id' , evt.target.dataset.uuid)
        window.location.replace('post.html')
      })
    
})
)
if(!token) {
    window.location.replace('login.html')
}

LogOutBtn.addEventListener('click', () => {
    window.localStorage.removeItem('token')
    window.location.replace('login.html')
})