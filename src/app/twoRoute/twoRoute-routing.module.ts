import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { TwoRouteComponent } from "./twoRoute.component";

const routes:Routes=[
    {path:"",component:TwoRouteComponent}
];

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forChild(routes)]
})

export class twoRouteModule{}