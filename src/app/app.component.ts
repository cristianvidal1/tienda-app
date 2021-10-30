import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Categorías', url: 'lista-productos/', icon: 'mail' },
    { title: 'Ofertas', url: 'ofertas/', icon: 'paper-plane' },
    { title: 'Historial', url: 'historial/', icon: 'refresh' },
    { title: 'Ayuda', url: '/folder/Ayuda', icon: 'information-circle' },
    { title: 'Menú', url: '/folder/Platos', icon: 'list' },
    { title: 'Login', url: 'login/', icon: 'log-out'},
    { title: 'Registro', url:'register/', icon:'log-in'},

  ];
  
  constructor(){
  
  }
}
