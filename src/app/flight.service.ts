import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  public user: any;

  constructor(private http: HttpClient) { }

  createUser(body) {
    return this.http.post('http://localhost:8092/register', body);
  }

  userLogin(username, password) {
    return this.http.get('http://localhost:8092/login/' + username + '/' + password);
  }
  addFlight(body) {
    return this.http.post('http://localhost:8094/addFlight', body)
  }

  getAllFlights() {
    return this.http.get('http://localhost:8094/getFlights');
  }

  searchFlight(flightNo) {
    return this.http.get('http://localhost:8094/getFlight/' + flightNo);
  }
  addSchedule(body) {
    return this.http.post('http://localhost:8093/addFlightSchedule',body)
  }
  getAllSchedules(){
    return this.http.get('http://localhost:8093/getFlightSchedules');
  }
  searchSchedule(scheduleId){
    return this.http.get('http://localhost:8093/getFlightSchedule/'+ scheduleId)
  }

  deleteFlight(flightNo) {
    return this.http.delete('http://localhost:8094/deleteFlight/' + flightNo);
  }

  deleteSchedule(scheduleID) {
    return this.http.delete('http://localhost:8093/deleteFlightSchedule/' + scheduleID);
  }
  getAirport(airportId){
    return this.http.get('http://localhost:8091/getAirport/' + airportId);
  }

  addBooking(body) {
    return this.http.post('http://localhost:8095/addBookingDetails', body)
  }

  getBookingDetails(bookingId) {
    return this.http.get('http://localhost:8095/getBookingDetails/' + bookingId);
  }

  getAllBookings() {
    return this.http.get('http://localhost:8095/getAllBookingDetails');
  }

  deleteBooking(bookingId) {
    return this.http.delete('http://localhost:8095/deleteBookingDetails/' + bookingId);
  }

  logOut() {
    sessionStorage.removeItem('uname')
  }
}
