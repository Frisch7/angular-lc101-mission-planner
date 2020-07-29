import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentBeingEdited : string = null;
  experiments : string[] =[
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density'
  ];
  constructor() { }

  ngOnInit() {
  }
  addExperiment(experiment: string){
    if(!this.experiments.includes(experiment)){
    this.experiments.push(experiment);
    }
  }
  save(newExperiment : string, experiment : string){
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1, newExperiment);
  }
  remove(experiment: string){
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
    this.experimentBeingEdited = null;
  }
  edit(experiment: string){
    this.experimentBeingEdited = experiment;
  }
}
