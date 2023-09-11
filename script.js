const balls = document.querySelectorAll(".ball");
var Transition = new Audio("calculator-app-main/Transition.mp3");

balls[3].style.transition = "left 0.5s ease";

balls[0].onclick = function () {
    Transition.currentTime = 0
    Transition.play()
    balls[3].style.transition = "left 0.5s ease"; // Set the transition property
    balls[3].style.left = "0px";
    document.body.classList = ""
};

balls[1].onclick = function () {
    Transition.currentTime = 0
    Transition.play()

    balls[3].style.transition = "left 0.5s ease"; // Set the transition property
    balls[3].style.left = "20px";
    document.body.classList = "theme-two"
};

balls[2].onclick = function () {
    Transition.currentTime = 0
    Transition.play()
    balls[3].style.transition = "left 0.5s ease"; // Set the transition property
    balls[3].style.left = "45px";
    document.body.classList = "theme-three"

};

// buttons functions
const buttons = document.querySelectorAll(".button");
const output = document.querySelector(".output");
output.innerHTML = ""
const result = false;
var audio = new Audio("calculator-app-main/Tick.mp3");
var error = new Audio("calculator-app-main/Err.mp3");


for (let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function () {
        audio.currentTime = 0
        audio.play();
        if (output.innerText.length == 0 && buttons[i].innerHTML == "+"
            || output.innerText.length == 0 && buttons[i].innerHTML == "x" ||
            output.innerText.length == 0 && buttons[i].innerHTML == "-" ||
            output.innerText.length == 0 && buttons[i].innerHTML == "/") {
            output.innerHTML += ""
        }
        if (output.innerText[output.innerText.length - 1] == "+" && buttons[i].innerHTML == "+"
            || output.innerText[output.innerText.length - 1] == "+" && buttons[i].innerHTML == "x"
            || output.innerText[output.innerText.length - 1] == "+" && buttons[i].innerHTML == "/"
            || output.innerText[output.innerText.length - 1] == "+" && buttons[i].innerHTML == "-"

            || output.innerText[output.innerText.length - 1] == "-" && buttons[i].innerHTML == "+"
            || output.innerText[output.innerText.length - 1] == "-" && buttons[i].innerHTML == "x"
            || output.innerText[output.innerText.length - 1] == "-" && buttons[i].innerHTML == "/"
            || output.innerText[output.innerText.length - 1] == "-" && buttons[i].innerHTML == "-"

            || output.innerText[output.innerText.length - 1] == "/" && buttons[i].innerHTML == "+"
            || output.innerText[output.innerText.length - 1] == "/" && buttons[i].innerHTML == "x"
            || output.innerText[output.innerText.length - 1] == "/" && buttons[i].innerHTML == "/"
            || output.innerText[output.innerText.length - 1] == "/" && buttons[i].innerHTML == "-"

            || output.innerText[output.innerText.length - 1] == "x" && buttons[i].innerHTML == "+"
            || output.innerText[output.innerText.length - 1] == "x" && buttons[i].innerHTML == "x"
            || output.innerText[output.innerText.length - 1] == "x" && buttons[i].innerHTML == "/"
            || output.innerText[output.innerText.length - 1] == "x" && buttons[i].innerHTML == "-"
            || output.innerText[output.innerText.length - 1] == "." && buttons[i].innerHTML == "."

            || buttons[i].innerHTML == "="
            || buttons[i].innerHTML == "DEL"
            || buttons[i].innerHTML == "Reset"
            || output.innerText.length == 0 && buttons[i].innerText == "+"
            || output.innerText.length == 0 && buttons[i].innerText == "x"
            || output.innerText.length == 0 && buttons[i].innerText == "-"
            || output.innerText.length == 0 && buttons[i].innerText == "/"

        ) {
            output.innerHTML += ""
        }

        else {

            output.innerHTML += buttons[i].innerText
        }


    };
}
const equalButton = document.querySelector(".eq")
const delButton = document.querySelector(".del")
const prev = document.querySelector(".prev")

equalButton.onclick = function () {
    audio.play()
    if ( eval(output.innerHTML.replace("x", "*"))==Infinity) {
        document.querySelector(".parent-container").classList.add("shake")
        error.currentTime = 0
        error.play()

        setTimeout(() => {
            document.querySelector(".parent-container").classList.remove("shake")


        }, 300);
    }
    if (output.innerHTML != '' && eval(output.innerHTML.replace("x", "*"))!=Infinity) {
        prev.innerHTML = output.innerHTML
        output.innerText = eval(output.innerHTML.replace("x", "*"))
        result = true
    }
}
const resetButton = document.querySelector(".re")
resetButton.onclick = function () {
    output.innerHTML = ""
    prev.innerHTML = ""
    audio.play()
}
delButton.onclick = function () {
    output.innerHTML = output.innerHTML.slice(0, -1);
    audio.play()

}
