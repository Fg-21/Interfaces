export default class Persona {
  private _id: number;
  private _nombre: string;
  private _apellidos: string;
  private _telefono: number;
  private _direccion: string;
  private _foto: string;
  private _fecha: Date;
  private _idDepartamento: number;

  /**
   * @param id ID de la Persona
   * @param nombre Nombre de la Persona
   * @param apellidos Apellidos de la Persona
   * @param telefono Teléfono de la Persona
   * @param direccion Dirección de la Persona
   * @param foto Foto de la Persona
   * @param fecha Fecha de nacimiento de la Persona
   * @param idDepartamento ID del departamento correspondiente a la Persona
   */
  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    telefono: number,
    direccion: string,
    foto: string,
    fecha: Date,
    idDepartamento: number
  ) {
    this._id = id;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._telefono = telefono;
    this._direccion = direccion;
    this._foto = foto;
    this._fecha = fecha;
    this._idDepartamento = idDepartamento;
  }

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  get apellidos(): string {
    return this._apellidos;
  }

  get telefono(): number {
    return this._telefono;
  }

  get direccion(): string {
    return this._direccion;
  }

  get foto(): string {
    return this._foto;
  }

  get fecha(): Date {
    return this._fecha;
  }

  get idDepartamento(): number {
    return this._idDepartamento;
  }
}