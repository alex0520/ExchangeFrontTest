import { Navigate } from "../../screenplay/tasks/navigate/navigate";
import { EnterValueToExchange } from "../../screenplay/tasks/exchange_currency/enter_value";
import {CheckExchangeValue} from "../../screenplay/questions/exchange_was";

export = function exchangeSteps(){
    this.Given(/^Alex open the exchange page$/, function () {
        return this.stage.theActorCalled('Alex').attemptsTo(
            Navigate.toExchange()
        )
    });

    this.When(/^he want to exchange ([0-9\.]+) ([A-Z]{3}) to ([A-Z]{3})$/, function (value, fromCurrency,ToCurrency) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnterValueToExchange.as(value)
        )
    });

    this.Then(/^he should receive ([0-9\.]+) as the exchanged value$/, function (exchangedValue) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            CheckExchangeValue(exchangedValue)
        )
    });



}