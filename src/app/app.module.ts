import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { TemplateComponent } from './template/template.component';
import { DirectivesComponent } from './directives/directives.component';
import { ErrorComponent } from './error/error.component';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  declarations: [					
    AppComponent,
      ProductComponent,
      TemplateComponent,
      DirectivesComponent,
      ErrorComponent,
      ArtistComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
