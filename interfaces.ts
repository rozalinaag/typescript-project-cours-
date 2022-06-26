interface Vehicle {
  name: string; 
  year: Date; 
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'cinic', 
  year: new Date(), 
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true, 
  sugar: 40, 
  summary(): string{
    return `My cola has ${this.sugar} grams of sugar`;
  }
}

//its very long and dificult write this code
const printVehicle1 = (vehicle: {name: string; year: number; broken: boolean}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
}

//its more short and understandeble
const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink);


