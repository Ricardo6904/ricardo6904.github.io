import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {
  searchTerm = '';
  filteredProjects: { name: string; description: string; imageUrl: string; }[] | undefined;
  showFiltered = false;
  searchValue = '';
  projects: any[] = [];
  constructor() { }

  ngOnInit() {
    // Inicializar proyectos
    this.projects = [
      { name: 'Proyecto 1', description: 'Este es el primer proyecto', imageUrl: 'https://via.placeholder.com/150' },
      { name: 'Proyecto 2', description: 'Este es el segundo proyecto', imageUrl: 'https://via.placeholder.com/150' },
      { name: 'Proyecto 3', description: 'Este es el primer proyecto', imageUrl: 'https://via.placeholder.com/150' },
      { name: 'Proyecto 4', description: 'Este es el segundo proyecto', imageUrl: 'https://via.placeholder.com/150' },
    ];
  }
  
  search() {
    this.filteredProjects = this.projects.filter((project: { name: string; }) => project.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    this.showFiltered = true;
  }
}
