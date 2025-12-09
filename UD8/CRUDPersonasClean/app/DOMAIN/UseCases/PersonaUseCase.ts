import { injectable } from "inversify";
import { Persona } from "../Entities/Persona";
import { IPersonasUseCase } from "../Interfaces/IPersonasUseCase";
import { inject } from "inversify";
import { TYPES } from "@/app/CORE/types";
import { IRepoPersonas } from "../Interfaces/IRepoPersonas";


@injectable()
export class PersonaUseCase implements IPersonasUseCase{
    
    private _listaPersonas: Persona[] = []

    constructor(@inject(TYPES.IReposPersonas) private RepoPersonas : IRepoPersonas){
        this._listaPersonas = RepoPersonas.getPersonas()
    }
    
    getPersonas(): Persona[] {
        return this._listaPersonas
    }
    getPersonaById(id: number): Persona {
        return this.RepoPersonas.getPersonaById(id)
    }
    updatePersona(id: number, ePersona: Persona): number {
        return this.RepoPersonas.updatePersona(id, ePersona)
    }
    deletePersona(id: number): number {
        return this.RepoPersonas.deletePersona(id)
    }
    createPersona(persona: Persona): number {
        return this.RepoPersonas.createPersona(persona)
    }

}