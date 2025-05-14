import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatosService } from '../candidatos.service';

@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {
  @Input() candidato: any;

  constructor(
    private route: ActivatedRoute,
    private candidatosService: CandidatosService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const numericId = Number(id);
      this.candidatosService.getById(numericId).subscribe((data) => {
        this.candidato = data;
      });
    }
  }
}