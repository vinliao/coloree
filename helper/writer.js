import { colors } from './colors.js';
import jsToSass from './jsToSass.js'

let outputColor = {}
outputColor['black'] = "#000"
outputColor['white'] = "#fff"

const keys = Object.keys(colors);
keys.forEach(key => {

  // white and black are hardcoded
  if(key != 'white' && key != 'black') {
    const lightness = Object.keys(colors[key]);
    lightness.forEach(oneLightness => {
      // example of colorString: red-50, blue-700, etc
      const colorString = key + '-' + oneLightness;
      outputColor[colorString] = colors[key][oneLightness];
    });
  }
});

Deno.writeTextFileSync('../color.min.scss', jsToSass(outputColor));