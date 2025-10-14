import { Persona } from "../entities/Persona";
export class RepoPersona {
  // Método estático que devuelve un array de Personas
  static getPersonas(): Persona[] {
    return [new Persona(1,'Carrero','Blanco'),
        new Persona(2,'Roberto','Marrano'),
        new Persona(3,'Osama','Vin'),
        new Persona(4,'Laden','Polno'),
        new Persona(5,'Vegano','Pu'),
        new Persona(6,'Blanco','Carrero'),
        new Persona(7,'Miguel','Noguerol'),
        new Persona(8,'Pablo','Galiana'),
        new Persona(9,'Marta','Díaz'),
    ];
  }
}


