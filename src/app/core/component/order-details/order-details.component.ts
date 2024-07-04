import { Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Order {
  orderNumber: string;
  address: string;
  county: string;
  loanNumber: number;
  client: string;
  branch: string;
  wholesaleLender: string;
  orderBy: string;
  status: string;
  borrower: string;
  vendor: string;
  reviewer: string;
  assignStaffMember: string;
  orderfee: string;
  netVendorFee: string;
  reviewerFee: string;
  product: string;
  paymentStatus: string;
  clientDue: string;
  vendorDue: string;
  daysOpen: string;
  created: string;
  vendorAssigned: string;
  vendorAccepted: string;
  inspectionScheduled: string;
  submitted: string;
  reviewed: string;
  completed: string;
  updated: string;
}

export interface Task {
  completed: boolean;
  subtasks?: Task[];
}
const ORDER_DATA: Order[] = [
  {
    orderNumber: 'R21-00857',
    address: '6456 Tooley St, San Diego, CA 92114',
    county: 'Harris County',
    loanNumber: 1234,
    client: 'HR 13.8 Client',
    branch: 'branchname',
    wholesaleLender: 'HR 13.8 Wholesale Lender',
    orderBy: 'AB Tech 123',
    status: 'Vendor Accepted',
    borrower: 'HR 13.8 Client',
    vendor: 'Mark Zuck',
    reviewer: 'john Doe',
    assignStaffMember: 'Alice Nichols',
    orderfee: '$100',
    netVendorFee: '$200',
    reviewerFee: '$80',
    product: '1004 Conventional',
    paymentStatus: 'Paid',
    clientDue: '10/14/21',
    vendorDue: '10/14/21',
    daysOpen: '25 Days',
    created: '10/14/21',
    vendorAssigned: '10/14/21',
    vendorAccepted: '10/14/21',
    inspectionScheduled: '10/14/21',
    submitted: '10/14/21',
    reviewed: '10/14/21',
    completed: '10/14/21',
    updated: '10/14/21',
  },
  {
    orderNumber: 'R21-00857',
    address: '6456 Tooley St, San Diego, CA 92114',
    county: 'Harris County',
    loanNumber: 1234,
    client: 'HR 13.8 Client',
    branch: 'branchname',
    wholesaleLender: 'HR 13.8 Wholesale Lender',
    orderBy: 'AB Tech 123',
    status: 'Vendor Accepted',
    borrower: 'HR 13.8 Client',
    vendor: 'Mark Zuck',
    reviewer: 'john Doe',
    assignStaffMember: 'Alice Nichols',
    orderfee: '$100',
    netVendorFee: '$200',
    reviewerFee: '$80',
    product: '1004 Conventional',
    paymentStatus: 'Paid',
    clientDue: '10/14/21',
    vendorDue: '10/14/21',
    daysOpen: '25 Days',
    created: '10/14/21',
    vendorAssigned: '10/14/21',
    vendorAccepted: '10/14/21',
    inspectionScheduled: '10/14/21',
    submitted: '10/14/21',
    reviewed: '10/14/21',
    completed: '10/14/21',
    updated: '10/14/21',
  },
  {
    orderNumber: 'R21-00857',
    address: '6456 Tooley St, San Diego, CA 92114',
    county: 'Harris County',
    loanNumber: 1234,
    client: 'HR 13.8 Client',
    branch: 'branchname',
    wholesaleLender: 'HR 13.8 Wholesale Lender',
    orderBy: 'AB Tech 123',
    status: 'Vendor Accepted',
    borrower: 'HR 13.8 Client',
    vendor: 'Mark Zuck',
    reviewer: 'john Doe',
    assignStaffMember: 'Alice Nichols',
    orderfee: '$100',
    netVendorFee: '$200',
    reviewerFee: '$80',
    product: '1004 Conventional',
    paymentStatus: 'Paid',
    clientDue: '10/14/21',
    vendorDue: '10/14/21',
    daysOpen: '25 Days',
    created: '10/14/21',
    vendorAssigned: '10/14/21',
    vendorAccepted: '10/14/21',
    inspectionScheduled: '10/14/21',
    submitted: '10/14/21',
    reviewed: '10/14/21',
    completed: '10/14/21',
    updated: '10/14/21',
  },
  {
    orderNumber: 'R21-00857',
    address: '6456 Tooley St, San Diego, CA 92114',
    county: 'Harris County',
    loanNumber: 1234,
    client: 'HR 13.8 Client',
    branch: 'branchname',
    wholesaleLender: 'HR 13.8 Wholesale Lender',
    orderBy: 'AB Tech 123',
    status: 'Vendor Accepted',
    borrower: 'HR 13.8 Client',
    vendor: 'Mark Zuck',
    reviewer: 'john Doe',
    assignStaffMember: 'Alice Nichols',
    orderfee: '$100',
    netVendorFee: '$200',
    reviewerFee: '$80',
    product: '1004 Conventional',
    paymentStatus: 'Paid',
    clientDue: '10/14/21',
    vendorDue: '10/14/21',
    daysOpen: '25 Days',
    created: '10/14/21',
    vendorAssigned: '10/14/21',
    vendorAccepted: '10/14/21',
    inspectionScheduled: '10/14/21',
    submitted: '10/14/21',
    reviewed: '10/14/21',
    completed: '10/14/21',
    updated: '10/14/21',
  },
  {
    orderNumber: 'R21-00857',
    address: '6456 Tooley St, San Diego, CA 92114',
    county: 'Harris County',
    loanNumber: 1234,
    client: 'HR 13.8 Client',
    branch: 'branchname',
    wholesaleLender: 'HR 13.8 Wholesale Lender',
    orderBy: 'AB Tech 123',
    status: 'Vendor Accepted',
    borrower: 'HR 13.8 Client',
    vendor: 'Mark Zuck',
    reviewer: 'john Doe',
    
    assignStaffMember: 'Alice Nichols',
    orderfee: '$100',
    netVendorFee: '$200',
    reviewerFee: '$80',
    product: '1004 Conventional',
    paymentStatus: 'Paid',
    clientDue: '10/14/21',
    vendorDue: '10/14/21',
    daysOpen: '25 Days',
    created: '10/14/21',
    vendorAssigned: '10/14/21',
    vendorAccepted: '10/14/21',
    inspectionScheduled: '10/14/21',
    submitted: '10/14/21',
    reviewed: '10/14/21',
    completed: '10/14/21',
    updated: '10/14/21',
  },
  {
    orderNumber: 'R21-00857',
    address: '6456 Tooley St, San Diego, CA 92114',
    county: 'Harris County',
    loanNumber: 1234,
    client: 'HR 13.8 Client',
    branch: 'branchname',
    wholesaleLender: 'HR 13.8 Wholesale Lender',
    orderBy: 'AB Tech 123',
    status: 'Vendor Accepted',
    borrower: 'HR 13.8 Client',
    vendor: 'Mark Zuck',
    reviewer: 'john Doe',
    
    assignStaffMember: 'Alice Nichols',
    orderfee: '$100',
    netVendorFee: '$200',
    reviewerFee: '$80',
    product: '1004 Conventional',
    paymentStatus: 'Paid',
    clientDue: '10/14/21',
    vendorDue: '10/14/21',
    daysOpen: '25 Days',
    created: '10/14/21',
    vendorAssigned: '10/14/21',
    vendorAccepted: '10/14/21',
    inspectionScheduled: '10/14/21',
    submitted: '10/14/21',
    reviewed: '10/14/21',
    completed: '10/14/21',
    updated: '10/14/21',
  },
  {
    orderNumber: 'R21-00857',
    address: '6456 Tooley St, San Diego, CA 92114',
    county: 'Harris County',
    loanNumber: 1234,
    client: 'HR 13.8 Client',
    branch: 'branchname',
    wholesaleLender: 'HR 13.8 Wholesale Lender',
    orderBy: 'AB Tech 123',
    status: 'Vendor Accepted',
    borrower: 'HR 13.8 Client',
    vendor: 'Mark Zuck',
    reviewer: 'john Doe',
    
    assignStaffMember: 'Alice Nichols',
    orderfee: '$100',
    netVendorFee: '$200',
    reviewerFee: '$80',
    product: '1004 Conventional',
    paymentStatus: 'Paid',
    clientDue: '10/14/21',
    vendorDue: '10/14/21',
    daysOpen: '25 Days',
    created: '10/14/21',
    vendorAssigned: '10/14/21',
    vendorAccepted: '10/14/21',
    inspectionScheduled: '10/14/21',
    submitted: '10/14/21',
    reviewed: '10/14/21',
    completed: '10/14/21',
    updated: '10/14/21',
  },
  {
    orderNumber: 'R21-00857',
    address: '6456 Tooley St, San Diego, CA 92114',
    county: 'Harris County',
    loanNumber: 1234,
    client: 'HR 13.8 Client',
    branch: 'branchname',
    wholesaleLender: 'HR 13.8 Wholesale Lender',
    orderBy: 'AB Tech 123',
    status: 'Vendor Accepted',
    borrower: 'HR 13.8 Client',
    vendor: 'Mark Zuck',
    reviewer: 'john Doe',
    
    assignStaffMember: 'Alice Nichols',
    orderfee: '$100',
    netVendorFee: '$200',
    reviewerFee: '$80',
    product: '1004 Conventional',
    paymentStatus: 'Paid',
    clientDue: '10/14/21',
    vendorDue: '10/14/21',
    daysOpen: '25 Days',
    created: '10/14/21',
    vendorAssigned: '10/14/21',
    vendorAccepted: '10/14/21',
    inspectionScheduled: '10/14/21',
    submitted: '10/14/21',
    reviewed: '10/14/21',
    completed: '10/14/21',
    updated: '10/14/21',
  },
  {
    orderNumber: 'R21-00857',
    address: '6456 Tooley St, San Diego, CA 92114',
    county: 'Harris County',
    loanNumber: 1234,
    client: 'HR 13.8 Client',
    branch: 'branchname',
    wholesaleLender: 'HR 13.8 Wholesale Lender',
    orderBy: 'AB Tech 123',
    status: 'Vendor Accepted',
    borrower: 'HR 13.8 Client',
    vendor: 'Mark Zuck',
    reviewer: 'john Doe',
    
    assignStaffMember: 'Alice Nichols',
    orderfee: '$100',
    netVendorFee: '$200',
    reviewerFee: '$80',
    product: '1004 Conventional',
    paymentStatus: 'Paid',
    clientDue: '10/14/21',
    vendorDue: '10/14/21',
    daysOpen: '25 Days',
    created: '10/14/21',
    vendorAssigned: '10/14/21',
    vendorAccepted: '10/14/21',
    inspectionScheduled: '10/14/21',
    submitted: '10/14/21',
    reviewed: '10/14/21',
    completed: '10/14/21',
    updated: '10/14/21',
  },
  
];

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})


export class OrderDetailsComponent {

  selectedDate: Date;

  constructor() {
    this.selectedDate = new Date(); // Initialize with the current date or any default date
  }
   onDateSelected(date: Date) {
    this.selectedDate = date;
    console.log('Selected date:', this.selectedDate);
  }
  
  displayedColumns: string[] = ['selectAll','orderInformation', 'clientDetails','otherInformation','fee','dueDates','otherDates'];
  dataSource = ORDER_DATA;

  // showFiller = false;

  isCollapsed = false;

  toggleDrawer() {
    this.isCollapsed = !this.isCollapsed;
  }

  panelOpenState = false;

  task: Task = {
    completed: false,
    subtasks: [
      {completed: false},
    ],
  };


  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

  length = 100;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;
  

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

}
