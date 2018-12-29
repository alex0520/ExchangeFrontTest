import { Task, PerformsTasks } from "serenity-js/lib/screenplay";
import {Enter, Click, Wait, Is} from "serenity-js/lib/serenity-protractor";
import { exchange } from "../../ui/exchange/exchange";
import { Pause } from "../../interactions/pause";

//Aquí se definen las interacciones con cada uno de los elementos de la página Ej: Escribir, hacer clic

export class EnterValue implements Task{
    performAs(actor: PerformsTasks){
        return actor.attemptsTo(
            Enter.theValue(this.value).into(exchange.Value_Field)
        )
    }
    constructor(private value:number){}
}

export class EnterValueToExchange implements Task{

    static as(value:number){
        return new EnterValue(value)

    }
    performAs(actor:PerformsTasks){
        return actor.attemptsTo(
            new EnterValue(this.value),
            Pause.for(1000),
        )
    }
    constructor(private value:number){}
}