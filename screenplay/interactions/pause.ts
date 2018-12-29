import { Interaction } from "serenity-js/lib/screenplay";
import { BrowseTheWeb } from "serenity-js/lib/serenity-protractor";

//Se define una interacción personalizada que permite esperar por la respuesta de la página y puede usarse desde cualquier lugar
export const Pause = {
    for: (time: number) => Interaction.where('#actor pause', actor => {
        const browse = BrowseTheWeb.as(actor);
        return browse.sleep(time);
    })
}