#!usr/bin/env node
let fs = require("fs");
let n = 10;
let name = "lecture";

for(let i=0;i<n;i++){
    fs.mkdirSync(`${name}-${i}`);
}