let snowman = {
  isSnow: true,
  color: "white",
  madeOfSnowBalls: 3,
  'first name': 'frosty'
}

console.log(snowman.isSnow);
console.log(snowman.madeOfSnowBalls);
console.log(snowman['first name']);
console.log(snowman.color);

snowman.color = "black";
snowman.madeOfSnowBalls = 8;
snowman['first name'] = 'frosty the snowman';
