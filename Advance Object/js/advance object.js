//reference type
var objecet1 = {value: 10};
var object2 = objecet1;
var object3 = {value: 10}
//every object is a complete different box of data...
//context vs scope
function a(){
    let a = 4;
}
//a only lives in the funtion outside function it's unknown..
//context tell you where you are within the object...
console.log(this);//this is the position of main object which is window
const object4 = {
    a: function(){
        console.log(this);
        //this is the position of object4....
    }
}

//instantiation or multiple copy of an object...
//instantiation is when you make a copy of a object and reuse the code...
//instantiation is class
class Player{
    constructor(name,type){
        this.name = name,
        this.type = type
    }
    introduce(){
        console.log(`Hi i am ${this.name} and I'm a ${this.type}`);
    }
}
class Wizard extends Player{
    constructor(name, type){
        super(name,type)
    }
    play(){
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard('Shally','Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');