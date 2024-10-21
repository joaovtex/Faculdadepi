import { Component } from '@angular/core';
import { Aluno } from '../../entities/aluno';
import { AlunoService } from '../../services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inativos',
  templateUrl: './inativos.component.html',
  styleUrl: './inativos.component.scss'
})
export class InativosComponent {
  inativos: Aluno[] = []

  constructor(private service: AlunoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(aluno => {
        this.inativos.push(aluno)
      })
    });
  }

  verAtivos() {
    this.router.navigate([''])
  }
}
