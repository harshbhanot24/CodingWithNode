function StudentClass(name,rollNo){
this.name=name;
this.rollNo=rollNo;
this.doubleRollNo=function(){
    return this.rollNo*2;
}
}//this is a sample constructor here first word is capital(naming convention)

var harsh=new StudentClass("harsh",1);//basic object is created
console.log(harsh.name+" "+harsh.rollNo);
console.log(harsh.doubleRollNo());
// now we will add a property and a method to studentClass
StudentClass.prototype.class="10th";
StudentClass.prototype.classMerge=function(){return this.class +" "+this.name};
console.log(harsh.class);
console.log(harsh.classMerge());//because we need to execute classMerge
// now to add property only to harsh object

harsh.gender="male"; //here we dont use prototype because harsh is an normal object not a constructor Object
console.log(harsh.gender);