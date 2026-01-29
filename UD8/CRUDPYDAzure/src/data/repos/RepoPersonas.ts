import { Persona } from "@/src/domain/entities/Persona";
import { IRepoPersonas } from "@/src/domain/interfaces/IRepoPersonas";
import { injectable } from "inversify";
import APIConnection from "../api/APIConnection";



@injectable()
export default class RepoPersonas implements IRepoPersonas {
    private _apiBase: string;

    constructor() {
        this._apiBase = APIConnection.getAPIBase() + "PersonasApi";
    }

    async getPersonas(): Promise<Persona[]> {
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
            console.log(data.map((item: any) => new Persona(
                item.id,
                item.nombre,
                item.apellido,
                item.telefono,
                item.direccion,
                item.imagen,
                item.fechaNac,
                item.idDepartamento
            )))
            return data.map((item: any) => new Persona(
                item.id,
                item.nombre,
                item.apellido,
                item.telefono,
                item.direccion,
                item.imagen,
                item.fechaNac,
                item.idDepartamento
            ));
        } catch (error) {
            console.error("Error getting personas:", error);
            throw error;
        }
    }

    async getPersonaById(id: number): Promise<Persona> {
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
            return new Persona(
                data.id,
                data.nombre,
                data.apellido,
                data.telefono,
                data.direccion,
                data.imagen,
                data.fechaNac,
                data.idDepartamento
            );
        } catch (error) {
            console.error("Error getting persona by id:", error);
            throw error;
        }
    }

    async createOrEditPersona(p: Persona): Promise<number> {
        try {
            const isEdit = p.id > 0;
            const url = isEdit ? `${this._apiBase}/${p.id}` : this._apiBase;
            const method = isEdit ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: p.id,
                    nombre: p.nombre,
                    apellido: p.apellido,
                    telefono: p.telefono,
                    direccion: p.direccion,
                    imagen: p.imagen,
                    fechaNac: p.fechaNac,
                    idDepartamento: p.idDepartamento
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            return data.id || data;
        } catch (error) {
            console.error("Error creating/editing persona:", error);
            throw error;
        }
    }

    async deletePersona(id: number): Promise<number> {
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
            console.error("Error deleting persona:", error);
            throw error;
        }
    }
}