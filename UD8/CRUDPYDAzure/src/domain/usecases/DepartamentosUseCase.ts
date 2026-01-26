import { inject, injectable } from "inversify";
import { Departamento } from "../entities/Departamento";
import { IDepartamentosUseCase } from "../interfaces/IDepartamentosUseCase";
import { IRepoDepartamentos } from "../interfaces/IRepoDepartamento";

@injectable()
export default class DepartamentosUseCase implements IDepartamentosUseCase {
    private _repoDepartamentos: IRepoDepartamentos;

    constructor(@inject("IRepoDepartamentos") repoDepartamentos: IRepoDepartamentos) {
        this._repoDepartamentos = repoDepartamentos;
    }

    async getDepartamentos(): Promise<Departamento[]> {
        return await this._repoDepartamentos.getDepartamentos();
    }

    async getDepartamentoById(id: number): Promise<Departamento> {
        return await this._repoDepartamentos.getDepartamentoById(id);
    }

    async createOrEditDepartamento(d: Departamento): Promise<number> {
        return await this._repoDepartamentos.createOrEditDepartamento(d);
    }

    async deleteDepartamento(id: number): Promise<number> {
        return await this._repoDepartamentos.deleteDepartamento(id);
    }
}