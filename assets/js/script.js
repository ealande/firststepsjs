alert ("Hello, World");
console.log("Hello, world 2.0");
//let var const
let names ="test";
let age = 20;
let age1 = "90";
let state = "Parana";
let city = "Curitiba";
let logged = true; //or false, used to show if a user is logged or not. Its a boolean variable.
let lists = ["egg","pasta", "tomatoes"]; //array and objects are classified as an object variable
let carBrand = "Ferrari";
let price = 19.99;
let foreingcity = "Tokyo";
//let fullName = {names: "Erick Lima", age: 30};
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
    console.log ("you are an adult!");
} else {
    console.log ("you aren't a adult.");
}

/*difference between == and ===
(the === is more restricted in the verification)*/
if (age == 20) {
    console.log ("You are 20 years old");
}

if (age1 === 90) {
    console.log ("You are 90 years old");
}
//error caused because the age1 is a string
if (age1 == 90) {
    age1 = age1 + 15;
    console.log ("addition successfully completed!");
    console.log (age1);
}
// the === prevents the error occurrence
// !== 
if (age1 === 90) {
    age1 = age1 + 15;
    console.log ("addition successfully completed!");
    console.log (age1);
}

//multiple conditions
/*
if (age >=  18){
    if (age < 60){
    console.log ("you're an adult!");
}
}*/

if (age >= 18 && age < 60) {
    console.log("You are an adult!");
}

if (age >= 18 || age <60) {
    console.log("You are an adult!");
}
//conditional statement if else
if (age < 20 && age > 12) {
    console.log("You're a teenager!");}
else if (age <= 12){
    console.log("You're a kid!");}
else if (age >= 60){
        console.log("You're elderly.")}
else if(age >= 20){
    console.log("You are an adult!!!");}

//"if" is a boolean verification(true or false)

let booleanAge = 14;
let adultAge = booleanAge >=18;

if (adultAge){
    console.log ("It's an adult!")}
else{
    console.log ("It's not an adult!");
}

console.log (booleanAge > 18);

//activities
//1
let z = 10;
let p = 5;
console.log (z > p);

//2
let q = "10";
let w = 10;
console.log(w != q);

//3

let t = 10;
let u = 5;
console.log (t > u);

//4
let meatPrice = 46.3;
if (meatPrice < 45){
    console.log("The kg of the meat is cheap, buy it!")
}
else {
    console.log ("Don't buy it, the price is too high!")
}
//ternary conditional

let isMember = true;

let shipping = isMember ? 2 : 10;

console.log ("Shipping price is:" + shipping);
console.log (isMember ? 'You are a member!' : 'You are not a member!')

let isAdult = age >= 18 ? 'Is an adult!' : 'Isnt a adult!'

console.log (isAdult);

//switch

let profession = "fscal"

switch(profession) {
    case 'fiscal':
        console.log ('Your color is green.')
        break;

    case 'police man':
        console.log ('Your color is blue.')
        break;

    case 'firefighter':
        console.log ('Your color is red.')
        break;

    default:
        console.log ('Your color is black.')
}

//what is a function?
 
function gravity() {
    
    console.log('The gravity of the planet is:');
    console.log('9.8');
}

gravity();

function sum(n1, n2){
    let result = n1 + n2;
    console.log('Result:' + result);

}

sum(10, 15); //parameter

function fullName(firstName, lastName){
   //console.log(`${firstName} ${lastName}`);
    return `${firstName} ${lastName}`;
}

//fullName('Erick','Lima');
let complete = fullName("Erick", "Lima");
console.log ("The full name is:" + complete);

//input -> processing -> output

//conditional return function
function ofLegalAge(age2){
    if (age2 < 18){
        console.log ("You are a minor, so you didn't reach the legal age.")
        return false;
    }
    else {
        console.log ("You are of legal age.")
        return true;
    }
}

ofLegalAge (18);

//exercises
function calcPct (xx,yy){
return (yy / xx) * 100;}

let xx = 40;
let yy = 10;
let pct = calcPct(xx, yy);
console.log(`${pct}% of ${xx} is ${yy}`);

//2

function realtyPrice (meters,rooms){
    let m2 = 3000;
    let prices = 0;
    switch(rooms){
        case 1:
        default:
            prices = meters * m2;
        break
        case 2:
            prices = meters * (m2 * 1.2);
            break;
        
        case 3:
            prices = meters * (m2 * 1.5);
        break;
    
}

    return (prices)
}
let meters = 123;
let rooms = 3;
let prices = realtyPrice(meters,rooms);
console.log(`The house price is R$` + prices)

//3


function validate (user, password){
if (user === 'pedro' && password ==='123')
{
    return true;
}else {
    return false;

}
}
let user = 'bonio';
let password = '1w23';
let validation = validate(user, password);
if (validation){
    console.log('You can have access to the system.')
}else {
    console.log ('Access denied!');
}

//arrow function

/*function sum (x,y) {
    return (x+y);
}
console.log (sum(10,5));
*/

const sum2 = (x,y) =>{
    return x + y;
}
console.log (sum2(102,5));

const sum3 = (x,y) => x+y;
console.log (sum3 (2,55));

const lastName2 = (lastNameVar) => 'Erick ' + lastNameVar;

console.log (lastName2('Lima'));

//function inside a function

/*function square (x){
    return x*x;
}

function addSquares (a,b) {
    let sqrA = square(a);
    let sqrB = square (b);
    return square(a)+square (b);
}

*/


/*function addSquares (a,b) {
    function square (x){
        return x*x;
    }
    
    let sqrA = square(a);
    let sqrB = square (b);
    return square(a)+square (b);
}*/

function addSquares (a,b) {
    const square = (x) => x * x;
    
    let sqrA = square(a);
    let sqrB = square (b);
    return square(a)+square (b);
}
console.log(addSquares(1,2))

// arrays

let color = ["yellow", "blue", "red"];
let lists2 =["bla bla", ["xx", "y"]];
console.log (lists2[1][1]);
console.log (color[0]);