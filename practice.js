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
  const array = strg.toLowerCase().split(' ');
  let results = '';
  for (let i = 0; i < array.length; i++) {
    const letter = array[i].charAt(0);
    if (letter >= 'e') {
      results += ' ';
    } if (letter === 'a') {
      results += array[i].charAt(1);
    } if (letter === 'b') {
      results += array[i].charAt(2);
    } if (letter === 'c') {
      results += array[i].charAt(3);
    } if (letter === 'd') {
      results += array[i].charAt(4);
    }
  }
  console.log(results);
}

// let str = 'craft block argon meter bells brown croon droop';
// // let str2 = 'Here Doggo Indiana Jones Woof Woof Apple Banana Cool';
// decoder(str);

function days(month, leapYear) {
  switch (month) {
  case 'February':
    if (leapYear) {
      return `${month} has 29 days`;
    } else {
      return `${month} has 28 days`;
    }
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `${month} has 31 days`;
  default:
    return `${month} has 30 days`;
  }
}
// console.log(days('July', false));

function game(input) {
  let computer = Math.floor(Math.random() * 3 + 1);
  console.log(`The computer played ${computer}!`);

  if (input === computer) {
    console.log('Tie!');
  }
  if (input > 3 || input < 1) {
    throw new Error('Sorry, Invalid entry');
  }
  if (input === 1) {
    if (computer === 2) {
      console.log('Oooh, too bad. Paper beats Rock. You lose!');
    }
    if (computer === 3) {
      console.log('Rock beats Scissors! You Win!');
    }
  }
  if (input === 2) {
    if (computer === 1) {
      console.log('Paper beats Rock! You Win!');
    }
    if (computer === 3) {
      console.log('Oooh, too bad. Scissors beats Paper. You lose!');
    }
  }
  if (input === 3) {
    if (computer === 1) {
      console.log('Oooh, too bad. Rock beats Scissors. You lose!');
    }
    if (computer === 2) {
      console.log('Scissors beats Paper! You Win!');
    }
  }
}

// game(2);
// game(1);
// game(3);
// game(2);
// game(2);


function max(numbers) {
  let currentMax = numbers[0];
  let i = 1;
  while (i < numbers.length) {
    if (currentMax < numbers[i]) {
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}

function min(numbers) {
  let currentMin = numbers[0];
  let i = 1;
  while (i < numbers.length) {
    if (currentMin > numbers[i]) {
      currentMin = numbers[i];
    }
    i++;
  }
  return currentMin;
}

// const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
// console.log(max(numList1));
// console.log(min(numList1));

function average(numbers) {
  let total = 0;
  numbers.forEach(num => total += num);
  return total / numbers.length;
}

// console.log(average([1,2,3]));

function repeat(fn, n) {
  for (let i = 1; i <= n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

// repeat(hello, 5);
// repeat(goodbye, 5);


function personMaker() {
  const person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}

const personMade = personMaker();
console.log(personMade.fullName());
