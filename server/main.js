import { Meteor } from 'meteor/meteor';
import Eventos from '../collections.js';


Meteor.startup(() => {
  if (Eventos.find().count() === 0) {
    console.log("No hay eventos");

    let eventos = [
      { nombre: "Dia del estudiante", descripcion: "Dejarlos deescanar", responsable: "todos", inicio: "26/09/2019", fin: "26/09/2019", ubicacion: "Universidad de los Andes"},
      { nombre: "Bingo Fopre", descripcion: "recolectar fondos", responsable: "decanatura", inicio: "26/09/2019", fin: "26/09/2019", ubicacion: "Auditorio lleras"}
     ];

    eventos.forEach(e => {
      Eventos.insert(e);
    });
  }
});