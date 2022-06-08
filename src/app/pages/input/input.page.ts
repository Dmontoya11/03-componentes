import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Daniel';
  usuario = {
  email:'',
  password:''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit (formulario: NgForm ) {
    console.log ('submit');
    console.log(this.usuario)
    console.log (formulario);
  }

}
