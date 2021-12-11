const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const loginForm = document.querySelector('.login-form');
const failMessage = document.querySelector('.fail-message')


loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const user = {email, password}
    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user),
        });
        let json = await response.json();
        if(json.user.name === 'junghoon') {
            window.location.href = "http://localhost:3000"
        }
        else {
            failMessage.innerHTML = '<div class="fail-message">Authentication failed</div>'
        }
    }
    catch (error) {
        console.log(error);
    }
})