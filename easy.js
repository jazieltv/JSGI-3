var run = exercise('running');

console.log(run); // prints "Today's exercise: running"

var swim = exercise('swimming');

console.log(swim); // prints "Today's exercise: swimming"

// Here is the function
function exercise(string){
    return "Today's exercise: "+string;
}