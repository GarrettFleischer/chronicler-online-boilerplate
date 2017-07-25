const exec = require('child_process').exec;
// noinspection JSUnusedLocalSymbols
exec('npm -v', (err, stdout, stderr) => {
  if (err) throw err;
  if (parseFloat(stdout) < 3) {
    throw new Error('[ERROR: React Boilerplate] You need npm version @>=3');
    // noinspection UnreachableCodeJS
    process.exit(1);
  }
});
