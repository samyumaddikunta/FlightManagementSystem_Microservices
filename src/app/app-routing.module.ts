import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './flight-booking/booking.component';
import { FlightAdminComponent } from './flight-admin/flight-admin.component';
import { ScheduleadminComponent } from './scheduleadmin/scheduleadmin.component';
import { PassengerComponent } from './passenger/passenger.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { LogoutComponent } from './scheduleadmin/logout/logout.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'booking', component: BookingComponent},
  {path: 'flightadmin', component: FlightAdminComponent},
  {path: 'scheduleadmin',component: ScheduleadminComponent},
  {path: 'logOut', component:LogoutComponent},
  {path: 'passenger', component: PassengerComponent},
  {path: 'bookingdetails', component: BookingdetailsComponent},
  {path: 'viewbookings', component:ViewbookingsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
