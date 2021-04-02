import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MiaFormConfig } from 'projects/agencycoda/mia-form/src/public-api';
import { Entity } from './entitiy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  config!: MiaFormConfig;
  item!: Entity;

  ngOnInit(): void {
    this.loadItem();
    this.loadForm();
  }

  loadItem() {
    this.item = new Entity();
    /*this.item.title = 'Noticia titue';
    this.item.subtitle = 'Subitulo';*/
    this.item.caption = 'asld jasld kjaslkdjaklj dakls jdalkjd aslkdj alkdj aklj dalkajslk jadlsk jakslsd lakj';
    this.item.status = 1;
  }

  loadForm() {
    this.config = new MiaFormConfig();
    this.config.fields = [
      { key: 'title', type: 'string', label: 'Title', validators: [Validators.required], caption: 'El titulo de la noticia.' },
      { key: 'caption', type: 'string' },
      { key: 'subtitle', type: 'string', },
      { key: 'status', type: 'select', label: 'Estado', extra: {
        options: [
          { id: 0, title: 'Estado 1' },
          { id: 1, title: 'Estado 2' },
          { id: 2, title: 'Estado 3' },
        ]
      }},
    ];
    this.config.errorMessages = [
      { key: 'required', message: 'The %label% is required.' }
    ];
  }
}
