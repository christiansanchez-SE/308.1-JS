//////////////////////////////////////////////////
////////////Part:0///////////////////////////////
////////////////////////////////////////////////


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



//////////////////////////////////////////////////
////////////Part:1 Math Problems/////////////////
////////////////////////////////////////////////

let divisble_5 = ((n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 %5)) === 0;

let firstLarger = (n1 > n4);

let arthmeticOperation = ((n2 - n1) * n3) % n4;

const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;


//////////////////////////////////////////////////
////////////Part:2 Practical/////////////////////
////////////////////////////////////////////////


let fuel55 = (1500 / 30);
let fuel60 = (1500 / 28);
let fuel75 = (1500 / 23);
let cost55 = fuel55 * 3;
let cost60 = fuel60 * 3;
let cost75 = fuel75 *3;
let budget = 175;

let msg = `At 55MPH the car will use ${fuel55} gallons and it will cost ${cost55}. Length of trip ${(1500 / 55).toFixed(2)} hours, budget enough to cover ${(budget - cost55) > 0}
At 60MPH the car will use ${(fuel60.toFixed(2))} gallons and it will cost ${cost60.toFixed(2)}. Length of trip ${(1500 / 60).toFixed(2)} hours, budget enough to cover ${(budget - cost60) > 0}
At 75MPH the car will use ${fuel75.toFixed(2)} gallons and it will cost ${cost75.toFixed(2)}. Length of trip ${(1500 / 75).toFixed(2)} hours, budget enough to cover ${(budget - cost75) > 0}`
console.log(msg)

//////////////////////////////////////////////////
////////////Part:3 Future Exploration////////////
////////////////////////////////////////////////

function roadTripCalculator2(speed, n) {
  if (n < 0) return;

  let mpg = speed[n] === 55 ? 30 :
      speed[n] === 60 ? 28 : 23;

  let gallonsReq = Math.ceil(roadTrip.trip / mpg);

  let enoughBudget = roadTrip.costPG * gallonsReq <= roadTrip.budget;

  if (!enoughBudget) {
      roadTripCalculator2(speed, n - 1);
  } else {

      const tripDuration = roadTrip.trip / speed[n];

      console.log(`We will be traveling at: ${speed[n]} mph for optimal speed.`);
      console.log(`Gallons of gasoline required for trip: ${gallonsReq}`);
      console.log(`The trip will take: ${tripDuration} hours to complete.`);
  }
}

roadTripCalculator2(speed, speed.length - 1);
console.log('\n');