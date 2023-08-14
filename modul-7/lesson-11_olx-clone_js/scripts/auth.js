class Auth extends App {

    async login() {
        const navLoginBtn = document.querySelector(".nav_login-btn")
        
        const username = document.querySelector(".username").value
        const password = document.querySelector(".password").value
        
        const data = {
            username: username,
            password: password, 
        }

        const login = await this.fetchApi('/login', 'POST', data)
        localStorage.setItem("token", login.token)
        const token = localStorage.getItem("token")

        if (token != 'undefined') {
            window.location.href = '/index.html'
        }
        if (token) {
            navLoginBtn.style.display = "none"
        }
        if (!token) {
            addProductBtn.style.display = "none"
        }
    }  

    logout() {

    }

    async signup() {
        const form = document.querySelector("#signup-form")
        const formData = new FormData(form)

        await this.fetchApi('/signup', 'POST', formData).then(() => window.location.href = '/index.html')
    }
}

const auth = new Auth()