//Destructuring objects and arrays

const person = {
    name: "John",
    age: 25,
    hobbies: ["reading, cooking"],
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};

//when to use destructuring?
// destructuring is when you only need a specific property of an object.

// regular function
// regular passing of object
// even though we are passing the whole object, we are only using the name property
// *    const printName = (personData) => {
// *    console.log(personData.name);
// *    }


// destructuring the object
// of we are pm;y interested in the name property of the object, we can use destructuring
const printName = ({ name }) => {
    console.log(name);
}


// we pass the object as an argument to the function 
printName(person);


//without function destructuring
const { name , age } = person;
console.log(name, age);


//destructuring arrays
const hobbies = ["reading, cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);


/* reminders when using destructuring:
 - the property name must match the object property name.
 - the property name must be enclosed in curly braces.
 - the property name must be followed by a colon. */


 // string concatenation 
 console.log("My name is " + name + "and i am " + age + "years old.");

 console.log(`My name is ${name} and I am ${age} years old.`);