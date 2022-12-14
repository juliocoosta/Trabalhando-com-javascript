const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')

form.addEventListener('submit' , (e) => {
    e.preventDefault()

    checkInputs()
});

function checkInputs(){

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === ''){
        // mostrar o erro e add a class error.
        errorValidation(username, 'Campo Obrigatório!')

    }else{
        // add a classe de success
        successValidation(username)
    }

    if(emailValue === ''){
        errorValidation(email, 'Campo Obrigatório')
    }else{
        successValidation(email)
    }

    if(passwordValue === ''){
        errorValidation(password, 'Campo Obrigatório')

    }else if (passwordValue.length <= 7) {
        errorValidation(password, 'A senha deve conter no mínimo 08 caracteres.')
    }else{
        successValidation(password)
    }
       
    if(passwordtwoValue === ''){
        errorValidation(passwordtwo, 'Campo Obrigatório')
    }else if (passwordValue !== passwordtwoValue ){
        errorValidation(passwordtwo, 'Senha não conforme')
    } else{
        successValidation(passwordtwo)
    }

    }
function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message
    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}