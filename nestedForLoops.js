
// Think of this as rows and columns
let numberGrid = [ 
    [1,2,3], 
    [4,5,6], 
    [7,8,9], 
    [0] ];


for (let i = 0; i < numberGrid.length; i++) {
    for (let j = 0; j < numberGrid[i].length; j++) {
        console.log(numberGrid[i][j]);
    }
    console.log("\n");
}