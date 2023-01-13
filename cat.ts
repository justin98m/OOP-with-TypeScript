import Pet from './pet.js';

class Cat extends Pet{
  constructor(catInfo :{name: string,weight : number,color :string}){

    super(catInfo.name,catInfo.weight,catInfo.color);
  }

  sayHello(){
    return 'Meow'
  }
  threaten(){
    return 'hssssss'
  }
}
let chuck = new Cat({
  name : 'chuck',
  weight : 14,
  color : 'blue'
})
chuck.displayInfo();
console.log(chuck.sayHello());
console.log(chuck.threaten());
