import Departamento from "../entities/Departamento";

export default class PersonaTrimmedYListaDepartamentosDto {
  private _idPersona: number;
  private _nombrePersona: string;
  private _apellidosPersona: string;
  private _idDepartamento: number;
  private _listaDepartamentos: Departamento[];

  /**
   * @param idPersona ID de la Persona
   * @param nombrePersona Nombre de la Persona
   * @param apellidosPersona Apellidos de la Persona
   * @param idDepartamento ID del Departamento de la Persona
   * @param listaDepartamentos lista de todos los Departamentos
   */
  constructor(
    idPersona: number,
    nombrePersona: string,
    apellidosPersona: string,
    idDepartamento: number,
    listaDepartamentos: Departamento[]
  ) {
    this._idPersona = idPersona;
    this._nombrePersona = nombrePersona;
    this._apellidosPersona = apellidosPersona;
    this._idDepartamento = idDepartamento;
    this._listaDepartamentos = listaDepartamentos;
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
}