import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    NgRouterModule.forRoot(routes)
  ],
  exports: [
    NgRouterModule
  ],
  declarations: []
})
export class RouterModule { }
