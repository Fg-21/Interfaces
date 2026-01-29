export class Persona {
    private _id: number;
    private _nombre: string;
    private _apellido: string;
    private _telefono: string;
    private _direccion: string;
    private _imagen: string;
    private _fechaNac: string;
    private _idDepartamento: number;

    constructor(
        id: number,
        nombre: string,
        apellido: string,
        telefono: string,
        direccion: string,
        imagen: string,
        fechaNac: string,
        idDepartamento: number
    ) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this._direccion = direccion;
        this._imagen = imagen;
        this._fechaNac = fechaNac;
        this._idDepartamento = idDepartamento;
    }

    public get id(): number {
        return this._id;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get apellido(): string {
        return this._apellido;
    }

    public get telefono(): string {
        return this._telefono;
    }

    public get direccion(): string {
        return this._direccion;
    }

    public get imagen(): string {
        return this._imagen;
    }

    public get fechaNac(): string {
        return this._fechaNac;
    }

    public get idDepartamento(): number {
        return this._idDepartamento;
    }
}