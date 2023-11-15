'use strict';
const mockData = require('./mockData.js').data;
const prompt = require('prompt-sync')();


const userProfile = {}

/////// FIRST/LAST NAME answers should not be empty / contain numbers ///////////////////////////
while (true) {
  const first_name = prompt("What is your first name?  > ");
  const regex = /^[a-zA-Z]+$/;
  if (first_name.length < 1) { 
    console.log("First name cannot be empty."); 
    continue;
  }
  if (regex.test(first_name) === false) { 
    console.log("Please enter a first name with only Alphabetic Caracters."); 
    continue; 
  }
  userProfile.first_name = first_name; break;
}

while (true) {
  const last_name = prompt("What is your last name?  > ");
  const regex = /^[a-zA-Z]+$/;
  if (last_name.length < 1) { 
    console.log("Last name cannot be empty."); 
    continue; 
  }
  if (regex.test(last_name) === false) { 
    console.log("Please enter a last name with only Alphabetic Caracters."); 
    continue; 
  }
  userProfile.last_name = last_name; break;
}

// GENDER/LOCATION answers have limited options //////////////////////
while (true) {
  const gender = prompt("What is your gender? (M/F/X)  > ");
  if (gender === "M" || gender === "F" || gender === "X") { 
    userProfile.gender = gender; 
    break; 
  }
  console.log("Please choose between M, F or X");
}

while (true) {
  const gender_interest = prompt("What gender are you interested in? (M/F/X)  > ");
  if (gender_interest === "M" || gender_interest === "F" || gender_interest === "X") {
    userProfile.gender_interest = gender_interest; 
    break;
  } 
  console.log("Please choose between M, F or X");
}

while (true) {
  const location = prompt("What is your location? (rural/city)? > ");
  if (location === "rural" || location === "city") {
    userProfile.location = location;
    break;
  }
  console.log("Please choose between rural or city");
}


// AGE The answers should be numbers ////////////////////////
while (true) {
  const age = Number(prompt("What is your age? >"));
  if (isNaN(age)) {
    console.log("Please enter a valid number.");
    continue;
  }
  if (age < 18) {
    console.log("You are too young to sign up");
    continue;
  }
  userProfile.age = age;
  break;
}

while (true) {
  const min_age_interest = Number(prompt("What is the minimum age you are interested in? "));
  if (isNaN(min_age_interest)) {
    console.log("Please enter a valid number.");
    continue;
  }
  if (min_age_interest < 18) {
    console.log("People under 18 years old ar not in the database");
    continue;
  }
  userProfile.min_age_interest = min_age_interest;
  // console.log(userProfile);
  break;
}

while (true) {
  const max_age_interest = Number(prompt("What is the maximum age you are interested in? "));
  if (isNaN(max_age_interest)) {
    console.log("Please enter a valid number.");
    continue;
  }
  if (max_age_interest < userProfile.min_age_interest) {
    console.log("The maximum age must be higher than the minimum age.");
    continue;
  }
  userProfile.max_age_interest = max_age_interest;
  // console.log(userProfile);
  break;
}

// // Pre-filled profile
// const userProfile={
//    first_name: 'Gert',
//    last_name: 'Faber',
//    gender: 'M',
//    gender_interest: 'F',
//    location: 'city',
//    age: 40,
//    min_age_interest: 20,
//    max_age_interest: 50
//  }

console.log('');
console.log('');
console.log('---------------------------------');
console.log("==== YOUR profile information =====")
console.log(`Name: ${userProfile.first_name} ${userProfile.last_name}`);
console.log(`Age: ${userProfile.age}`);
console.log(`Location: ${userProfile.location}`);
console.log(`Gender: ${userProfile.gender}`);
console.log(`Gender interest: ${userProfile.gender_interest}`);
console.log(`Age interest: ${userProfile.min_age_interest} - ${userProfile.max_age_interest}`);
console.log('---------------------------------');
console.log(" ");


// SEARCHING FOR MATCHING PROFILES ///////////////////////////
let matches = [];
console.log('');
console.log('---------------------------------');
console.log('Searching for your match...')
for (let i = 0; i < mockData.length; i++) {
  const currentProfile = mockData[i];
  if (
    currentProfile.age >= userProfile.min_age_interest &&
    currentProfile.age <= userProfile.max_age_interest &&
    userProfile.age >= currentProfile.min_age_interest &&
    userProfile.age <= currentProfile.max_age_interest &&
    userProfile.location === currentProfile.location &&
    userProfile.gender_interest === currentProfile.gender &&
    userProfile.gender === currentProfile.gender_interest
  ) {
    matches.push(currentProfile);
  }
}
console.log('Search coompleted ');
console.log(`${matches.length} matches found`); // Prints the number of matches found
console.log('---------------------------------');
console.log('');
console.log('');

// DISPLAYING MATCHING PROFILES ///////////////////////////////
console.log("These are te maches that we found:")
console.log("===============================================")
console.log('')
for (let i = 0; i < matches.length; i++) {
  const match = matches[i];
  console.log(`-------------- Match number ${i + 1} --------------`)
  console.log(`Name: ${match.first_name} ${match.last_name}`);
  console.log(`Age: ${match.age}`);
  console.log(`Location: ${match.location}`);
  console.log(`Gender: ${match.gender}`);
  console.log(`Gender interest: ${match.gender_interest}`);
  console.log(`Age interest: ${match.min_age_interest} - ${match.max_age_interest}`);
  console.log(" ");
}



