let forecast = [
  { day: 'Monday', sun: true, humidity: 10 },
  { day: 'Tuesday', sun: false, humidity: 100 },
  { day: 'Wednesday', sun: false, humidity: 100 },
  { day: 'Thursday', sun: true, humidity: 25 },
  { day: 'Friday', sun: false, humidity: 100 },
  { day: 'Saturday', sun: true, humidity: 15 },
  { day: 'Sunday', sun: false, humidity: 100 }
];

let humid = [];
for (let i = 0; i < forecast.length; i++) {
  humid.push(forecast[i].humidity);
}
console.log(humid);

console.log(forecast.map(function (day) {
  return day.humidity;
}));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doublePlusOne = numbers.map(function (num) {
  return num * 2;
}).map(function (num) {
  return num + 1;
});
console.log(doublePlusOne);