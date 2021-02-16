import { colors } from './colors.js';
import jsToSass from './jsToSass.js'

const keys = Object.keys(colors);
// console.log(keys);

keys.forEach(key => {
  // console.log(key);
});

// goal
/*
have an object that looks like this
{
  blue-100: whatever,
  blue-200: whatever
}
*/

let outputColor = {}
// outputColor['black'] = "#000"
// outputColor['white'] = "#fff"

outputColor['black'] = "#000";

console.log(jsToSass(outputColor));
Deno.writeTextFileSync('./hello.scss', jsToSass(outputColor));