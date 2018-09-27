import{SchoolInit} from './DataInit.js';
import{idGenerator} from './idGenerator.js';
class GeneratorApi{
constructor(){
    SchoolInit();
}   

//student api
 AddStudent(student){
   student.studentId=idGenerator.getStudentId();
        let studentArray=localStorage.getItem("studentArray");
        studentArray.push(student);
        localStorage.setItem("studentArray",studentArray);
}
GetStudents(){
    return(localStorage.getItem("studentArray"));
}
GetStudent(Id){
    let studentArray=localStorage.getItem("studentArray");
    return(studentArray.find(student=>student.studentId==Id));
}
GetStudents=()=>localStorage.getItem("studentArray");

DeleteStudent(id){
    let studentArray=localStorage.getItem("studentArray");
    let arrayid=studentArray.findIndex(student=>student.studentId==id);
    studentArray.slice(arrayid,1);
    localStorage.setItem("studentArray",studentArray);
}
UpdateStudent(student){
    let Updateid=student.studentId;
    let studentArray=localStorage.getItem("studentArray");
    var DBstudent=GetStudent(updateid);
    Object.keys(student).forEach(function(key){
        DBstudent[key]=student[key];
    });
    DeleteStudent(updateid);
    studentArray.push(DBstudent);
    localStorage.setItem("studentArray",studentArray);
    
}

//end student api




//Class API
AddClass(Class){
    Class.ClassId=idGenerator.getclassId();
    let StudentClassArray=localStorage.getItem("StudentClassArray");
    StudentClassArray.push(Class);
    localStorage.setItem("StudentClassArray",StudentClassArray);
}
GetClass(){
return(localStorage.getItem("StudentClassArray"));
}
GetClass(Id){
let StudentClassArray=localStorage.getItem("StudentClassArray");
return(StudentClassArray.find(Class=>Class.ClassId==Id));
}
GetClasses=()=>localStorage.getItem("StudentClassArray");
DeleteClass(id){
    let StudentClassArray=localStorage.getItem("StudentClassArray");
    let arrayid=StudentClassArray.findIndex(Class=>Class.ClassId==Id);
    StudentClassArray.slice(arrayid,1);
    //delete all concerned  students
    let studentArray=localStorage.getItem("studentArray");
    studentArray.forEach(function(element) {
        if(element.ClassId==id){
            DeleteStudent(element.studentId);
        }
    localStorage.setItem("StudentClassArray",StudentClassArray);
    },this);
}

UpdateClass(Class){
    let Updateid=Class.ClassId;
    let StudentClassArray=localStorage.getItem("StudentClassArray");
    var DBClass=GetClass(updateid);
    Object.keys(Class).forEach(function(key){
        DBClass[key]=Class[key];
    });
    DeleteClass(updateid);
    StudentClassArray.push(DBClass);
    localStorage.setItem("StudentClassArray",StudentClassArray);
    
}

//end of class api


//School api
AddSchool(School){
    School.SchoolId=idGenerator.getschoolId();
    let schoolArray=localStorage.getItem("schoolArray");
    schoolArray.push(Class);
    localStorage.setItem("schoolArray",schoolArray);
}
GetSchool(){
return(localStorage.getItem("schoolArray"));
}
GetSchool(Id){
let schoolArray=localStorage.getItem("schoolArray");
return(schoolArray.find(School=>School.SchoolId==Id));
}
GetSchool=()=>localStorage.getItem("School");

DeleteSchool(id){
    let schoolArray=localStorage.getItem("schoolArray");
    let arrayid=schoolArray.findIndex(school=>school.SchoolId==id);
    schoolArray.slice(arrayid,1);
    //delete all concerned  students
    let studentArray=localStorage.getItem("studentArray");
    studentArray.forEach(function(element) {
        if(element.SchoolId==id){
            DeleteStudent(element.studentId);
        }
    },this);
    //delete classes
   let StudentClassArray=localStorage.getItem("StudentClassArray");
    StudentClassArray.forEach(function(element) {
        if(element.SchoolId==id){
            DeleteClass(element.ClassId);
        } 
        
    }, this);
   
}
UpdateSchool(school){
    let Updateid=school.SchoolId;
    let schoolArray=localStorage.getItem("schoolArray");
    var DBschool=GetSchool(updateid);
    Object.keys(school).forEach(function(key){
        DBschool[key]=school[key];
    });
    DeleteSchool(Updateid);
    schoolArray.push(DBschool);
    localStorage.setItem("schoolArray",schoolArray);   
}
}
