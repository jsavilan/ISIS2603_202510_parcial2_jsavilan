import { Component, OnInit, Output } from '@angular/core';
import { CandidatosService } from '../candidatos.service';
import { Candidato } from '../candidato';

@Component({
  selector: 'app-candidatos-list',
  standalone: false,
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css'
})
export class CandidatosListComponent implements OnInit {
  candidatos: Candidato[] = [];

  @Output() candidatoSeleccionado = null
  seleccionado = false;

  seleccionarCandidato(candidato: any) {
    this.candidatoSeleccionado = candidato;
    console.log(this.candidatoSeleccionado);
    window.location.href = `../candidatos/${candidato.id}`;
    this.seleccionado = true;
  }

  constructor(private service : CandidatosService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: data => {
        this.candidatos = data as Candidato[];
      },
      error: err => {
        console.error('Error al obtener la lista de candidatos:', err);
      }
    });
  }
}
