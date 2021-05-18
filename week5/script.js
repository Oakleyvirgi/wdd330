const name = document.querySelector('#name')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#confirmPassword')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password' ) {
    messages.push('Password cannot be password')
  }
  if (password.value === '' || password.value == null) {
      messages.push('Password must not be blank or null')
  }

  if (password.value != passwordConfirm.value) {
      messages.push('Password does not match confirmation')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})