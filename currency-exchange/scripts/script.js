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





/*Testing Version to functionality */

//Import
import * as Exchange from '../modules/exchange.js'
import * as ActualCourseBanner from '../modules/actualCourseBanner.js'

//Events
Exchange.valueInput.addEventListener('input', Exchange.giveExchangeResult);
Exchange.currencyFrom.addEventListener('change', function() {
    Exchange.giveExchangeResult();
    ActualCourseBanner.changeBannerWithActualCourse(Exchange.currencyFrom.value, Exchange.actualCourse, Exchange.currencyTo.value);
});
Exchange.currencyTo.addEventListener('change', function() {
    Exchange.giveExchangeResult();
    ActualCourseBanner.changeBannerWithActualCourse(Exchange.currencyFrom.value, Exchange.actualCourse, Exchange.currencyTo.value);
});