const table = require('table');
const arrayMethods = require('./2d_arrays');

const arr = arrayMethods.generate2d(4, 4);
arrayMethods.fill2d(arr);
arrayMethods.cica(arr);
console.log(table.table(arr));

// var ctx = require('axel');

// // Clear the terminal
// ctx.clear();

// // Sets the pixel BG color to orange
// ctx.bg(0, 128, 255);

// // Draw 100 random blue dots on the console
// for (var i = 0; i < 100; i += 1) {
//   ctx.point(
//     Math.random() * ctx.cols,
//     Math.random() * ctx.rows
//   );
// }
// ctx.bg(20, 20, 20);
// ctx.line(1, 1, 10, 10);

// ctx.cursor.restore();
