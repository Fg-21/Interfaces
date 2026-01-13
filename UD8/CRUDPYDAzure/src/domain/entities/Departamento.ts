export class Departamento {
    private _id: number;
    private _nombre: string;

    constructor(id: number, nombre: string) {
        this._id = id;
        this._nombre = nombre;
    }

    public get id(): number {
        return this._id;
    }

    public get nombre(): string {
        return this._nombre;
    }
}