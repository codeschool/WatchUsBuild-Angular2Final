import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private raceId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => this.raceId = params['id']);

    // make api call looking for a race with the same ID as `this.raceId`
  }

}
