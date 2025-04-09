document.addEventListener('DOMContentLoaded', () => {
    const cycleDuration = 86400 * 1000;
    const initialCountdownSeconds = 23 * 3600 + 59 * 60 + 59;

    function formatTime(unit) {
        return unit < 10 ? "0" + unit : unit;
    }

    let now = Date.now();
    let cycleEnd = localStorage.getItem("cycleEnd");

    if (!cycleEnd) {
        cycleEnd = now + initialCountdownSeconds * 1000;
        localStorage.setItem("cycleEnd", cycleEnd);
    } else {
        cycleEnd = parseInt(cycleEnd, 10);
        while (now > cycleEnd) {
            cycleEnd += cycleDuration;
        }
        localStorage.setItem("cycleEnd", cycleEnd);
    }

    function updateTimer() {
        const now = Date.now();
        let diff = cycleEnd - now;

        if (diff < 0) {
            cycleEnd += cycleDuration;
            localStorage.setItem("cycleEnd", cycleEnd);
            diff = cycleEnd - now;
        }

        const totalSeconds = Math.floor(diff / 1000);

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        document.getElementById("timer").textContent = formattedTime;
    }

    setInterval(updateTimer, 1000);
    updateTimer();
});