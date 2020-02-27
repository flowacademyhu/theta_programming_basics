
const counter = (num) => {
  console.log(num);
  if (num === 0) {
    return '';
  }
  num--;
  const cica = 'asdf';
  counter(num);
  console.log(cica, num);
};

// counter(10);

const arrMin = (index, arr) => {
  if (index === 1) return arr[0];
  return Math.min(arr[index - 1], arrMin(index - 1, arr));
}
;
const arr = [1, 2, -5, 10, 6];
// console.log(arrMin(arr.length, arr));

const fibo = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}
;

console.log(fibo(4));
