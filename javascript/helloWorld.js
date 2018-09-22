//console.log("Hello World!");
function greet(){
    console.log("Hello!");
}
//greet();
function logGreeting(fn){
    fn();
}
logGreeting(greet);
var a = function(){
    console.log("Hello Anas");
}

logGreeting(a);

//using function expression on the fly
logGreeting(function(){ console.log("Hello Anas Sir"); });