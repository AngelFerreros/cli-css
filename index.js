console.log('cli-css');

// Change the program to take the kind of conversion you want to do.
    //if input is hex, convert to rgb
    //else if input is rgb, convert to hex

if (process.argv[2] == 'hex') {
    //Create a function that converts from hex colors to rgb colors.
    function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
console.log(hexToRgb(process.argv[3]));
}

else if (process.argv[2] == 'rgb') {
    // Create the functionality to put in 3 number values and get out the hex color.
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    let r = parseInt(process.argv[3]);
    let g = parseInt(process.argv[4]);
    let b = parseInt(process.argv[5]);
    console.log(r);
    console.log(g);
    console.log(b);
    console.log ( rgbToHex(r,g,b) );
}
