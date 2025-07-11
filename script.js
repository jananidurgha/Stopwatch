let startTime, interval;
let elapsed = 0;

function updateDisplay() {
  const totalMilliseconds = Date.now() - startTime + elapsed;
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
  if (!interval) {
    startTime = Date.now();
    interval = setInterval(updateDisplay, 1000);
  }
}

function pause() {
  if (interval) {
    clearInterval(interval);
    elapsed += Date.now() - startTime;
    interval = null;
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  elapsed = 0;
  document.getElementById('display').textContent = "00:00:00";
  document.getElementById('laps').innerHTML = "";
}

function lap() {
  if (interval) {
    const currentTime = document.getElementById('display').textContent;
    const li = document.createElement("li");
    li.textContent = `Lap: ${currentTime}`;
    document.getElementById('laps').appendChild(li);
  }
}
