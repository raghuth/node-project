 //// Hi, Regarding task - day 15

 //  JavaScript basics:
 
 //  Thorough the JavaScript My Brand New JavaScript Course 15 .https://www.youtube.com/watch?v=rNmxANyH0BU video link 
 
 // 15. JavaScript My Brand New JavaScript Course (tutorial)
 
 // Types , Operators, Conditinals , Loops , Objects , Arrays , Functions , Error Handling.

  ///// Sample 1 /////// 
  
  console.log('----------------------- Sample 1 ------------------------')
  
 //  The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
 
 // JavaScript Demo: Expressions - new operator
 
	 function Car(make, model, year) {
	  this.make = make;
	  this.model = model;
	  this.year = year;
	}
	
   // Now you can create an object called myCar as follows:
   
	const car1 = new Car('Eagle', 'Talon TSi', 1993);
 
   console.log(`result1 : ${car1.make}`); // expected output: "Eagle"
      
   // This statement creates myCar and assigns it the specified values for its properties. Then the value of myCar.make is the string "Eagle", myCar.year is the integer 1993, and so on.
   
  // You can create any number of car objects by calls to new. For example:
  
  console.log('----------------------- End Sample 1 ------------------------');
  
  ///// Sample 2 ///////

  console.log('----------------------- Sample 2 ------------------------')
  
   //  Object property that is itself another object
   
   // Suppose you define an object called Person as follows:
  
   function Person(name, age, sex) {
	  this.name = name;
	  this.age = age;
	  this.sex = sex;
	}

  // And then instantiate two new Person objects as follows:

   var rand = new Person('Rand McNally', 18, 'M');
      
   console.log('result2 :', rand) 
   
  // Then you can rewrite the definition of Car to include an owner property that takes a Person object, as follows:
  console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////
 
  console.log('----------------------- Sample 3 ------------------------')
  
  function PersonData(name, age, sex) {
	  this.name = name;
	  this.age = age;
	  this.sex = sex;
	}

  // And then instantiate two new Person objects as follows:
  
   var ken = new PersonData('Ken Jones', 19, 'M');
    
   console.log('result3 :', ken) 

  console.log('----------------------- End Sample 3 ------------------------');

 ///// Sample 4 ///////
  
  console.log('----------------------- Sample 4 ------------------------')
 
	 function CarList(make, model, year, owner) {
	  this.make = make;
	  this.model = model;
	  this.year = year;
	  this.owner = owner;
	}
	
	// To instantiate the new objects, you then use the following:

	var carList1 = new CarList('Eagle', 'Talon TSi', 1994, rand);
	var car2 = new CarList('Nissan', '300ZX', 1994, ken);
	
	// *Instead of passing a literal string or integer value when creating the new objects, the above statements pass the objects rand and ken as the parameters for the owners. To find out the name of the owner of car2, you can access the following property: *//
 
    console.log('result4 :', carList1) 

   console.log('----------------------- End Sample 4 ------------------------');
 
 //////////////////////////
