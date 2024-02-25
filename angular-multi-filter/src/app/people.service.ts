import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  apiUrl: string = 'https://reqres.in/api/users?page=1';

  constructor(private httpClient: HttpClient) { }

  getAllPeopleRequest() : any {
    // return this.httpClient.get(this.apiUrl);
    return [
      {
          "requester": "The Great Gatsby",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'Annual Leave',
          isApproved: true
        },
        {
          "requester": "To Kill a Mockingbird",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'WFH',
          isApproved: true
        },
        {
          "requester": "Pride and Prejudice",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'Annual Leave',
          isApproved: false
        },
        {
          "requester": "1984",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'Flexible Time',
          isApproved: true
        },
        {
          "requester": "The Catcher in the Rye",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'Annual Leave',
          isApproved: true
        },
        {
          "requester": "The Hobbit",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'Unpaid Leave',
          isApproved: true
        },
        {
          "requester": "The Da Vinci Code",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'Annual Leave',
          isApproved: false
        },
        {
          "requester": "The Girl with the Dragon Tattoo",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'WFH',
          isApproved: false
        },
        {
          "requester": "The Lord of the Rings",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'Annual Leave',
          isApproved: true
        },
        {
          "requester": "The Alchemist",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'Annual Leave',
          isApproved: true
        },
        {
          "requester": "Harry Potter and the Philosopher's Stone",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'Unpaid Leave',
          isApproved: true
        },
        {
          "requester": "The Hunger Games",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'Annual Leave',
          isApproved: true
        },
        {
          "requester": "The Adventures of Sherlock Holmes",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'WFH',
          isApproved: false
        },
        {
          "requester": "The Girl on the Train",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          leaveType: 'Annual Leave',
          isApproved: true
        },     
  ];
  }
}
