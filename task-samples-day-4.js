//// Hi, Regarding task - day 4

 //  JavaScript basics:
 
 //  Thorough the 4.https://www.youtube.com/watch?v=23AOrSN-wmI  video link 

// 4. JavaScript Constructor Functions (tutorial)

// Constructor function for Person objects

  ///// Sample 1 ///////

function PersonName () {
  this.name = 'John';
}
// create object
const person = new PersonName();

// access properties
console.log('----------------------- Sample 1 ----------------------------');
console.log('Person Name :',person.name)
console.log('----------------------- End Sample 1 ------------------------');


 ///// Sample 2 ///////

// constructor function
function PersonGreet (person_name) {
  // assigning  parameter values to the calling object
   this.name = person_name, 
   this.greet = function () {
       return ('Hi' + ' ' + this.name);
   }
}


// creating objects
const property = new PersonGreet('John');
const functionProperty = new PersonGreet('');
// accessing properties
console.log('----------------------- Sample 2 ----------------------------');
console.log('FunctionProperty greet :', functionProperty.greet()); // "greet functionProperty"
console.log('property Name :', property.name); 
console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
console.log('----------------------- Sample 3 ----------------------------');
console.log('firstName :',myFather.firstName);
console.log('lastName :',myFather.lastName);
console.log('age :',myFather.age);
console.log('eye :',myFather.eye); 
console.log('----------------------- End Sample 3 --------------------------');

 ///// Sample 4 ///////

// Add a new property ///
function AddProperty () {
  this.name = 'Sam'
}
let NewProperty = new AddProperty();

// adding new property to person1

NewProperty.age = 20;
console.log('----------------------- Sample 4 ----------------------------');
console.log('NewProperty :',NewProperty); 
console.log('----------------------- End Sample 4 ----------------------------');
//////////////////////////
