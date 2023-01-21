let a = 5;
let b = a;
b++;
console.log(a);
console.log(b);// both will be defferent because it's copy the value and assign it..
let obj = {a:'a',b:'b',c: 'c'};
let obj2 = obj;
obj2.c = 5;
console.log(obj);
console.log(obj2);//both will be the same because both referring the same memory space..
// copying one object to another...
let obj3 = Object.assign({},obj);//coping the obj...
let obj4 = {...obj}//coping the obj....
obj4.a = 5;
console.log(obj);
console.log(obj4);//both won't be the same.. because the memory is different now...