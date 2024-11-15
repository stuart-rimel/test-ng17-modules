import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModusAngularComponentsModule } from '@trimble-cms/modus-wc-angular';
import { TestFormComponent } from './test-form/test-form.component';
import { TestFormInputComponent } from './test-form-input/test-form-input.component';
import { TestFormTextareaComponent } from './test-form-textarea/test-form-textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    TestFormInputComponent,
    TestFormTextareaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ModusAngularComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
