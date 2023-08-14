class App {
    baseUrl = "http://142.93.246.144"

    async fetchApi(url, method, data) {
        const config = {
            method: method,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                "Content-Type": 'application/json'
            }
        }

        if(method == "POST") {
            let body = JSON.stringify(data)
            if (data instanceof FormData) {
                body = data 
                delete config.headers['Content-Type']
            }
            config.body = body
        }   

        try {
            const request = await fetch(this.baseUrl + url, config)
            const result = await request.json()
            return result
        }catch(err) {
            alert(err)
        }
    }

    headerFunc() {
        const header = document.querySelector("header")

            header.insertAdjacentHTML("beforeend", `
                <nav>
                    <ul>
                        <div class="nav_left-side">
                            <input type="text" placeholder="Search">
                            <li><a href="/">Home</a></li>
                            ${Boolean(localStorage.getItem("token")) ? `
                                <li><a class="addproduct-btn" href="/addproduct.html">Add Product</a></li>
                            ` : ""}
                        </div>

                        ${!Boolean(localStorage.getItem("token")) ? `
                            <div class="nav_right-side">
                                <a href="/signup.html">Sign Up</a>                    
                                <a class="nav_login-btn" href="/login.html">Login</a>
                            </div>
                        ` : ""}
                        
                    </ul>
                </nav>
        `)
    }
}