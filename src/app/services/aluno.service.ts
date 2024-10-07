import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Aluno } from '../entities/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  findAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl)
  }
}
