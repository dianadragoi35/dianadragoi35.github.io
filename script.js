document.addEventListener('DOMContentLoaded', (event) => {
    const endDate = new Date("2023-08-31 00:00:00").getTime(); // Set your holiday date here

    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = endDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    setInterval(updateCountdown, 1000);
});
