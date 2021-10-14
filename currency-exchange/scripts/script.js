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
    - Obiekty: Euro, Złoty, Dollar, Pfund z kursami walut dla innych
    - Zmienne: valueInput (ile), valueOutput(wymiana), currencyFrom(z jakiej waluty), currecyTo(na jaka walute), acutalCourse (aktualny kurs)
    - Funkcje:exchange() (przypisanie wartosci wymiany), giveExchangeResultat()(ustawienienie jakie waluty są wybrane, ustawienie kursu, użycie exchange() do przypisania wymiany) 
    - Eventy: valueInput, currencyFrom, currencyTo z eventami z wywoałniem funkcji giveExchangeResultat aby dynamicznie zmienić wynik wymiany walut w zależości od zmiany wartości

*/





/*Testing Version to functionality */

const valueInput = document.querySelector('.howMuchFrom');
const valueOutput = document.querySelector('.howMuchTo');

function updateValue() {
    valueOutput.value = valueInput.value;
}

const euro = {
    name: "Euro",
    course: {
        changeTo: {
            euro: 1,
            zloty: 4.15,
            dollar: 2.5,
            pfudn: 3.3
        }
    }
}

valueInput.addEventListener('input', function() {
    console.log(valueInput.value);
    let course = euro.course.changeTo.zloty;
    valueOutput.value = parseInt(valueInput.value) * course;

});