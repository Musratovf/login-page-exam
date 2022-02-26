const elForm = document.querySelector('.form')
const elEmail = document.querySelector('.form-email-input')
const elPassword = document.querySelector('.form-password-input')
const emailText = document.querySelector('.login-email-text')
const passwordText = document.querySelector('.login-password-text')

elForm.addEventListener('submit', (e) => {
    e.preventDefault()

   const emailInput = elEmail.value.trim()
   const emailPassword = elPassword.value.trim()

   if(elEmail.value === '') {
       emailText.textContent = 'Enter your Email'
       elEmail.style.border = '1px solid red'
   } if(elPassword.value === '') {
    passwordText.textContent = 'Enter Pour Password'
    elPassword.style.border = '1px solid red'
   }

   fetch('https://reqres.in/api/login', {
       method: 'POST',
       headers: {
           "Content-type": 'application/json' 
       },
       body: JSON.stringify({
        "email": emailInput,
        "password": emailPassword,
       })
   }).then((response) => response.json())
     .then((data) => { 
         if(data?.token) {
            window.localStorage.setItem('token', data.token)
            window.location.replace('index.html')
         } 
     })
})