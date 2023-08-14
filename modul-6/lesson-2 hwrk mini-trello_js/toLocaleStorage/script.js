const form = document.querySelector(".form_container")
const plusButton = document.querySelector(".plus_button")
const infosContainerAppend = document.querySelector(".infos_container_append")
const input = document.querySelector(".form--input")
const count = document.querySelector(".infos_count")


function render() {
    const tasksArray = localStorage.getItem("tasks") || []
    tasksArray.forEach(task => createTask(task))
}

function toggleForm() {
    form.classList.toggle("active")
    plusButton.classList.toggle("active")
}

function createTask(task) {
    const infoCard = document.createElement("div")
    infoCard.classList.add("info_card")

    infoCard.style.display = "block"
    infoCard.innerText = task.value
    count.textContent = Number(count.textContent) + 1
    
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete_btn")
    deleteBtn.addEventListener("click", function() {
        infoCard.style.display = "none"
        deleteBtn.style.display = "none"
        count.textContent = Number(count.textContent) - 1
    })

    localStorage.setItem("item", input.value)
    
    infosContainerAppend.appendChild(infoCard)
    infoCard.appendChild(deleteBtn)
    input.value = ""

    
    toggleForm()
}

render()