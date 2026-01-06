import Persona from "@/src/domain/entities/Persona";
import ApiString from "../API/ApiString";
import IRepoPersonas from "@/src/domain/interfaces/IRepoPersonas";
import { injectable } from "inversify";

@injectable()
export default class RepoPersonas implements IRepoPersonas {
    /**
     * Metodo que accede al verbo GET de la API de Azure para obtener todas las Personas
     * @returns Una Promesa de una lista de Personas
     */
    async getAllPersonas(): Promise<Persona[]> {
        const APIBase = ApiString.getAPIBase();

        try {
            const response = await fetch(APIBase + "Personas", { method: "GET", headers: { "Accept": "application/json" } });
            if (!response.ok) {
                throw new Error(`Fallo en API ${response.status}, ${response.statusText}`)
            };

            const data: Persona[] = await response.json();

            return data;

        } catch (error) {
            let errorMssg: string = "Fallo al conectar con Azure API"

            if (error instanceof Error) {
                errorMssg = error.message;
            }
            console.error("Error al obtener datos de Personas de la API" + error);
            throw new Error(errorMssg);
        }
    };
}