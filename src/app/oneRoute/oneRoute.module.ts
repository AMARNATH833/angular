import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { oneRouteModule } from "./oneRoute-routing.module";
import { OneRouteComponent } from "./oneRoute.component";

@NgModule({
    declarations:[OneRouteComponent],
    imports:[oneRouteModule],
    providers:[]
})

export class oneRouteModuler{}
