const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const newYears = '1 Jan 2023';


function countdown(){
    const nyd = new Date(newYears);
    const currentDate = new Date();

    const tcoun = (nyd-currentDate);
    const tcouns = tcoun/1000;
    const days = Math.floor(tcouns/24/3600);

    const sconh = (tcouns-(days*24*3600));
    const hour = Math.floor(sconh/3600);

    const sconm = (sconh-(hour*3600));
    const minute = Math.floor(sconm/60);

    const scons = (sconm-(minute*60));
    const seconds = Math.floor(scons);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hour;
    minuteEl.innerHTML = minute;
    secondEl.innerHTML = seconds;
}
countdown();
setInterval(countdown, 1000);
