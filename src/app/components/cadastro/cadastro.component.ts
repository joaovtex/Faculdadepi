import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../entities/aluno';
import { Router } from '@angular/router';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  aluno: Aluno = {
    nome: '',
    ativo: true,
    dataCadastro: new Date(),
  };

  constructor(private router: Router, private servico: AlunoService) { }

  ngOnInit(): void { }

  cancelar(): void {
    this.router.navigate([''])
  }

  formataData(): void {
    let data = new Date(this.aluno.dataCadastro).toISOString()
  }

  cadastrar(): void {
    this.formataData()
    this.servico.cadastrar(this.aluno).subscribe((resposta) => {
      this.servico.message("Aluno cadastrado com sucesso.")
    }, err => {
      this.servico.message("Erro!")
    })
  }
}

