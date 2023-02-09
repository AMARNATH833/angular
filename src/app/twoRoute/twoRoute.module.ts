import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { twoRouteModule } from "./twoRoute-routing.module";
import { TwoRouteComponent } from "./twoRoute.component";

@NgModule({
    declarations:[TwoRouteComponent],
    imports:[twoRouteModule],
    providers:[]
})

export class twoRouteModuler{}
