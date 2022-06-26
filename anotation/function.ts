const add = (a: number, b: number): number => {
  return a + b
};

//simple function
function divide(a:number, b: number): number {
  return a/b;
}

//expression function
const multyply = function(a:number, b: number): number {
  return a*b
}

//nothing return 
const logger = (message: string): void => {
  console.log(message);
}

//never return
const trowError = (message: string): never => {
  throw new Error(message);
};

const today = {
  date: new Date(), 
  weather: 'sunnny'
};

//const logWeather = (forecast: { date: Date, weather: string}): void =>{}
const logWeather = ({date, weather}: { date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}

//ES2015
const logWeather2 = ({date, weather}): void => {
  console.log(date);
  console.log(weather);
}

logWeather(today);


//