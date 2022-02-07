// 1 + 80; //=> 81
// 60 - 40; //=> 20
// 2 * 3.4; //=> 6.8
// 5.0 / 2.5; //=> 2
// add()
// subtract(60)
// multiply()
// divide() 

// let number = 5;

// number++; //=> 5... hmmmm

// number; //=> 6 -- the number was incremented after it was evaluated

// number--; //=> 6

// number; //=> 5
// console.log(number);




// let number = 5;

// number += 3; //=> 8
// number -= 2; //=> 6
// number *= 10; //=> 60
// number /= 5; //=> 12
// console.log(number);



//reset number
// number = 10;

// function add5() {
//     return (number += 5);
// }

// function divideBy3() {
//     return (number /= 3);
// }

// divideBy3(); //=> 3.3333333333333335

// add5(); //=> 8.333333333333334

// // reset number
// number = 10;

// add5(); //=> 15

// divideBy3(); //=> 5

// console.log(number);

// console.log(parseInt("2", 10));

// console.log(parseInt("2.2222", 10));

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return ++n;
    n;
}


function decrement(n) {
    return --n;
    n;

}

function makeInt(string) {
    return parseInt(string, 10)
}

// console.log(makeInt(5));

function preserveDecimal(string) {
    return parseFloat(string);
}

// console.log(preserveDecimal(3.333));