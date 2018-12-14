import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../Users/users.component';
import { UserdetailsComponent } from '../Users/userdetails.component';
const userRoutres: Routes=[{
  path: 'users', component:UsersComponent,
  children:[{
    path:':id',component:UserdetailsComponent
  }]
}]
@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutres)
  ],
  
})
export class UsersModule { }
