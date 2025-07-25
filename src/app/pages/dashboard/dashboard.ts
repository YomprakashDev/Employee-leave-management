import { Component } from '@angular/core';
import { DashboardSummary } from "../../components/dashboard-summary/dashboard-summary";
import { LeaveApplications } from "../../components/leave-applications/leave-applications";
import { QuickActions } from "../../components/quick-actions/quick-actions";


@Component({
  selector: 'app-dashboard',
  imports: [DashboardSummary, LeaveApplications, QuickActions],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
