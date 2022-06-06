let fs = require("fs");
let path = require("path");
function treefn(dirPath){
   dirPath = dirPath != undefined ? dirPath : process.cwd();
  
   let FolderContent = fs.readdirSync(dirPath);// give folder content in array form 
   console.log(path.basename(dirPath)); //use for folder name give name after last (/)
   for(let i = 0; i < FolderContent.length; i++){    //use for to get value from readdir.
       console.log("\t"+FolderContent[i])
   }
}

module.exports = {
  treefn : treefn
}
