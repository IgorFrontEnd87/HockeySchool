import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public schedule: any;
  private scheduleSubscribe: any;  

  constructor(
    private databaseService: DatabaseService,
    private route: ActivatedRoute,) {}

  ngOnInit() {
    this.getSchedule();
  }
  ngOnDestroy() {
     this.scheduleSubscribe.unsubscribe();
  }
  getSchedule() {
    this.scheduleSubscribe = this.databaseService.getSchedule().subscribe((schedule: any) => {
      this.schedule = schedule;
    })
  }
}
