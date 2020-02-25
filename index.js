const readLine = require('readline-sync');
const name = readLine.question('Mi a neved? ');
console.log(`Szia ${name}`);

while (true) {
  const key = readLine.keyIn();
  if (key === 'q') {
    break;
  }
  // else console.log(key);
}
