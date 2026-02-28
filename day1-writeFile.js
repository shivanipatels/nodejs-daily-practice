
const fs = require('fs');

console.log("my first node js file");

fs.writeFile("output.txt", "writing file", (err)=>{
  if(err){
    console.log("error occurred");
    
  }else{
    console.log("file written successfully");
    
  }
});

