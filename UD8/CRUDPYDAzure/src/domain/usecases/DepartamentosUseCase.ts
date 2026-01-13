import { Departamento } from "../entities/Departamento";
import { IDepartamentosUseCase } from "../interfaces/IDepartamentosUseCase";

export default class DepartamentosUseCase implements IDepartamentosUseCase{
    getDepartamentos(): Promise<Departamento[]> {
        throw new Error("Method not implemented.");
    }
    getDepartamentoById(id: number): Promise<Departamento> {
        throw new Error("Method not implemented.");
    }
    createOrEditDepartamento(d: Departamento): Promise<number> {
        throw new Error("Method not implemented.");
    }
    deleteDepartamento(id: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
    
}