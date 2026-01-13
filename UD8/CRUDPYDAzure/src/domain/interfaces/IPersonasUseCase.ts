import { PersonaWithListaDepaDto } from "../dtos/PersonaWithListaDepaDto";
import { Persona } from "../entities/Persona";

export interface IPersonasUseCase {
    getPersonas(): Promise<Persona[]>;
    getPersonaById(id: number): Promise<Persona>;
    getPersonaWithListaDepaById(id: number): Promise<PersonaWithListaDepaDto>;
    createOrEditPersona(p: Persona): Promise<number>;
    deletePersona(id: number): Promise<number>;
    checkFechaTo18(fecha: string): boolean;
    checkFechaToSundays(fecha: string): boolean;
}