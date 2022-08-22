import { Injectable } from "@angular/core";
import { ModellComponent } from "./modell.component"

@Injectable({providedIn: 'root'})
export class ModellService{
  private names = [{}];

  getNames(){
    return [...this.names];
  }

  addNames(id: number, firstName: string, lastName: string){
    const name = {id: id, firstName: firstName, lastName: lastName};
    this.names.push(name);
    //console.log(this.names);
  }

}
