const arr = ['cica', 'kutya', 'poloska'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);

arr[1] = 'Medve';
// console.log(arr);
arr.push('Tasi');
const lastElement = arr.pop();
// console.log(lastElement, arr);
// arr[3] = 10;
// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

const generateArray = (size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    const num = Math.floor(Math.random() * 10 + 1);
    arr.push(num);
  }
  return arr;
};

const randomArray = generateArray(5);
console.log(randomArray);

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log('Sum: ', sumArray(randomArray));

const countElement = (element, arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++; // count = count + 1
    }
  }
  return count;
};

const findElement = 2;
console.log('Element ', findElement, ' in array ', countElement(findElement, randomArray));

const maxArray = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log('Maximum:', maxArray(randomArray));

const containsElement = (element, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
};

const containsElement2 = (element, arr) => {
  let i = 0;
  while (i < arr.length && arr[i] !== element) {
    i++;
  }
  if (i < arr.length) {
    return true;
  } else {
    return false;
  }
};

console.log('Contains', findElement, containsElement(findElement, randomArray));
console.log('Contains2', findElement, containsElement2(findElement, randomArray));

const indexOf = (element, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}
;

console.log('Index of', findElement, 'is', indexOf(findElement, randomArray));

const copy = (source, target) => {
  for (let i = 0; i < source.length; i++) {
    target[i] = source[i] * 2;
  }
  return target;
};

const src = [1, 2, 3, 4, 5];
const trgt = [];
copy(src, trgt);
// console.log(trgt);

const selectEven = (source) => {
  const target = [];
  for (let i = 0, j = 0; i < source.length; i++) {
    if (source[i] % 2 === 0) {
      target[j] = source[i];
      j++;
    }
  }
  return target;
};

console.log('Evens:', selectEven(randomArray));

const arrayParity = (source) => {
  const evens = [];
  const odds = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] % 2 === 0) {
      evens.push(source[i]);
    } else {
      odds.push(source[i]);
    }
  }
  return { e: evens, o: odds };
};

// const res = arrayParity(randomArray);
// const evens = res.e;
// const odds = res.o;
// console.log(evens, odds);

const section = (source1, source2) => {
  const target = [];
  for (let i = 0; i < source1.length; i++) {
    for (let j = 0; j < source2.length; j++) {
      if (source1[i] === source2[j]) {
        if (!target.includes(source1[i])) {
          target.push(source1[i]);
        }
        break;
      }
    }
  }
  return target;
};

// const src1 = generateArray(8);
// const src2 = generateArray(3);
// console.log(src1, src2);
// console.log('Section', section(src1, src2));

const union = (src1, src2) => {
  const target = [];
  for (let i = 0; i < src1.length; i++) { // Copy first array
    target[i] = src1[i];
  }
  let k = src1.length; // k = n
  for (let j = 0; j < src2.length; j++) {
    let i = 0;
    while (i < src1.length && src2[j] !== src1[i]) { // i < n és b[j] <> a[i]
      i++;
    }
    if (i === src1.length) { // i >= n
      target[k] = src2[j];
      k++;
    }
  }
  return target;
};

const union2 = (src1, src2) => {
  const target = [];
  for (let i = 0; i < src1.length; i++) {
    if (!target.includes(src1[i])) {
      target.push(src1[i]);
    }
  }
  for (let j = 0; j < src2.length; j++) {
    if (!target.includes(src2[j])) {
      target.push(src2[j]);
    }
  }
  return target;
};

const src1 = generateArray(8);
const src2 = generateArray(3);
console.log(src1, src2);
console.log('Union', union(src1, src2));
console.log('Union2', union2(src1, src2));
