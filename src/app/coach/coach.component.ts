import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {
  public person: any;
  private personSubscribe: any;  

  constructor(
    private databaseService: DatabaseService,
    private route: ActivatedRoute,) {}

  ngOnInit() {
    this.getPerson();
  }
  

  ngOnDestroy() {
     this.personSubscribe.unsubscribe();
  }

  getPerson() {
    this.personSubscribe = this.databaseService.getPerson().subscribe((person: any) => {
      this.person = person;
    })
}
}
