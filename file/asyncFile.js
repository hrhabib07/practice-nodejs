const fs = require('fs');

fs.readFile('./read.txt',  "utf-8" ,(err, data)=>{
    if(err){
        throw Error("Error reading text")
    } else{
        console.log(data);
        fs.writeFile("./read2.text", data + "this is written asynchronously", "utf-8", (err)=>{
            if(err){
                throw Error('error writing data')
            }
        })
    }
})