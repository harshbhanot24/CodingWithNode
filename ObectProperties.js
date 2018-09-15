// Define object
var obj = {counter : 0};
var test={
    name:"harsh",
    age:21,
    gender:"male",
    status:"single",
    get getName(){
        return this.name;
    },
    set setName(name){
        this.name=name;
    } 
}
function person(name,age){
this.name=name;
this.age=age;
this.concat=function(){
    return this.name +this.age;
}
}
var harsh=new person("harsh",21);
var anas=new person("anas",21);
console.log(harsh.name);
console.log(anas.concat());
console.log(test.getName);
test.setName="anas";
console.log(test.getName);
// Define setters
Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
    set : function (i) {this.counter += i;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
console.dir(obj);