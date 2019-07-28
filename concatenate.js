const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/angular-elements/runtime-es5.js',
'./dist/angular-elements/polyfills-es5.js',
'./dist/angular-elements/scripts.js',
'./dist/angular-elements/main-es5.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/analytics-counter.js');
})()