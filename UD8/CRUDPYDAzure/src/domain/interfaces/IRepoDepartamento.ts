import { Departamento } from "../entities/Departamento";

export interface IRepoDepartamentos {
    getDepartamentos(): Promise<Departamento[]>;
    getDepartamentoById(id: number): Promise<Departamento>;
    createOrEditDepartamento(d: Departamento): Promise<number>;
    deleteDepartamento(id: number): Promise<number>;
}