const usersContainer = document.querySelector(".users")
const postsContainer = document.querySelector(".posts")
const usersBox = document.querySelector(".users_box")
const postsBox = document.querySelector(".posts_box")

let usersData = []
let postsData = []

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    renderUsers(data)
    // postsBox.style.display = "none"
}

function renderUsers(users) {
    users.forEach(user => {
        const userContainer = document.createElement('div')
        userContainer.insertAdjacentHTML("afterbegin", `
            <p>name: ${user.name} </p>
            <p>email: ${user.email} </p>
            <p>number: ${user.phone} </p>
        `)  
        usersBox.appendChild(userContainer)
    })
}


async function fetchPosts() {
    usersBox.style.display = "none"
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    rednerPosts(data)
}

function rednerPosts(posts) {
    posts.forEach(post => {
        const postContainer = document.createElement('div')
        postContainer.insertAdjacentHTML("afterbegin", `
            <p>name: ${post.title} </p>
            <p>email: ${post.body} </p>
            <p>number: ${post.id} </p>
        `)  
        postsBox.appendChild(postContainer)
    })
}