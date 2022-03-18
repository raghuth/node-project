//// Hi, Regarding task - day 3

 //  JavaScript basics:
 
 //  Thorough the 3.https://www.youtube.com/watch?v=jpegXpQpb3o  video link 

 // 3. JavaScript Factory Functions (tutorial)


// About factory function is a function that returns a new object.


  ///// Sample 1 ///////

function createCircle(radius) {
  return {
   radius,
   draw() {
    return 'draw' 
  }
}
}

let circle1 = createCircle(4) 
let circle2 = createCircle() 

// access properties
console.log('----------------------- Sample 1 ----------------------------');

console.log('object propertys  ',circle1)

console.log('access object propert radius using circle1 object :::: ',circle1.radius)

console.log('access object propert draw function using circle1 object :::: ',circle2.draw())

console.log('----------------------- End Sample 1 ------------------------');


 ///// Sample 2 ///////

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + ' ' + lastName;
    },
  };
}

let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');

// accessing properties
console.log('----------------------- Sample 2 ----------------------------');
console.log(person1.getFullName());
console.log(person2.getFullName());
console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");

console.log('----------------------- Sample 3 ----------------------------');
console.log(myFather.firstName);
console.log(myFather.lastName);
console.log(myFather.age);
console.log(myFather.eye);
console.log('----------------------- End Sample 3 --------------------------');

 ///// Sample 4 ///////

let john = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log('----------------------- Sample 4 ----------------------------');
console.log(john.getFullName()); 
console.log('----------------------- End Sample 4 ----------------------------');

//////////////////////////
