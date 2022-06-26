const drink = {
  color: 'brown', 
  carbonated: true, 
  sugar: 40
};

//it's a problem with array. Becouse we can shuffle this elements
//const cola = ['brown', true, 40];
//elements will be in the right order always
const cola: [string, boolean, number] = ['brown', true, 40];
//error
//cola[1] = 'black'; // becouse its true value

//type alias
type Drink = [string, boolean, number];

//Drink - alias
const cola2: Drink = ['brown', true, 40];

//its difficilt to understand what is 400, 3354
const carSpecs: [number, number] = [400, 3354];

//that is why better write so: with object
const carSpecsObj = {
  horspower: 400, 
  weight: 3354
};

