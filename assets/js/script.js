alert ("Hello, World");
console.log("Hello, world 2.0");
//let var const
let names ="test";
let age = 90;
let state = "Parana";
let city = "Curitiba";
let logged = true; //or false, used to show if a user is logged or not. Its a boolean variable.
let lists = ["egg","pasta", "tomatoes"]; //array and objects are classified as an object variable
let carBrand = "Ferrari";
let price = 19.99;
let foreingcity = "Tokyo";
let fullName = {names: "Erick Lima", age: 30};
let x = 2;
let y = "example";
let carModel = "LaFerrari";
let whatCar = carBrand + ' ' + carModel;
x = x/8;
y = y+10;
let newCarBrand = "Ford";
let newCarModel = "Mustang";
let newCar = `${newCarBrand} ${newCarModel}`;//template string
let fullage = `${(age + 4) + "bla"} years old`;
/*console.log is used to 
show some information in the console*/
console.log (names);
console.log (age);
console.log (city);
console.log (state);
console.log (fullName);
console.log (carBrand); console.log (price); console.log (foreingcity);
console.log (typeof names);
console.log (typeof age);
console.log (typeof logged);
console.log (typeof lists);
console.log (typeof fullName); 
names = "Erick Lima";
console.log (names);
console.log (whatCar)
console.log (x);
console.log (y);
console.log ("Brand and model of the car:" + whatCar);
console.log ("Brand and model of the car:" + newCar);
console.log (fullage);
/*
< > == >= <= != 
*/
if (age > 18) {
    console.log ("you are an adult!")
} else {
    console.log ("you aren't a adult.")
}
