
import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

const gameBoard = document.getElementById("gameBoard");

let lastRenderTime = 0;
let gameOver = false;


function main (currentTime) {
    if (gameOver) {
        if (confirm("You lose! Press 'Ok' to restart.")) {
            window.location.href = "/";
        }
        return;
    }
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    window.requestAnimationFrame(main);
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime;
    
    update();
    draw();
}

window.requestAnimationFrame(main);

function update () {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw () {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath () {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}


