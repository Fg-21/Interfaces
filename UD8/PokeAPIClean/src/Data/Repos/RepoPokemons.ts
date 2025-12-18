// src/Data/Repos/RepoPokemons.ts

import { injectable } from "inversify";
import { Pokemon } from "../../Domain/Entities/Pokemon";
import { IRepoPokemons } from "../../Domain/Interfaces/IRepoPokemons";
import { ApiConnection } from "../API/ApiConnection";

@injectable()
export class RepoPokemons implements IRepoPokemons {
  private uri: string = "/pokemon?limit=20&offset=0";
  private nextUrl: string | null = null;

  async getPokemons(): Promise<Pokemon[]> {
    try {
      // Determinar la URL a usar
      const url = this.nextUrl 
        ? this.nextUrl 
        : `${ApiConnection.getApiConnectionStringBase()}${this.uri}`;

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();

      // Guardar la URL de la siguiente página
      this.nextUrl = data.next;

      // Mapear los resultados a entidades Pokemon
      const pokemons: Pokemon[] = data.results.map((result: any) => 
        new Pokemon(result.name)
      );

      return pokemons;
    } catch (error) {
      console.error("Error al obtener pokémon:", error);
      throw error;
    }
  }
}