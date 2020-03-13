import { Component, OnInit } from '@angular/core';
import { SportGameModel } from 'src/app/models/SportGameModel';

@Component({
  selector: 'app-sport-game',
  templateUrl: './sport-game.component.html',
  styleUrls: ['./sport-game.component.css']
})
export class SportGameComponent implements OnInit {

  sportGame: SportGameModel = new SportGameModel({
    guid: 'guid',
    gid: 'gid',
    groupName: 'groupName',
    groupDesc: 'groupDesc',
    groupType: 'groupType',
    groupJoinType: 'groupJoinType',
    sportType: 'sportType',
  })

  constructor() { }

  ngOnInit(): void {}

}
