document.addEventListener('DOMContentLoaded', (event) => {
    const endDate = new Date("2023-08-30 17:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = endDate - now;

        const timerDiv = document.querySelector('.timer');
        const titleDiv = document.querySelector('.timerTitle');
        const countdownOverDiv = document.getElementById('countdownOver');

        if (timeDifference <= 0) {
            // Countdown reached zero
            timerDiv.style.display = 'none';
            titleDiv.style.display = 'none';
            countdownOverDiv.style.display = 'block';
        } else {
            // Countdown still running
            timerDiv.style.display = 'block';
            titleDiv.style.display = 'block';
            countdownOverDiv.style.display = 'none';

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;
        }
    }

    setInterval(updateCountdown, 1000);
});
document.addEventListener("DOMContentLoaded", function() {
    // assuming each h3 is a direct child of a .toggle-section
    const sections = document.querySelectorAll('.toggle-section h4');

    sections.forEach(section => {
        section.addEventListener('click', function() {
            const arrow = this.querySelector('.arrow-down');
            arrow.classList.toggle('active');
        });
    });
});
function toggleText(id) {
    const element = document.getElementById(id);
    const arrowElement = document.getElementById('arrow' + id.charAt(id.length - 1));

    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        arrowElement.innerHTML = "▲";
    } else {
        element.style.display = "none";
        arrowElement.innerHTML = "▼";
    }
}
function downloadTicket(text, filename) {
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.setAttribute('href', window.URL.createObjectURL(blob));
    a.setAttribute('download', filename);
    a.click();
}