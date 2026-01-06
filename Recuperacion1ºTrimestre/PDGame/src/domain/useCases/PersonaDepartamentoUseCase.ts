import { inject } from "inversify";
import PersonaTrimmedYListaDepartamentosDto from "../dtos/PersonaTrimmedYListaDepartamentosDto";
import Departamento from "../entities/Departamento";
import Persona from "../entities/Persona";
import IPersonaDepartamentoUseCase from "../interfaces/IPersonaDepartamentoUseCase";
import { TYPES } from "@/src/core/types";
import RepoDepartamentos from "@/src/data/repos/RepoDepartamentos";
import IRepoDepartamentos from "../interfaces/IRepoDepartamentos";
import IRepoPersonas from "../interfaces/IRepoPersonas";
import { injectable } from "inversify";

@injectable()
export default class PersonaDepartamentoUseCase implements IPersonaDepartamentoUseCase {

    /**
     * @param RepoDepartamentos inyección del repositorio de los Departamentos
     * @param RepoPersonas inyección del repositorio de las Personas
     */
    constructor(
        @inject(TYPES.IRepoDepartamentos)
        private RepoDepartamentos: IRepoDepartamentos,
        @inject(TYPES.IRepoPersonas)
        private RepoPersonas: IRepoPersonas) {
    }

    /**
     * Metodo asíncrono que usando los dos repositorios va mapeando recorriendo la lista de personas, 
     * por cada persona se añade a la lista a devolver un dto que contiene los datos de la persona que interesan 
     * más una lista completa de los departamentos
     * @returns Devuelve la lista de dtos requerida por la vista. Cada uno de ellos contiene los datos que interesan de la persona y una lista completa de departamentos
     */
    public async getListaPersonasConListaDepartamento(): Promise<PersonaTrimmedYListaDepartamentosDto[]> {

        const [departamentos, personas] = await Promise.all([
            this.RepoDepartamentos.getAllDepartamentos(),
            this.RepoPersonas.getAllPersonas()
        ]);

        const listaDto: PersonaTrimmedYListaDepartamentosDto[] = personas.map(persona => {
            return new PersonaTrimmedYListaDepartamentosDto(
                persona.id,
                persona.nombre,
                persona.apellidos,
                persona.idDepartamento,
                departamentos
            );
        });

        return listaDto;
    }
}