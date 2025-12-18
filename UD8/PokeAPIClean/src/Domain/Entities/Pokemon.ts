export class Pokemon {
  private _nombre: string;

  constructor(nombre: string) {
    this._nombre = nombre;
  }

  get nombre(): string {
    return this._nombre;
  }
}