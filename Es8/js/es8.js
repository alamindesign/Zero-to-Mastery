Object.values
Object.entries
Object.keys

let obj = {
    username0: 'santa',
    username1: 'rafil',
    username2: 'Mr. grees'
}

Object.keys(obj).forEach((keys,index)=>{
    console.log(keys, obj[keys]);
})
Object.values(obj).forEach((values)=>{
    console.log(values);
})
Object.entries(obj).forEach((values)=>{
    console.log(values);
})
Object.entries(obj).map((values)=>{
    return values[1] + values[0].replace('username','');
})