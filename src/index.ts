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

function sumNumberOfLimbs(legs: number, arms: number): string {
  return `I have ${legs + arms} limbs`;
}
console.log('sumNumberOfLimbs and console say: ' + sumNumberOfLimbs(2, 2));

function sayNumberOfLimbs(legs: number, arms?: number):void {
  if (arms == undefined) {
    console.log(`Say function says: I have ${legs} limbs`);
  } else {
    console.log(`Say function says: I have ${legs + arms} limbs`);
  }
}
sayNumberOfLimbs(2, 2);
sayNumberOfLimbs(2);