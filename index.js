console.log('cli-css');

//Create a function that converts from hex colors to rgb colors.
const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

console.log( `rgb (${hexToRgb(process.argv[3])})` );

// Create the functionality to put in 3 number values and get out the hex color.
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')

console.log(rgbToHex(255, 255, 255));

// Change the program to take the kind of conversion you want to do.

