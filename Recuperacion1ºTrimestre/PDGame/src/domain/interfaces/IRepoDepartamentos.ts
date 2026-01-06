import Departamento from "../entities/Departamento";

export default interface IRepoDepartamentos{
    getAllDepartamentos(): Promise<Departamento[]>;
}