import { TYPES } from "@/app/CORE/types";
import { Persona } from "@/app/DOMAIN/Entities/Persona";
import { IRepoPersonas } from "@/app/DOMAIN/Interfaces/IRepoPersonas";
import { inject } from "inversify";
import { injectable } from "inversify";


@injectable()
export class RepoPersona implements IRepoPersonas {
REPOMOCK : Persona[] = [
    { id: 1, nombre: "Juan", apellidos: "Pérez Gómez", telefono: "600000001", direccion: "Calle A 1", foto: "foto1.jpg", fecha: "2024-01-01", idDepartamento: 1 },
    { id: 2, nombre: "María", apellidos: "López Ruiz", telefono: "600000002", direccion: "Calle A 2", foto: "foto2.jpg", fecha: "2024-01-02", idDepartamento: 2 },
    { id: 3, nombre: "Carlos", apellidos: "Sánchez Díaz", telefono: "600000003", direccion: "Calle A 3", foto: "foto3.jpg", fecha: "2024-01-03", idDepartamento: 1 },
    { id: 4, nombre: "Lucía", apellidos: "Martín Ortega", telefono: "600000004", direccion: "Calle A 4", foto: "foto4.jpg", fecha: "2024-01-04", idDepartamento: 3 },
    { id: 5, nombre: "Pedro", apellidos: "Ramírez León", telefono: "600000005", direccion: "Calle A 5", foto: "foto5.jpg", fecha: "2024-01-05", idDepartamento: 2 },
    { id: 6, nombre: "Ana", apellidos: "Torres Gil", telefono: "600000006", direccion: "Calle A 6", foto: "foto6.jpg", fecha: "2024-01-06", idDepartamento: 1 },
    { id: 7, nombre: "Javier", apellidos: "García Soto", telefono: "600000007", direccion: "Calle A 7", foto: "foto7.jpg", fecha: "2024-01-07", idDepartamento: 3 },
    { id: 8, nombre: "Elena", apellidos: "Domínguez Mata", telefono: "600000008", direccion: "Calle A 8", foto: "foto8.jpg", fecha: "2024-01-08", idDepartamento: 2 },
    { id: 9, nombre: "Miguel", apellidos: "Hernández Vera", telefono: "600000009", direccion: "Calle A 9", foto: "foto9.jpg", fecha: "2024-01-09", idDepartamento: 1 },
    { id: 10, nombre: "Sara", apellidos: "Navarro Cruz", telefono: "600000010", direccion: "Calle A 10", foto: "foto10.jpg", fecha: "2024-01-10", idDepartamento: 2 },
    { id: 11, nombre: "Pablo", apellidos: "Vega Rojas", telefono: "600000011", direccion: "Calle A 11", foto: "foto11.jpg", fecha: "2024-01-11", idDepartamento: 3 },
    { id: 12, nombre: "Laura", apellidos: "Cano Fuentes", telefono: "600000012", direccion: "Calle A 12", foto: "foto12.jpg", fecha: "2024-01-12", idDepartamento: 1 },
    { id: 13, nombre: "Diego", apellidos: "Santos Bravo", telefono: "600000013", direccion: "Calle A 13", foto: "foto13.jpg", fecha: "2024-01-13", idDepartamento: 2 },
    { id: 14, nombre: "Carmen", apellidos: "Rey Morales", telefono: "600000014", direccion: "Calle A 14", foto: "foto14.jpg", fecha: "2024-01-14", idDepartamento: 3 },
    { id: 15, nombre: "Hugo", apellidos: "Molina Ferrer", telefono: "600000015", direccion: "Calle A 15", foto: "foto15.jpg", fecha: "2024-01-15", idDepartamento: 1 },
    { id: 16, nombre: "Paula", apellidos: "Iglesias Pardo", telefono: "600000016", direccion: "Calle A 16", foto: "foto16.jpg", fecha: "2024-01-16", idDepartamento: 2 },
    { id: 17, nombre: "Daniel", apellidos: "Acosta Jurado", telefono: "600000017", direccion: "Calle A 17", foto: "foto17.jpg", fecha: "2024-01-17", idDepartamento: 1 },
    { id: 18, nombre: "Natalia", apellidos: "Ferrer Robles", telefono: "600000018", direccion: "Calle A 18", foto: "foto18.jpg", fecha: "2024-01-18", idDepartamento: 3 },
    { id: 19, nombre: "Óscar", apellidos: "Rubio Paz", telefono: "600000019", direccion: "Calle A 19", foto: "foto19.jpg", fecha: "2024-01-19", idDepartamento: 2 },
    { id: 20, nombre: "Patricia", apellidos: "Vargas Luque", telefono: "600000020", direccion: "Calle A 20", foto: "foto20.jpg", fecha: "2024-01-20", idDepartamento: 1 },
    { id: 21, nombre: "Adrián", apellidos: "Ortega Marín", telefono: "600000021", direccion: "Calle A 21", foto: "foto21.jpg", fecha: "2024-01-21", idDepartamento: 3 },
    { id: 22, nombre: "Rocío", apellidos: "Gallardo Solís", telefono: "600000022", direccion: "Calle A 22", foto: "foto22.jpg", fecha: "2024-01-22", idDepartamento: 2 },
    { id: 23, nombre: "Sergio", apellidos: "Benítez Lara", telefono: "600000023", direccion: "Calle A 23", foto: "foto23.jpg", fecha: "2024-01-23", idDepartamento: 1 },
    { id: 24, nombre: "Beatriz", apellidos: "Marcos del Río", telefono: "600000024", direccion: "Calle A 24", foto: "foto24.jpg", fecha: "2024-01-24", idDepartamento: 3 },
    { id: 25, nombre: "Raúl", apellidos: "Campos Sevilla", telefono: "600000025", direccion: "Calle A 25", foto: "foto25.jpg", fecha: "2024-01-25", idDepartamento: 2 },
    { id: 26, nombre: "Isabel", apellidos: "Cordero Navas", telefono: "600000026", direccion: "Calle A 26", foto: "foto26.jpg", fecha: "2024-01-26", idDepartamento: 1 },
    { id: 27, nombre: "Jorge", apellidos: "Prieto Román", telefono: "600000027", direccion: "Calle A 27", foto: "foto27.jpg", fecha: "2024-01-27", idDepartamento: 3 },
    { id: 28, nombre: "Alicia", apellidos: "Serrano Pozo", telefono: "600000028", direccion: "Calle A 28", foto: "foto28.jpg", fecha: "2024-01-28", idDepartamento: 2 },
    { id: 29, nombre: "Rubén", apellidos: "Correa Valle", telefono: "600000029", direccion: "Calle A 29", foto: "foto29.jpg", fecha: "2024-01-29", idDepartamento: 1 },
    { id: 30, nombre: "Julia", apellidos: "Medina Real", telefono: "600000030", direccion: "Calle A 30", foto: "foto30.jpg", fecha: "2024-01-30", idDepartamento: 2 }
]

constructor(){}
    getPersonas(): Persona[] {
        return this.REPOMOCK
    }

    getPersonaById(id: number): Persona {
        const persona = this.REPOMOCK.find(p => p.id === id)
        if(!persona){
            throw new Error("Persona no encontrada")
        }

        return persona
    }

    updatePersona(id: number, ePersona: Persona): number {
         const index: number = this.REPOMOCK.findIndex(p => p.id === id);
        const result: number = index !== -1 
        ? (this.REPOMOCK[index] = { ...this.REPOMOCK[index], ...ePersona, id }, 1) 
        : 0;

    return result;
    }

    deletePersona(id: number): number {
        const index: number = this.REPOMOCK.findIndex(p => p.id === id);
        const result: number = index !== -1 
            ? (this.REPOMOCK.splice(index, 1), 1) 
            : 0;

    return result;
    }

    createPersona(persona: Persona): number {
        const maxId: number = this.REPOMOCK.reduce((max, p) => p.id > max ? p.id : max, 0);
        const newPersona: Persona = { ...persona, id: maxId + 1 };
        this.REPOMOCK.push(newPersona);
        return 1;
    }

}