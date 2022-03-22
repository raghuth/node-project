 //// Hi, Regarding task - day 8

 //  JavaScript basics:
 
 //  Thorough the JavaScript Functions 8.https://www.youtube.com/watch?v=N8ap4k_1QEQ video link 
 
 // 8. JavaScript Functions (tutorial)
 
 // A JavaScript function is a block of code designed to perform a particular task.

 // A JavaScript function is executed when "something" invokes it (calls it).

 //  Execute the below codes
  ///// Sample 1 ///////
  
  console.log('----------------------- Sample 1 ------------------------')
  
 // JavaScript Function Syntax
 // A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
 // Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
 // The parentheses may include parameter names separated by commas:
 // (parameter1, parameter2, ...)
 
 //The code to be executed, by the function, is placed inside curly brackets: {}

                   // This  Parameter //
  function greet (firstName,lastName) {
	  return 'Hello : ' + firstName  + ' ' +lastName+''
  }
                                            //  This Argument //  
  console.log('Greet function returns: ', greet('John' , 'Son'))  
  
 // Function parameters are listed inside the parentheses () in the function definition.
 // Function arguments are the values received by the function when it is invoked.
 // Inside the function, the arguments (the parameters) behave as local variables.
  
  console.log('----------------------- End Sample 1 ------------------------');
  
 ///// Sample 2 ///////
 
  console.log('----------------------- Sample 2 ------------------------')
  
 // Calculate function the product of two numbers, and return the result:
 
	let count = myFunction(4, 3);  // Function is called, return value will end up in count

	function myFunction(a, b) {
	  return a * b; // Function returns the product of a and b
	}

  console.log('Call function and returns the result :',count)
  console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////
 
  console.log('----------------------- Sample 3 ------------------------')
  
  // ES6 function with Parameters And Arguments
  
  function myFunction(...options) {
     return options;
  }
 
  console.log('myFunction result :', myFunction('a', 'b', 'c','d') ) 
  console.log('----------------------- End Sample 3 ------------------------');

  ///// Sample 4 ///////

  console.log('----------------------- Sample 4 ------------------------')
   // function with default parmeters
   
   // Using a logical OR operator (||) inside the function, we can easily simulate default parameters
   
 	function foo(param1, param2) {
	  return param1 = param1 || 10;
	   param2 = param2 || 10;
	   console.log(param1, param2);
	}

  console.log('foo function result  :',foo(5, 5),foo(5),foo(),)
	
  console.log('----------------------- End Sample 4 ------------------------'); 
  
  ///// Sample 5 ///////
 
  console.log('----------------------- Sample 5 ------------------------')
  
   // ES6 Arrow Function with parmeter and arguments
   
   //Pass Object to someFunc function
                   // This  Parameter //
		const someFunc = (arg) => {
			return '' + arg.firstName.toUpperCase() + ' ' +arg.LastName.toUpperCase() +''
	    }
                             //  This Argument //  
	console.log('someFunc function result :',someFunc({firstName: "john", LastName: "son"}))
	
  console.log('----------------------- End Sample 5 ------------------------')
  
 ///// Sample 6///////
	
  console.log('----------------------- Sample 6 ------------------------'); 

	// Finding the largest number

	function findMax() {
	  let max = -Infinity;
	  for(let i = 0; i < arguments.length; i++) {
		if (arguments[i] > max) {
		  max = arguments[i];
		}
	  }
	  return max;
	} 
	
  console.log('Find the largest number: ',findMax(20, 40, 80,100))
	
  console.log('----------------------- End Sample 6 ------------------------'); 
  
   ///// Sample 7///////
   // Passing a function an object as an argument
  console.log('----------------------- Sample 7 ------------------------'); 
	  planetList = {
		name: "Jupiter",
		position: 5,
		type: "Gas Giant",
		radius: 69911,
		sizeRank: 1
	};

	getPlanetInfo = function (planet) {
		return "Planet Name : " + planet.name +  "  Planet Number : " + planet.position;
	};

  console.log('GetPlanetInfo result : ',getPlanetInfo(planetList))
  console.log('----------------------- End Sample 7 ------------------------'); 
  
   ///// Sample 8///////
   // Change the argument vlaue through
   
  console.log('----------------------- Sample 8 ------------------------'); 
  
   let doSomethingList = ['Hello','World' ,100,true]
   console.log('Previous Values :', doSomethingList)
   function doSomething () {
		arguments[0]= 'Hi'
		for(let i=0;i < arguments.length;i++ ) {
		  return (arguments[i])	
		}		
	};
	
	
  console.log('Changed the first argument vlaue to : ',doSomething('Hello','World' ,100,true))

  console.log('----------------------- End Sample 8 ------------------------')
  
  ///// Sample 9///////

  // Access function arguments through iteration with a loop.
  
   console.log('----------------------- Sample 9 ------------------------'); 
   
	  function countSum() {
		var result = 0;
		for( i = 0; i < arguments.length; i++ ){
			result += arguments[i];
		}
		return result;
	}
	
  console.log('CountSum function return total value : ',countSum(10, 10, 10,10,9) );

  console.log('----------------------- End Sample 9 ------------------------')
 
//////////////////////////
