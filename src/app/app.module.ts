import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './flight-booking/booking.component';
import { FlightAdminComponent } from './flight-admin/flight-admin.component';
import { AddflightComponent } from './addflight/addflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { ScheduleadminComponent } from './scheduleadmin/scheduleadmin.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { SearchscheduleComponent } from './searchschedule/searchschedule.component';
import { FlightService } from './flight.service';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { UpdatescheduleComponent } from './updateschedule/updateschedule.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { PassengerComponent } from './passenger/passenger.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BackgroundComponent } from './background/background.component';
import { LogoutComponent } from './scheduleadmin/logout/logout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'booking', component: BookingComponent},
  {path: 'flightadmin', component: FlightAdminComponent},
  {path: 'scheduleadmin',component: ScheduleadminComponent,
  children:
  [
    {path:'logOut', component:LogoutComponent},
  ]},
  {path: 'logOut', component:LogoutComponent},
  {path: 'passenger', component: PassengerComponent},
  {path: 'bookingdetails', component: BookingdetailsComponent},
  {path: 'viewbookings', component:ViewbookingsComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    BookingComponent,
    FlightAdminComponent,
    AddflightComponent,
    SearchflightComponent,
    ScheduleadminComponent,
    AddscheduleComponent,
    SearchscheduleComponent,
    UpdateflightComponent,
    UpdatescheduleComponent,
    UpdateScheduleComponent,
    PassengerComponent,
    BookingdetailsComponent,
    ViewbookingsComponent,
    BackgroundComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    FlightService,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
