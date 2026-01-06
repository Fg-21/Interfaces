import PersonaTrimmedYListaDepartamentosDto from "../dtos/PersonaTrimmedYListaDepartamentosDto";

export default interface IPersonaDepartamentoUseCase{
    getListaPersonasConListaDepartamento(): Promise<PersonaTrimmedYListaDepartamentosDto[]>;
}