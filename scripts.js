const light1 = document.getElementById('light1');
const light2 = document.getElementById('light2');
const light3 = document.getElementById('light3');

const loginEmail = document.querySelector('#loginForm #email');
const loginPassword = document.querySelector('#loginForm #password');

const signupName = document.querySelector('#signupForm #name');
const signupEmail = document.querySelector('#signupForm #email');
const signupPassword = document.querySelector('#signupForm #password');

const slider = document.getElementById('slider');

function toggleLight(light, isValid) {
    if (isValid) {
        light.style.opacity = '1';
    } else {
        light.style.opacity = '0';
    }
}

function validateEmail(email) {
    return email && email.length > 3 && email.includes('@');
}

function validatePassword(password) {
    return password && password.length > 5;
}

function validateName(name) {
    return name && name.length > 2;
}

function updateLights() {
    const isSignup = slider.checked;

    if (!isSignup) {
        toggleLight(light1, validateEmail(loginEmail.value));
        toggleLight(light2, validatePassword(loginPassword.value));
        toggleLight(light3, false);
    } else {
        toggleLight(light1, validateName(signupName.value));
        toggleLight(light2, validateEmail(signupEmail.value));
        toggleLight(light3, validatePassword(signupPassword.value));
    }
}

const inputs = [loginEmail, loginPassword, signupName, signupEmail, signupPassword];
inputs.forEach(input => {
    if (input) input.addEventListener('input', updateLights);
});

slider.addEventListener('change', () => {
    light1.style.opacity = '0';
    light2.style.opacity = '0';
    light3.style.opacity = '0';
    setTimeout(updateLights, 300);
});
