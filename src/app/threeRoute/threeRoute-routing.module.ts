import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ThreeRouteComponent } from "./threeRoute.component";

const routes:Routes=[
    {path:'',component:ThreeRouteComponent}
];

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forChild(routes)]
})

export class threeRouteModule{}