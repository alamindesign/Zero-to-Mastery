let a = 5;
let b = a;
b++;
console.log(a);
console.log(b);// both will be defferent because it's copy the value and assign it..
let obj = {a:'a',b:'b',c: 'c'};
let obj2 = obj;
obj2.c = {deep:'hahahaha'};//object in a object...
console.log(obj);
console.log(obj2);//both will be the same because both referring the same memory space..
// copying one object to another...
let obj3 = Object.assign({},obj);//coping the obj...
let obj4 = {...obj}//coping the obj....
obj4.a = 5;
console.log(obj);
console.log(obj4);//both won't be the same.. because the memory is different now...
//if there are any object in the object then it will be the same memory all the time..
// to solve this problem we have to do superClone....
let superClone = JSON.parse(JSON.stringify(obj));