import './style.css';

import { myDog } from './dog/constants';

console.log('Привет, меня зовут', myDog.name);

if (myDog.isCute) {
  console.log('Я классный пёс!');
}

function dogName(param:string):string {
  return param;
}

console.log(dogName(myDog.name));

let legs: number;
legs = 4; 
legs = legs + 1; 

console.log(legs);

// Function Declaration. The simplest case
function sumNumberOfLimbs(legs: number, arms: number): string {
  return `I have ${legs + arms} limbs`;
}
console.log('sumNumberOfLimbs and console say: ' + sumNumberOfLimbs(2, 2));

// Function Declaration. Optional parameter
function sayNumberOfLimbs(legs: number, arms?: number):void {
  if (arms == undefined) {
    console.log(`Say function says: I have ${legs} limbs`);
  } else {
    console.log(`Say function says: I have ${legs + arms} limbs`);
  }
}
sayNumberOfLimbs(2, 2);
sayNumberOfLimbs(2);

// Function Declaration. Union types
function sayAge(age: string | number): void {
  console.log(`I'm ${age}`);
}
sayAge(5);
sayAge('five months');

// Literal types - Predefined values

let myParrotName: 'Yellow' | 'Eagle' | 'Firefly' = 'Firefly';

myParrotName = 'Yellow';
// myParrotName = 'otherValue'; // error. 

console.log('My parrot name: ' + myParrotName);

// Type Aliases or just "types"

type DigitalVariable = number;

let myFavoriteNumber: DigitalVariable = 3;
myFavoriteNumber = 42;
myFavoriteNumber = 7.7;

console.log(myFavoriteNumber);

type BooleanOrFalsy = boolean | null | undefined | 0 | '';

const isItHoliday: BooleanOrFalsy = undefined;

console.log(isItHoliday);


