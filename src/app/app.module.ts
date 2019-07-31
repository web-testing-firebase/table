import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { ContactService } from './contact/contact.service';

import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ContactModalComponent } from './contact/contact-modal/contact-modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndividualComponent } from './individual/individual.component';
import { BusinessComponent } from './business/business.component';
import { TrustComponent } from './trust/trust.component';
import { UnionComponent } from './union/union.component';
import { AssociationComponent } from './association/association.component';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { TagModalComponent } from './contact/tag-modal/tag-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    ContactModalComponent,
    FormModalComponent,
    IndividualComponent,
    BusinessComponent,
    TrustComponent,
    UnionComponent,
    AssociationComponent,
    ContacteditComponent,
    TagModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
  entryComponents: [
    FormModalComponent,
    ContactModalComponent,
    TagModalComponent
  ]

})
export class AppModule { }
