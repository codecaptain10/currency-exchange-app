/*Actual course in banner */


//Elements from Banner
export const currencyFromBanner = document.querySelector('#currencyFromBanner');
export const currencyCourseBanner = document.querySelector('#currencyCourseBanner');
export const currencyToBanner = document.querySelector('#currencyToBanner');
// const actualFromCurrency = Exchange.currencyFrom;
// const actualToCurrency = Exchange.currencyTo;
// const actualCurrencyCourse = Exchange.actualCourse;


/*----- Functions ------ */
//Function to change Banner with actual Course
export function changeBannerWithActualCourse(currencyFrom, actualCourse, currencyTo) {
    if (currencyFrom === "euro") {
        currencyFromBanner.textContent = " Eüro "
    } else if (currencyFrom === "zloty") {
        currencyFromBanner.textContent = " Złoty "
    } else if (currencyFrom === "dollar") {
        currencyFromBanner.textContent = " Dollar "
    } else if (currencyFrom === "pfund") {
        currencyFromBanner.textContent = " Pfund "
    }

    //currencyFromBanner.textContent = currencyFrom;

    currencyCourseBanner.textContent = " " + actualCourse + " ";


    //currencyToBanner.textContent = currencyTo
    if (currencyTo === "euro") {
        currencyToBanner.textContent = " Eüro "
    } else if (currencyTo === "zloty") {
        currencyToBanner.textContent = " Złoty "
    } else if (currencyTo === "dollar") {
        currencyToBanner.textContent = " Dollar "
    } else if (currencyTo === "pfund") {
        currencyToBanner.textContent = " Pfund "
    }
}