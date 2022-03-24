 //// Hi, Regarding task - day 10

 //  JavaScript basics:
 
 //  Thorough the JavaScript Scope (Local vs Global) 10.https://www.youtube.com/watch?v=iJKkZA215tQ video link 
 
 // 10.Scope (Local vs Global) (tutorial)
 
 // Scope determines the accessibility (visibility) of variables.

  // JavaScript has 3 types of scope:
  // Block scope
  // Function scope
  // Global scope
  
  /* Block Scope
  Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
  ES6 introduced two important new JavaScript keywords: let and const.
  These two keywords provide Block Scope in JavaScript.
  Variables declared inside a { } block cannot be accessed from outside the block: */

 //  Execute the below codes
 
	/* Global Scope
	Variables declared Globally (outside any function) have Global Scope.

	Global variables can be accessed from anywhere in a JavaScript program.

	Variables declared with var, let and const are quite similar when declared outside a block.

	They all have Global Scope: */
	
	// var a = 2;       // Global scope
	
	// let a = 2;       // Global scope
  
    // const a = 2;     // Global scope
   
  ///// Sample 1 ///////
  
  console.log('----------------------- Sample 1 ------------------------')
  
  // Global scope variable we can be accessed from any script or function.
  
  const message = 'Hi' // Global scope
  
  console.log(`Message variable global variable access anywhere : ${message}`)

  console.log('----------------------- End Sample 1 ------------------------');
  
  ///// Sample 2 ///////
 
  console.log('----------------------- Sample 2 ------------------------')
 
 // Local Scope variable
 // Variables declared within a JavaScript function, become LOCAL to the function.
 
	function myFunction() {
	  let carName = "Volvo";
	   console.log(`carName variable access only Block Scope inside function : ${carName} `)  // Function Scope
	}
	
	 myFunction();

  // console.log(`carName is undefined outside myFunction() : ${carName} `)
  
  console.log(`carName is undefined outside myFunction() get erorr : ReferenceError: carName is not defined `)

  console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////
 
  console.log('----------------------- Sample 3 ------------------------')
  
  // Local Scope variable with var keyword 
  // If we declared car variable with var keyword , we can access outside of the block .
  // Variables declared with the var keyword can NOT have block scope.
  // Variables declared inside a { } block can be accessed from outside the block.
 
	{
	  var car = "Volvo";
	   console.log(`get car value inside block scope( only with var keyword  ) : ${car} `)  // block Scope
	}

  console.log(`get car value outside of the block( only with var keyword ) : ${car}`)
  
  // Variables declared with the var keyword can NOT have block scope.
  // Variables declared inside a { } block can be accessed from outside the block.
    
  console.log('----------------------- End Sample 3 ------------------------');

  ///// Sample 4 ///////

  console.log('----------------------- Sample 4 ------------------------')
  
  /* Function Scope
  
  JavaScript has function scope: Each function creates a new scope.

  Variables defined inside a function are not accessible (visible) from outside the function.

  Variables declared with var, let and const are quite similar when declared inside a function. */
    
   function test() {
	  var Name = "Volvo";
	   console.log(`inside test function with var keyword : ${Name} `)  // Function Scope with var keyword
	}
	
	 test();

   // console.log(`outside test function with var keyword : ${Name} `)
	 
   console.log(`outside test function with var keyword : ReferenceError: Name is not defined`)
	
  console.log('----------------------- End Sample 4 ------------------------'); 
  
    ///// Sample 5 ///////

  console.log('----------------------- Sample 5------------------------')
  
  /* Function Scope
  
  JavaScript has function scope: Each function creates a new scope.

  Variables defined inside a function are not accessible (visible) from outside the function.

  Variables declared with var, let and const are quite similar when declared inside a function. */
  
  // Function Scope wiht var keyword:
  
	function myFunctionWithVarKeyword() {
	  var a = "Volvo";   // Function Scope with var keyword:
	    console.log(`function scope with var keyword: ${a}`)
	}
	
    myFunctionWithVarKeyword()

  console.log('----------------------- End Sample 5 ------------------------'); 
  
    ///// Sample 6 ///////
	
  console.log('----------------------- Sample 6 ------------------------')
  
   // Function Scope wiht let keyword:
   
  	function myFunctionWithLetKeyword() {	
     let b = "Volvo";   // Function Scope with let keyword:
	  console.log(`function scope with let keyword: ${b} `)
    }

   myFunctionWithLetKeyword()

  console.log('----------------------- End Sample 6 ------------------------'); 
  
   ///// Sample 7  ///////
	
  console.log('----------------------- Sample 7 ------------------------')
  
  // Function Scope wiht const keyword:
  
	function myFunctionWithConstKeyword() {		
	  const c = "Volvo";   // Function Scope with const keyword
       console.log(`function scope with const keyword: ${c} `)
	}
	
   myFunctionWithConstKeyword()

  console.log('----------------------- End Sample 7 ------------------------'); 
   
//////////////////////////
