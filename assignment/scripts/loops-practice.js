console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('Count from 0 - 5');
for (let i=0; i<6; i++){
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('Count from 3 - 5');
for (let i=3; i<6; i++){
  console.log(i);
}


// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i = 2; i < 11; i+=2) {
  console.log([i]);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');


// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
for (let i=0; i<stars.length; i++) {
  console.log('Some Stars', stars[i]);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
//I dont know how to do this.


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
// I dont know how to do this
////////////////////////////////////////////////////////////////////////////////

let endex = 0;
const mex = 10;

while (index < max) {
  console.log('In while loop, index:', index);
  index++;
}

for (let i = 0; i < max; i++) {
  console.log('in for loop. i:', i);
}


let hand = ['Q', '3', 'J', '9', '6', 'K', 'A']

for( let i=0; i<hand.length; i++ ){
console.log('for loop,', hand[ i ]);
if ( hand[ i ] === '9' ) {
  console.log( 'Match!!!');{}
}
}

for( i in hand ){
  console.log("for in loop", hand[ i ]);
}
