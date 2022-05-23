let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
  let date = new Date();
  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * 6;
  let ss = date.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let am = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
});
