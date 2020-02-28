"use strict";

let date = new Date().getUTCFullYear();

class User {
    constructor (name, surname, year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
}

class Student extends User {

    getFullName() {
         alert(this.name+" " +this.surname);
    }

    getCourse(date){
        alert(date - this.year + " " + "курс");
       }
}

let student = new Student('Roman', 'Tymofiienko', 2015);

student.getCourse(2020);
student.getFullName();