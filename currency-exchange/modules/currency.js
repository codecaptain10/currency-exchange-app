/*Moduł do klasy Currency i obiektów każdej waluty */

class Currency {
    //Currency Types
    courseToEuro;
    courseToZloty;
    courseToDollar;
    courseToPfund;

    //Constructor
    constructor(courseToEuro, courseToZloty, courseToDollar, courseToPfund) {
        this.courseToEuro = courseToEuro;
        this.courseToZloty = courseToZloty;
        this.courseToDollar = courseToDollar;
        this.courseToPfund = courseToPfund;

    }

    //Getters
    getCourseToEuro() {
        return this.courseToEuro;
    }

    getCourseToZloty() {
        return this.courseToZloty;
    }

    getCourseToDollar() {
        return this.courseToDollar;
    }

    getCourseToPfund() {
        return this.courseToPfund;
    }

    //Setters
    setCourseToEuro(newCourse) {
        this.courseToEuro = newCourse;
    }

    setCourseToZloty(newCourse) {
        this.courseToZloty = newCourse;
    }

    setCourseToDollar(newCourse) {
        this.courseToDollar = newCourse;
    }

    setCourseToPfund(newCourse) {
        this.courseToPfund = newCourse;
    }

}

//EURO: Euro:1, Złoty: 4.58, Dollar: 1.16, Pfund:0.85
let Euro = new Currency(1, 4.58, 1.16, 0.85);

//ZŁOTY: Euro:0.22, Złoty: 1, Dollar: 0.25, Pfund:0.19
let Zloty = new Currency(0.22, 1, 0.25, 0.19);

//DOLLAR: Euro:0.86, Złoty: 3.94, Dollar: 1, Pfund:0.73
let Dollar = new Currency(0.86, 3.94, 1, 0.73);

//PFUND: Euro:1.18, Złoty: 5.39, Dollar: 1.37, Pfund:1
let Pfund = new Currency(1, 5.39, 1.37, 1);