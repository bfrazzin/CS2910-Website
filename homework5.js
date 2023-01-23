"use strict";
/**
 * I used this website as a walkthrough for strict in js. I used some of their examples to
 * create errors thrown because of the strict restriction
 * 
 * https://www.w3schools.com/js/js_strict.asp
 */


// #1
let x = 1;
// #3
// commented this out because it was throwing the error in #3 in my assignment
//delete x;

const obj = 
{
    // #2
    get x() {return 0},
    set x(val) {this.val=val}
};

// #4
//function y(p1, p1) {};
function y(p1, p2) {};

//#5
//let eval = 1;
let eval_z = 1;