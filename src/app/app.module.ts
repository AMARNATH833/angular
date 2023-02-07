import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { TemplateComponent } from './template/template.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [			
    AppComponent,
      ProductComponent,
      TemplateComponent,
      DirectivesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
