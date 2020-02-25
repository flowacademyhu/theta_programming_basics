
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

counter(10);
