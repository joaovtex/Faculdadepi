import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../entities/aluno';
import { AlunoService } from '../../services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrl: './read-all.component.scss'
})


export class ReadAllComponent implements OnInit {
  [x: string]: any;
  ativo = 0
  list: Aluno[] = []
  inativo = 0
  inativos: Aluno[] = []

  constructor(private service: AlunoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(aluno => {
        if (aluno.ativo) {
          this.list.push(aluno)
          this.ativo++
        } else {
          this.inativos.push(aluno)
        }
      })
    });
  }

  apagar(id: any): void {
    this.service.apagar(id).subscribe((resposta) => {
      if (resposta === null) {
        this.service.message('Excluído!')
        this.list = this.list.filter(aluno => aluno.ra != id)
      } else {
        this.service.message('Não excluído!')
      }
    })
  }

  inativar(item: Aluno): void {
    item.ativo = false
    this.service.atualizar(item).subscribe(() => {
      this.service.message('Aluno inativado com sucesso')
      this.list = this.list.filter(aluno => aluno.ra != item.ra)
      this.inativo++
      this.ativo--
    })
  }

  contarAtivos(): void {
    for(let aluno of this.list) {
      if(aluno.ativo) {
        this.ativo++;
      }
    }
  }

  verInativos() {
    this.router.navigate(['inativos'])
  }
}
