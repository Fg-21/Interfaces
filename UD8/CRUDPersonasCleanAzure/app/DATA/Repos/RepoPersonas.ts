import { Persona } from "@/app/DOMAIN/Entities/Persona";
import { IRepoPersonas } from "@/app/DOMAIN/Interfaces/IRepoPersonas";
import { injectable } from "inversify";
import { APIAzure } from "../API/APIAzure";


@injectable()
export class RepoPersona implements IRepoPersonas {


private conectionString = APIAzure.getAPIBase();

constructor(){}
    async getPersonas(): Promise<Persona[]> {
        let result: Persona[] = []
        try{
            const response = await fetch(this.conectionString + "Personas")

            if (response.ok){
                const data: Persona[] = await response.json()
                result = data
            } else {
                throw new Error(`Error HTTP:  ${response.status} ${response.statusText}`)
            }

        }catch(error){
            console.error("Error al obtener Personas: ", error)
        }

        return result
    }

    getPersonaById(id: number): Persona {
        
    }

    updatePersona(id: number, ePersona: Persona): number {
         
    }

    deletePersona(id: number): number {
        
    }

    createPersona(persona: Persona): number {
        
    }

}