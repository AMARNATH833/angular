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
import { TemplateDrivenFormComponent } from './templateDrivenForm/templateDrivenForm.component';
import { JsonserverComponent } from './jsonserver/jsonserver.component';
import { SvgComponent } from './svg/svg.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { InternationalizationComponent } from './internationalization/internationalization.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import {HttpClient} from '@angular/common/http'
import { DependencyComponent } from './dependency/dependency.component';
import { TemplateURLComponent } from './templateURL/templateURL.component';
import { OnChangesComponent } from './onChanges/onChanges.component';
import { ProjectionComponent } from './projection/projection.component';
import { FormFunctionComponent } from './formFunction/formFunction.component';
import { RoutingComponent } from './Routing/Routing.component';
import { InputbindingParentComponent } from './inputbinding-parent/inputbinding-parent.component';
import { InputbindingChildComponent } from './inputbinding-child/inputbinding-child.component';
import { SetterParentComponent } from './setter-parent/setter-parent.component';
import { SetterChildComponent } from './setter-child/setter-child.component';
import { VersionParentComponent } from './versionParent/versionParent.component';
import { VersionChildComponent } from './versionChild/versionChild.component';
import { VoterParentComponent } from './voterParent/voterParent.component';
import { VoterChildrenComponent } from './voterChildren/voterChildren.component';
import { LocalVariableParentComponent } from './localVariableParent/localVariableParent.component';
import { LocalVariableChildrenComponent } from './localVariableChildren/localVariableChildren.component';

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
      FormsComponent,
      TemplateDrivenFormComponent,
      JsonserverComponent,
      SvgComponent,
      EncapsulationComponent,
      InternationalizationComponent,
      LifecycleComponent,
      DependencyComponent,
      TemplateDrivenFormComponent,
      TemplateURLComponent,
      OnChangesComponent,
      ProjectionComponent,
      FormFunctionComponent,
      RoutingComponent,
      InputbindingParentComponent,
      InputbindingChildComponent,
      SetterParentComponent,
      SetterChildComponent,
      VersionParentComponent,
      VersionChildComponent,
      VoterParentComponent,
      VoterChildrenComponent,
      LocalVariableParentComponent,
      LocalVariableChildrenComponent
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
