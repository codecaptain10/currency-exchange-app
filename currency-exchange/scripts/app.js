/*Currency exchange logic
1. Create moduls: checkCourse, currency, exchange
2. Modul currency.js:
    - Create a Class Currency
    - Create course values, getters and setters
3. Module exchange.js
    - import Class Currency
    - Create objects Euro, Zloty, Dollar, Pfund
4. Index.html:
    - Give id "currencyFrom" and "currencyTo" for <select>
    - Give id for Banner elements: CurrencyFormBanner, CurrencyCourseBanner, CurrencyToBanner
5. Module exchange.js
    - Create Variables:
        - valInput, valOutput (kwota i przeliczona przez kurs)
        - actualCourse (flaga)
        - currencyFrom, currencyTo (wybrane waluty)
        - Banner Elements (do zmienia banera)
    - Create functions:
        - giveResult (przeliczanie walut)
        - changeBanner (zmiana danych w banerze)
        - updateValue (końcowa funkcja do eventu)
    - Create a event (nasłuchiwanie zmian)
6. Podsumowanie exchange.js
    - Import: Klasa Currency
    - Obiekty: Euro, Złoty, Dollar, Pfund z kursami walut dla innych
    - Zmienne: valueInput (ile), valueOutput(wymiana), currencyFrom(z jakiej waluty), currecyTo(na jaka walute), acutalCourse (aktualny kurs)
    - Funkcje:exchange() (przypisanie wartosci wymiany), giveExchangeResultat()(ustawienienie jakie waluty są wybrane, ustawienie kursu, użycie exchange() do przypisania wymiany) 
    - Eventy: valueInput, currencyFrom, currencyTo z eventami z wywoałniem funkcji giveExchangeResultat aby dynamicznie zmienić wynik wymiany walut w zależości od zmiany wartości

7. Moduł actualCourseBanner
    - Import: Exchange (właściwości i funkcje)
    - Obiekty: 
    - Zmienne: 
    - Funkcje: 
    - Eventy: 

*/
//Import
import * as ExchangeCalculator from '../modules/exchange/exchangeCalculator.js'
import * as ActualCourseBanner from '../modules/exchange/actualCourseBanner.js'

//Import - charts
import * as chartsData from "../modules/charts/chartsData.js";
import * as chartsView from "../modules/charts/chartsView.js";
import * as chartsChoice from "../modules/charts/chartsChoice.js"


//Events
ExchangeCalculator.valueInput.addEventListener('input', ExchangeCalculator.giveExchangeResult);
ExchangeCalculator.currencyFrom.addEventListener('change', function() {
    ExchangeCalculator.giveExchangeResult();
    ActualCourseBanner.updateBannerWithActualCourse(ExchangeCalculator.currencyFrom.value, ExchangeCalculator.actualCourse, ExchangeCalculator.currencyTo.value);
});
ExchangeCalculator.currencyTo.addEventListener('change', function() {
    ExchangeCalculator.giveExchangeResult();
    ActualCourseBanner.updateBannerWithActualCourse(ExchangeCalculator.currencyFrom.value, ExchangeCalculator.actualCourse, ExchangeCalculator.currencyTo.value);
});

//Events - charts

chartsChoice.euroButton.addEventListener('click', function() {
    console.log("Chosen Euro!");
    chartsChoice.clickedButton("euro");
    chartsView.changeToEuro();
});

chartsChoice.zlotyButton.addEventListener('click', function() {
    console.log("Chosen Zloty!");
    chartsChoice.clickedButton("zloty");
    chartsView.changeToZloty();

});

chartsChoice.dollarButton.addEventListener('click', function() {
    console.log("Chosen Dollar!");
    chartsChoice.clickedButton("dollar");
    chartsView.changeToDollar();
});

chartsChoice.pfundButton.addEventListener('click', function() {
    console.log("Chosen Pfund!");
    chartsChoice.clickedButton("pfund");
    chartsView.changeToPfund();
});