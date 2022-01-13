let name = prompt("Welcome to GC mini-golf! What is your name?");

let holes = prompt("Would you like to play 3 or 6 holes?");

let threeHoles = -9;

let sixHoles = -18;

let strokes = 0;

for (let i=0; i < holes; i++) {
    let putts = Number(prompt("How many putts for hole " + (i+1) + "? (Par 3)"));
    strokes += putts;
    if (i===3) {
        console.log(strokes)
    }
}

let threeHoleScore = threeHoles + strokes;
let sixHoleScore = sixHoles + strokes;

console.log(name)
console.log(threeHoleScore)
console.log(sixHoleScore)

if (holes <= 3 && threeHoleScore == 0) {
    console.log("Good game, " + name + ". Your total par was: " + threeHoleScore);
}
if (holes <= 3 && threeHoleScore > 0) {
    console.log("Nice try, " + name + ". Your total par was: +" + threeHoleScore);
}
if (holes <= 3 && threeHoleScore < 0) {
    console.log("Great job, " + name + "! Your total par was: " + threeHoleScore);
}
if (holes >= 6 && sixHoleScore == 0) {
    console.log("Good game, " + name + ". Your total par was: " + sixHoleScore);
}
if (holes >= 6 && sixHoleScore > 0) {
    console.log("Nice try, " + name + ". Your total par was: +" + sixHoleScore);
}
if (holes >= 6 && sixHoleScore < 0) {
    console.log("Great job, " + name + "! Your total par was: " + sixHoleScore);
}