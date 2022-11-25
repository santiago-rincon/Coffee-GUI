import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-humedad',
  templateUrl: './humedad.component.html',
  styleUrls: ['./humedad.component.css']
})
export class HumedadComponent implements OnInit {

  constructor() {
    this.peticion()
  }
  peticion(){
    fetch('http://localhost:3050/get_variable/humedad')
    .then(res=>res.json())
    .then(data=>{
      const tabla = document.getElementById('keywords')
      const fila_1 = document.createElement('tr')
      const colum_id = document.createElement('td')
      const colum_med = document.createElement('td')
      const colum_fecha = document.createElement('td')
      const colum_hora = document.createElement('td')
      colum_id.textContent="Id"
      colum_med.textContent="Medición"
      colum_fecha.textContent="Fecha"
      colum_hora.textContent="Hora"
      fila_1.append(colum_id,colum_med,colum_fecha,colum_hora)
      tabla?.append(fila_1)
      for (var i=0;i<data.length;i++){
        const fila_data = document.createElement('tr')
        const data_id = document.createElement('td')
        const data_med = document.createElement('td')
        const data_fecha = document.createElement('td')
        const data_hora = document.createElement('td')
        data_id.textContent=data[i].id
        data_med.textContent=`${data[i].medicion} %`
        data_fecha.textContent=data[i].fecha
        data_hora.textContent=data[i].hora
        fila_data.append(data_id,data_med,data_fecha,data_hora)
        tabla?.append(fila_data)
      }
    })
  }
  ngOnInit(): void {
  }

}
