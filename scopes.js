const name = 'Feri';
console.log('Global', name);

const hello = () => {
  // console.log(name);
  const name = 'NemFeri';
  console.log('In function', name);

  // console.log(age);
};

hello();

console.log(name);
