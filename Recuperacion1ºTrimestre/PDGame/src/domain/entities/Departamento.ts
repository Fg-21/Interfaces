export default class Departamento {
  
  private _id: number;
  private _nombre: string;

  /**
   * @param id ID proveniente de la API
   * @param nombre Nombre del departamento
   */
  constructor(id: number, nombre: string) {
    this._id = id;
    this._nombre = nombre;
  }

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }
}