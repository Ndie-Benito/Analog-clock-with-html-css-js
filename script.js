// Get references to DOM elements

const body = document.querySelector("body")
const hourHand = document.querySelector(".hour")
const minuteHand = document.querySelector(".minute")
const secondHand = document.querySelector(".second")
const modeSwitch = document.querySelector(".mode-switch")


const updateTime = () => {
    // get current time and calculate degrees for clock hands
    let date = new Date()
    let secTodeg = (date.getSeconds() / 60) * 360
    let minTodeg = (date.getMinutes() / 60) * 360
    let hrTodeg = (date.getHours() / 60) * 360

    //check if mode is already set to "dark mode" in localstorage
    if (localStorage.getItem("mode") === "Dark Mode") {
        // add "dark" class to body and set modeSwitch text to "light mode"
        body.classList.add("dark")
        modeSwitch.textContent = "Light Mode"
    }


    // add a  click event listener to modeSwitch

    modeSwitch.addEventListener("click", () => {
        // toggle the "dark" class on the body element
        body.classList.toggle("dark")
        // check if the 'dark' class is currently present on the body element

        const isDarkMode = body.classList.contains("dark")
       // set modeSwitch text based on 'dark' class presence
        modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode"
        localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode")
    })
 
    //Rotate the clock hands  to the appropriate degree bases on the current time
    secondHand.style.transform = `rotate(${secTodeg}deg)`
    minuteHand.style.transform = `rotate(${minTodeg}deg)`
    hourHand.style.transform = `rotate(${hrTodeg}deg)`
}

// call updateTime to set clock hands every second

setInterval(updateTime, 1000)