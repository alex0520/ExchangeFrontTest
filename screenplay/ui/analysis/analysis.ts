import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const analysis = {
    //Aquí se definen los localizadores de los elementos de error a validar
    Unsuccessful_Login: Target.the('Unsuccessful login').located(by.className("errf-item")),
    Username_Required: Target.the('Username required').located(by.id("username-ffr-val-msg-0")),
    Password_Required: Target.the('Password required').located(by.id("password-ffr-val-msg-0"))
}