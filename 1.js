var btn = document.querySelector(".btn")
var h1 = document.querySelector(".h1")

btn.addEventListener("click", () => {
    if (h1.style.display == "block") {
        h1.style.display = "none"
    }else if (h1.style.display = "none"){
        h1.style.display = "block"
    }
})