export class Persona {
    private _id: number;
    private _nombre: string;
    private _apellidos: string;
    private _telefono: string;
    private _direccion: string;
    private _foto: string;
    private _fecha: string;
    private _idDepartamento: number;

    constructor(
        id: number,
        nombre: string,
        apellidos: string,
        telefono: string,
        direccion: string,
        foto: string,
        fecha: string,
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

    public get id(): number {
        return this._id;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get apellidos(): string {
        return this._apellidos;
    }

    public get telefono(): string {
        return this._telefono;
    }

    public get direccion(): string {
        return this._direccion;
    }

    public get foto(): string {
        return this._foto;
    }

    public get fecha(): string {
        return this._fecha;
    }

    public get idDepartamento(): number {
        return this._idDepartamento;
    }
}