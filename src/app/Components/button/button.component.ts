import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input () text_front: string =''
  @Input () text_back: string =''
  @Input () text_front_r: string =''
  @Input () text_back_r: string =''
  @Input () ruta:string=''
  constructor() { }

  ngOnInit(): void {
  }

  cleanRegister(){
    fetch(`http://localhost:3050/delete_variable/${this.ruta}`, {method: "DELETE"})
    alert(`Se eliminaron todos los registros de ${this.ruta}`)
    location.reload()
  }

  refresh(){
    location.reload()
  }

}
