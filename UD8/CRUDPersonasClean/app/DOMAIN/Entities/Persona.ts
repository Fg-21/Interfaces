export class Persona {
  id: number;
  nombre: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  foto: string;
  fecha: string;
  idDepartamento: number;

  constructor(
    id: number = 0,
    nombre: string = '',
    apellidos: string = '',
    telefono: string = '',
    direccion: string = '',
    foto: string = '',
    fecha: string = '',
    idDepartamento: number = 0
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.direccion = direccion;
    this.foto = foto;
    this.fecha = fecha;
    this.idDepartamento = idDepartamento;
  }
}
