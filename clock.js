function setDate() {
  let fullDate = new Date();
  let hours = fullDate.getHours();
  let mins = fullDate.getMinutes();
  let secs = fullDate.getSeconds();

  if (secs < 10) {
    secs = `0${secs}`;
  }

  if (mins < 10) {
    mins = `0${mins}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }


  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("secs").innerHTML = secs;
}

setInterval(setDate, 1000)
