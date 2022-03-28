 //// Hi, Regarding task - day 12

 //  JavaScript basics:
 
 //  Thorough the JavaScript Array Reduce 12.https://www.youtube.com/watch?v=g1C40tDP0Bk video link 
 
 // 12. JavaScript Array Reduce (tutorial)
 
 // The reduce() method executes a reducer function on each element of the array and returns a single output value.
 
 /* reduce() Syntax
  The syntax of the reduce() method is:

  arr.reduce(callback(accumulator, currentValue), initialValue) 

  Here, arr is an array.
  
	reduce() Parameters
	The reduce() method takes in:

	callback - The function to execute on each array element (except the first element if no initialValue is provided). It takes in
	accumulator - It accumulates the callback's return values.
	currentValue - The current element being passed from the array.
	initialValue (optional) - A value that will be passed to callback() on first call. If not provided, the first element acts as the accumulator on the first call and callback() won't execute on it.
	Note: Calling reduce() on an empty array without initialValue will throw TypeError.

	reduce() Return Value
	Returns the single value resulting after reducing the array.
	Notes:

	reduce() executes the given function for each value from left to right.
	reduce() does not change the original array.
	It is almost always safer to provide initialValue.
	
  */
 
  ///// Sample 1 /////// 
  
  console.log('----------------------- Sample 1 ------------------------')
  
   const number =[1,-1,2,3];
   
    const sum1 = number.reduce((accumulator, currentVlaue)=> {
     return accumulator + currentVlaue;   
   },0);  // with initial value 
   
   // a = 0, c = 0 => a = 1 
   // a = 1, c = -1 => a = 0 
   // a = 0, c = 2 => a = 2
   // a = 2 , c = 3 => a = 5
   
  console.log(`With 0 initial value : ${sum1}`);
   
 // -------------------------------------------- 
  
   const sum2 = number.reduce((accumulator, currentVlaue)=> accumulator + currentVlaue)

   // a = 1, c = -1 => a = 0
   // a = 0, c = 2 => a = 2
   // a = 2 , c = 3 => a = 5
         
  console.log(`Without initial value : ${sum2}`);
   
  console.log('----------------------- End Sample 1 ------------------------');
  
  ///// Sample 2 ///////

  console.log('----------------------- Sample 2 ------------------------')
  
  const message = ["JavaScript ", "is ", "fun."];

	// function to join each string elements
	function joinStrings(accumulator, currentValue) {
	  return accumulator + currentValue;
	}

	// reduce join each element of the string
	let joinedString = message.reduce(joinStrings);

   console.log(`joinedString: ${joinedString}`);

  console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////
 
  console.log('----------------------- Sample 3 ------------------------')
  
  // Using  Sum of All Values of Array with arrow function
  const numberList = [1, 2, 3, 4, 5, 6];
	let summation = numberList.reduce(
	  (accumulator, currentValue) => accumulator + currentValue
	);
  
   console.log(`Sum of All Values - summation:${summation} `);

  console.log('----------------------- End Sample 3 ------------------------');

 ///// Sample 4 ///////
 
 // Subtracting Numbers in Array
  
  console.log('----------------------- Sample 4 ------------------------')
  
  const ListofNumber = [1800, 50, 300, 20, 100];

	// subtract all numbers from first number
	// since 1st element is called as accumulator rather than currentValue
	// 1800 - 50 - 300 - 20 - 100
	
	let difference = ListofNumber.reduce(
	  (accumulator, currentValue) => accumulator - currentValue
	);
  
 console.log(`ListofNumber in difference: ${difference}`);

 console.log('----------------------- End Sample 4 ------------------------');
 
 ///// Sample 5 ///////
 
 // Subtracting Numbers in Array
 
  console.log('----------------------- Sample 5 ------------------------')
  
	const expenses = [1800, 2000, 3000, 5000, 500];
	const salary = 15000;

	// function that subtracts all array elements from given number
	// 15000 - 1800 - 2000 - 3000 - 5000 - 500
	
	let remaining = expenses.reduce(
	  (accumulator, currentValue) => accumulator - currentValue,
	  salary
	);
   
  console.log(`Remaining vlaue: ${remaining}`);

  console.log('----------------------- End Sample 5 ------------------------'); 
  
    ///// Sample 6 ///////
	
	// Remove Duplicate Items from Array

  console.log('----------------------- Sample 6 ------------------------')
  
	let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
	let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
	  if (accumulator.indexOf(currentValue) === -1) {
		accumulator.push(currentValue);
	  }
	  return accumulator;
	}, []);
	  
  console.log(`UiqueAgeGroup :  ${uniqueAgeGroup} `);

  console.log('----------------------- End Sample 6 ------------------------'); 
  
    ///// Sample 7 ///////
	   
  console.log('----------------------- Sample 7 ------------------------')
  
  // Grouping Objects by a property
  
	const people = [
	  { name: 'Kyle', age: 26 },
	  { name: 'John', age: 31 },
	  { name: 'Sally', age: 42 },
	  { name: 'Jill', age: 42 },
	]

	const peopleGroupedByAge = people.reduce((groupedPeople, person) => {
	  const age = person.age
	  if (groupedPeople[age] == null) groupedPeople[age] = []
	  groupedPeople[age].push(person)
	  return groupedPeople
	}, {})
		  
  console.log('peopleGroupedByAge :', peopleGroupedByAge );
  
  console.log('----------------------- End Sample 7 ------------------------'); 
  
   ///// Sample 8  ///////
 
  console.log('----------------------- Sample 8 ------------------------')
  
	  const items = [
	  { name: 'Rice', price: 5 },
	  { name: 'Book', price: 20 },
	  { name: 'Chicken', price: 10 },
	  { name: 'Monitor', price: 100 },
	]

	const totalPrice = items.reduce((total, item) => {
	  return total + item.price
	}, 0)
	
  console.log(`TotalPrice: ${totalPrice}`);
	
  console.log('----------------------- End Sample 8 ------------------------'); 
  
   ///// Sample 9 ///////
   
   console.log('----------------------- Sample 9 ------------------------')
   
   // This can also be written as follows
	const reducer = (total, item) => {
	   console.log(`Total : ${total}`);
       console.log(`Item: ${item.price}`);	
	  return total + item.price
	}
   const totalPrice2 = items.reduce(reducer, 0)
   
  console.log(`totalPrice2: ${totalPrice2}`);	
	
  console.log('----------------------- End Sample 9 ------------------------'); 

//////////////////////////
