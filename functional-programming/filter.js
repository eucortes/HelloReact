let weather = [72, 84, 34, 92, 24, 47, 85, 72, 54];

let goOutside = [];

for (let i = 0; i < weather.length; i++) {
  if (weather[i] > 60) {
    goOutside.push(weather[i]);
  }
}

console.log(goOutside);

let higherThan60 = function (test) {
  return test > 60;
}

console.log(weather.filter(higherThan60));

let forecast = [
  { day: 'Monday', sun: true },
  { day: 'Tuesday', sun: false },
  { day: 'Wednesday', sun: false },
  { day: 'Thursday', sun: true },
  { day: 'Friday', sun: false },
  { day: 'Saturday', sun: true },
  { day: 'Sunday', sun: false }
];

let sunnyDays = [];
for (let i = 0; i < forecast.length; i++) {
  if (forecast[i].sun) {
    sunnyDays.push(forecast[i].day);
  }
}
console.log(sunnyDays);

console.log(forecast.filter(function (day) {
  return day.sun;
}));