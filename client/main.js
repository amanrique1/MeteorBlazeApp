import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Events from '../collections';

import './main.html';

Template.getFormData.helpers({
  eventos: () => {
      const info = Events.find({});
      for (let i of info) {
          console.log(`Info: ${i}`);
      }        
      return info;
  },
});
Template.form.events({
  'submit form': (event) => {
      event.preventDefault();
      const target = event.target;

      const nombre = target.nombre.value;
      const descripcion = target.descripcion.value;
      const encargado = target.encargado.value;
      const inicio = target.inicio.value;
      const fin = target.fin.value;
      const ubicacion = target.ubicacion.value;

      let evento = {            
          nombre: nombre,
          descripcion: descripcion,
          encargado: encargado,
          inicio: inicio,
          fin: fin,
          ubicacion: ubicacion
      };

      Events.insert(evento);
  }
});