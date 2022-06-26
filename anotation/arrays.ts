const colors: string[] = ['red', 'blue', 'white'];

//date types
const dates = [new Date(), new Date()];

//string [][]
const fruitColor = [
  ['tomato'],
  ['apple'],
  ['lemon']
]

//clear initialization
const fruitColor2: string[][] = [];

//help with inteference when extracting values
//string
const color = colors[0];

//string!underfined
const color1 = colors.pop();

//Prevent incompatible values
//error
//colors.push(true);

//Help with 'map'
colors.map((color:string): string =>{
  return color.toUpperCase();
})

//Flexible types - diffent types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2022-22-22');
//error
//importantDates.push(10);

