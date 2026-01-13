import { Persona } from "@/src/domain/entities/Persona";
import { IRepoPersonas } from "@/src/domain/interfaces/IRepoPersonas";

export default class RepoPersonas implements IRepoPersonas{
    getPersonas(): Promise<Persona[]> {
        throw new Error("Method not implemented.");
    }
    getPersonaById(id: number): Promise<Persona> {
        throw new Error("Method not implemented.");
    }
    createOrEditPersona(p: Persona): Promise<number> {
        throw new Error("Method not implemented.");
    }
    deletePersona(id: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
    
}