let start = document.getElementById("start");
let stop1 = document.getElementById("stop");
let timeuser = document.getElementById("timeleft")
let inputuser = document.getElementById("seconds")
function countDown() {
    let timeLeft = inputuser.value;
    timeuser.innerHTML = timeLeft;
    setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0)
        }
        timeuser.innerHTML = timeLeft
        timeLeft -= 1
    }, 1000)
}
start.addEventListener("click", countDown);
stop1.addEventListener("click",clearInterval(countDown));
  