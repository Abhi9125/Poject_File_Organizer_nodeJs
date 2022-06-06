let helpfnObj = require("./fileOrganizer/help");
let treefnObj = require("./fileOrganizer/tree");
let organizefnObj = require("./fileOrganizer/organize");
let InputArray = process.argv.slice(2);
let command = InputArray[0];
let dirPath = InputArray[1];

switch(command)
{
    case "help" :

        helpfnObj.helpfn();
        break;

    case "tree" :

        treefnObj.treefn(dirPath);
        break;

    case "organize":

        organizefnObj.organizefn(dirPath);
        break;
        
    default:
        console.log("pls  enter valid input")
}