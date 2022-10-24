//COURSES CLASS
class Courses{
    constructor(courseId,courseInstructor, courseName, courseDuration, coursePrice){
        this.courseId=courseId;
        this.courseInstructor=courseInstructor;
        this.courseName=courseName;
        this.courseDuration=courseDuration;
        this.coursePrice=coursePrice;

    }
    //Student registration
        register(){
            console.log("Kursa kayıt olundu.");
        } 

        showCourses(){
            console.log(this);
        }
        showCourses(){
            console.log("Courses :  ", this);
        }
    
    }

    
//New course created
const course1 = new Courses(1,"Engin Demirog", "C# + Angular", 110, 0);
const course2 = new Courses(2,"Engin Demirog", ".NET", 75, 0);
const course3 = new Courses(3,"Engin Demirog", "java", 45, 0);
const course4 = new Courses(4,"Engin Demirog", "JavaScript", 35, 0);
const course5 = new Courses(5,"Engin Demirog", "Programlamaya Giriş", 25, 0);
const course6 = new Courses(6,"Engin Demirog", "Java + React", 75, 0);

/*Bring Courses

course1.showCourses();
course2.showCourses();
course3.showCourses();
course4.showCourses();
course5.showCourses();
course6.showCourses();

*/



// CREATE COURSE
    function createCourse (courseInstructor, courseName, courseDuration, coursePrice){
        this.courseInstructor=courseInstructor;
        this.courseName=courseName;
        this.courseDuration=courseDuration;
        this.coursePrice=coursePrice;
      }

      createCourse.prototype.showCourses = function () {
        // console.log(this);
       };
       createCourse.prototype.showCourses = function () {
        // console.log("tanit2", this);
       };


//STUDENT CLASS
      class Student{
        constructor(firstName, lastName){
            this.firstName=firstName;
            this.lastName=lastName;
        }
    }

    // NEW STUDENT
    function newStudent(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
      }
    
      const student1 = new newStudent("Seren", "KARASEYFİOĞLU");
      


//INSTRUCTOR CLASS
    class Instructor{
        constructor(firstName, lastName){
            this.firstName=firstName;
            this.lastName=lastName;
        }
    }

//CATEGORY CLASS
    class Category {
        constructor(courseType){
            this.courseType=courseType;
        }
    }

    let instructor ={
        firstName: "Engin",
        lastName: "Demirog",
    }
   // console.log(instructor);


