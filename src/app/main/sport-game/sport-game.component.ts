import { Component, OnInit } from '@angular/core';
import { SportGameModel } from 'src/app/models/SportGameModel';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sport-game',
  templateUrl: './sport-game.component.html',
  styleUrls: ['./sport-game.component.css']
})
export class SportGameComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  private subscriber: any;

  sportGame: SportGameModel = new SportGameModel({
    guid: 'guid',
    gid: 'gid',
    groupName: 'groupName',
    groupDesc: 'groupDesc',
    groupType: 'groupType',
    groupJoinType: 'groupJoinType',
    sportType: 'sportType'
  });

  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe(params => {
      this.http
        .get('/api/v1/sport_game/' + params.id)
        .subscribe((data: any) => {
          this.sportGame = new SportGameModel(data.sportGame);
          //console.log('DATA');
          //console.log(data);
        });

      //console.log('GET RESPONSE');
      //console.log(this.sportGame);
      //console.log('PARAMS');
      //console.log(params.id);
    });
  }
}
