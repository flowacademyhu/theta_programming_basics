const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

const keyProcessor = (key) => {
  console.log('You pressed', key);
  if (key === 'q' || key === '\u0003') {
    process.exit(0);
  }
};

stdin.on('data', keyProcessor);
console.log('Egy cica');

// setInterval(() => {
//   console.log('CICA');
// }, 1000);

let time = 2000;
const fun = (a) => {
  console.log(a, 'HELLO', time);
  time -= 100;
  if (time < 100) {
    console.log('Time is up');
    return '';
  }
  setTimeout(() => { fun(a); }, time);
};
fun('Feri');
