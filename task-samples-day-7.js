//// Hi, Regarding task - day 7

 //  JavaScript basics:
 
 //  Thorough the JavaScript Getters and Setters methods 7.https://www.youtube.com/watch?v=bl98dm7vJt0 video link 
 
 // 7. JavaScript Getters and Setters methods (tutorial)

 // Getters - access properties
 // Setter - change(mutate) them
 
 // ECMAScript 5 (ES5 2009) introduced Getter and Setters.

 // Getters and setters allow you to define Object Accessors (Computed Properties).

 //  Execute the below codes
  ///// Sample 1 ///////
  
 console.log('----------------------- Sample 1 ------------------------')
 // JavaScript Getter (The get Keyword)
 //This example uses a lang property to get the value of the language property.
 // Create an object:
	const person = {
	  firstName: "John",
	  lastName: "Doe",
	  language: "English",
	  get lang() {
		return this.language;
	  }
	};
  // Display data from the object using a getter: 
  console.log('Display data from the object using a getter :',person.lang)  
  
  console.log('----------------------- End Sample 1 ------------------------');
  
 ///// Sample 2 ///////
 
 console.log('----------------------- Sample 2 ------------------------')
 //This example uses a lang property to set the value of the language property
 
	 // Create an object:
	 const personData = {
	  firstName: "John",
	  lastName: "Doe",
	  language: "NO",
	  set lang(value) {
		this.language = value;
	  }
	};

 // Set a property using set:
 personData.lang = "UK English";
 
 // Display data from the object:
 
  console.log('lang property to set the value of the language property :',personData.language)
  console.log('----------------------- End Sample 2 ------------------------');

 ///// Sample 3 ///////
 
 console.log('----------------------- Sample 3 ------------------------')
 // Object data can be accessed using property stored as a function.
 //Example 1
	 const personPropertyGetByFunction = {
	  firstName: "John",
	  lastName: "Doe",
	  fullName: function() {
		return this.firstName + " " + this.lastName;
	  }
	};

	// Display data from the object using a method:
  console.log('Object data can be accessed using property stored as a function :',personPropertyGetByFunction.fullName()) 
  console.log('----------------------- End Sample 3 ------------------------');

  ///// Sample 4 ///////
 
 console.log('----------------------- Sample 4 ------------------------')
  // Object data can be accessed using property stored as a function.
  //Example 2
	 const personPropertyGet = {
	  firstName: "John",
	  lastName: "Doe",
	  get fullName() {
		return this.firstName + " " + this.lastName;
	  }
	};

// Display data from the object using a getter:
   console.log('access fullName as a properties by using the object dot notation :',personPropertyGet.fullName)
   
 // Example 1 access fullName as a function: person.fullName().

 // Example 2 access fullName as a property: person.fullName.

 // The second example provides a simpler syntax.
	
  console.log('----------------------- End Sample 4 ------------------------'); 
  
  ///// Sample 5 ///////
 
  console.log('----------------------- Sample 5 ------------------------')
  
 // Data Quality
 //JavaScript can secure better data quality when using getters and setters.

 //Using the lang property, in this example, returns the value of the language property in upper case:
 
	 // Create an object:
	const personPropertyInUpperCase = {
	  firstName: "John",
	  lastName: "Doe",
	  language: "english",
	  get lang() {
		return this.language.toUpperCase();
	  }
	};

	// Display data from the object using a getter:
 console.log('language property in uppercase: ',personPropertyInUpperCase.lang)
 
 ///// Sample 6///////
	
  console.log('----------------------- End Sample 6 ------------------------'); 
 
 // Using the lang property, in this example, returns the value of the language property in upper case:
 
	const personSetProperty = {
	  firstName: "John",
	  lastName: "Doe",
	  language: "",
	  set lang(lang) {
		this.language = lang.toUpperCase();
	  }
	};

	// Set an object property using a setter:
	personSetProperty.lang = "english";

	// Display data from the object:
   console.log('language property set in uppercase: ',personSetProperty.language)
	
  console.log('----------------------- End Sample 6 ------------------------'); 
  
   ///// Sample 7///////
   
 // Using DirectoryObject.setProperty() with person properties
  
  console.log('----------------------- End Sample 7 ------------------------'); 
  const personObject = {
		id:1,
		name:'John Doe'
	};
   console.log('accessing object property : ',personObject.id)
   
   personObject.id = 4
   
   console.log('change the id property value by 4: ',personObject.id)
   
   // Using DirectoryObject.setProperty() with getters and setters to person properties

  // The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
   
   const personSet = {	
		name:'John Doe'
	};
	Object.defineProperty(personSet, "id", {
     value:9
});
   
   personSet.id = 49

   console.log('its returns id static value : ',personSet.id)
  console.log('----------------------- End Sample 7 ------------------------'); 
  
   ///// Sample 8///////
   
  // Using DirectoryObject.setProperty() with getters and setters to person properties

   console.log('----------------------- Sample 8 ------------------------'); 
   
   let personGetandSet = {	
        _id:54,
		name:'John Doe'
	}
	Object.defineProperty(personGetandSet, "id", {
     get: function(){
		return 'id is  '   + this._id ;
	 },	
     set: function(){
		this._id = this._id ;
	 }	
    });
  console.log('its returns id before static value : ',personGetandSet.id)
  // Change a id property value
  personGetandSet._id = 49
  console.log('its returns id after set value : ',personGetandSet.id)
  
  console.log('----------------------- End Sample 8 ------------------------')
 
//////////////////////////
