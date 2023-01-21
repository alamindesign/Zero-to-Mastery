const Array = [1,3,5,10,30];
const double = [];
const newArray = Array.forEach((num) => {
    double.push(num*2);
});
console.log(double);

//map filter reduce..
//map returns a new array..
const mapArray = Array.map(num=>num*2);
console.log(mapArray);
// map is a pure function...

//filer is also creates a new array..
const filterArray = Array.filter(num => num>5);
console.log(filterArray);

//reduce ---> it is very powerfull it can do both map and filter...
const reduceArray = Array.reduce((accumulator,num)=>{
    return accumulator + num;
},0);
console.log(reduceArray);