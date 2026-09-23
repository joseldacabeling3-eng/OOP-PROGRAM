// 3 variables
let studentName = "Joselda B. Cabeling";
let subjects = " Professional Elective ";
let studentAge = "20";

console.log("studentName:", studentName);
console.log("subjects:", subjects);
console.log("studentAge:", studentAge);

// 3 arrays
var school = ["nwssu, ckc, sti"];
var room = ["room1, room2, room3"];
var shoes = ["nike, puma, fila"];

// 3 loops
console.log("\nRoom:");
for (var i = 0; i < room.length; i++){
    console.log ((i+1)+ "."+ room [i]);
}
console.log("\nSchool:");
for (var j = 0; j < school.length; j++){
    console.log ((j+1)+ "."+ school [j]);
}
console.log("\nShoes:");
for (var k = 0; k < shoes.length; k++){
    console.log ((k+1)+ "."+ shoes [k]);
}

// 3 conditionals
if (studentAge >= 20) {
    console.log("Adult");
} else {
    console.log("Minor");
}

if (school.length >= 3) {
    console.log("There are 3 schools.");
} else {
    console.log("There are less than 3 schools.");
}

if (shoes.length >= 3) {
    console.log("There are 3 pairs of shoes.");
} else {
    console.log("I only like 2 pairs of shoes.");
}

// 4 classes
// 1 class
class Instructor {

    //  Constructor S1
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    // 1 method 
    introduce() {
        console.log("Instructor:", this.name);
    }

    // 2 method
    teach() {
        console.log(this.name + "teaches" + this.subject);
    }
    

    // 3 method
    role() {
        console.log(this.name + "is an instructor.");
    }
}

 // 1 object
    let instructor = new Instructor(" Sir yuri ", " Professional Elective ");
    instructor.introduce();
    instructor.teach();
    instructor.role();

// 2 class
    // 1 Inheritance
    class Student extends Instructor {

    // 2 Constructor
    constructor(name, subject, age) {
        super(name, subject);
        this.age = age;
    }

    // 4 Method
    study() {
        console.log(this.name + " is studying " + this.subject);
    }
    
    // Polymorphism
    role() {
        console.log(this.name + " is studying " + this.subject);
    }
}

    // 2 object
    let student = new Student(" Joselda ", " Professional Elective", "20");
    student.study();
    
    
// 3 class
// 2 Inheritance 
class Athlete extends Student {

    // 5 Method
    play() {
        console.log(this.name + " is playing ");
    }
}

// 3 object
    let athlete = new Athlete(" Joselda ");
    athlete.play();

// 4 class
class SchoolInfo {
    // 2 Constructor
    constructor(schoolName, roomName) {
        this.schoolName = schoolName;
        this.roomName = roomName;
    }

    showSchool() {
        console.log("School:", this.schoolName);
    }

    showRoom() {
        console.log("Room:", this.roomName);
    }
}

// 4 object
let schoolInfo = new SchoolInfo("Nwssu", "Room 309");
schoolInfo.showSchool();
schoolInfo.showRoom();
 
// 2 object literal
let studentInfo = {
    name : "Joselda",
    age: 20
};

let schoolDetails = {
    school: "NWSSU",
    room: "Room 309"
};

console.log("\nObject Literals");

console.log(studentInfo);

console.log(schoolDetails);


// 2 Encapsulation

class Account {
    #password; // Encapsulation 1
    constructor(password) {
        this.#password = password;
    }

    showPassword() {
        console.log("Password is protected.");
    }
}

class StudentGrade {
   #grade; // Encapsulation 2
   constructor(grade) {
        this.#grade = grade;
    }

    showGrade() {
        console.log("Grade is protected.");
    }
}

let account1 = new Account("2006");
let grade1 = new StudentGrade(95);

account1.showPassword();
grade1.showGrade();


// 1 Abstraction
class Joselda {
 role() {
     console.log(" Joselda is a Good Student.");
 }
}

let joselda = new Joselda();
joselda.role();