const arr = [
  [1, 2],
  [2, 3],
  [6, 7]
];

// console.log(arr);
// console.log(arr[0][0]);
// console.log(arr[2][0])
// ;

const generate2d = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const print2d = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
  }
};

const myArray = generate2d(3, 2);
console.log(myArray);
print2d(myArray);
