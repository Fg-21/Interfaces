import { Persona } from "../Entities/Persona";


export interface IPersonasUseCase{
      getPersonas(): Persona[];
    
      getPersonaById(id: number): Persona;
    
      updatePersona(id: number, ePersona: Persona): number;
    
      deletePersona(id: number): number;
    
      createPersona(persona: Persona): number;
}