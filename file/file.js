const fs = require('fs');
const readFile = fs.readFileSync("./read.txt", "utf-8");
const writeFIle = fs.writeFileSync("./write.text", readFile+"this is my written text")
console.log(writeFIle);