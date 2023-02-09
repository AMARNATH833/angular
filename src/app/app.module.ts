import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { TemplateComponent } from './template/template.component';
import { DirectivesComponent } from './directives/directives.component';
import { ErrorComponent } from './error/error.component';
import { ArtistComponent } from './artist/artist.component';
import { OneRouteComponent } from './oneRoute/oneRoute.component';
import { TwoRouteComponent } from './twoRoute/twoRoute.component';
import { ThreeRouteComponent } from './threeRoute/threeRoute.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [									
    AppComponent,
      ProductComponent,
      TemplateComponent,
      DirectivesComponent,
      ErrorComponent,
      ArtistComponent,
      OneRouteComponent,
      TwoRouteComponent,
      ThreeRouteComponent,
      FormsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
