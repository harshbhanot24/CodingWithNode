let mapObj=new Map();
let userObj={};
let AddFuction=(a,b)=>{return (a+b)};
//setting key value in maps
mapObj.set("key1",true);
mapObj.set("key2","harsh");
mapObj.set("key3",21);
mapObj.set(2,{"name":"harsh", "age":21});
mapObj.set("AddFuctionKey",AddFuction(1,3));

//retriving values
console.log("getting a boolean =>" + mapObj.get("key1"));
console.log("getting a string =>" + mapObj.get("key2"));
console.log("getting a int =>" + mapObj.get("key3"));
console.log("getting a object =>" + JSON.stringify(mapObj.get(2)));
console.log("getting a function =>" + mapObj.get("AddFuctionKey"));

//has and size methods
console.log(mapObj.has("key1")+" size is"+mapObj.size);
//map.clear to remove
//to get all keys
for(let key of mapObj.keys()){
    console.log(key);
}

//to get all Values
for(let value of mapObj.values()){
    console.log(value);
}

//to get key value pairs
for(let [key,value] of mapObj.entries()){
    console.log("key is"+key+" value is "+ value);
}//here we used concept of destructuring ie breaking enteries to key and value 2 variables
