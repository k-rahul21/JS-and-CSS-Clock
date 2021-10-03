const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function rotate()
{
    let now = new Date();
    let seconds = now.getSeconds();
    let secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    let minutes = now.getMinutes();
    let minutesDegree = ((minutes/60)*360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    let hour = now.getHours();
    let hourDegree = ((hour / 12)*360) + 90;
    hourHand.style.transform =  `rotate(${hourDegree}deg)`;
}

setInterval(rotate, 1000);