var main = document.querySelector(".main")
var btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    if (main.style.color == "black") {
        main.style.color = "red"
    } else {
        main.style.color = "black"
    }

})