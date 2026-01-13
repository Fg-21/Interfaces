import { Departamento } from "@/src/domain/entities/Departamento";
import { IRepoDepartamentos } from "@/src/domain/interfaces/IRepoDepartamento";

export default class RepoDepartamentos implements IRepoDepartamentos{
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