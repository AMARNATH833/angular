import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { threeRouteModule } from "./threeRoute-routing.module"; 
import { ThreeRouteComponent } from "./threeRoute.component"; 

@NgModule({
    declarations:[ThreeRouteComponent],
    imports:[threeRouteModule],
    providers:[]
})

export class threeRouteModuler{}
