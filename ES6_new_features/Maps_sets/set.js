 let setObj=new Set();
 let userObj={};
 let AddFuction=(a,b)=>{return (a+b)};
 //setting key value in sets
 setObj.add(true);
 setObj.add("harsh");
 setObj.add(21);
 setObj.add({"name":"harsh", "age":21});
 setObj.add(AddFuction(1,3));

 //has and size methods
 console.log(setObj.has("harsh")+" size is"+setObj.size);
 //set.clear to remove
 //to get all Values
 for(let value of setObj.values()){
     console.log(value);
 }
 
 //to get key value pairs here key=value
 for(let [key,value] of setObj.entries()){
     console.log("key is"+key+" value is "+ value);
 }//here we used concept of destructuring ie breaking enteries to key and value 2 variables
 