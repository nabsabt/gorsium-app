import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModellService } from './modell.service';

@Component({
  selector: 'app-modell',
  templateUrl: './modell.component.html',
  styleUrls: ['./modell.component.css']
})
export class ModellComponent {

  constructor(modellService: ModellService) { }
  @Output() nameAdded = new EventEmitter();

  names = [
      {id: "1", firstName: "Jacob", lastName: "Brown"},
      {id: "2", firstName: "Billy", lastName: "Joel"},
      {id: "3", firstName: "stephen", lastName: "king"},
      {id: "4", firstName: "Jerry", lastName: "king"}
  ];

  inputFirstname ="";
  inputLastname = "";


  onAddName(){
    if(this.inputFirstname!="" && this.inputLastname!=""){
      var _id = this.names.length + 1;
      var _idString = _id.toString();
      this.names[this.names.length] = {id: _idString, firstName: this.inputFirstname, lastName: this.inputLastname};
      //console.log(this.names[_id-1]);
      //this.nameAdded.emit(this.names[_id-1]);
    }else{
      alert("Mindkét mezőt töltsd ki!");
    }
  }

  onClearAll(){
    this.names.length = 0;
  }

}
