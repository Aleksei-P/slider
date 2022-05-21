const conteiner = document.querySelector(".conteiner");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const upButton = document.querySelector("#up");
const downButton = document.querySelector("#down");
const rightLength = right.querySelectorAll("img").length;
const leftLenght = left.querySelectorAll("div").length ;

let activeIndex = 0
left.style.top = `-${(leftLenght - 1) * 100}vh`;

const test = left.style.top;

function flip(action) {
    const sliderHeight = conteiner.clientHeight;

    if(action === "up") {
        activeIndex++
        if (activeIndex > rightLength - 1) {
            activeIndex = 0
        }
    } else if (action === "down") {
        activeIndex--
        if(activeIndex < 0) {
            activeIndex = rightLength - 1
        }
    }
    right.style.transform = `translateY(-${activeIndex * sliderHeight}px)`;
    left.style.transform = `translateY(${activeIndex * sliderHeight}px)`;
}

upButton.addEventListener("click", () => flip("up"))
downButton.addEventListener("click", () => flip("down"))