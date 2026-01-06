import Departamento from "@/src/domain/entities/Departamento";

export default class PersonaTrimmedYListaDepartamentosDtoYColor {
    private _idPersona: number;
    private _nombrePersona: string;
    private _apellidosPersona: string;
    private _idDepartamento: number;
    private _listaDepartamentos: Departamento[];
    private _color: string;

    /**
     * @param idPersona ID de la Persona
     * @param nombrePersona Nombre de la Persona
     * @param apellidosPersona Apellidos de la Persona
     * @param idDepartamento ID del Departamento de la Persona
     * @param listaDepartamentos Lista de todos los Departamentos
     * @param color Color asignado por el ID del Departamento
     */
    constructor(
        idPersona: number,
        nombrePersona: string,
        apellidosPersona: string,
        idDepartamento: number,
        listaDepartamentos: Departamento[],
        color: string
    ) {
        this._idPersona = idPersona;
        this._nombrePersona = nombrePersona;
        this._apellidosPersona = apellidosPersona;
        this._idDepartamento = idDepartamento;
        this._listaDepartamentos = listaDepartamentos;
        this._color = color;
    }

    get idPersona(): number {
        return this._idPersona;
    }

    get nombrePersona(): string {
        return this._nombrePersona;
    }

    get apellidosPersona(): string {
        return this._apellidosPersona;
    }

    get idDepartamento(): number {
        return this._idDepartamento;
    }

    get listaDepartamentos(): Departamento[] {
        return this._listaDepartamentos;
    }

    get color(): string {
        return this._color;
    }
}