import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const exchange = {
    //Aquí se definen los localizadores para cada uno de los elementos con los que se requiere interactuar
    Value_Field: Target.the('"Value field"').located(by.id("value")),
    Result_Field: Target.the('"Result field"').located(by.id("result")),
    Calculate_Button: Target.the('"Calculate button"').located(by.xpath("//button"))
}