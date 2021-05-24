const userName = document.querySelector('#userName')
const password = document.querySelector('#password')
const  matchingPassword = document.querySelector('#matchingPassword')
const form = document.querySelector('#form')
const errorElement = document.querySelector('#error')


form.addEventListener('submit', (e) => {
    let messages = []
    if ( userName.value === '' || userName.value == null) {
        messages.push('Name is required');
    }

    if (password.value.length <= 6 || password.value.length >= 20) {
        messages.push('Password must be longer than 6 characters and must be less than 20 characters');
    }

    if (password.value === 'password'){
        messages.push ('Password cannot be password');
    }

    if (password.value !== matchingPassword.value) {
        messages.push ('Passwords do not match')
    }

    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ')
        e.preventDefault();
    }
    
})