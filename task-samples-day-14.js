 //// Hi, Regarding task - day 14

 //  JavaScript basics:
 
 //  Thorough the JavaScript Bitwise Operators 14 .https://www.youtube.com/watch?v=mesu75PTDC8 video link 
 
 // 14. JavaScript Bitwise Operators (tutorial)
 
  //JavaScript Bitwise Operators
  
  //  Operators	Name	Example
  
  //  ^	 Bitwise XOR  x ^ y
  //  ~  Bitwise NOT  ~x
  // <<	 Left shift	  x << y
  //  >> Sign-propagating right shift  x >> y
  

 // Bitwise operators treat its operands as a set of 32-bit binary digits (zeros and ones) and perform actions. However, the result is shown as a decimal value.

 /*    Operators	 Name	                       Example
	 
	     &	         BitwiseAND                     x & y
	     |	         BitwiseOR	                    x | y
	     ^	         BitwiseXOR 	                x ^ y
	     ~	         BitwiseNOT  	                ~x
	    <<	         Leftshift   	                x << y
	    >>	         Sign-propagating right shift	x >> y
	    >>>	         Zero-fill right shift      	x >>>           */
	
  // Note: The minimum and the maximum integers that are representable through a 32-bit signed number are -2147483648 to 2147483647.	

  ///// Sample 1 /////// 
  
  console.log('----------------------- Sample 1 ------------------------')
  
   // bitwise AND operator example
   
   // Bitwise AND & returns 1 if the corresponding bits of both operands are 1 else it returns 0.
   
	let c = 12; 
	let  d = 25; 

	total = c & d; 
	
 
  console.log(`bitwise AND operator result : ${total}`); // 8 
  
 //  In the above program,

 // The binary value of 12 is 00000000000000000000000000001100
 // The binary value of 25 is 00000000000000000000000000011001.
 // When bitwise AND operation is performed, the binary result will be 00000000000000000000000000001000 which converts into the decimal value 8.


  console.log('----------------------- End Sample 1 ------------------------');
  
  ///// Sample 2 ///////

  console.log('----------------------- Sample 2 ------------------------')
 
  // bitwise OR operator example
  
 //  Bitwise OR | returns 1 if either of the corresponding bits of one operand is 1 else returns 0.
  
	let a = 12; 
	let  b = 25; 

	result = a | b; 

   console.log(`bitwise OR operator result : ${result}`) // 29
   
  // When bitwise OR operation is performed, the binary result will be 00000000000000000000000000011101 which converts into the decimal value 29.
  
  console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////
 
  console.log('----------------------- Sample 3 ------------------------')
  
  // bitwise XOR operator example
  
  //  Bitwise XOR ^ returns 1 if the corresponding bits are different and returns 0 if the corresponding bits are the same.
  
	let e = 12; 
	let  f = 25; 

   totalValue = e ^ f; 
    
   console.log(`bitwise XOR operator result : ${totalValue}`); // 21
   
  //  When bitwise XOR operation is performed, the binary result will be 00000000000000000000000000010101 which converts into the decimal value 21.

  console.log('----------------------- End Sample 3 ------------------------');

 ///// Sample 4 ///////
  
  console.log('----------------------- Sample 4 ------------------------')
 
   // bitwise NOT operator example
   
   // Bitwise NOT ~ inverts the bit( 0 becomes 1, 1 becomes 0).
   
	let  g = 13;

	result4 = ~g;

	console.log(`bitwise NOT operator result : ${result4}`);  // -13

  // When bitwise NOT operation is performed, the binary result will be 11111111111111111111111111110011 which converts into the decimal value -13.

  // Note: Bitwise NOT of a number x gives -(x + 1). Notice above ~2 gives -3.
 
   console.log('----------------------- End Sample 4 ------------------------');
 
 //////////////////////////
