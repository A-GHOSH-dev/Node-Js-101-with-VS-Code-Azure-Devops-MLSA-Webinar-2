const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('MLSAwebinar', () => {
  console.log('Please join the meeting!');
  setTimeout(() => {
      console.log('Please join the meeting! Its a gentle reminder');
  }, 3000);
});

console.log("The script is running")
myEmitter.emit('MLSAwebinar');
console.log("The script is still running")
myEmitter.emit('MLSAwebinar');