import PersonaTrimmedYListaDepartamentosDto from "@/src/domain/dtos/PersonaTrimmedYListaDepartamentosDto";
import PersonaTrimmedYListaDepartamentosDtoYColor from "../models/PersonaTrimmed&ListaDepartamentosDto&Color";

export default class PersonaTrimmedYListaDepartamentosDtoYColorMapper {
    /**
     * Record para asignar cada id de departamento a un color
     */
    private static readonly MAPEO_COLORES: Record<number, string> = {
    1: "#FF2900",
    2: "#0022FF",
    3: "#21CC00",
    4: "#FF8A00",
    0: "#878787"
  };

  /**
   * Metodo para ejecutar el mapper, transforma los dto del domain a un modelo de vista
   * @param pDto Dto venido del domain
   * @returns Modelo de vista PersonaTrimmedYListaDepartamentosDtoYColor que contiene todo lo del Dto del domain
   * más un color basado en el ID del departamento de la persona 
   */
  public static execute(pDto: PersonaTrimmedYListaDepartamentosDto): PersonaTrimmedYListaDepartamentosDtoYColor {
    const colorAsignado = this.MAPEO_COLORES[pDto.idDepartamento] || this.MAPEO_COLORES[0];

    return new PersonaTrimmedYListaDepartamentosDtoYColor(
      pDto.idPersona,
      pDto.nombrePersona,
      pDto.apellidosPersona,
      pDto.idDepartamento,
      pDto.listaDepartamentos,
      colorAsignado
    );
  }
}