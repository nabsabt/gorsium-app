import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }
  terkepVisible: boolean = false;
  galleryVisible: boolean = false;
  modellVisible: boolean = false;

  toggleTerkep(){
    this.galleryVisible = false;
    this.modellVisible = false;
    this.terkepVisible = true;
    console.log("Térképnézetre váltás");
  }

  toggleGallery(){
    this.terkepVisible = false;
    this.modellVisible = false;
    this.galleryVisible = true;
    console.log("Galériára váltás");
  }

  toggleModell(){
    this.terkepVisible = false;
    this.galleryVisible = false;
    this.modellVisible = true;
    console.log("Modellre váltás");
  }

  ngOnInit(): void {

  }

}
