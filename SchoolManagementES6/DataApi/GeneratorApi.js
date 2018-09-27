import{SchoolInit} from './DataInit.js';
class GeneratorApi{
constructor(){
    SchoolInit();
}   

//student api
 AddStudent(student){
        let studentArray=localStorage.getItem("studentArray");
        studentArray.push(student);
        localStorage.setItem("studentArray",studentArray);
}
GetStudents(){
    return(localStorage.getItem("studentArray"));
}
GetStudent(Id){
    let studentArray=localStorage.getItem("studentArray");
    return(studentArray.find(student=>student.Id==Id));
}
GetStudents=()=>localStorage.getItem("studentArray");

DeleteStudent(id){
    let studentArray=localStorage.getItem("studentArray");
    let arrayid=studentArray.findIndex(student=>student.Id==Id);
    studentArray.slice(arrayid,1);
    localStorage.setItem("studentArray",studentArray);
}

//end student api




//Class API
AddClass(Class){
    let StudentClassArray=localStorage.getItem("StudentClassArray");
    StudentClassArray.push(Class);
    localStorage.setItem("StudentClassArray",StudentClassArray);
}
GetClass(){
return(localStorage.getItem("StudentClassArray"));
}
GetClass(Id){
let StudentClassArray=localStorage.getItem("StudentClassArray");
return(StudentClassArray.find(Class=>Class.Id==Id));
}
GetClasses=()=>localStorage.getItem("StudentClassArray");
DeleteClass(id){
    let StudentClassArray=localStorage.getItem("StudentClassArray");
    let arrayid=StudentClassArray.findIndex(Class=>Class.Id==Id);
    StudentClassArray.slice(arrayid,1);
    localStorage.setItem("StudentClassArray",StudentClassArray);
}
//end of class api


//School api
AddSchool(School){
    let schoolArray=localStorage.getItem("schoolArray");
    schoolArray.push(Class);
    localStorage.setItem("schoolArray",schoolArray);
}
GetSchool(){
return(localStorage.getItem("schoolArray"));
}
GetSchool(Id){
let schoolArray=localStorage.getItem("schoolArray");
return(schoolArray.find(School=>School.Id==Id));
}
GetSchool=()=>localStorage.getItem("School");

DeleteSchool(id){
    let StudentClassArray=localStorage.getItem("StudentClassArray");
    let arrayid=StudentClassArray.findIndex(Class=>Class.Id==Id);
    StudentClassArray.slice(arrayid,1);
    localStorage.setItem("StudentClassArray",StudentClassArray);
}
}