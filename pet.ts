export default class Pet {
  //encap
  private _name : string;
  private _weight : number;
  private readonly petId : number;
  private _color : string;

  constructor(name: string, weight:number, color:string){
    this._name = name;
    this._weight = weight;
    this._color = color;
  }
  //encap
  get weight():number {
    return this._weight;
  }
  set weight(weight:number){
    this._weight = weight;
  }
  get name():string{
    return this._name;
  }
  set name(name:string){
    this._name = name;
  }
  displayInfo(){
    console.log(`${this.name} is the color ${this._color}` +
      `and weighs ${this.weight} lbs`);

  }
  sayHello(){}
  threaten(){}
}
let pet1 = new Pet("rufus",12,"blonde");

pet1.displayInfo();
pet1.weight = 15;

pet1.displayInfo();

let pet2 = new Pet('Brian',23,'white');
pet2.displayInfo()
pet2.weight = 18;
pet2.displayInfo();
