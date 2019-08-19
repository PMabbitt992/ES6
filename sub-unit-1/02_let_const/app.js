"use strict"

var a = "Test1";
let b = "Test2";

const testVar = () => {
    var a = 30;
    if (true) {
        const a = 50;
        console.log(a);
    }
    console.log(`other A : ${a}`);
}

console.log(`Logged: ${a}`);

testVar()