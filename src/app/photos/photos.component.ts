import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit{
 album: number = 0;
 i: number = 0;
 titulo: string = '';
 url1: string = '';
  constructor(public jsonplaceholderService: JsonplaceholderService ) { }
      
  ngOnInit(): void {
    this.jsonplaceholderService.getFotos().subscribe(respuesta =>{
      this.album= respuesta.albumId;
    this.i= respuesta.id;
     this.titulo= respuesta.title;
     this.url1 =respuesta.url;
    })
  }

}
