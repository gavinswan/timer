const args = process.argv.slice(2);

for (let arg of args) {
  if (arg > 0) {
    setTimeout(function() {
      process.stdout.write('\x07');
    }, arg * 1000);
  }
}