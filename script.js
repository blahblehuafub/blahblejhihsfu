// Date we started: November 3rd, 2023
const startDate = new Date('2023-11-03T00:00:00');

function updateTimer() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Adjust for negative values (borrowing)
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Get days in previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    document.getElementById('years').innerText = String(years).padStart(2, '0');
    document.getElementById('months').innerText = String(months).padStart(2, '0');
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer(); // Initial call

// Heart Rain Effect
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Random emoji or shape
    const shapes = ['❤️', '💖', '💕', '💗', '💓', '🥑'];
    heart.innerText = shapes[Math.floor(Math.random() * shapes.length)];

    // Random position
    heart.style.left = Math.random() * 100 + 'vw';

    // Random animation duration
    const duration = Math.random() * 3 + 2; // between 2 and 5 seconds
    heart.style.animationDuration = duration + 's';

    // Random size
    const size = Math.random() * 1 + 1; // between 1rem and 2rem
    heart.style.fontSize = size + 'rem';

    document.getElementById('heart-rain').appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300);

// Loader logic
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("loader-hidden");

        loader.addEventListener("transitionend", () => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        });
    }, 3000); // 3 seconds delay
});
