console.log('cli-css');

let convertToRgb = require('./hex2rgb.js');
    console.log(convertToRgb);

let convertToHex = require('./rgb2hex.js');
    console.log(convertToHex);

let convertToHsl = require('./hsl.js');
    console.log(convertToHsl);

switch (process.argv[2]) {
    case `hex`:
    let colorInput = process.argv[3];
    console.log(convertToRgb.hexToRgb(colorInput));
    console.log(convertToHsl.hexToHsl(colorInput));
    break;
    case `rgb`:
    let r = parseInt(process.argv[3]);
    let g = parseInt(process.argv[4]);
    let b = parseInt(process.argv[5]);
    console.log(convertToHex.rgbToHex(r,g,b));
    console.log(convertToHsl.rgbToHsl(r,g,b));
    break;
    case `hsl`:
    let h = parseInt(process.argv[3]);
    let s = parseInt(process.argv[4]);
    let l = parseInt(process.argv[5]);
    console.log(convertToRgb.hslToRgb(h,s,l));
    console.log(convertToHex.hslToHex(h,s,l));
    break;
    default:
    console.log(`Not a valid input`);
}


