const path = require('path');

console.log(path.basename('C:/Users/anany/Desktop/VIT/Internships/Microsoft Learn Student Ambassador/gold/firstapp/pathmodules.js'));

// Normalization  
console.log('normalization : ' + path.normalize('C:/Users/anany/Desktop/VIT/Internships/Microsoft Learn Student Ambassador/gold/..'));  
// Join  
console.log('joint path : ' + path.join('C:/Users/anany/Desktop/VIT/Internships/Microsoft Learn Student Ambassador/', 'javatpoint', 'node/newfolder', 'tab', '..'));  
// Resolve  
console.log('resolve : ' + path.resolve('pathmodules.js'));  
// Extension   
console.log('ext name: ' + path.extname('nodemodules.js'));    