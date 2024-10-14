/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numberEl = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
let messageEl = document.getElementById("message-el");

function lengthConverter(number) {
  const meterToFeet = number * 3.281;
  const feetToMeter = number / 3.281;
  return `${number} meters = ${meterToFeet.toFixed(
    2
  )} feet | ${number} feet = ${feetToMeter.toFixed(2)} meters`;
}

function volumeConverter(number) {
  const literToGallon = number * 0.264;
  const gallonToliter = number / 0.264;
  return `${number} liters = ${literToGallon.toFixed(
    2
  )} gallons | ${number} gallons = ${gallonToliter.toFixed(2)} liters`;
}

function massConverter(number) {
  const kilogramToPound = number * 2.204;
  const poundToKilogram = number / 2.204;
  return `${number} kilos = ${kilogramToPound.toFixed(
    2
  )} pounds | ${number} pounds = ${poundToKilogram.toFixed(2)} kilos`;
}

convertBtn.addEventListener("click", () => {
  if (numberEl.value !== "") {
    let convertable = Number(numberEl.value);
    lengthEl.textContent = lengthConverter(convertable);
    volumeEl.textContent = volumeConverter(convertable);
    massEl.textContent = massConverter(convertable);
    messageEl.textContent = "";
  } else {
    messageEl.textContent = "input cannot be empty";
  }
});
