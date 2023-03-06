const message = document.querySelector(".message");
const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
let gamePlay = false;
let score = 0;
button.addEventListener("click", function () {
    if (!gamePlay) {
        gamePlay = true;
        gameArea.innerHTML = "";
        score = 0;
        maker();
        button.innerHTML = "check combo";
        message.innerHTML = "guess the combo";
        document.getElementById('demo').innerHTML = "";
        
    } else {
        const numbers = document.querySelectorAll(".numb");
        score++;
        message.innerHTML = "guesses" + score;
        let winCondition = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].value == numbers[i].coorect) {
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.Color = "white";
                winCondition++;
            }
            else {
                let color = (numbers[i].value) < (numbers[i].coorect) ? "blue" : "red";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.Color = "black";
            }
            if (winCondition == numbers.length) {
                document.getElementById('demo').innerHTML = ("You Win..");
                button.innerHTML = "restart";
                gamePlay = false;
            }
        }

    }
});
function maker() {
    for (let x = 0; x < 4; x++) {
        let el = document.createElement("input");
        el.setAttribute("type", "number");
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.style.width = "50px";
        el.classList.add("numb");
        el.coorect = Math.floor(Math.random() * 10);
        el.value = 0;
        el.order = x;
        //console.log(el);
        gameArea.appendChild(el);
    }
}