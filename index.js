let timer = 0;
let interval = null;
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsDiv = document.getElementById('laps');

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    let hrs = Math.floor(mins / 60);
    mins = mins % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(timer);
}

function start() {
    if (interval) return;
    interval = setInterval(() => {
        timer++;
        updateDisplay();
    }, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    timer = 0;
    updateDisplay();
    lapsDiv.innerHTML = '';
}

function lap() {
    const lapTime = formatTime(timer);
    const lapElem = document.createElement('div');
    lapElem.textContent = 'Lap: ' + lapTime;
    lapsDiv.appendChild(lapElem);
}

startBtn.onclick = start;
stopBtn.onclick = stop;
resetBtn.onclick = reset;
lapBtn.onclick = lap;

updateDisplay();