/*. Use the os module to print information about your computer system's uptime. 
Also, use the path module to parse and display information about the .js file you 
are working in. */

const os = require('os');
const path = require('path');

console.log(os.uptime());  
console.log(path.parse(__filename));  // __filename is a global object that gives the path of the current file