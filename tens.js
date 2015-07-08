var numbers = [];

// Randomly generate a row of numbers
for (var i = 0; i < Math.ceil(Math.random() * 100); i += 1) {
  numbers.push(Math.ceil(Math.random() * 20));
}

console.log("Origin: " + numbers);

//Sort given array
numbers.sort(function (a, b) { return a - b;});

console.log("Sorted: " + numbers);

//Filter numbers that are higher than 10
var toTen;
toTen = numbers.filter(function (a) { return a < 10; });

console.log("Cleaned: " + toTen);

//Find all possible sums of 10
var sums = [];

for (var i = 1; i < toTen.length; i += 1) {
  var temp = [],
    tempSum = toTen[toTen.length - i];
  for (var k = 0; k < tempSum; k += 1) {
    for (var j = k; j < toTen.length; j += 1) {
      if (toTen.length - i > j) {
        if (tempSum + toTen[j] < 10) {
          temp.push(toTen[j]);
          tempSum += toTen[j];
        } else if (tempSum + toTen[j] === 10) {
          temp.push(toTen[j]);
          temp.push(toTen[toTen.length - i]);
          sums.push(temp);
          temp = [];
          tempSum = toTen[toTen.length - i];
          break;
        } else {
          temp = [];
          tempSum = toTen[toTen.length - i];
          break;
        }
      } else {
        break;
      }
    }
  }
}
console.table(sums);
