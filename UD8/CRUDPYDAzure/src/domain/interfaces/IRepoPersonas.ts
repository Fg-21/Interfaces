import { Persona } from '../entities/Persona';

export interface IRepoPersonas {
    getPersonas(): Promise<Persona[]>;
    getPersonaById(id: number): Promise<Persona>;
    createOrEditPersona(p: Persona): Promise<number>;
    deletePersona(id: number): Promise<number>;
}