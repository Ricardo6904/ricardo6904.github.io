import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
searchTerm: any;
showContact= true;
  constructor() {}
  downloadResume() {
    fetch('../assets/resume/resume-ricardo.pdf')
    .then(response => response.blob())
    .then(blob => {
      const a = document.createElement('a');
      const objectURL = URL.createObjectURL(blob);
      a.href = objectURL;
      a.download = 'Ricardo-Hoja-de-Vida.pdf';
      a.click();
      URL.revokeObjectURL(objectURL);
    });
  }
}
