//// Hi, Regarding task - day 6

 //  JavaScript basics:
 
 //  Thorough the JavaScript  Arrays 6.https://www.youtube.com/watch?v=oigfaZ5ApsM video link 

// 6. JavaScript Arrays (tutorial)
// An array is a special variable, which can hold more than one value:

//  Execute the below codes
  ///// Sample 1 ///////
  
 console.log('----------------------- Sample 1 ------------------------')
 
  const cars = ["Saab", "Volvo", "BMW","Mercedes"];
  //we can access an array element by referring to the index number:
  console.log("access an array element by index number :",cars[1])
  
  console.log('----------------------- End Sample 1 ------------------------');
  
 ///// Sample 2 ///////
 
 console.log('----------------------- Sample 2 ------------------------')
 // This statement changes the value of the first element in cars:
 const carsList = ["Saab", "Volvo", "BMW","Mercedes"];
 // This statement changes the value of the first element in cars:
  carsList[0] = "Opel";
  console.log("changes the value of the first element in cars: ",carsList)
  console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////
 
 console.log('----------------------- Sample 3 ------------------------')
 // The length property of an array returns the length of an array (the number of array elements).
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 let length = fruits.length;
 console.log("length property of an array returns the length of an array :",length) 
  console.log('----------------------- End Sample 3 ------------------------');


 ///// Sample 4 ///////
 //The easiest way to add a new element to an array is using the push() method:
 
 console.log('----------------------- Sample 4 ------------------------')
 
	const fruitList = ["Banana", "Orange", "Apple"];
    fruitList.push("Lemon");  // Adds a new element (Lemon) to fruits
	console.log('added a new element to an array is using the push():',fruitList)
	
  console.log('----------------------- End Sample 4 ------------------------'); 
  
  ///// Sample 5 ///////
 //The easiest way to add a new element to an array is using the push() method:
 
 console.log('----------------------- Sample 5 ------------------------')
 // we can also create an array, and then provide the elements:
	const newCars = [];
    newCars[0]= "Saab";
    newCars[1]= "Volvo";
    newCars[2]= "BMW";
	newCars[3]= "Mercedes";
	console.log('createted an array, and then provide the elements:',newCars)
	
  console.log('----------------------- End Sample 5 ------------------------'); 
 
//////////////////////////
