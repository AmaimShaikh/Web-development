// show/hide the password and changing the icon of password field
const showPassword = document.getElementById('showPassword');
const password = document.getElementById('password');

showPassword.addEventListener('click', (event) => {
    if (password.type === 'password') {
        showPassword.classList.replace('fa-eye', 'fa-eye-slash');

        password.type = 'text';
    }
    else {
        showPassword.classList.replace('fa-eye-slash', 'fa-eye');

        password.type = 'password';
    }
});



// show/hide the password and changing the icon of confirm password field
const showConfirmPassword = document.getElementById('showConfirmPassword');

const confirmPassword = document.getElementById('confirmPassword');

showConfirmPassword.addEventListener('click', (event) => {
    if (confirmPassword.type === 'password') {
        showConfirmPassword.classList.replace('fa-eye', 'fa-eye-slash');

        confirmPassword.type = 'text';
    }
    else {
        showConfirmPassword.classList.replace('fa-eye-slash', 'fa-eye');

        confirmPassword.type = 'password';
    }

});


// 
const username = document.getElementById('name');
const email = document.getElementById('email');
// password - #password
// confirmPassword - #confirmPassword




const form = document.getElementById('form');
form.addEventListener('submit', event => {
    event.preventDefault();

    inspectInputs();
});




const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const passwordError = document.querySelector('.passError');
const confirmPasswordError = document.querySelector('.confirmPassError');


// REs
const isValidName = (nameValue) => {
    const nameRE = /^[a-zA-Z0-9]{3,}$/;
    return (nameRE.test(nameValue));
}

const isValidEmail = (emailValue) => {
    const emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (emailRE.test(emailValue));
}

const isValidPassword = (passValue) => {
    const passRE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,14}$/;
    return (passRE.test(passValue));
}




const showError = (element, text) => {
    const err = element.querySelector('.error');

    err.innerText = text;


    // changing the color of the border if the input is invalid
    if (element === nameError) {
        document.querySelector('.nameDiv').style.borderBottom = '2px solid rgb(187, 64, 64)';
        document.querySelector('#nameExcla').style.visibility = 'visible';
    }

    
    if (element === emailError) {
        document.querySelector('.emailDiv').style.borderBottom = '2px solid rgb(187, 64, 64)';
        document.querySelector('#emailExcla').style.visibility = 'visible';
    }

    
    if (element === passwordError) {
        document.querySelector('.passDiv').style.borderBottom = '2px solid rgb(187, 64, 64)';
        document.querySelector('#passExcla').style.visibility = 'visible';
    }

    
    if (element === confirmPasswordError) {
        document.querySelector('.confirmPassDiv').style.borderBottom = '2px solid rgb(187, 64, 64)';
        document.querySelector('#confirmPassExcla').style.visibility = 'visible';
    }
}



const showSuccess = (element) => {
    const success = element.querySelector('.error');

    success.innerText = '';

    // changing the color of the border when the input is valid
    if (element === nameError) {
        document.querySelector('.nameDiv').style.borderBottom = '2px solid green';
        document.querySelector('#nameExcla').style.visibility = 'hidden';
    }


    if (element === emailError) {
        document.querySelector('.emailDiv').style.borderBottom = '2px solid green';
        document.querySelector('#emailExcla').style.visibility = 'hidden';
    }


    if (element === passwordError) {
        document.querySelector('.passDiv').style.borderBottom = '2px solid green';
        document.querySelector('#passExcla').style.visibility = 'hidden';
    }


    if (element === confirmPasswordError) {
        document.querySelector('.confirmPassDiv').style.borderBottom = '2px solid green';
        document.querySelector('#confirmPassExcla').style.visibility = 'hidden';
    }

}


const inspectInputs = () => {
    // removing the whitespaces
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // name
    if (nameValue === '') {
        showError(nameError, 'Invalid name');
    }
    else if (!isValidName(nameValue)){
        showError(nameError, 'Name should not contain any special character, only lower case, upper case letters and numbers are allowed.');
    }
    else {
        showSuccess(nameError);
    }


    //email
    if (emailValue === '') {
        showError(emailError, 'Invalid email');
    } 
    else if (!isValidEmail(emailValue)){
        showError(emailError, 'Invalid email');
    }
    else {
        showSuccess(emailError);
    }


    // password
    if (passwordValue === '') {
        showError(passwordError, 'Password is empty');
    } 
    else if (!isValidPassword(passwordValue)){
        showError(passwordError, 'Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number.');
    }
    else {
        showSuccess(passwordError);
    }


    // confirm password
    if (confirmPasswordValue === '') {
        showError(confirmPasswordError, 'Invalid password');
    }
    else if (confirmPasswordValue != passwordValue) {
        showError(confirmPasswordError, 'Password is different');
    }
    else {
        showSuccess(confirmPasswordError);
    }


    // checking checkbox
    const checkboxValue = document.querySelector('#checkbox').checked;

    const checkboxError = document.querySelector('.checkboxError');
    
    const checkboxErr = checkboxError.querySelector('.error');
    
    if(!checkboxValue) {
        checkboxErr.innerText = 'You didnt accept the terms and conditions';
    }
    else {
        checkboxErr.innerText = '';
    }
}

