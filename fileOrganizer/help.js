function helpfn(){
    console.log(`List of all command
                1. To know about all the commands --> type node cli.js help in the terminal
                2. To view tree structure of files and folders --> type node cli.js tree in the terminal
                3. To organize all the files in a folder -->type node cli.js organize in the terminal
                `);
}

module.exports = {
    helpfn : helpfn,
}