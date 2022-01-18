const args = process.argv.slice(2);

const timer = args => {
  for (const delay of args) {
    if (!Number.isNaN(parseInt((delay))) && parseInt(delay) > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, parseInt(delay) * 1000);
    }
  }
};

timer(args);