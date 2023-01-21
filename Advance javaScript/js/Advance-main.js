//root Scope
let name = "Al Amin";
let greet = (name='') =>{//used default argument
    // var name = "Muhammad";//child scope;
    document.write(`Hello ${name}, How are you??`);
}
greet();//we can pass argument here...
//Advanced object
const a = "Muhammad";
const b = ['football','cricket','badminton'];
const c = {
    id: 101,
    name: "Al Amin",
    roll: 25
}
let info = {
    a,
    b,
    c,
}
for(x in info){
    document.write(`${x} : ${info[x]}`);
}
//advanced function
const first = ()=>{
    const greet = "Hi";
    const second= ()=>{
        alert(greet);
    }
    return second;
}
const newFunc = first();
newFunc();
//Closures - a function ran. the function executed. it's never going to run again.
//But it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope.

//Currying 
//
const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const multiplyby5 = curriedMultiply(5)//assined the value of a which is 5;
document.write("<br/>",multiplyby5(10));//assining the value of b which is 10
//result will be 50 which is a*b... 5*10...

//Compose
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum,sum)(5);