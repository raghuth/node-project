 //// Hi, Regarding task - day 11

 //  JavaScript basics:
 
 //  Thorough the JavaScript Cloning an Object 11.https://www.youtube.com/watch?v=H1NmJIv1A2Y video link 
 
 // 11. JavaScript Cloning an Object (tutorial)
 
  ///// Sample 1 /////// 
  
  console.log('----------------------- Sample 1 ------------------------')

  //  Using For In Loop
  
  //  The JavaScript for in statement loops through the properties of an Object:
  
	 const person = {FirstName:"John", LastName:"Doe", Age:25 , Email:"johndoe@gmail.com"};

	 for (let element in person) {
		console.log(`for in loop element : ${element} : ${person[element]}`)
	  }
	  
	    /*   Example Explained
		The for in loop iterates over a person object
		Each iteration returns a key (element)
		The key is used to access the value of the key
		The value of the key is person[element] */

  console.log('----------------------- End Sample 1 ------------------------');
  
  ///// Sample 2 ///////

  console.log('----------------------- Sample 2 ------------------------')
  
  // Using Array.forEach()

	const numbers = [45, 4, 9, 16, 25];

	numbers.forEach(element => console.log(`forEach with array element : ${element}`));

  console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////
 
  console.log('----------------------- Sample 3 ------------------------')
  /* Using Array.forEach()
    The forEach() method calls a function (a callback function) once for each array element. */
	
	// JavaScript Array.forEach with es6 
   // Calls a function once for each array element.   
  
	const numbersList = [49, 4, 9, 18, 29];
	
	const loop = (value, index) => {
		console.log (`forEach with call back function - value : ${value}`+':'+ ` index : ${index}`)
	}

	numbersList.forEach(loop);

  console.log('----------------------- End Sample 3 ------------------------');

 ///// Sample 4 ///////
 // In ES6/2015 you can loop through an object like this (using the forEach arrow function):
 
 // The Object.keys() 
 // function returns an array of the object's own enumerable properties. You can then iterate over each key in the object using forEach().
 
  console.log('----------------------- Sample 4 ------------------------')
  
	const personList = {FirstName:"John", LastName:"Doe", Age:25 , Email:"johndoe@gmail.com"};

    Object.keys(personList).forEach((key) =>  {
	   console.log(`Object.keys - key : ${key}`);                // The name of the current key.
       console.log(`Object.keys - vlaue : ${personList[key]}`);  // The value of the current key. 
	});

 console.log('----------------------- End Sample 4 ------------------------')

 ///// Sample 5 ///////

 //  The Object.values() 
 // function returns an array of the object's own enumerable property values. In other words, it returns an array over the object's values that you can iterate through using forEach().
 
  console.log('----------------------- Sample 5 ------------------------')
  
	const data = {FirstName:"John", LastName:"Doe", Age:25 , Email:"johndoe@gmail.com"};

    Object.values(data).forEach((item) =>  {
	   console.log(`Object.values - item : ${item}`);     // The value of the current key.
      
	});

  console.log('----------------------- End Sample 5 ------------------------'); 
  
    ///// Sample 6 ///////

  console.log('----------------------- Sample 6 ------------------------')
  
 // Using forEach with Object.entries()
 // The Object.entries() function returns an array of entries. An entry is an array of length 2, where entry[0] is the key and entry[1] is the value. You can iterate through both keys and values simultaneously:
 
  const list = {FirstName:"Mary", LastName:"Smith", Age:25 , Email:"Mary@gmail.com"};
  
   Object.entries(list).forEach((entry) =>  {
	   const [key, value] = entry;            
       console.log(`Object.entries key : ${key}`);      // The name of the current key.
       console.log(`Object.entries vlaue : ${value}`);  // The value of the current key. 
	});

  console.log('----------------------- End Sample 6 ------------------------'); 
  
    ///// Sample 7 ///////
	
	      // Syntax //
		  
    /*  Object.assign(target, ...sources)
	Copy to Clipboard
	Parameters
	target
	The target object — what to apply the sources' properties to, which is returned after it is modified.

	sources
	The source object(s) — objects containing the properties you want to apply.

	Return value
	The target object.

	Description :
	
	Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.

	The Object.assign() method only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target. */ 
	
  console.log('----------------------- Sample 7 ------------------------')
  
   // Using Object.assign()

  const Itemlist = {FirstName:"Mary", LastName:"Smith", Age:25 , Email:"Mary@gmail.com"};
  
  const newList = Object.assign({},Itemlist);

  console.log('Object.assign result ',newList)
   
  console.log('----------------------- End Sample 7 ------------------------'); 
  
   ///// Sample 8  ///////
   
   /* Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. */
	
  console.log('----------------------- Sample 8 ------------------------')

   // Using Spread Operator with Object
   
    const Items = {FirstName:"Mary", LastName:"Smith", Age:25 , Email:"Mary@gmail.com"};
	
	const newItems = {...Items}

    console.log('spread operator with object result :', newItems)
		
	
  console.log('----------------------- End Sample 8 ------------------------'); 
  
   ///// Sample 9 ///////
   
   console.log('----------------------- Sample 9 ------------------------')

   // Using Spread Operator with Array
   
    let colors = [ 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black' ];
    
	let rgb = [...colors];
   
   console.log('spread operator array result :' , rgb )
	
  console.log('----------------------- End Sample 9 ------------------------'); 

//////////////////////////
