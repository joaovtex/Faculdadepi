import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../entities/aluno';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrl: './read-all.component.scss'
})


export class ReadAllComponent implements OnInit {
  ativo = 0
  list: Aluno[] = []
  constructor(private service: AlunoService) { }
  ngOnInit(): void {
    this.findAll();
  }
  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
      this.contarAtivos();
    });
  }
  contarAtivos(): void {
    for(let aluno of this.list) {
      if(aluno.ativo) {
        this.ativo++;
      }
    }
  }
}
