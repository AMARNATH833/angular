import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { OneRouteComponent } from "./oneRoute.component";

const routes:Routes=[
    {path:"",component:OneRouteComponent}
];

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forChild(routes)]
})

export class oneRouteModule{}