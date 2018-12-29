import { Task, See } from "serenity-js/lib/screenplay";
import {Click, Duration, Is, Value, Wait} from "serenity-js/lib/serenity-protractor";
import { exchange } from "../ui/exchange/exchange";
import { equals } from "../../expect";


//En este método se valida la conversión fue satisfactoria
export const CheckExchangeValue = (exchangeValue) => Task.where('#actor should see exchange value',
    Wait.until(exchange.Calculate_Button, Is.clickable()),
    Click.on(exchange.Calculate_Button),
    See.if(Value.of(exchange.Result_Field),equals(exchangeValue))
)