import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { IndividualComponent } from './individual/individual.component';
import { BusinessComponent } from './business/business.component';
import { TrustComponent } from './trust/trust.component';
import { UnionComponent } from './union/union.component';
import { AssociationComponent } from './association/association.component';

const routes: Routes = [
  {path: '', redirectTo: '/Contact', pathMatch: 'full' },
  {path: 'Contact', component: ContactComponent},
  {path: 'Individual', component: IndividualComponent},
  {path: 'Business', component: BusinessComponent},
  {path: 'Trust', component: TrustComponent},
  {path: 'Union', component: UnionComponent},
  {path: 'Association', component: AssociationComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
