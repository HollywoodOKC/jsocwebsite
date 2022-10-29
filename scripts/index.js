const foundingDate = new Date("13 April 2020");
const todayDate = new Date();
const millToDays = 1000*60*60*24;
setInterval(todayDate, 1000);

function daysToYears(numberOfDays) {
  const years = Math.floor(numberOfDays / 365);
  const months = Math.floor(numberOfDays % 365 / 30);
  const days = Math.floor(numberOfDays % 365 % 30);

  return `${years} years ${months} months & ${days} days`;
}

document.getElementById("timer").innerHTML = daysToYears((Math.round((todayDate - foundingDate) / millToDays)));
