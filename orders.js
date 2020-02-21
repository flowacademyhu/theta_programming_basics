const generateArray = (size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    const num = Math.floor(Math.random() * 10 + 1);
    arr.push(num);
  }
  return arr;
};

const minimumSelectionSort = (source) => {
  for (let i = 0; i < source.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < source.length; j++) {
      if (source[j] < source[minIndex]) {
        minIndex = j;
      }
    }
    // console.log(i, ' | ', source);
    console.log(`${i} | ${source}`);
    if (minIndex !== i) {
      const temp = source[i];
      source[i] = source[minIndex];
      source[minIndex] = temp;
    }
  }
};

const insertionSort = (source) => {
  for (let i = 1; i < source.length; i++) {
    const temp = source[i];
    let j = i - 1;
    while (j >= 0 && source[j] > temp) {
      source[j + 1] = source[j];
      j--;
    }
    source[j + 1] = temp;
  }
};

const bubbleSort = (source) => {
  for (let i = source.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (source[j] > source[j + 1]) {
        const temp = source[j];
        source[j] = source[j + 1];
        source[j + 1] = temp;
      }
    }
  }
};

const randomArray = generateArray(10);
const arr2 = [5, 2, 1, 6, 3, 4];
insertionSort(arr2);
console.log(arr2);
