export class Persona {
  // Atributos privados
  private id: number;
  private nombre: string;
  private apellido: string;

  // Constructor
  constructor(id: number, nombre: string, apellido: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
  }

  // Getters
  public get Id(): number {
    return this.id;
  }

  public get Nombre(): string {
    return this.nombre;
  }

  public get Apellido(): string {
    return this.apellido;
  }

  // Setters
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public setApellido(apellido: string): void {
    this.apellido = apellido;
  }
}
