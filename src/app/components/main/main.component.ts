import { Component } from '@angular/core';
import { ResearchService } from '../main/researchService.component';
import { iUser } from 'src/utils/type';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private researchService: ResearchService) {}

  user: iUser = {} as iUser;
  term: string = '';

  research() {
    this.researchService.getUser(this.term).subscribe((resultados: any) => {
      if (resultados == '') {
        alert('usuário não encontrado!');
      } else {
        this.user = resultados;
      }
      console.log('aqui' + resultados);
    });
  }
}
