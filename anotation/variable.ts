let oranges: number = 5;
//oranges = 'rgr'; error
oranges = 7;

let speed: string ='fjdks';
let hasDog: boolean = true;
let nothing: null = null;
let nothing1: undefined = undefined;

//built-in-objects
let now: Date = new Date();

//array with string values
let colors: string[] = ['red', 'yellow', 'grey'];

//array with numbers
let numbers: number[] = [1, 2, 3, 4]
//with boolean
let results: boolean[] = [true, true, false]

//for classes:
class Car{

}

let cas: Car = new Car();

//objects literals
let point: {x: number;  y: number; } = {
  x: 10, 
  y: 20, 
};

//for functions before "=" - anotation of types 
const logNumber: (i: number) => void = (i: number) =>{
  console.log(i);
}

//anotation we can delete becouse ts knows what is the type of variables
//but only if we write in one line 

//when to use type annotations?
//1. Function returners the 'any' type
const json = '{"x":10, "y":20}';
//const coordinates = JSON.parse(json);
//coordinates return any
//any is evel

const coordinates: {x: number; y: number;} = JSON.parse(json);
//return {x: number;  y: number; }

//2) When we declare a variable on one line and initialize it later
let words = ['one', 'two', 'three'];
let isTwo: boolean;

for (let i=0; i< words.length; i++){
  if (words[i] === 'two'){
    isTwo = true;
  }
}

// 3) Variables whoes type can't be inferred
let myNumbers = [-10, -1, 12];
//or boolean or number type
let positiveNumber: boolean | number = false;

for (let i=0; i< myNumbers.length; i++){
  if (myNumbers[i]> 0){
    positiveNumber = myNumbers[i];
  }
}


