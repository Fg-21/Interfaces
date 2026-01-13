import { PersonaWithListaDepaDto } from "../dtos/PersonaWithListaDepaDto";
import { Persona } from "../entities/Persona";
import { IPersonasUseCase } from "../interfaces/IPersonasUseCase";

export default class PersonasUseCase implements IPersonasUseCase{
    getPersonas(): Promise<Persona[]> {
        throw new Error("Method not implemented.");
    }
    getPersonaById(id: number): Promise<Persona> {
        throw new Error("Method not implemented.");
    }
    getPersonaWithListaDepaById(id: number): Promise<PersonaWithListaDepaDto> {
        throw new Error("Method not implemented.");
    }
    createOrEditPersona(p: Persona): Promise<number> {
        throw new Error("Method not implemented.");
    }
    deletePersona(id: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
    checkFechaTo18(fecha: string): boolean {
        throw new Error("Method not implemented.");
    }
    checkFechaToSundays(fecha: string): boolean {
        throw new Error("Method not implemented.");
    }

}