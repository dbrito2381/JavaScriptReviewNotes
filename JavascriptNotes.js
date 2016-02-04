//For Loop Example (When you know what the count is

for (var counter = 1; counter < 10; counter++) {
    console.log(counter);
}

//------------------------------------
//While Loop Example (When you don't know what the count is

var count = 0

var loop = function() {
    while (count < 3)
    {
        console.log("I'm looping!");
        count++;
    }
};
loop();

//-----------------------------------
//Do While Loop. This loop says: "Hey! Do this thing one time,
//then check the condition to see if we should keep looping.

var loopCondition = false;

do {
    console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);


//------------------------------------
// //syntax for do while:
do {

    // The thing to do at least once!

} while(  /* some condition */  );


//-----------------------------------
//Switch Statement Syntax

switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}

//----------------------------------------
// FizzBuzz!!! Print out the numbers from 1 - 20.
// The rules:
// For numbers divisible by 3, print out "Fizz".
// For numbers divisible by 5, print out "Buzz".
// For numbers divisible by both 3 and 5, print out "FizzBuzz" in the console.
// Otherwise, just print out the number.

for (var i = 1; i <= 20; i++) {
    if (i % 15 === 0)
        console.log("FizzBuzz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else if (i % 5 === 0)
        console.log("Buzz");
    else
        console.log(i);
}

//-----------------------------------------
//Creating a new empty Object and adding properties/values to it:

var daniel = new Object();

daniel.name = "Daniel";
daniel.sex = "male";
daniel.age = 35;


//-----------------------------------------
//we accessed properties using what is known as dot notation.
//Good name, right? So to access a property, we use
ObjectName.PropertyName (e.g., bob.name)

//To use bracket notation:
ObjectName["PropertyName"]

//-----------------------------------------
//Retrieving values from Objects using bracker notation:

var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
var weight = dog["weight"];
var age = dog["age"];

//----------------------------------------

//dot notation version. Creating new object and assigning properties to it:
var susan2 = new Object();

susan2.name = "Susan 2";
susan2.age = 24;

///---------------------------------------
//using "this":
//this allows you to define functions for objects without defining the objects first.
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;

// change bob's age to 50 here
bob.setAge(50);
//-----------------------------------------

//Custom constructors:

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);

//----------------------------------------

//Object property interpolation

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " +  sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);

//----------------------------------------

//Combining objects/methods to give them characteristics

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits

var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();

//------------------------------------------

//More Objects. When you create an anonymous Person function, it's really an object.
//The first part if a Person constructor!

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

//now we use a for-loop through the newly formed array and prints out the name property
//for each famly member in order of creation:

 for (var i = 0; i < family.length; i++) {
    console.log(family[i].name)
}

//-----------------------------------------

//Passing objects into functions:

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);

//-----------------------------------------

//Taking in objects as parameters (We created a function here that printed out the
// older person):

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2) {
    if (person1.age > person2.age) {
        return person1.age
    } else {
        return person2.age
    }
}

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));

//----------------------------------------------
// Objects Review (Writing between dot notation and bracket notation):

var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species;

// use bracket notation for snoopy's age
var age = snoopy["age"];

//------------------------------------------------
//Objects Review (Customizing Constructors)

// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320, "J.R.R. Tolkien");

//------------------------------------------------
//Inserting methods into your objects:

function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function() {
    console.log("Hello!");
    }
}

var user = new Person("Codecademy Student",false);
user.speak();

//-----------------------------------------------
//Bracket notation extras:
//
someObj.propName; //Dot notation example
someObj["propName"]; //Bracket notation example

//An advantage of bracket notation is that we
//are not restricted to just using strings in the brackets.
//We can also use variables whose values are property names:
var someObj = {propName: someValue};
var myProperty = "propName";
someObj[myProperty];


//-----------------------------------------------
//hasOwnProperty method.
//This lets you check to see if an object has a certain property inside of it.

var myObj = {
    // finish myObj
    name: "Daniel",
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false

//------------------------------------------------
//hasOwnProperty example.
//Check to see if suitcase has a property of shorts, if not, create one that with a color.
//Wrote an if/esle state to check this and create the property.

var suitcase = {
    shirt: "Hawaiian"
};

if(suitcase.hasOwnProperty("shorts")) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = "black";
    console.log(suitcase.shorts);
}

//-----------------------------------------------

//Printing out all the properties in an object.
//First we have the object itself and it's properties, and then the for-loop to
//display them

var dog = {
species: "bulldog",
age: 3,
color: brown
};

for(var property in dog) {
  console.log(property);
}

//----------------------------------------------

//Printing out all the values of the properties within an object.

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for(var x in nyc) {
    console.log(nyc[x]);
}

//-----------------------------------------------

//Creating a new object and using the printPersonName function (Made up in here), to print
//out the name property of the object (As it belongs to the Person object)

function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("Daniel Brito", 35);
printPersonName(me);

//---------------------------------------------

//Prototype inheritance as it applies to functions for objects.
//As we are creating a prototype function for ther Dog class, an instantiated object
//from the Dog class, will be able to use this method as it's prototype was created
//for the Dog class...which Snoopy if a part of.

function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();

//-------------------------------------------

//Method inheritance as it applies to objects.
//Set the Penguin class's prototype to a new instance of Animal by adding
//this line after you make the constructor:
Penguin.prototype = new Animal();
//This means that Penguin inherits properties and methods from Animal.
//Example:

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal

Penguin.prototype = new Animal();

//------------------------------------------

//Class inheritance. Penguin inherits properties from Animal.

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal

Penguin.prototype = new Animal();
var penguin = new Penguin("Daniel");
penguin.sayName();

//-----------------------------------
//Object inheritance example. We have a class of Penguin, then we create
//another class that inherits from Penguin called Emperor.
//We then create an object called emperor (aka var emperor) then have it print
//out the number os legs it inherited from the Penguin class

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;
}
Emperor.prototype = new Penguin();

// create an "emperor" object and print the number of legs it has
var emperor = new Emperor("Daniel");
console.log(penguin.numLegs);

//-----------------------------------
//Another example of inheritance. Emperor inherits from Penguin, which inherits from
//Animal class.

// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs  ); // should print 2
console.log(myEmperor.isAlive  ); // should print true

//----------------------------------
//Creating a private variable within your Person class.
//the bankBalance can't be exposed when you try to console log it.

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person
var john = new Person("John", "Smith", 35);

// try to print his bankBalance
console.log(john.bankBalance);

//--------------------------------
//Using a newly created method to get a private variable out of the Person class.

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);

//--------------------------------
//To evaluate by type in a loop given 3 strings and a number:
//You'd have to specify "number", "string", or "object". You could
//also find out by typeOf.

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var x in languages) {
    if (typeof languages[x] === "string") {
        console.log(languages[x]);
    };
}

//-----------------------------
//Prototype inheritance extras.
//When you define a function that extends Dog in this case,
//to interpolate, you have to USE "this.breed"

function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class
// so all dogs now can say hello
Dog.prototype.sayHello = function() {
    console.log("Hello this is a " + this.breed + " dog");
}

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

//------------------------------










