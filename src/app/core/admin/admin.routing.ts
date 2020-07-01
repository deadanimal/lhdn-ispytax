import { Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ReportComponent } from './report/report.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { DocumentsComponent } from './documents/documents.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'analytics',
                component: AnalyticsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                component: ManagementComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'vehicles',
                component: VehiclesComponent
            },
            {
                path: 'buildings',
                component: BuildingsComponent,
            },
            {
                path: 'documents',
                component: DocumentsComponent
            }
        ]
    }
]