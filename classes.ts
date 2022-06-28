class Vehicle{
  // public drive(): void{
  //   console.log(`I'm driving`);
  // }

  // color: string;
  // constructor(color_name: string){
  //     this.color = color_name;
  // }

  //we create the color property immediately when creating the constructor 
  //very short code
  constructor(public color: string){}

  public stop(): void{
    console.log(`I'm stop`)
  }
  protected beep(): void {
    console.log('BEEP');
  }
};

class Car extends Vehicle {

  constructor(public wheels: number, color: string){
    super('red');
  }

  private drive(): void{
    console.log(`Im car and driving`);
  }

  starDrivingProcess(): void{
    this.drive();
    this.beep();
  }
}
const vehicle = new Vehicle('black');
console.log(vehicle.color);
//vehicle.drive();
vehicle.stop();

const car = new Car(1, 'yellow');
console.log(car.color);
car.starDrivingProcess();
