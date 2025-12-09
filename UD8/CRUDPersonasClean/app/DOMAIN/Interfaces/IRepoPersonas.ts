import { Persona } from "@/app/DOMAIN/Entities/Persona";

export interface IRepoPersonas {
  
  getPersonas(): Persona[];

  getPersonaById(id: number): Persona;

  updatePersona(id: number, ePersona: Persona): number;

  deletePersona(id: number): number;

  createPersona(persona: Persona): number;
}