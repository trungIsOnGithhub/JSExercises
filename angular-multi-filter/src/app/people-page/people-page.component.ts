import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit {
  // unfilteredData : any = [];
  filteredData : any = [];
  queriedData : any = [];

  mainFilterArray : BehaviorSubject<any> = new BehaviorSubject([]);
  secondaryFilter : any = [];

  summaryDataArray : any = [];

  leaveTypeArray : any = ['Annual Leave', 'WFH', 'Unpaid Leave', 'Flexible Time'];

  predefinedLimitForLeaveType : any = {
    'Annual Leave': 12,
    'WFH': 5,
    'Unpaid Leave': 7,
    'Flexible Time': 7.5
  }

  // filter state properties
  currentFilterStartDate : string = "";
  currentFilterEndDate : string = "";
  currentFilterLeaveType : string = "All";
  currentFilterLeaveStatus : string = "All";
  // filter state properties

  constructor() {}

  ngOnInit(): void {
    this.queriedData = [
      {
          requester: "The Great Gatsby",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          days: 2.5,leaveType: 'WFH',
          isApproved: true
        },
        {
          requester: "The Great Gatsby",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          days: 1,leaveType: 'WFH',
          isApproved: true
        },
        {
          requester: "Pride and Prejudice",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          days: 0.5,leaveType: 'Annual Leave',
          isApproved: false
        },
        {
          requester: "1984",
          startDate: '01/01/2020',
          endDate: '02/01/1999',
          days: 1,leaveType: 'Flexible Time',
          isApproved: true
        },
        {
          requester: "1984",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          days: 2.5,leaveType: 'Annual Leave',
          isApproved: true
        },
        {
          requester: "1984",
          startDate: '01/01/2022',
          endDate: '02/01/2023',
          days: 2,leaveType: 'Unpaid Leave',
          isApproved: true
        },
        {
          requester: "The Da Vinci Code",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          days: 2.5,leaveType: 'Annual Leave',
          isApproved: false
        },
        {
          requester: "The Da Vinci Code",
          startDate: '01/01/2023',
          endDate: '02/01/2024',
          days: 2,leaveType: 'WFH',
          isApproved: false
        },
        {
          requester: "The Lord of the Rings",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          days: 1,leaveType: 'Annual Leave',
          isApproved: true
        },
        {
          requester: "The Alchemist",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          days: 0.5,leaveType: 'Annual Leave',
          isApproved: true
        },
        {
          requester: "The Alchemist",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          days: 2.5,leaveType: 'Unpaid Leave',
          isApproved: true
        },
        {
          requester: "The Hunger Games",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          days: 2.5,leaveType: 'Annual Leave',
          isApproved: true
        },
        {
          requester: "The Hunger Games",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          days: 2.5,leaveType: 'WFH',
          isApproved: false
        },
        {
          requester: "The Girl on the Train",
          startDate: '01/01/1999',
          endDate: '02/01/1999',
          days: 10,leaveType: 'WFH',
          isApproved: true
        },     
  ];
    this.handleChangesOnMainFilter();
    this.createSummaryArray();
  }

  handleChangesOnMainFilter() : void {
    this.mainFilterArray.subscribe((response : any) => {
      if (this.secondaryFilter.length < 1) {
        this.filteredData = this.queriedData;
      }
      else {
        this.applyFilterByConditions();
      }
    });
  }

  applyFilterByConditions() : void {
    let tempArray : any = this.queriedData;

    this.secondaryFilter.forEach((filterItem : any) => {
      if (filterItem.filterType === "startdate") {
        let startDateFormatted = new Date(filterItem.startDateValue);

        tempArray = tempArray.filter((item : any) => {
          let itemStartDateFormatted = new Date(item.startDate);
          return itemStartDateFormatted >= startDateFormatted
        });
      }
      else if (filterItem.filterType === "enddate") {
        let endDateFormatted = new Date(filterItem.endDateValue);

        tempArray = tempArray.filter((item : any) => {
          let itemEndDateFormatted = new Date(item.endDate);
          return itemEndDateFormatted <= endDateFormatted
        });
      }
      else if (filterItem.filterType === "leavetype") {
        tempArray = tempArray.filter((item : any) =>
          item.leaveType === this.currentFilterLeaveType
        );
      }
      else if (filterItem.filterType === "leavestatus") {
        tempArray = tempArray.filter((item : any) =>
          (item.isApproved &&  this.currentFilterLeaveStatus === "Approved")
          || (!item.isApproved && this.currentFilterLeaveStatus === "Not Approved")
        );
      }

      this.filteredData = tempArray;
    });
  }

  applyStartDateFilter() : void {
    if (this.currentFilterStartDate) {
      this.secondaryFilter.push({
        filterType: "startdate",
        startDateValue: this.currentFilterStartDate
      });
    }
    else {
      this.secondaryFilter = this.secondaryFilter.filter(
        (item : any) => item.filterType !== "startdate"
      );
    }

    this.mainFilterArray.next(this.secondaryFilter);
    console.log('Start Date filter Applied');
  }

  applyEndDateFilter() : void {
    if (this.currentFilterEndDate) {
      this.secondaryFilter.push({
        filterType: "enddate",
        endDateValue: this.currentFilterEndDate
      });
    }
    else {
      this.secondaryFilter = this.secondaryFilter.filter(
        (item : any) => item.filterType !== "enddate"
      );
    }

    this.mainFilterArray.next(this.secondaryFilter);
    console.log('End Data filter Applied');
  }

  applyLeaveTypeFilter() : void {
    if (this.currentFilterLeaveType !== "All") {
      this.secondaryFilter.push({
        filterType: "leavetype"
      });
    }
    else {
      this.secondaryFilter = this.secondaryFilter.filter(
        (item : any) => item.filterType !== "leavetype"
      );
    }

    this.mainFilterArray.next(this.secondaryFilter);
    console.log('Leave Type filter Applied');
  }

  applyLeaveStatusFilter() : void {
    if (this.currentFilterLeaveStatus !== "All") {
      this.secondaryFilter.push({
        filterType: "leavestatus"
      });
    }
    else {
      this.secondaryFilter = this.secondaryFilter.filter(
        (item : any) => item.filterType !== "leavestatus"
      );
    }

    this.mainFilterArray.next(this.secondaryFilter);
    console.log('Leave Status filter Applied'); 
  }


  createSummaryArray() : void {
    let mapByRequesterNameAndLeaveType : any = {};
    // example:
    // {
    //  requester_name : { 'Annual Leave': 1, 'WFH' : 2, .... } 
    // }

    for (let request of this.queriedData) {
      if (!request.isApproved) {
        continue;
      }

      if (!mapByRequesterNameAndLeaveType[request.requester]) {
        mapByRequesterNameAndLeaveType[request.requester] = {};
      }

      if (Object.keys(mapByRequesterNameAndLeaveType[request.requester]).length !== this.leaveTypeArray.length) {
        for (let leaveType of this.leaveTypeArray) {
          mapByRequesterNameAndLeaveType[request.requester][leaveType] = 0;
        }
      }

      mapByRequesterNameAndLeaveType[request.requester][request.leaveType] += request.days;
    }

    for (let requester of Object.keys(mapByRequesterNameAndLeaveType)) {
      this.summaryDataArray.push({
        requester: requester,
        ...mapByRequesterNameAndLeaveType[requester]
      });
    }
    console.log(this.summaryDataArray);
  }
}
