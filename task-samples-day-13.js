 //// Hi, Regarding task - day 13

 //  JavaScript basics:
 
 //  Thorough the JavaScript Let vs Var vs Constant 13.https://www.youtube.com/watch?v=g1C40tDP0Bk video link 
 
 // 13. JavaScript Let vs Var vs Constant  (tutorial)
 
	    /*  When to Use JavaScript var?
	      
		    Always declare JavaScript variables with var,let, orconst.

	        The var keyword is used in all JavaScript code from 1995 to 2015.

	        The let and const keywords were added to JavaScript in 2015.

	       If you want your code to run in older browser, you must use var. */
 
		 /* 
			The let keyword was introduced in ES6 (2015).

			Variables defined with let cannot be Redeclared.

			Variables defined with let must be Declared before use.

			Variables defined with let have Block Scope.
	
		  */
		  
		  /*  The const keyword was introduced in ES6 (2015).

			Variables defined with const cannot be Redeclared.

			Variables defined with const cannot be Reassigned.

			Variables defined with const have Block Scope. 
			
		   */
		 
		 // var => function-scoped
		 // ES6 (ES2015): let ,const => block-scoped
 
  ///// Sample 1 /////// 
  
  console.log('----------------------- Sample 1 ------------------------')
  
   // Declared with var keyword

		function say() {
			if(true) { 
			 var message = 'Hello';
			}	
          console.log(`Declared with var keyword result : ${message}`)	// 	only access inside function scope		
		}
		
         // console.log(`Declared with var keyword result : ${message}`); // get error ReferenceError: message is not defined
		 
		say();
		
         // var => function-scoped
		 // ES6 (ES2015): let ,const => block-scoped
   
  console.log('----------------------- End Sample 1 ------------------------');
  
  ///// Sample 2 ///////

  console.log('----------------------- Sample 2 ------------------------')
  
   // Declared with let keyword

   let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(`Declared with let keyword result : ${hello}`);// "say Hello instead"
    }
   console.log('outside its block hello keyword is  not defined ReferenceError: hello is not defined') // hello is not defined
   
  // We see that using hello outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped .

  console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////
 
  console.log('----------------------- Sample 3 ------------------------')
  
    // Declared with const keyword

	 // You can create a constant array:
	const cars = ["Saab", "Volvo", "BMW"];

	// You can change an element:
	cars[0] = "Toyota";

	// You can add an element:
	cars.push("Audi")
 
   console.log('Declared with const keyword result :' ,cars );
   
   // But you can NOT reassign the array:
  
   // const cars = ["Saab", "Volvo", "BMW"];

   // cars = ["Toyota", "Volvo", "Audi"];    // ERROR
  
   // You can NOT reassign a constant array:

   // TypeError: Assignment to constant variable.
   

  console.log('----------------------- End Sample 3 ------------------------');

 ///// Sample 4 ///////
 
 // Subtracting Numbers in Array
  
  console.log('----------------------- Sample 4 ------------------------')
    // Declared with const keyword
	
   // You can change the properties of a constant object:
   
   // You can create a const object:
    const car = {type:"Fiat", model:"500", color:"white"};

	// You can change a property:
	car.color = "red";

	// You can add a property:
	car.owner = "Johnson";
   
   console.log('Declared with const keyword with object result :', car );
   
   
  // But you can NOT reassign the object:

  // Example
  
  // const car = {type:"Fiat", model:"500", color:"white"};

  // car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
  
  // You can NOT reassign a constant object:

  // TypeError: Assignment to constant variable.

 console.log('----------------------- End Sample 4 ------------------------');
 
 //////////////////////////
