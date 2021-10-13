import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Categorías', url: 'lista-productos/', icon: 'mail' },
    { title: 'Ofertas', url: '/folder/ofertas', icon: 'paper-plane' },
    { title: 'Historial', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Ayuda', url: '/folder/Ayuda', icon: 'accessibility' },
    { title: 'Lista de productos', url: '/folder/Trash', icon: 'trash' },

  ];
  
  constructor() {}
}
