import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModusAngularComponentsModule } from '@trimble-cms/modus-wc-angular';
import { TestFormComponent } from './test-form/test-form.component';
import { TestFormInputComponent } from './test-form-input/test-form-input.component';
import { TestFormTextareaComponent } from './test-form-textarea/test-form-textarea.component';
import { TestFormInputDirective } from './test-form-input/test-form-input.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    TestFormInputComponent,
    TestFormTextareaComponent,
    TestFormInputDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModusAngularComponentsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
