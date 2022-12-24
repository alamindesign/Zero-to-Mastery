// Array method
/*
pop(),
push(),
shift(),
unshift(),
concat([]),
splice(,),
slice(,),
sort(),
forEach(),
isArray(),
toString(),
join()
*/
//using concat array mathod
let fruits = ['Mango','Apple','Banana','Goaba'];
fruits.splice(2,0,"Licchi","Watermilon");
let sweets = ['Roshogolla','Kalo jam','Ponch'];
let cookies = ['Dry cake','Solti','Sweet'];
let items = fruits.concat(sweets,cookies);
console.log(items);
items.forEach(function(item){
    console.log("*",item);
})