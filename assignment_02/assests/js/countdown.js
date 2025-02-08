const date = document.querySelector(".js-date");
const month = document.querySelector(".js-month");
const year = document.querySelector(".js-year");
const jsCountdown = document.querySelector(".countdown");

const now = new Date();
const c_date = now.getDate();
const c_month = now.getMonth() + 1;
const c_year = now.getFullYear();

// Formatting Date, Month, Year
date.innerText = c_date < 10 ? "0" + c_date : c_date;
month.innerText = c_month < 10 ? "0" + c_month : c_month;
year.innerText = c_year;

const target = new Date("December 31, 2025 23:59:59").getTime();

const countdown = setInterval(() => {
    const today = new Date().getTime();
    const distance = target - today;

    // Corrected Parentheses for Accurate Calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  // Added ()
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);             // Added ()

    // Display Countdown
    jsCountdown.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds Remain in 2025`;

    // When Countdown Ends
    if (distance < 0) {
        clearInterval(countdown);
        jsCountdown.innerHTML = `🎉 Time's Up! Welcome to 2026! 🎆`;
    }
}, 1000);
