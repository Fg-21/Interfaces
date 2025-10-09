import { Persona } from "../entities/Persona";
export class RepoPersona {
  // Método estático que devuelve un array de Personas
  static getPersonas(): Persona[] {
    return [new Persona(1,'Álvaro','Valles'),
        new Persona(2,'Roberto','Marrano'),
        new Persona(3,'Pedro','García'),
        new Persona(4,'Juanlu','López'),
        new Persona(5,'Vegano','González'),
        new Persona(6,'Sancho','Carrero'),
        new Persona(7,'Miguel','Noguerol'),
        new Persona(8,'Pablo','Galiana'),
        new Persona(9,'Marta','Díaz'),
    ];
  }
}


