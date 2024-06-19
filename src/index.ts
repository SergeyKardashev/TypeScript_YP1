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
