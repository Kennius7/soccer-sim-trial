
const buttonUp = document.getElementById("btnUp");
const buttonDown = document.getElementById("btnDown");
const buttonLeft = document.getElementById("btnLeft");
const buttonRight = document.getElementById("btnRight");


let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };





window.addEventListener("keydown", eventVar => {
    switch (eventVar.key) {
        case "ArrowUp":
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 }
            break;
        case "ArrowRight":
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 }
            break;
        case "ArrowLeft":
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 }
            break;
    }
})

buttonUp.addEventListener("click", function () {
    if (lastInputDirection.y === 0) {
        inputDirection = { x: 0, y: -1 };
    }
    
    else if (lastInputDirection.y !== 0) {
        return;
    };
})

buttonDown.addEventListener("click", function () {
    if (lastInputDirection.y === 0) {
        inputDirection = { x: 0, y: 1 };
    }
    
    else if (lastInputDirection.y !== 0) {
        return;
    };
})

buttonLeft.addEventListener("click", function () {
    if (lastInputDirection.x === 0) {
        inputDirection = { x: 1, y: 0 };
    }
    
    else if (lastInputDirection.x !== 0) {
        return;
    };
})

buttonRight.addEventListener("click", function () {
    if (lastInputDirection.x === 0) {
        inputDirection = { x: -1, y: 0 };
    }
    
    else if (lastInputDirection.x !== 0) {
        return;
    };
})










export function getInputFunction () {
    lastInputDirection = inputDirection
    return inputDirection
}

// window.addEventListener("click", eventVar => {
//     switch (eventVar.key) {
//         case "ArrowUp":
//             if (lastInputDirection.y !== 0) break;
//             inputDirection = { x: 0, y: -1 };
//             break;
//         case "ArrowDown":
//             if (lastInputDirection.y !== 0) break;
//             inputDirection = { x: 0, y: 1 }
//             break;
//         case "ArrowRight":
//             if (lastInputDirection.x !== 0) break;
//             inputDirection = { x: 1, y: 0 }
//             break;
//         case "ArrowLeft":
//             if (lastInputDirection.x !== 0) break;
//             inputDirection = { x: -1, y: 0 }
//             break;
//     }
// })

// function buttonUpFunction () {
//     if (lastInputDirection.y !== 0) return;
    
//     inputDirection = { x: 0, y: -1 };
// }













