const form = document.querySelector(".form_container")
const plusButton = document.querySelector(".plus_button")
const infosContainerAppend = document.querySelector(".infos_container_append")
const input = document.querySelector(".form--input")
const count = document.querySelector(".infos_count")

function showForm() {
    form.style.display = "block"
    plusButton.style.display = "none"
}

function closeForm() {
    form.style.display = "none"
    plusButton.style.display = "block"
}

function saveInfo() {
    const infoCard = document.createElement("div")
    infoCard.classList.add("info_card")

    infoCard.style.display = "block"
    infoCard.innerText = input.value
    count.textContent = Number(count.textContent) + 1
    
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete_btn")
    deleteBtn.addEventListener("click", function() {
        infoCard.style.display = "none"
        deleteBtn.style.display = "none"
        count.textContent = Number(count.textContent) - 1
    })
    
    infosContainerAppend.appendChild(infoCard)
    infoCard.appendChild(deleteBtn)
    

    input.value = ""
    form.style.display = "none"
    plusButton.style.display = "block"
}
