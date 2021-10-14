/*Moduł na funkcje do przeliczania walut */
import {
    Currency
} from './currency.js';

//Currency objects
//EURO: Euro:1, Złoty: 4.58, Dollar: 1.16, Pfund:0.85
export let Euro = new Currency(1, 4.58, 1.16, 0.85);

//ZŁOTY: Euro:0.22, Złoty: 1, Dollar: 0.25, Pfund:0.19
export let Zloty = new Currency(0.22, 1, 0.25, 0.19);

//DOLLAR: Euro:0.86, Złoty: 3.94, Dollar: 1, Pfund:0.73
export let Dollar = new Currency(0.86, 3.94, 1, 0.73);

//PFUND: Euro:1.18, Złoty: 5.39, Dollar: 1.37, Pfund:1
export let Pfund = new Currency(1, 5.39, 1.37, 1);


/* ----- Values ----- */

//Input and Output
const valueInput = document.querySelector('.howMuchFrom');
const valueOutput = document.querySelector('.howMuchTo');
//actual Course
let actualCourse = Euro.courseToZloty;
//CurrencyFrom and CurrencyTo
const currencyFrom = document.querySelector('#currencyFrom');
const currencyTo = document.querySelector('#currencyTo');
//Elements from Banner
const currencyFromBanner = document.querySelector('#currencyFromBanner');
const currencyCourseBanner = document.querySelector('#currencyCourseBanner');
const currencyToBanner = document.querySelector('#currencyToBanner');


/* ----- Functions ----- */

//Function changeCourse
function giveResult() {
    if (currencyFrom.value === "euro") {
        if (currencyTo.value === "euro") {
            actualCourse = Euro.courseToEuro;
        } else if (currencyTo.value === "zloty") {
            actualCourse = Euro.courseToZloty;
        } else if (currencyTo.value === "dollar") {
            actualCourse = Euro.courseToDollar;
        } else if (currencyTo.value === "pfund") {
            actualCourse = Euro.courseToPfund;
        }
    } else if (currencyFrom.value === "zloty") {
        if (currencyTo.value === "euro") {
            actualCourse = Zloty.courseToEuro;
        } else if (currencyTo.value === "zloty") {
            actualCourse = Zloty.courseToZloty;
        } else if (currencyTo.value === "dollar") {
            actualCourse = Zloty.courseToDollar;
        } else if (currencyTo.value === "pfund") {
            actualCourse = Zloty.courseToPfund;
        }
    } else if (currencyFrom.value === "dollar") {
        if (currencyTo.value === "euro") {
            actualCourse = Dollar.courseToEuro;
        } else if (currencyTo.value === "zloty") {
            actualCourse = Dollar.courseToZloty;
        } else if (currencyTo.value === "dollar") {
            actualCourse = Dollar.courseToDollar;
        } else if (currencyTo.value === "pfund") {
            actualCourse = Dollar.courseToPfund;
        }
    } else if (currencyFrom.value === "pfund") {
        if (currencyTo.value === "euro") {
            actualCourse = Pfund.courseToEuro;
        } else if (currencyTo.value === "zloty") {
            actualCourse = Pfund.courseToZloty;
        } else if (currencyTo.value === "dollar") {
            actualCourse = Pfund.courseToDollar;
        } else if (currencyTo.value === "pfund") {
            actualCourse = Pfund.courseToPfund;
        }
    }

    valueOutput.value = parseInt(valueInput.value) * actualCourse;
}

//Function to change Banner with actual Course
function changeBannerWithActualCourse(firstCurrency, Course, secondCurrency) {


}

//Function to exchange resultat


//Function Update Value
function updateValue() {
    console.log(valueInput.value);
    giveResult();
}

/*----- Events ----- */

//Event to change the Output depend from Input
valueInput.addEventListener('input', updateValue);

//Event to choice the firtst currency
currencyFrom.addEventListener('change', function() {
    console.log("Zmiana kursu FROM!");
    giveResult();
})

//Event to choice the second currency
currencyTo.addEventListener('change', function() {
    console.log("Zmiana kursu TO!");
    giveResult();

});