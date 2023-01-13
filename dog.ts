import Pet from './pet.js';
//inheritance
class Dog extends Pet{
  constructor(dogInfo :{name: string,weight : number,color :string}){

    super(dogInfo.name,dogInfo.weight,dogInfo.color);
  }
  //poly
  sayHello(){
    return 'Bark'
  }//poly
  threaten(){
    return 'Grrrrrr'
  }
}
let derrick = new Dog({
  name : 'derrick',
  weight : 18,
  color : 'black'
})

//abstract
derrick.displayInfo();
console.log(derrick.sayHello());
console.log(derrick.threaten());
