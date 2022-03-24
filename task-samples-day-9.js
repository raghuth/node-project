 //// Hi, Regarding task - day 9

 //  JavaScript basics:
 
 //  Thorough the JavaScript Value vs Reference Types 9.https://www.youtube.com/watch?v=fD0t_DKREbE video link 
 
 // 9. JavaScript Value vs Reference Types (tutorial)
 
 // JavaScript  Value vs Reference Types
 // Javascript has two types of values: primitive values and reference values.
 // You can add, change, or delete properties to a reference value, whereas you cannot do it with a primitive value.
 // Copying a primitive value from one variable to another creates a separate value copy. It means that changing the value in one variable does not affect the other.
 // Copying a reference from one variable to another creates a reference so that two variables refer to the same object. This means that changing the object via one variable reflects in another variable.
 
     // Primitive Values Types                Refernce Types
	 // Number                                Object
	 //	String                                Function
	 //	Boolean                               Array
	 //	Symbol
	 //	undefined
	 //	null
   // Memory on STACK  //     -       // Memory on HEAP //
   
 //---------------------------------------------------
  
  // Primitives are copeied by their value
  
  // Objects are copied by by their reference 
 
 //  Execute the below codes
 
  ///// Sample 1 ///////
  
  console.log('----------------------- Sample 1 ------------------------')
  
  // Primitives sample
  
  let x = 10;    // Primitives are copeied by their value
  let y = x;     // x and y totally independent each other
  
  x = 20;
  
  console.log(`Primitives x vlaue is : `,x)
  console.log(`Primitives y vlaue is : `,y)

  console.log('----------------------- End Sample 1 ------------------------');
  
  ///// Sample 2 ///////
 
  console.log('----------------------- Sample 2 ------------------------')
  
   // Objects reference types sample
  
  let r = { value:10 };    // Objects reference types 
  let s = r;             // Objects are copied by by their reference 
  
  r.value = 20;
  
  console.log(`Objects reference types r vlaue is : `,r)
  console.log(`Objects reference types s vlaue is : `,s)

  console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////
 
  console.log('----------------------- Sample 3 ------------------------')
  
   // Primitives  with function  sample 
   
   let number = 10; 
   
   function increase(number) {
	   number++;   // this number totally independent on number variable
   }
  increase(number) 

  console.log('Primitives with function vlaue :',number) 
  
  console.log('----------------------- End Sample 3 ------------------------');

  ///// Sample 4 ///////

  console.log('----------------------- Sample 4 ------------------------')
  
  // Objects reference types sample
   
  let obj = { value:10 };   // Objects reference types 
                           // Objects are copied by by their reference 
							 
  function increase(obj) {
	 obj.value++;   
   }
  increase(obj) 
  
  console.log('Objects referenc function value :',obj)
	
  console.log('----------------------- End Sample 4 ------------------------'); 
  
    ///// Sample 5 ///////

  console.log('----------------------- Sample 5------------------------')
  
  // Number,String,Array,boolean - Primitive Values Types sample
  
  let a = 10;
  let b = 'Hi'; 
  let c = true
  let d = [1,2]
  let e = d
  e.push(4)
  
  console.log(`a = ${a}`)
  console.log(`b = ${b}`)
  console.log(`c = ${c}`)
  console.log(`d = ${d}`)
  console.log(`e = ${e}`)
 
  console.log('----------------------- End Sample 5 ------------------------'); 

  ///// Sample 6 ///////

  console.log('----------------------- Sample 6 ------------------------')
  
  // Number,String,Array,boolean - Primitive Values Types sample
  
  let item = [4,9];
  console.log(`item = ${item}`)   
  add(item,4)
  console.log(`item = ${item}`)  
  
   function add(array,element) {
	 array.push(element);   
   }
 
  console.log('----------------------- End Sample 6 ------------------------'); 
   
//////////////////////////
