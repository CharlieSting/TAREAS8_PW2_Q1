import { Component, OnInit } from '@angular/core';
import { IPosts } from '../interfaces/IPosts';
import { JsonplaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  user: number = 0;
  ide: number = 0;
  titulo: string = '';
  cuerpo: string = '';
  

  constructor(public servicio: JsonplaceholderService) { }
 
  ngOnInit(): void {
    this.servicio.getPosts().subscribe(respuesta =>{
      this.user = respuesta.userId;
      this.ide = respuesta.id;
      this.titulo = respuesta.title;
      this.cuerpo = respuesta.body;
    })
  }
  

}




