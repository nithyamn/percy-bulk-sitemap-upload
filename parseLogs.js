const fs = require("fs");
let file = fs.readFileSync("percy-all-logs.log", "utf8");
let arr = file.split(/\r?\n/);
fs.writeFile('only-errors.log','', (err) =>{
    if(err){
        console.log(err);
    }
});
arr.forEach((line, idx)=> {
    if(line.includes("Error") || line.includes("error")){
        console.log((idx+1)+':'+ line);
        fs.appendFile('only-errors.log','\n'+(idx+1)+':'+ line, (err) =>{
            console.log("added");
            if(err){
                console.log(err);
            }
        });
    }
});