const fs = require('fs');
// const path = require('path');
const swc = require('@swc/core');
const pkg = require('./package.json');
const code = fs.readFileSync(pkg.main).toString('utf-8');
const time = 'minify time';
console.time(time);
swc.minify(code).then(output => {
    console.timeEnd(time);
    fs.writeFileSync(pkg.browser, output.code);
});