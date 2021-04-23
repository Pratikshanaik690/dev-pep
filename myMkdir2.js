#!usr/bin/env node
let fs = require("fs");
let n = process.argv[2];
let name = process.argv[3];

for(let i=0;i<n;i++){
    fs.mkdirSync(`${name}-${i}`);
}