export class clsMensajeUsuario {
    private _nombre: string;
    private _mensaje: string;

    constructor(nombre: string, mensaje: string) {
        this._nombre = nombre;
        this._mensaje = mensaje;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get mensaje(): string {
        return this._mensaje;
    }

    public set mensaje(value: string) {
        this._mensaje = value;
    }
}