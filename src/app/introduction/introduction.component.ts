import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Instalação',
        icon: 'pi pi-pw pi-cog',
        routerLink: ['/instalation']
      },
      {
        label: 'Componentes',
        items: [
          {
            label: 'nfu-form',
            routerLink: '#'
          },
          {
            label: 'nfu-table',
            routerLink: '#'
          },
          {
            label: 'nfu-input-text-mask',
            routerLink: '#'
          }
        ]
      },
      {
        label: 'Serviços',
        items: [
          {
            label: 'FourwardFormService',
            routerLink: '#'
          }
        ]
      },
      {
        label: 'Diretivas',
        items: [
          {
            label: 'Em desenvolvimento',
            routerLink: '#'
          }
        ]
      },
      {
        label: 'Models',
        items: [
          {
            label: 'Em desenvolvimento',
            routerLink: '#'
          }
        ]
      }
    ];
  }
}
