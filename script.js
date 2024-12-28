const boutton = document.querySelector("#boutton_vert")


const my_function = () => {
    if (boutton.textContent == "Ceci est une div") {
        boutton.textContent = "Texte changé !"
    }
    else {
        boutton.textContent = "Ceci est une div"
    }
}


boutton.addEventListener("click", my_function)