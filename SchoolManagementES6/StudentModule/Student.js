class Student{
    studentId;
    ClassId;
    SchoolId;
    Name;
    age;
    gender;
//all the getters
    GetstudentId(){
        return this.studentId;
    }
    GetClassId(){
        return this.ClassId;
    }
    GetSchoolId(){
        return this.SchoolId;
    }
    GetName(){
        return this.Name;
    }
    GetAge(){
        return this.age;
    }
    GetGender(){
        return this.gender;
    }
// all setters
    SetStudentID(studentId){
            this.studentId=studentId;
    }
    SetClassId(ClassId){
        this.ClassId=ClassId;
}
    SetSchoolId(SchoolId){
        this.SchoolId=SchoolId;
    }   
    SetName(Name){
        this.Name=Name;
    }
    Setage(age){
        this.age=age;
    }
    Setgender(gender){
        this.gender=gender;
    }
}