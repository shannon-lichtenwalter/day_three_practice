'use strict';

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return 2019 - age;
}


function createGreeting(name, age) {
  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid');
  }
  if (typeof (name) !== 'string' || typeof (age) !== 'number') {
    throw new TypeError('Invalid Entry');
  }
  let yearOfBirth = getYearOfBirth(age);
  return `Hi my name is ${name}, I am ${age} years old. I will be ${age + 1} in 2020. I was born in ${yearOfBirth}`;
}

// try {
//   const greeting1 = createGreeting('Shan', 27);
//   console.log(greeting1);
// } catch (err) {
//   console.error(err.message);
// }


function jediName(firstName, lastName){
  let first = firstName.slice(0,2);
  let last = lastName.slice(0,3);
  return last + first;
}

console.log(jediName('Beyonce', 'Knowles'));
