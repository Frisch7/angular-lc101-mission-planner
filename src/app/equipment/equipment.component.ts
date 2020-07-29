import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  
  equipmentBeingEdited: string = null;
  equipment: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks'
  ];
  constructor() { }

  ngOnInit() {
  }
  addEquipment(itemToAdd : string){
    if(!this.equipment.includes(itemToAdd)){
      this.equipment.push(itemToAdd);
    }
  }
  edit(item: string) {
    this.equipmentBeingEdited = item;
 }
 save(newItemName: string, item : string) {
  
  let index = this.equipment.indexOf(item);
  this.equipment.splice(index,1,newItemName);
  this.equipmentBeingEdited = null;
  }
  remove(item: string){
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index,1);
  }
}
