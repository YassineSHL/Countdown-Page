// Deadline (Date format)
var deadline = "August 30 2017 16:30:59 GMT+0100";
var deadlineDate = Date.parse(deadline); // Parse to Date

var timeInterval = setInterval(updateCounter, 1000); // Call update function every 1 second

var daysView = document.querySelector('#clockdiv .days');
var hoursView = document.querySelector('#clockdiv .hours');
var minutesView = document.querySelector('#clockdiv .minutes');
var secondsView = document.querySelector('#clockdiv .seconds');

function updateCounter() {
    // Calculate Remaining time
    var remainTime = getRemainTime();
    // Update Counter in View
    setCounter(remainTime);
    // Check if Deadline atteigned
    if (remainTime.total <= 0) {
        stopCounter();
    }
}

function getRemainTime() {
    var remainTime = {};
    var currentDate = Date.parse(new Date());
    remainTime.total = deadlineDate - currentDate;
    // Divide Remain time into days/hours/minutes/seconds
    // Floor the result to get real number
    remainTime.seconds = Math.floor((remainTime.total / 1000) % 60);
    remainTime.minutes = Math.floor((remainTime.total / 1000 / 60) % 60);
    remainTime.hours = Math.floor((remainTime.total / (1000 * 60 * 60)) % 24);
    remainTime.days = Math.floor(remainTime.total / (1000 * 60 * 60 * 24));
    return remainTime;
}

function setCounter(remainTime) {
    daysView.textContent = remainTime.days;
    hoursView.innerHTML = remainTime.hours;
    minutesView.innerHTML = remainTime.minutes;
    secondsView.innerHTML = remainTime.seconds;
}

function stopCounter() {
    daysView.innerHTML = '0';
    hoursView.innerHTML = '00';
    minutesView.innerHTML = '00';
    secondsView.innerHTML = '00';
    clearInterval(timeInterval);
}