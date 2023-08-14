class Product extends App {
    async renderProducts() {
        const products = await this.fetchApi("/products", 'GET')
        const productsContainer = document.querySelector(".products-container")

        products.forEach(product => {
            const template = `
                <a href='/product.html?id=${product.id}' class='product-box'>
                    <img src='${this.baseUrl + "/" + product.image}'/>
                    <div class='product-titles'> 
                        <h2>${product.title}</h2>
                        <p> $ ${product.price}</p>
                    </div>
                </a>
            `
            productsContainer.insertAdjacentHTML('beforeend', template)
        });
    }   

    async renderProduct(id) {
        const product = await this.fetchApi(`/products/${id}`, 'GET')
        const productContainer = document.querySelector(".product-container")

        const template = `
            <div class='product-info-wrapper'>
                <img src='${this.baseUrl + "/" + product.image}'/>
                <div class='product-info'>
                    <h1> <span>Title: </span> ${product.title}</h1>
                    <b> <span>Price: </span> $ ${product.price}</b>
                    <p> <span>Info: </span> ${product.description}</p>
                </div>
            </div>
        `

        productContainer.insertAdjacentHTML('beforeend', template)    
    }  

    async addProduct() {
        const form = document.querySelector("#addproduct-form")
        const formdata = new FormData(form)

        await this.fetchApi('/product', 'POST', formdata).then(() => window.location.href = '/index.html').catch(err => alert(err))
    }  
}

const product = new Product()