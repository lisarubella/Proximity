window.addEventListener('load', () => {
    const music = document.getElementById('bgMusic');
    music.volume = 0.7;

    // Try to play music immediately
    music.play().catch(() => {
        // If autoplay is blocked, play on first user interaction
        document.addEventListener('click', () => {
            music.play();
        }, { once: true });
    });

    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
        document.getElementById('mainPage').classList.remove('hidden');
        createSakuraEffect();
    }, 3000);
});

function createSakuraEffect() {
    const container = document.getElementById('sakuraContainer');
    setInterval(() => {
        const sakura = document.createElement('div');
        sakura.classList.add('sakura');
        sakura.style.left = Math.random() * 100 + '%';
        sakura.style.animationDuration = (Math.random() * 3 + 5) + 's';
        sakura.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(sakura);

        setTimeout(() => {
            sakura.remove();
        }, 8000);
    }, 300);
}

function showNewGame() {
    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('newGamePage').classList.remove('hidden');
}

function showContinue() {
    alert('Continue feature coming soon!');
}

function showSettings() {
    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('settingsPage').classList.remove('hidden');
}

function showCredits() {
    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('creditsPage').classList.remove('hidden');
}

function showMain() {
    document.querySelectorAll('.page-container').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById('mainPage').classList.remove('hidden');
}

function startGame() {
    const name = document.getElementById('playerName').value;
    const mode = document.getElementById('gameMode').value;

    if (!name) {
        alert('Please enter your name!');
        return;
    }

    alert(`Welcome ${name}! Starting ${mode}...`);
}

function adjustVolume(value) {
    const music = document.getElementById('bgMusic');
    music.volume = value / 100;
    document.getElementById('volumeValue').textContent = value + '%';
}

function adjustBrightness(value) {
    document.body.style.filter = `brightness(${value}%)`;
    document.getElementById('brightnessValue').textContent = value + '%';
}

