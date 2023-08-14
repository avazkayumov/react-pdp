const optionBg = document.querySelector(".option-background")
const options = document.querySelectorAll(".option")
const optionList = document.querySelector(".option_list")

let usersData = []
let postsData = []

function showPosts() {
    optionBg.style.left = "50%"
    options[1].style.color = "white"
    options[0].style.color = "black"

    renderPosts()
}

function showUsers() {
    optionBg.style.left = "0"
    options[0].style.color = "white"
    options[1].style.color = "black"

    renderUsers()
}


async function renderPosts() {
    let result = postsData

    if (postsData.length === 0) {
        const request = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await request.json()
        postsData = result
    }

    optionList.innerHTML = ""

    result.forEach(user => {
        const div = document.createElement("div")
        div.innerHTML = user.title
        optionList.appendChild(div)
    });
}

async function renderUsers() {
    let result = usersData

    if (usersData.length === 0) {
        const request = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await request.json()
        usersData = result
    }

    optionList.innerHTML = ""

    result.forEach(user => {
        const div = document.createElement("div")
        div.innerHTML = user.name
        optionList.appendChild(div)
    });
}

renderUsers()