import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {

  public infSlide: any = [
    {
      title:  'PERSONAL ONLINE',
      new_function: false,
      content: [
        {
        id: '1',
        img: '../../../assets/imgs/jpg/personals/personal-levantamento-peso.jpg',
        type_trainer: 'LEVANTAMENTO DE PESO'
      },{
        id: '2',
        img: '../../../assets/imgs/jpg/personals/personal-yoga.jpg',
        type_trainer: 'YOGA EXPRESS'
      },{
        id: '3',
        img: '../../../assets/imgs/jpg/personals/personal-levantamento-peso.jpg',
        type_trainer: 'LEVANTAMENTO DE PESO'
      }]
    },{
      title:  'PROGRAMAS',
      new_function: true,
      content: [
        {
        id: '1',
        title: 'LEVANTAMENTO DE PESO',
        watched: true,
        img: '../../../assets/imgs/jpg/personals/personal-levantamento-peso.jpg',
        type_trainer: 'LEVANTAMENTO DE PESO'
      },{
        id: '2',
        title: 'YOGA EXPRESS',
        watched: false,
        img: '../../../assets/imgs/jpg/personals/personal-yoga.jpg',
        type_trainer: 'YOGA EXPRESS'
      },{
        id: '3',
        watched: true,
        img: '../../../assets/imgs/jpg/personals/personal-levantamento-peso.jpg',
        type_trainer: 'LEVANTAMENTO DE PESO'
      }]
    },{
      title:  'CONTEÚDOS',
      new_function: true,
      content: [
        {
        id: '1',
        title: 'LEVANTAMENTO DE PESO',
        watched: true,
        img: '../../../assets/imgs/jpg/personals/personal-levantamento-peso.jpg',
        type_trainer: 'LEVANTAMENTO DE PESO'
      },{
        id: '2',
        title: 'YOGA EXPRESS',
        watched: false,
        img: '../../../assets/imgs/jpg/personals/personal-yoga.jpg',
        type_trainer: 'YOGA EXPRESS'
      },{
        id: '3',
        watched: true,
        img: '../../../assets/imgs/jpg/personals/personal-levantamento-peso.jpg',
        type_trainer: 'LEVANTAMENTO DE PESO'
      }]
    }
  ]

  constructor() { }

}
