var myArray = ["the conjuring", "IT", "friday the 13th", 4, true];
var myTypedArray: Array<number> = [12, 654, 55, 23];
console.log(myArray[0]); // would log: "the conjuring"
console.log(myArray[4]); // would log: `true`
myTypedArray.push(3.14159);

myArray.forEach((movies, i) => {
    console.log(`${i + 1}. ${movies}`);
  });


  var myObject = {key: "mckenna.firstName"
};
console.log(myObject.key);
myObject.key = "swan.lastName";
console.log(myObject.key);
myObject.key = "26.age";
console.log(myObject.key)
