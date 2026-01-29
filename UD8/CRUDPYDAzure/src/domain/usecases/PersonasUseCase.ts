import { inject, injectable } from "inversify";
import { PersonaWithListaDepaDto } from "../dtos/PersonaWithListaDepaDto";
import { Persona } from "../entities/Persona";
import { IPersonasUseCase } from "../interfaces/IPersonasUseCase";
import { IRepoDepartamentos } from "../interfaces/IRepoDepartamento";
import { IRepoPersonas } from "../interfaces/IRepoPersonas";

@injectable()
export default class PersonasUseCase implements IPersonasUseCase {
    private _repoPersonas: IRepoPersonas;
    private _repoDepartamentos: IRepoDepartamentos;

    constructor(
        @inject("IRepoPersonas") repoPersonas: IRepoPersonas,
        @inject("IRepoDepartamentos") repoDepartamentos: IRepoDepartamentos
    ) {
        this._repoPersonas = repoPersonas;
        this._repoDepartamentos = repoDepartamentos;
    }
    checkFechaTo18(fecha: string): boolean {
        try {
            // Convertir la fecha de nacimiento a objeto Date
            const fechaNacimiento = new Date(fecha);

            // Verificar que la fecha sea válida
            if (isNaN(fechaNacimiento.getTime())) {
                return false;
            }

            // Obtener la fecha actual
            const fechaActual = new Date();

            // Calcular la edad
            let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

            // Ajustar si aún no ha cumplido años este año
            if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
                edad--;
            }

            // Retornar true si tiene 18 años o más
            return edad >= 18;
        } catch (error) {
            console.error("Error checking fecha 18:", error);
            return false;
        }
    }

    async getPersonas(): Promise<Persona[]> {
        return await this._repoPersonas.getPersonas();
    }

    async getPersonaById(id: number): Promise<Persona> {
        return await this._repoPersonas.getPersonaById(id);
    }

    async getPersonaWithListaDepaById(id: number): Promise<PersonaWithListaDepaDto> {
        try {
            // Obtener la persona por id
            const persona = await this._repoPersonas.getPersonaById(id);

            // Obtener todos los departamentos
            const listaDepartamentos = await this._repoDepartamentos.getDepartamentos();

            // Crear y retornar el DTO con la persona y la lista de departamentos
            return new PersonaWithListaDepaDto(
                persona.id,
                persona.nombre,
                persona.apellido,
                persona.telefono,
                persona.direccion,
                persona.imagen,
                persona.fechaNac,
                persona.idDepartamento,
                listaDepartamentos
            );
        } catch (error) {
            console.error("Error getting persona with lista depa:", error);
            throw error;
        }
    }

    async createOrEditPersona(p: Persona): Promise<number> {
        return await this._repoPersonas.createOrEditPersona(p);
    }

    async deletePersona(id: number): Promise<number> {
        return await this._repoPersonas.deletePersona(id);
    }

    checkFecha18(fecha: string): boolean {
        try {
            //convertir la fecha de nacimiento a objeto Date
            const fechaNacimiento = new Date(fecha);

            // Obtener la fecha actual
            const fechaActual = new Date();

            // Calcular la edad
            let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

            // Ajustar si aún no ha cumplido años este año
            if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
                edad--;
            }

            //true si tiene 18 años o más
            return edad >= 18;
        } catch (error) {
            console.error("Error checking fecha 18:", error);
            return false;
        }
    }

    checkFechaToSundays(fecha: string): boolean {
        try {
            // Convertir la fecha a objeto Date
            const date = new Date(fecha);

            //día de la semana
            const diaSemana = date.getDay();

            // Retornar true si es domingo (0)
            return diaSemana === 0;
        } catch (error) {
            console.error("Error checking fecha to sundays:", error);
            return false;
        }
    }
}