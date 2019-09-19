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


function jediName(firstName, lastName) {
  let first = firstName.slice(0, 2);
  let last = lastName.slice(0, 3);
  return last + first;
}

// console.log(jediName('Beyonce', 'Knowles'));

function beyond(num) {
  if (num === Infinity) {
    console.log('And Beyond');
  }
  if (isFinite(num) && num > 0) {
    console.log('to infinity');
  }
  if (isFinite(num) && num < 0) {
    console.log('to negative infinity');
  }
  if (num === 0) {
    console.log('staying home');
  }
}

// beyond(Infinity);

function decoder(strg) {
  let array = strg.toLowerCase().split(' ');
  let results = '';
  for (let i = 0; i < array.length; i++) {
    let letter = array[i].charAt(0);
    if (letter >= 'e') {
      results = results.concat(' ');
    } if (letter === 'a') {
      results = results.concat(array[i].charAt(1));
    } if (letter === 'b') {
      results = results.concat(array[i].charAt(2));
    } if (letter === 'c') {
      results = results.concat(array[i].charAt(3));
    } if (letter === 'd') {
      results = results.concat(array[i].charAt(4));
    }
  }
  console.log(results);
}

// let str = 'craft block argon meter bells brown croon droop';
// let str2 = 'Here Doggo Indiana Jones Woof Woof Apple Banana Cool';
// decoder(str2);

function days(month, leapYear) {
  let result = `${month} has 30 days`;
  switch (month) {
  case 'February':
    if (leapYear) {
      result = `${month} has 29 days`;
    } else {
      result = `${month} has 28 days`;
    }
    break;
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    result = `${month} has 31 days`;
    break;
  }
  console.log(result);
}
days('July', false);