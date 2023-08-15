import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResearchService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    errorMessage =
      `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    alert('Não temos resultado pra essa pesquisa! :(');
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  getStarred(term: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${term}/starred`);
  }

  getUser(term: string): Observable<any> {
    return this.http
      .get(`https://api.github.com/users/${term}`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
