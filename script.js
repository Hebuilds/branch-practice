const actionBtn = document.getElementById('action-btn');
if (actionBtn) {
    actionBtn.addEventListener('click', () => {
        alert('Welcome to the homepage!');
    });
}

const randomBtn = document.getElementById('random-btn');
if (randomBtn) {
    randomBtn.addEventListener('click', () => {
        const colors = ['#2563eb', '#16a34a', '#dc2626', '#9333ea', '#ea580c'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
}