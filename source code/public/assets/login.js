const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('.login-btn');


loginBtn.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const res = await axios({
            method: 'post',
            url: '/auth/login',
            baseURL: 'http://localhost:3000',
            data: {
              email: emailInput.value,
              password: passwordInput.value
            }
        });
        console.log(res)
    } catch (error) {
        console.log(error)
        throw new Error
    }
})