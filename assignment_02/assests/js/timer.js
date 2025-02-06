const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".seconds");
const session = document.querySelector(".session");
const greet = document.querySelector(".greet");



const showTime = () => {
    let date = new Date();
    let getHour = date.getHours();
    let getMinute = date.getMinutes();
    let getSecond = date.getSeconds();
    
    if (getHour >= 5 && getHour < 12) {
        greet.innerText = "🌅 Good Morning!";
    } else if (getHour >= 12 && getHour < 17) {
        greet.innerText = "🌞 Good Afternoon!";
    } else if (getHour >= 17 && getHour < 21) {
        greet.innerText = "🌇 Good Evening!";
    } else {
        greet.innerText = "🌙 Good Night!";
    }

    session.innerText = getHour > 12 ? " PM" : " AM";
    getHour = getHour>12 ? getHour % 12 : getHour;
    hour.innerText = getHour<10 ? "0"+getHour : getHour;
    minute.innerText = getMinute<10 ? "0"+getHour : getMinute;
    second.innerText = getSecond<10 ? "0"+getSecond : getSecond;

    
}
setInterval(()=>{
    showTime()
},1000)