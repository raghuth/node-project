//// Hi, Regarding task - day 5

 //  JavaScript basics:
 
 //  Thorough the JavaScript Loops 5.https://www.youtube.com/watch?v=s9wW2PpJsmQ&t=1s video link 

// 5. JavaScript Loops (tutorial)

//  Execute the below codes
  ///// Sample 1 ///////
  
 console.log('----------------------- Sample 1 ------------------------')
	for(let i=0;i < 5;i++){
	console.log('i value ',i)
	}
  console.log('----------------------- End Sample 1 ------------------------');
  
 ///// Sample 2 ///////
 
 console.log('----------------------- Sample 2 ------------------------')
	for(let i= 1;i <= 5;i++){
	console.log('i less than or equal vlaue ',i)
	}
  console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////
 
 console.log('----------------------- Sample 3 ------------------------')
 
 const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	 let text = "";
		for(let i=0;i < cars.length;i++){
		   text+= cars[i]+ "[" + i + "] ";
	  }
  console.log(`${text} <br>`)
  
  console.log('----------------------- End Sample 3 ------------------------');


 ///// Sample 4 ///////
//logic to check if the number is odd or not  
//if i%2 is not equal to zero, the number is odd 

 console.log('----------------------- Sample 4 ------------------------')
 
	for(let i=0;i < 10;i++){
		//logic to check if the number is odd or not  
       //if i%2 is not equal to zero, the number is odd 
		if (i%2!=0)  
	console.log('odd number ',i)
	}
  console.log('----------------------- End Sample 4 ------------------------'); 


///// Sample 5 ///////
//logic to check if the number is odd or not  
//if i%2 is not equal to zero, the number is odd 

 console.log('----------------------- Sample 5 ------------------------')
 
	for(let i=1;i < 10;i++){
		//logic to check if the number is even or not  
       //if i%2 is not equal to zero, the number is even 
		if (i%2==0)  
	console.log('even number ',i)
	}
  console.log('----------------------- End Sample 5 ------------------------'); 
  
  
  ///// Sample 6 ///////
// for loop with push method  

 console.log('----------------------- Sample 6 ------------------------')
 
	var myArray = [];
     for(var i=1; i<=5; i++){
     console.log('push each array element',myArray.push(i));
   } 
 
console.log('----------------------- End Sample 6 ------------------------'); 

  ///// Sample 7 ///////
// for loop with find odd and even numbr
//Even numbers are those numbers that are exactly divisible by 2.

//The remainder operator % gives the remainder when used with a number. For example,

 console.log('----------------------- Sample 7 ------------------------')
   for (var x=0; x<=15; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");   
        }
        else {
                console.log(x + " is odd");
        }
}
// Hence, when % is used with 2, the number is even if the remainder is zero. Otherwise, the number is odd.
 console.log('----------------------- End Sample 7 ------------------------')
 
   ///// Sample 8 ///////
// for loop with find odd and even numbr with ternary operator condition function

console.log('----------------------- Sample 8 ------------------------')
 
 function findOddAndEven(start, end) {
  let num = start;
  for (let i = num; num <= end; num++) {
    console.log(num%2 == 0 ? `${num} is even` : `${num} is odd`);
  }
}
findOddAndEven(0, 15);

console.log('-----------------------End Sample 8 ------------------------')
 
//////////////////////////
