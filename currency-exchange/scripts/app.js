//Import
import * as ExchangeCalculator from '../modules/exchange/exchangeCalculator.js'
import * as ActualCourseBanner from '../modules/exchange/actualCourseBanner.js'

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