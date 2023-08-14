const box = document.querySelector(".box");
const boxContainer = document.querySelector(".box_container");
const selectValue = document.querySelector(".select").value;

let positionValue = Number(selectValue)
let xPosition = 0;
let yPosition = 0;

function move(e) {
    console.log(selectValue)

    if (e.key === "w") {
        xPosition += positionValue;
        box.style.top = `calc(50% - ${xPosition}px)`;
    }
    
    if (e.key === "s") {
        xPosition -= positionValue;
        box.style.top = `calc(50% - ${xPosition}px)`;
    }
    
    if (e.key === "a") {
        yPosition += positionValue;
        box.style.left = `calc(50% - ${yPosition}px)`;
    }

    if (e.key === "d") {
        yPosition -= positionValue;
        box.style.left = `calc(50% - ${yPosition}px)`;
    }
}

window.onkeydown = move;
