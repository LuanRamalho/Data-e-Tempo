let dateContainer = document.querySelector(".date-container");
let clockContainer = document.querySelector(".clock-container");
const weekdays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];
const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Augosto",
  "Septembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const dateClock = setInterval(function dateTime() {
  const today = new Date();
  let date = today.getDate();
  let day = weekdays[today.getDay()];
  let month = monthNames[today.getMonth()];

  let hours = today.getHours();
  let minutes = today.getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;

  dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;
  clockContainer.innerHTML = `${hours}:${minutes}`;
}, 1000);
