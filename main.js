const sliderList = [{
    img: "url('images/slider1.jpg')",
    text: "random text"
},
{
    img: 'url("images/slider2.jpg")',
    text: "lorem ipsum"
},
{
    img: 'url("images/slider3.jpg")',
    text: "shogun"
}]

let sliderCounter = 1
let time = 5000


const header = document.querySelector("header");
const h1 = document.querySelector(".title");
const dots = [...document.querySelectorAll(".dot")]

const changeDot = () => {

    let activeDot = dots.findIndex(dot => dot.classList.contains("active"))

    dots[activeDot].classList.remove("active")
    dots[sliderCounter].classList.add("active")
}

const changeSlide = () => {
    header.style.backgroundImage = sliderList[sliderCounter].img
    h1.textContent = sliderList[sliderCounter].text

    changeDot()

    sliderCounter++
    if (sliderCounter === sliderList.length) {
        sliderCounter = 0
    }
}

const keyChangeSlide = (e) => {
    debugger
    if (e.keyCode == 37 || e.keyCode == 39) {

        e.keyCode == 37 ? sliderCounter-- : sliderCounter++;
        if (sliderCounter === sliderList.length) {
            sliderCounter = 0;

        } else if (sliderCounter < 0) {
            sliderCounter = sliderList.length - 1;
        }

        header.style.backgroundImage = sliderList[sliderCounter].img
        h1.textContent = sliderList[sliderCounter].text
        changeDot()
    }
}


setInterval(changeSlide, time)

window.addEventListener('keydown', keyChangeSlide)
