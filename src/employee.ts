const employee1 = {
    name: "mckenna swan",
    phone: "3852249479",
    email: "mckennaswan74@gmail.com",
    id: "123989",
  };
  
  class someName {
    // class here is a key word
    property1; // properties, when undefined sit empty
    property2: boolean; // you can type them just as you'd expect
    property3: string = "test"; // you can assign a default value as well
    constructor(property1, property2: boolean) {
      // constructor is a special method to initialize an instance of the class
      // the parameters you define here are passed in when a "new" instance is made
      this.property1 = property1;
      // `this` is a keyword saying "this context"
      //  here, it refers to "this" instance of the class, so setting the
      //  properties with the values passed in
      this.property2 = property2;
    }
  }
  // a new instance of this class would look something like this...
  let someThing = new someName(0, false);
  
 
   
 {
    
  }
  

