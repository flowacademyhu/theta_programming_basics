const readline = require('readline-sync');

const doSth = (fgv) => { // stdin inner
  const name = readline.question('Mi a neved?');
  fgv(name);
};

doSth((name) => {
  console.log('Szia', name);
});
