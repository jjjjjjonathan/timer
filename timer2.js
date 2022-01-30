const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key.name === 'b') {
    process.stdout.write('\x07');
  } else if (nums.includes(key.name)) {
    if (key.name === "1") {
      console.log(`Setting timer for ${key.name} second...`);
    } else {
      console.log(`Setting timer for ${key.name} seconds...`);
    }
    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, parseInt(key.name) * 1000);
  } else {
    console.log("Not a recognized key. Try 'b', or a number from 1 to 9.");
  }
});