import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { MusicComposerComponent } from './artist/musicComposer/musicComposer.component';
import { SingerComponent } from './artist/singer/singer.component';
import { DirectivesComponent } from './directives/directives.component';
import { ErrorComponent } from './error/error.component';
import { ProductComponent } from './product/product.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {path:'directives',title:'Directives',component:DirectivesComponent},
  {path:'product',title:'Product',component:ProductComponent},
  {path:'template',title:'Template',component:TemplateComponent},
  {
    path:'artist',title:'Artist',component:ArtistComponent,
    children:[
      {path:'singer',title:'Singer',component:SingerComponent},
      {path:'musiccomposer',title:'MusicComposer',component:MusicComposerComponent}
    ]
  },
  {
    path:'oneroute',
    loadChildren:()=>import('../app/oneRoute/oneRoute-routing.module').then(x=>x.oneRouteModule)
  },
  {
    path:'tworoute',
    loadChildren:()=>import('../app/twoRoute/twoRoute-routing.module').then(x=>x.twoRouteModule)
  },
  {
    path:'threeroute',
    loadChildren:()=>import('../app/threeRoute/threeRoute-routing.module').then(x=>x.threeRouteModule)
  },
  {path:'',redirectTo:'directives',pathMatch:'full'},
  {path:'**',title:'PAGENOTFOUND',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
