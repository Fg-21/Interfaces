import { Pokemon } from "../Entities/Pokemon";

export interface IRepoPokemons {
  getPokemons(): Promise<Pokemon[]>;
}