import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePagelessPageComponent } from './frame-pageless-page/frame-pageless-page.component';
import { FramePageComponent } from './frame-page/frame-page.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: FramePagelessPageComponent,
    children: [
      {path: '', component: LoginComponent},
    ]
  },
  {
    path: 'home',
    component: FramePageComponent,
    children: [
      {path: '', component: HomeComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
