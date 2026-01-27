import { Departamento } from "@/src/domain/entities/Departamento";
import { IRepoDepartamentos } from "@/src/domain/interfaces/IRepoDepartamento";
import { injectable } from "inversify";
import APIConnection from "../api/APIConnection";



@injectable()
export default class RepoDepartamentos implements IRepoDepartamentos {
    private _apiBase: string = APIConnection.getAPIBase() + "/DepartamentoApi" 

    async getDepartamentos(): Promise<Departamento[]> {
        try {
            const response = await fetch(`${this._apiBase}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            return data.map((item: any) => new Departamento(item.id, item.nombre));
        } catch (error) {
            console.error("Error getting departamentos:", error);
            throw error;
        }
    }

    async getDepartamentoById(id: number): Promise<Departamento> {
        try {
            const response = await fetch(`${this._apiBase}/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            return new Departamento(data.id, data.nombre);
        } catch (error) {
            console.error("Error getting departamento by id:", error);
            throw error;
        }
    }

    async createOrEditDepartamento(d: Departamento): Promise<number> {
        try {
            const isEdit = d.id > 0;
            const url = isEdit ? `${this._apiBase}/${d.id}` : this._apiBase;
            const method = isEdit ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: d.id,
                    nombre: d.nombre
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            return data.id || data;
        } catch (error) {
            console.error("Error creating/editing departamento:", error);
            throw error;
        }
    }

    async deleteDepartamento(id: number): Promise<number> {
        try {
            const response = await fetch(`${this._apiBase}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            return id;
        } catch (error) {
            console.error("Error deleting departamento:", error);
            throw error;
        }
    }
}