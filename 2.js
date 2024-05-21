var body = document.querySelector("body")
var main = document.querySelector(".main")
var btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    if (body.style.background == "white") {
        body.style.background = "black"
        main.style.color = "white"
    } else {
        body.style.background = "white"
        main.style.color = "black"
    }
    
})