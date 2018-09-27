export function SchoolInit(){
var school={
    SchoolId:1,
    Name:"School1",
    Location:"location1",
}
var StudentClass={
    ClassId:1,
    SchoolId:1,
    Name:"first",
    Size:10
}
var student={
    studentId:1,
    ClassId:1,
    SchoolId:1,
    Name:"student1",
    age:12,
    gender:"Male"
}
var schoolArray=[school];
var StudentClassArray=[StudentClass];
var studentArray=[student];
if(!localStorage.getItem("schoolArray")){
localStorage.setItem("schoolArray",schoolArray);
}
if(!localStorage.getItem("StudentClassArray")){
    localStorage.setItem("StudentClassArray",StudentClassArray);
}
if(!localStorage.getItem("studentArray")){
    localStorage.setItem("studentArray",studentArray);
}
}
