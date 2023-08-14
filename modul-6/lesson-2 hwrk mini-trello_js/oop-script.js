class Tasks {
    form = document.querySelector(".form_container")
    plusButton = document.querySelector(".plus_button")
    infosContainerAppend = document.querySelector(".infos_container_append")
    input = document.querySelector(".form--input")
    count = document.querySelector(".infos_count")
    
    deleteBtn = document.createElement("button")

    showForm() {
        this.form.style.display = "block"
        this.plusButton.style.display = "none"
    }
    
    closeForm() {
        this.form.style.display = "none"
        this.plusButton.style.display = "block"
        this.input.value = ""
    }
    
    saveInfo() {
        const infoCard = document.createElement("div")
        infoCard.classList.add("info_card")
    
        infoCard.style.display = "block"
        infoCard.innerText = this.input.value
        this.count.textContent = Number(this.count.textContent) + 1
        
        
        this.deleteBtn.classList.add("delete_btn")
        this.deleteBtn.addEventListener("click", () =>  {
            infoCard.style.display = "none"
            this.deleteBtn.style.display = "none"
            this.count.textContent = Number(this.count.textContent) - 1
        })
        this.infosContainerAppend.appendChild(infoCard)
        // infoCard.appendChild(this.deleteBtn)
        
        this.closeForm()
    }
}

const tasks = new Tasks