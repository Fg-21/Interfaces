import Departamento from "@/src/domain/entities/Departamento";
import ApiString from "../API/ApiString";
import IRepoDepartamentos from "@/src/domain/interfaces/IRepoDepartamentos";
import { injectable } from "inversify";

@injectable()
export default class RepoDepartamentos implements IRepoDepartamentos{
    /**
     * Metodo que accede al verbo get de todos los Departamentos de la API
     * @returns Promesa de una lista de todos los Departamentos
     */
    async getAllDepartamentos(): Promise<Departamento[]>{
        const APIBase = ApiString.getAPIBase();
        
        try{
            const response = await fetch(APIBase + "DepartamentoApi", {method: "GET", headers: {"Accept": "application/json"}});
            if (!response.ok){
                throw new Error(`Fallo en API ${response.status}, ${response.statusText}`)
            };

            const data : Departamento[] = await response.json();

            return data;

        } catch(error){
            let errorMssg : string = "Fallo al conectar con Azure API"

            if (error instanceof Error){
                errorMssg = error.message;
            }
            console.error("Error al obtener datos de Departamentos de la API" + error);
            throw new Error(errorMssg);
        }
    };
};