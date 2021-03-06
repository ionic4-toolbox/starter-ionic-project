import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { IonicModule } from '@ionic/angular';
import {AttendanceService} from './attendance.service';
import {AttendanceGenericService} from './attendance-generic-service';
import {MockAttendanceService} from './mock-attendance.service';
import { AttendanceRegistrationComponent } from './attendance-registration/attendance-registration.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        AttendanceListComponent,
        AttendanceComponent,
        AttendanceRegistrationComponent
    ],
    providers: [
        { provide: AttendanceGenericService, useClass: MockAttendanceService },
    ],
    declarations: [
        AttendanceListComponent,
        AttendanceComponent,
        AttendanceRegistrationComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AttendanceModule { }
