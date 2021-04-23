#!usr/bin/env node
let fs = require("fs");

(function(){

    let n = process.argv[2];
    let name = process.argv[3];

    try{
        // check if n is number or not and n<=0
        if(!Number.isInteger(+n) || n<=0)
        {
            console.log("invalid file");
            return;
        }

        if(fs.existsSync(`${name}-0`)){
            for(let i=0;i<n;i++){
                fs.rmdirSync(`${name}-${i}`);
            }
        }
        else{
            for(let i=0;i<n;i++){
                fs.mkdirSync(`${name}-${i}`);
            }

        }

    } 
    catch(err)
    {
        console.log("Some error occured, possibly n was greater than expected");

    }     
    

})();

