import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { AttrClassComponent } from './attr-class/attr-class.component';
import { EventComponent } from './event/event.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesBuiltInAttributesComponent } from './directives-built-in-attributes/directives-built-in-attributes.component';
import { DirectivesBuiltInStructuralComponent } from './directives-built-in-structural/directives-built-in-structural.component';
import { ItemComponent } from './structural-in-componental/item/item.component';
import { StructuralInComponentalComponent } from './structural-in-componental/structural-in-componental.component';


@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    AttrClassComponent,
    EventComponent,
    TwoWayBindingComponent,
    DirectivesBuiltInAttributesComponent,
    DirectivesBuiltInStructuralComponent,
    ItemComponent,
    StructuralInComponentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
